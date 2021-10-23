import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const ShowTasks = (props) => {
  const [tareas, setTareas] = useState([]);

  /* const [user, setUser] = React.useState(null); */

  useEffect(
    () => {
      const obtenerDatos = async () => {
        try {
          /*  if (auth.currentUser) {
          console.log("existe usuario");
          setUser(auth.currentUser);
        } else {
          console.log("no existe usuario");
          props.history.push("/login");
        }*/
          const data = await db.collection(props.user.uid).get();
          const arrayData = data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setTareas(arrayData);
          console.log(arrayData);
        } catch (error) {
          console.log("error en spshot");
        }
      };

      obtenerDatos();
    },
    [
      /* props.history */
    ]
  );

  return (
    <>
      {/* {user && <p className="menu-label">{user.email}</p>} */}
      <ul className="menu-list">
        {tareas.map((item) => (
          <li className="list-group-item">
            <span style={{ color: "black" }}>{item.name}</span>
            <button className="btn btn-danger btn-sm float-right">
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShowTasks;
