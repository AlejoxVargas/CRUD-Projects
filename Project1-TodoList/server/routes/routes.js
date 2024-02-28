import express from "express"; //importamos la libreria express para crear un servidor
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.controller.js";

const router = express.Router(); //Router sirve para crear rutas en el servidor de express

router.get("/", getTodos);
router.post("/", createTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

export default router;
