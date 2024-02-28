import { Todo } from "../models/todo.model.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
    console.log(Todo);
  } catch (error) {
    res.status(500).json({ message: "Nos caimos vuelva pronto", error });
  }
};

// La función createTodo es una función asíncrona que se utiliza para crear un nuevo documento Todo en la base de datos.
export const createTodo = async (req, res) => {
  // Extrae title, task y type del cuerpo de la solicitud. Estos son los datos que se utilizarán para crear el nuevo Todo.
  const { title, task, type } = req.body;

  try {
    // Crea una nueva instancia del modelo Todo con los datos extraídos del cuerpo de la solicitud.
    const todo = new Todo({
      title: title,
      task: task,
      type: type,
    });

    // Guarda el nuevo Todo en la base de datos. La operación de guardado es asíncrona, por lo que utilizamos await para esperar a que se complete antes de continuar.
    await todo.save();

    // Si todo va bien y el Todo se guarda correctamente, envía una respuesta con el estado 200 y un objeto JSON que contiene un mensaje y el Todo recién creado.
    res.status(200).json({ message: "Todo joya", todo });
  } catch (error) {
    // Si algo sale mal durante la creación del Todo, captura el error y envía una respuesta con el estado 500 y un objeto JSON que contiene un mensaje de error.
    res.status(500).json({ message: "Nos caimos vuelva pronto" }, error);
  }
};

//Este codigo sirve para actualizar un todo de la base de datos
export const updateTodo = async (req, res) => {
  //creamos la funcion updateTodo
  const { id } = req.params; // obtenemos el id del todo
  const { title, task, type } = req.body; //obtenemos el titulo, la tarea y el tipo del todo
  try {
    //usamos try catch para manejar errores
    const todo = await Todo.findByIdAndUpdate(melon, {
      //usamos el metodo findByIdAndUpdate para actualizar el todo
      title: title, //actualizamos el titulo
      task: task, //actualizamos la tarea
      type: type, //actualizamos el tipo
    });
    res.status(200).json({ message: "Todo joya", todo }); //mandamos un mensaje de que el todo fue actualizado
  } catch (error) {
    res.status(500).json({ message: "Nos caimos vuelva pronto" }, error); //mandamos un mensaje de error
  }
};

//Este codigo sirve para eliminar un todo de la base de datos
export const deleteTodo = async (req, res) => {
  //creamos la funcion deleteTodo
  const { id } = req.params; //obtenemos el id del todo
  try {
    //usamos try catch para manejar errores
    await Todo.findByIdAndDelete(id); //usamos el metodo findByIdAndDelete para eliminar el todo
    res.status(200).json({ message: "Todo eliminado" }); //mandamos un mensaje de que el todo fue eliminado
  } catch (error) {
    res.status(500).json({ message: "Nos caimos vuelva pronto", error }); //mandamos un mensaje de error
  }
};
