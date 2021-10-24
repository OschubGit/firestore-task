import React from "react";

const ListTasks = ({ tarea }) => {
  return (
    <div>
      <li className="list-group-item">
        <div className="flex-column align-items-start">
          <span style={{ color: "black" }}>{tarea.name}</span>
          <span className="ml-3" style={{ color: "grey", fontSize: "10px" }}>
            {tarea.fecha}
          </span>
        </div>
        <button className="btn btn-danger btn-sm float-right">Eliminar</button>
      </li>
    </div>
  );
};

export default ListTasks;
