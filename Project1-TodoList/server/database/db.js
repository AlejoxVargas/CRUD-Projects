import mongoose from "mongoose"; //Mogoose sirve para conectarnos a la base de datos y crear un esquema

export const db = async() => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todolist");
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};
