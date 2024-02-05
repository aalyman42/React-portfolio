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
          <p>
            In my bachelor program at the University of northern Colorado, I
            majored in Journalism and minored in Earth Science. I have always
            felt draws to both the creative and the concrete which all lends
            itself fantastically to coding where exisiting in a system and
            thinking out of the box are equally important.{" "}
          </p>
          <p>
            {" "}
            In my free time I love playing video games and reading Japanese
            Manga. I love almost all things geeky from D&D to Doctor Who.
          </p>

          <button type="button" class="btn btn-danger">
            <Link
              to="/About"
              className={
                currentPage === "/About" ? "nav-link active" : "nav-link"
              }
              class="nav-link"
            >
              My skills and work history
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
