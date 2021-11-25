import React, { useState } from "react";
import { db, auth } from "../firebase";

const FormRecorders = (props) => {
  const [recorder, setRecorder] = React.useState("");
  const [recorderUrl, setRecorderUrl] = useState("");
  const [user, setUser] = React.useState(null);

  const submitRecorder = async (e) => {
    e.preventDefault();

    try {
      const newRecorder = {
        recorderName: recorder,
        recorderUrl: recorderUrl,
      };

      const data = await db.collection(user.uid).add(newRecorder);
    } catch (error) {
      console.log("error");
    }

    setRecorder("");
    setRecorderUrl("");
  };

  React.useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
    } else {
      console.log("no existe usuario");
      /* props.history.push("/login"); */
    }
  }, [props.history]);

  return (
    <form onSubmit={submitRecorder}>
      <div className="field">
        <label className="label">Message</label>
        <div className="field">
          <label className="label">Nombre de la tarea</label>
          <div className="control">
            <input
              onChange={(e) => setRecorder(e.target.value)}
              className="input"
              type="text"
              placeholder="Text input"
              value={recorder}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Url</label>
          <div className="control">
            <input
              onChange={(e) => setRecorderUrl(e.target.value)}
              className="input"
              type="text"
              placeholder="Text input"
              value={recorderUrl}
            />
          </div>
        </div>

        <div className="buttons">
          <button type="submit" className="button is-primary">
            Agregar
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormRecorders;
