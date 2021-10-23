import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "../../firebase";
import ClipLoader from "react-spinners/ClipLoader";
const Admin = lazy(() => import("../../components/Auth/Admin"));
const Login = lazy(() => import("../../components/Auth/Login"));
const Layout = lazy(() => import("../../containers/Layout"));
const Navbar = lazy(() => import("../../components/Navbar"));
const MyDropzone = lazy(() => import("../../components/MyDropzone"));

const Routs = () => {
  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);

  return firebaseUser !== false ? (
    <Suspense fallback={<ClipLoader />}>
      <Router>
        <Navbar firebaseUser={firebaseUser} />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/" exact>
            <Layout />
          </Route>
          <Route path="/drag" exact>
            <MyDropzone />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  ) : (
    <div>Cargando...</div>
  );
};

export default Routs;
