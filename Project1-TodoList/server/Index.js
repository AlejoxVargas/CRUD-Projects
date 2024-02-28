import express from "express"; //importamos la libreria express para crear un servidor
//const express = require("express");
import { db } from "./database/db.js"; //importamos la funcion db del archivo db.js para conectarnos a la base de datos
import todosRoutes from "./routes/routes.js"; // Esto sirve para importar las rutas del archivo routes.js

const app = express(); //creamos una constante app que almacena la funcion express

app.use(express.json()); //usamos el metodo use de app para usar el middleware json

app.listen(3000); //usamos el metodo listen de app para crear un servidor en el puerto 3000

db(); //usamos la funcion db para conectarnos a la base de datos

app.use("/todos", todosRoutes); //usamos el metodo use de app para usar las rutas del archivo routes.js
