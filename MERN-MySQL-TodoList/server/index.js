import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import path from "path";

import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const__dirname = path.resolve();

const app = express();

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes);

app.get("*" , (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html" ));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
