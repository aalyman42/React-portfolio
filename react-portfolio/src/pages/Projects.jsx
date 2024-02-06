import projects from "./data/projects";

export default function Projects() {
  console.log(projects);
  return (
    <div>
      <h2 class="text-center">Projects</h2>
      <div class="container">
        <div class="row align-items-start">
          {projects.map((project) => (
            <div class="col-sm-12 col-md-6">
              <div class="card mb-3">
                <img src={project.imgSrc} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h4 class="card-title">{project.name}</h4>
                  <p class="card-text">{project.description}</p>
                  <h5>Developed Skills:</h5>
                  <ul class="list-group list-group-flush">
                    {project.skills.map((skill) => (
                      <li class="list-group-item">{skill}</li>
                    ))}
                  </ul>
                  <p class="card-text ">
                    <a href={project.gitLink} target="_blank">
                      <button type="button" class="btn btn-danger">
                        Check out the Repo
                      </button>
                    </a>
                    <a href={project.deployLink} target="_blank">
                      <button type="button" class="btn btn-danger mx-2">
                        Deployed Site
                      </button>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
