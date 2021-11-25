import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";

const Records = () => {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      db.collection(auth.currentUser.uid).onSnapshot((snapshot) =>
        setRecord(snapshot.docs.map((doc) => doc.data()))
      );
    };
    obtenerDatos();
  }, []);

  return (
    <article className="panel is-primary">
      <p className="panel-heading">Recordatorios</p>
      {record.map((r) => (
        <a
          href={r.recorderUrl ? r.recorderUrl : "#"}
          className="panel-block is-active"
        >
          {r.recorderName}
        </a>
      ))}
    </article>
  );
};

export default Records;
