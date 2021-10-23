import React from "react";
import { Link } from "react-router-dom";
import "../app/sass/components/Navbar.scss";
import MenuMobile from "./MenuMobile";
import { auth } from "../firebase";
import { withRouter } from "react-router-dom";

const Navbar = (props) => {
  const [menuDisplay, setMenuDisplay] = React.useState(false);

  const handleClick = () => {
    setMenuDisplay(true);
  };

  const handleClickClose = () => {
    setMenuDisplay(false);
  };

  const logOut = () => {
    auth.signOut().then(() => {
      props.history.push("/login");
    });
  };

  return (
    <>
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a href="www.instagram.com" className="navbar-item">
            <img
              src="logoTask.svg"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width={200}
              /* height={28} */
            />
          </a>
          <div
            className="navbar-burger"
            data-target="navbarExampleTransparentExample"
          >
            <button onClick={() => handleClick()}>
              <img src="/images/icons/menu.svg" alt="" />
            </button>
          </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="www.instagram.com" className="navbar-item">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a
                className="navbar-link"
                href="https://bulma.io/documentation/overview/start/"
              >
                Docs
              </a>
              <div className="navbar-dropdown is-boxed">
                <a
                  className="navbar-item"
                  href="https://bulma.io/documentation/overview/start/"
                >
                  Overview
                </a>
                <a
                  className="navbar-item"
                  href="https://bulma.io/documentation/overview/modifiers/"
                >
                  Modifiers
                </a>
                <a
                  className="navbar-item"
                  href="https://bulma.io/documentation/columns/basics/"
                >
                  Columns
                </a>
                <a
                  className="navbar-item"
                  href="https://bulma.io/documentation/layout/container/"
                >
                  Layout
                </a>
                <a
                  className="navbar-item"
                  href="https://bulma.io/documentation/form/general/"
                >
                  Form
                </a>
                <hr className="navbar-divider" />
                <a
                  className="navbar-item"
                  href="https://bulma.io/documentation/elements/box/"
                >
                  Elements
                </a>
                <a
                  className="navbar-item is-active"
                  href="https://bulma.io/documentation/components/breadcrumb/"
                >
                  Components
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                {props.firebaseUser !== null && (
                  <>
                    <button>
                      <Link to="/">Inicio</Link>
                    </button>
                    <button>
                      <Link to="/admin">Admin</Link>
                    </button>
                  </>
                )}

                {props.firebaseUser !== null ? (
                  <button onClick={() => logOut()}>
                    <Link to="/login">Cerrar Sesión</Link>
                  </button>
                ) : (
                  <button>
                    <Link to="/login">Login</Link>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={menuDisplay === true ? "menuDisplay active " : "menuClose"}
      >
        <MenuMobile />
        <button className="menuCloseButton" onClick={() => handleClickClose()}>
          <img src="/images/icons/menu.svg" alt="" />
        </button>
      </div>
    </>
  );
};

export default withRouter(Navbar);
