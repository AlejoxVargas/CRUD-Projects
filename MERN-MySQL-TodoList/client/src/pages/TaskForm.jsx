import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          navigate("/");
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md mt-20">
            <form onSubmit={handleSubmit}>
              <h1 className="text-2xl font-semibold mb-6 uppercase text-center">
                {params.id ? "Editar Pregunta" : "Nueva Pregunta"}
              </h1>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                <input type="text" name="title" placeholder="Alejo" onChange={handleChange} value={values.title} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-orange-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
                <textarea
                  name="description"
                  rows="3"
                  placeholder="¿Como puedo solucionar un bug en JavaScript?"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-orange-500"
                  value={values.description}
                ></textarea>
              </div>
              <button type="submit"
                disabled={isSubmitting}
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-blue">
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        )
        }
      </Formik >
    </div >
  );
}

export default TaskForm;