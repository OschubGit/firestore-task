import React, { useState } from "react";
import { db, auth } from "../firebase";
import moment from "moment";

const FormTasks = (props) => {
  const [nameTask, setNameTask] = useState("");
  const [created, setCreated] = useState("");
  const [priority, setPriority] = useState();
  const [content, setContent] = useState("");
  const [user, setUser] = React.useState(null);

  const agregar = async (e) => {
    e.preventDefault();
    if (!nameTask.trim()) {
      console.log("esta vacio");
      return;
    }

    if (!created.trim()) {
      console.log("esta vacio");
      return;
    }

    try {
      const newTask = {
        name: nameTask,
        fecha: moment(created).format("L").toString(),
        priority: priority,
        content: content,
      };
      const data = await db.collection(user.uid).add(newTask);
      console.log(data);
    } catch (error) {
      console.log("error al agar tarea");
    }
    setNameTask("");
    setCreated("");
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
          <label className="label">Ponle nombre a tu tarea</label>
          <input
            onChange={(e) => setNameTask(e.target.value)}
            className="input"
            type="text"
            placeholder="Nombre de la tarea"
            value={nameTask}
          />
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              onChange={(e) => setContent(e.target.value)}
              className="textarea"
              placeholder="Textarea"
              defaultValue={""}
            />
          </div>
        </div>

        <div className="control">
          <label className="label">Pon fecha de entrega</label>
          <input
            className="input"
            type="date"
            placeholder="Escribe la fecha de finalización"
            onChange={(e) => setCreated(e.target.value)}
          />
        </div>
        <div className="control">
          <div class="select is-primary">
            <select onChange={(e) => setPriority(e.target.value)}>
              <option>Bajo</option>
              <option>Medio</option>
              <option>Urgente</option>
            </select>
          </div>
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
