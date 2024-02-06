import { Link, useLocation } from "react-router-dom";
import "./styles/footer.css";

function footer() {
  const currentPage = useLocation().pathname;
  return (
    <footer class="text-center text-lg-start">
      <div class="container p-4">
        <div class="row">
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">pages</h5>
            <ul>
              <li>
                <Link
                  to="/"
                  className={
                    currentPage === "/" ? "nav-link active" : "nav-link"
                  }
                  class="nav-link"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className={
                    currentPage === "/About" ? "nav-link active" : "nav-link"
                  }
                  class="nav-link"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Projects"
                  className={
                    currentPage === "/Projects" ? "nav-link active" : "nav-link"
                  }
                  class="nav-link"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className={
                    currentPage === "/Contact" ? "nav-link active" : "nav-link"
                  }
                  class="nav-link"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/Resume"
                  className={
                    currentPage === "/Resume" ? "nav-link active" : "nav-link"
                  }
                  class="nav-link"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">Links</h5>{" "}
            <a href="https://github.com/aalyman42" class="mx-2" target="_blank">
              <img src="/github.svg" alt="Github logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/aaron-lyman-b2171315a/"
              target="_blank"
            >
              <img src="/LinkedIn.svg" alt="LinkedIn logo" />
            </a>
          </div>
        </div>
      </div>
      <div class="text-center p-3">
        Footer: © 2020 Copyright:
        <a class="text-body" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}
export default footer;
