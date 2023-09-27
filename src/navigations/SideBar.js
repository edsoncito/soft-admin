import React from "react";
import Navbar from "./Navbar";
import "../styles/sidebar.css";
import { NavLink, Outlet } from "react-router-dom";
// import logo from "../assents/logo.png";

const SideBar = (props) => {
  let auxSider = true;

  function menuSlice() {
    if (auxSider) {
      document.getElementById("sidebar").classList.add("active");
      document.getElementById("content").classList.add("active");
      // alert("cierra")
      auxSider = false;
    } else {
      document.getElementById("sidebar").classList.remove("active");
      document.getElementById("content").classList.remove("active");
      // alert("abre")
      auxSider = true;
    }
  }

  const style = {
    fontSize: 14,
    color: "#fff",
  };

  return (
    <div className="wrapper">
      <header>
        <Navbar menuSlice={menuSlice} />
      </header>
      <main>
        <nav id="sidebar" className="">
          {/* <div className="sidebar-header">
            <img
              style={{
                width: 50,
                height: 50,
              }}
              src={logo}
            />
          </div> */}
          <ul className="list-unstyled components">
            <li className="nav-item">
              <NavLink style={style} className="nav-link " to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            {/* <li>
              <a style={style} href="#homeSubmenu" class="dropdown-toggle" data-bs-toggle="collapse" aria-expanded="false" aria-controls="homeSubmenu" data-bs-target="#homeSubmenu">
                Home
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li className="nav-item">
                  <NavLink style={style} className="nav-link active" to="/inicio">
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink style={style} className="nav-link active" to="/perfil">
                    perfil
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink style={style} className="nav-link " to="/reportes">
                Reportes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/perfilUsuario">
                Perfil Usuario
              </NavLink>
            </li> */}
            <hr />
            <li className="nav-item">
              <NavLink style={style} className="nav-link " to="/listaSugerencias">
                <span className="glyphicon glyphicon-edit" aria-hidden="true">
                  <i className="fas fa-envelope-open"></i>
                </span>{" "}
                Buzón sugerencias
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={style} className="nav-link " to="/listaProblemas">
                <span className="glyphicon glyphicon-edit" aria-hidden="true">
                  <i className="fas fa-exclamation-circle"></i>
                </span>{" "}
                Reporte de problemas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={style} className="nav-link " to="/listaContactate">
                <span className="glyphicon glyphicon-edit" aria-hidden="true">
                  <i className="fas fa-exclamation-circle"></i>
                </span>{" "}
                Reporte de contactate
              </NavLink>
            </li>
          </ul>
        </nav>
        <div id="content" className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default SideBar;
