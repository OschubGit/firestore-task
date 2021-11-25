import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import Info from "./notifications/Info";
import "../app/sass/components/modal.scss";

const ModalDetail = () => {};

const ShowTasks = () => {
  const [tareas, setTareas] = useState([]);
  const [modal, setModal] = useState(false);

  React.useEffect(() => {
    /* const obtenerDatos = async () => {
      try {
        const data = await db.collection(auth.currentUser.uid).get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(arrayData);
        setTareas(arrayData);
      } catch (error) {
        console.log(error);
      }
    }; */

    /* useEffect(() => {
    const obtenerDatos = async () => {
      db.collection(auth.currentUser.uid)
        .orderBy("fecha")
        .onSnapshot((snapshot) =>
          setTareas(snapshot.docs.map((doc) => doc.data()))
        );
    };
    obtenerDatos();
  }, []); */

    /* OBTENEMOS SNAPSHOT PERO CON EL ID DEL DOC */
    const obtenerSnap = async () => {
      db.collection(auth.currentUser.uid)
        .orderBy("fecha")
        .onSnapshot((data) =>
          setTareas(
            data.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          )
        );
    };
    obtenerSnap();
  }, []);

  const eliminarTarea = async (id) => {
    try {
      await db.collection(auth.currentUser.uid).doc(id).delete();
      const arrayFiltrado = tareas.filter((item) => item.id !== id);
      setTareas(arrayFiltrado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* {user && <p className="menu-label">{user.email}</p>} */}
      {tareas.length < 1 ? (
        <Info
          text="¡Hola! Oscar aquí se mostrarán tus tareas, podrás
        editarlas o eliminarlas, así como añadir una fecha tope de entrega"
        />
      ) : (
        <>
          <ul className="menu-list">
            {tareas.map((tarea, index) => (
              <li key={index.id} className="list-group-item">
                <div className="flex-column align-items-start">
                  <span style={{ color: "black" }}>{tarea.name}</span>
                  <span
                    className="ml-3"
                    style={{ color: "grey", fontSize: "10px" }}
                  >
                    {tarea.fecha}
                  </span>
                  {tarea.priority && (
                    <span
                      class={
                        tarea.priority === "Bajo"
                          ? "tag is-primary"
                          : tarea.priority === "Urgente"
                          ? "tag is-danger"
                          : "tag is-warning"
                      }
                    >
                      {tarea.priority}
                    </span>
                  )}
                  <button
                    className="btn btn-danger btn-sm float-right"
                    onClick={() => setModal(true)}
                  >
                    VER MAS
                  </button>
                </div>
                <button
                  onClick={() => eliminarTarea(tarea.id)}
                  className="btn btn-danger btn-sm float-right"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          {modal === true && (
            <>
              <div className="modalBg"></div>
              <div className="modalDetail">
                {tareas.map((tarea) => (
                  <>
                    <div className="modalDetail__content">{tarea.content}</div>
                    <button
                      className="modal-close is-large"
                      aria-label="close"
                    />
                  </>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ShowTasks;
