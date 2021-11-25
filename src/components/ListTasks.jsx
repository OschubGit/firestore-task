import React from "react";

const ListTasks = ({ tarea, deleted }) => {
  return (
    <div>
      <li className="list-group-item">
        <div className="flex-column align-items-start">
          <span style={{ color: "black" }}>{tarea.name}</span>
          <span className="ml-3" style={{ color: "grey", fontSize: "10px" }}>
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
        </div>
        {deleted}
      </li>
    </div>
  );
};

export default ListTasks;
