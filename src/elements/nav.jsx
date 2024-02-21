import { Link, useLocation } from "react-router-dom";
import "./styles/nav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function nav() {
  const currentPage = useLocation().pathname;

  return (
    <Navbar data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Aaron Lyman</Navbar.Brand>
        <Nav className="me-auto">
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
        </Nav>
      </Container>
    </Navbar>
  );
}

export default nav;
