import { Link, useLocation } from "react-router-dom";
import "./styles/nav.css";

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link
              to="/"
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
              class="nav-link"
            >
              Home
            </Link>
            <Link
              to="/About"
              className={
                currentPage === "/About" ? "nav-link active" : "nav-link"
              }
              class="nav-link"
            >
              About
            </Link>
            <Link
              to="/Projects"
              className={
                currentPage === "/Projects" ? "nav-link active" : "nav-link"
              }
              class="nav-link"
            >
              Projects
            </Link>
            <Link
              to="/Contact"
              className={
                currentPage === "/Contact" ? "nav-link active" : "nav-link"
              }
              class="nav-link"
            >
              Contact
            </Link>
            <Link
              to="/Resume"
              className={
                currentPage === "/Resume" ? "nav-link active" : "nav-link"
              }
              class="nav-link"
            >
              Resume
            </Link>
          </div>
          <br />
          <img class="navlogo" src=""></img>
        </div>
        <h1 class="navbar-brand">Aaron Lyman</h1>
      </div>
    </nav>
  );
}

export default Nav;
