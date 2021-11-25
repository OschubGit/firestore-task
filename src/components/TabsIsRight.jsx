import React, { useState } from "react";
import FormRecorders from "./FormRecorders";
import FormTasks from "./FormTasks";
import Recorders from "./Recorders";

const TabsIsRight = () => {
  const [show, setShow] = useState(undefined);

  const ENUMM = {
    TAREAS: "tareas",
    RECORDATORIOS: "recordatorios",
  };

  const handleClick = () => {
    setShow(ENUMM.TAREAS);
  };

  const handleRecordatorios = () => {
    setShow(ENUMM.RECORDATORIOS);
  };

  return (
    <div className="tabs is-left">
      <div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={show === "tareas" ? "nav-link active" : "nav-link"}
              onClick={handleClick}
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Tareas
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={
                show === "recordatorios" ? "nav-link active" : "nav-link"
              }
              onClick={handleRecordatorios}
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Recordatorios
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Notas
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          {show === "tareas" ? <FormTasks /> : <FormRecorders />}
        </div>
      </div>
    </div>
  );
};

export default TabsIsRight;
