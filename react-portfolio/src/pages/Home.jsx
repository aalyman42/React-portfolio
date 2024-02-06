import { Link, useLocation } from "react-router-dom";
import "./styles/home.css";
export default function Home() {
  const currentPage = useLocation().pathname;
  return (
    <div class="container text-center">
      <div class="row align-items-start">
        <div class="col-12">
          <h2>Aaron Lyman</h2>
          <p>
            I'm a new and eager boot-camp graduate with a background in
            education. A love for learning and problem solving drive my everyday
            life! I am married to my beautiful wife Kyleigh and we live with our
            dog Opal.{" "}
          </p>
          <button type="button" class="btn btn-danger">
            <Link
              to="/Resume"
              className={
                currentPage === "/Resume" ? "nav-link active" : "nav-link"
              }
              class="nav-link"
            >
              My skills and work history
            </Link>
          </button>
          <button type="button" class="btn btn-danger mx-3">
            <Link
              to="/About"
              className={
                currentPage === "/About" ? "nav-link active" : "nav-link"
              }
              class="nav-link"
            >
              More About me
            </Link>
          </button>
        </div>
        <img src="/page-break1.png" alt="" />
        <br />
        <div class="col-sm-12 col-md-6 my-2">
          <div class="card">
            <div class="card-body">
              <h3>Projects</h3>
              <p>
                Throughout my time at coding boot-camp, I worked on some big
                projects. They each show off various coding architectures and
                skillsets. Across all of them are an overarching practice at
                coding as a team and managing a gitflow.
              </p>
              <button type="button" class="btn btn-danger">
                <Link
                  to="/Projects"
                  className={
                    currentPage === "/Projects" ? "nav-link active" : "nav-link"
                  }
                  class="nav-link"
                >
                  See my projects
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div class="col my-2">
          <div class="card">
            <div class="card-body">
              <h3>Contact</h3>
              <p>
                I am currently looking for a great place to work at that can put
                my skills to practice. If I have caught your interest, please
                reach out! I would love to be in contact and talk about any
                projects you are working on.
              </p>
              <button type="button" class="btn btn-danger">
                <Link
                  to="/Contact"
                  className={
                    currentPage === "/Contact" ? "nav-link active" : "nav-link"
                  }
                  class="nav-link"
                >
                  Contact me
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
