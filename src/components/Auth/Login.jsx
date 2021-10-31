import React from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../../firebase";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ingresoUsuarioAccion } from "../../redux/usuarioDucks";

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [authError, setAuthError] = React.useState(null);
  const [authLog, setAuthLog] = React.useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.usuario.loading);
  const activo = useSelector((store) => store.usuario.activo);

  const procesarDatos = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setAuthError("El campo Email está vacio");
      return;
    }

    if (!password.trim()) {
      setAuthError("El campo password está vacio");
      return;
    }

    if (!password.trim()) {
      console.log("Ingrese password");
      return;
    }

    if (authLog) {
      registrar();
    } else {
      loggued();
    }
  };

  const loggued = React.useCallback(async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      setAuthError(null);
      props.history.push("/admin");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setAuthError("Email no válido, prueba de nuevo");
        return;
      } else if (error.code === "auth/user-not-found") {
        setAuthError("Este email no existe");
      }
    }
  }, [email, password, props.history]);

  // Función externa
  const registrar = React.useCallback(async () => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      await db.collection("usuarios").doc(res.user.email).set({
        email: res.user.email,
        id: res.user.uid,
        creationTime: res.user.metadata.creationTime,
        lastSignInTime: res.user.metadata.lastSignInTime,
      });
      await db.collection(res.user.uid).add({
        name: "Tarea ejemplo",
        fecha: Date.now(),
      });
      setAuthError(null);
      setEmail("");
      setPassword("");
      props.history.push("/admin");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        setAuthError("El email ya está registrado...");
        return;
      } else if (error.code === "auth/network-request-failed") {
        setAuthError("No estás conectado a internet");
      }
      if (error.code === "auth/invalid-email") {
        setAuthError("Email no válido, prueba de nuevo");
        return;
      }
    }
  }, [email, password, props.history]);

  React.useEffect(() => {
    if (activo) {
      props.history.push("/");
    }
  }, [activo]);

  return (
    <div className="container p-5">
      <div className="py-5">
        {authLog ? <h1>Regístro</h1> : <h1>Inicia Sesión</h1>}
      </div>
      <form onSubmit={procesarDatos}>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button type="submit" className="button is-success">
              {authLog ? "Registrarse" : "Login"}
            </button>
          </p>
        </div>

        {authError && (
          <div>
            <article className="message is-danger">
              <div className="message-header">
                <p>Algo ha salido mal</p>
                <button type="button" className="delete" aria-label="delete" />
              </div>
              <div className="message-body">{authError}</div>
            </article>
          </div>
        )}

        <div>
          <button
            disabled={loading}
            onClick={() => dispatch(ingresoUsuarioAccion())}
          >
            Acceder con google
          </button>
        </div>

        <div>
          <p>
            <Link onClick={() => setAuthLog(!authLog)}>
              {authLog ? (
                <>
                  <p>¿Ya tienes cunta? Inicia Sesión</p>
                </>
              ) : (
                <p>¿No estás registrada/o? Click aquí</p>
              )}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);
