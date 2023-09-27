import React from "react";
import { Link } from "react-router-dom";
import logo from "../assents/logo.png";

const Navbar = (props) => {
  // const cerrarSession = () => {
  //   window.location.href = "/";
  //   // props.history.push("/");
  // };

  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg px-3 navbar-dark"
        style={{
          backgroundColor: "#F7F8FA",
        }}
      >
        <div className="container-fluid" style={{ justifyContent: "none" }}>
          <button
            type="button"
            id="sidebarCollapse"
            className="btn btn-light"
            onClick={() => props.menuSlice()}
          >
            <i className="fas fa-align-left me-1"></i>
            <span
              style={{
                fontSize: 15,
              }}
            >
              Menu
            </span>
          </button>
          <Link className="nav-link text-light" to="/">
            GanaMovil
          </Link>
          {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
          <ul className="my-auto ms-auto">
            <div className="dropdown">
              <Link
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ width: 35, height: 35 }}
              >
                <img
                  alt="#"
                  style={{
                    width: 35,
                    height: 35,
                  }}
                  className="rounded-circle"
                  src={logo}
                />
              </Link>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                {/* <li><a className="dropdown-item" >admin@gmail.com</a></li>
                                <div style={{
                                    height: 1,
                                    width: "100%",
                                    background: "#ccc"
                                }}></div> */}
                <li>
                  {/* <a className="dropdown-item" onClick={() => cerrarSession()}>
                    Cerrar sesion
                  </a> */}
                </li>
              </ul>
            </div>
          </ul>
          {/* </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
