// importamos la libreria mongoose para conectarnos a la base de datos y crear un esquema
import mongoose from "mongoose";

// Esta función sirve para crear un esquema de la base de datos
const todoSchema = mongoose.Schema(
  //creamos un esquema de la base de datos
  {
    //creamos los campos del esquema
    title: { type: String, require: true },
    task: { type: String, require: true },
    type: { type: String, enum: ["work", "school", "free time"] },
  },
  { timestamp: true } //creamos un campo llamado timestamp de tipo booleano que sirve para guardar la fecha de creacion y actualizacion de un todo
);

export const Todo = mongoose.model("tasks", todoSchema); //creamos un modelo de la base de datos llamado tasks que usa el esquema todoSchema y lo exportamos
