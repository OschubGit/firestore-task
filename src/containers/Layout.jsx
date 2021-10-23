import React from "react";
import Records from "../components/Recorders";
import Main from "../components/Main";
import { auth } from "../firebase";
import { withRouter } from "react-router-dom";

const Layout = (props) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    if (auth.currentUser) {
      console.log("existe usuario");
      setUser(auth.currentUser);
    } else {
      console.log("no existe usuario");
      props.history.push("/login");
    }
  }, [props.history]);

  return (
    <div className="layout">
      {/* <div className="layout__navbar">
        <Navbar />
      </div> */}
      <div className="layout__list">
        <Main />
      </div>
      <div className="layout__recorders">
        <Records />
      </div>
      {/* <div className="layout__footer">
        <Footer />
      </div> */}
    </div>
  );
};

export default withRouter(Layout);
