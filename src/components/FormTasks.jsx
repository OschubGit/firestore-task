import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import moment from "moment";

const FormTasks = (props) => {
  const [nameTask, setNameTask] = useState("");
  const [user, setUser] = React.useState(null);

  const agregar = async (e) => {
    e.preventDefault();
    if (!nameTask.trim()) {
      console.log("esta vacio");
      return;
    }

    try {
      const newTask = {
        name: nameTask,
        fecha: moment().format("L").toString(),
      };
      const data = await db.collection(user.uid).add(newTask);
      console.log(data);
    } catch (error) {
      console.log("error al agar tarea");
    }
    setNameTask("");
  };

  React.useEffect(() => {
    if (auth.currentUser) {
      console.log("existe usuario");
      setUser(auth.currentUser);
    } else {
      console.log("no existe usuario");
      /* props.history.push("/login"); */
    }
  }, [props.history]);

  return (
    <>
      <h3 className="title is-3">Hola{user && ", " + user.email}</h3>
      <form onSubmit={agregar}>
        <div className="control">
          <input
            onChange={(e) => setNameTask(e.target.value)}
            className="input"
            type="text"
            placeholder="Nombre de la tarea"
            value={nameTask}
          />
        </div>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Escribe la fecha de finalización"
          />
        </div>
        <div className="buttons">
          <button type="submit" className="button is-primary">
            Agregar
          </button>
        </div>
      </form>
    </>
  );
};

export default FormTasks;
