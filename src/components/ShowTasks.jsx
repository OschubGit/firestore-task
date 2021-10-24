import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import ListTasks from "./ListTasks";

const ShowTasks = (props) => {
  const [tareas, setTareas] = useState([]);

  /* const [user, setUser] = React.useState(null); */

  useEffect(() => {
    const obtenerDatos = async () => {
      db.collection(auth.currentUser.uid).onSnapshot((snapshot) =>
        setTareas(snapshot.docs.map((doc) => doc.data()))
      );
      console.log(tareas);
    };
    obtenerDatos();
  }, []);

  return (
    <>
      {/* {user && <p className="menu-label">{user.email}</p>} */}
      <ul className="menu-list">
        {tareas.map((tarea, index) => (
          <ListTasks key={index.id} tarea={tarea} />
        ))}
      </ul>
    </>
  );
};

export default ShowTasks;
