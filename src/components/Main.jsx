import React from "react";
import TabsIsRight from "./TabsIsRight";
import FormTasks from "./FormTasks";
import ShowTasks from "./ShowTasks";
import { auth } from "../firebase";

function App(props) {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    if (auth.currentUser) {
      console.log("existe");
      setUser(auth.currentUser);
    } else {
      console.log("no existe");
      props.history.push("/login");
    }
  }, [props.history]);

  const name = "Oscar";
  return (
    <div className="App">
      <header className="App-header">
        <div className="mainApp">
          <div className="mainApp__addNotes">
            <TabsIsRight />
          </div>
          <div className="mainApp__tasks">
            <article className="panel is-primary">
              <div className="mainApp__tasks-header">
                <p className="panel-heading">
                  <i className="fal fa-bars"></i> Listado de tareas
                </p>
                <p className="panel-tabs">
                  <a href="www.instagram.com" className="is-active">
                    All
                  </a>
                  <a href="www.instagram.com">Public</a>
                  <a href="www.instagram.com">Private</a>
                  <a href="www.instagram.com">Sources</a>
                  <a href="www.instagram.com">Forks</a>
                </p>
                <div className="panel-block">
                  <p className="control has-icons-left">
                    <input
                      className="input is-primary"
                      type="text"
                      placeholder="Search"
                    />
                    <span className="icon is-left">
                      <i className="fas fa-search" aria-hidden="true" />
                    </span>
                  </p>
                </div>
              </div>

              <>
                <aside className="menu">
                  {user && <ShowTasks user={user} />}
                </aside>
              </>
            </article>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
