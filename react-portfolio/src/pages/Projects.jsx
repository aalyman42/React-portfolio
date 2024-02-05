export default function Projects() {
  return (
    <div>
      <h2 class="text-center">Projects</h2>
      <div class="container">
        <div class="row align-items-start">
          <div class="col-sm-12 col-md-6">
            <div class="card mb-3">
              <img src="/Aletrail.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title">Ale Trail Guide</h4>
                <p class="card-text">
                  A front-end-focused project built to allow users to search a
                  city for breweries. site functionality connects to Open
                  Brewery DB as well as TomTom API to work. Site created only 1
                  month after touching javascript for my first time. ever.
                </p>
                <h5>Developed Skills:</h5>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">CSS Bootstrap</li>
                  <li class="list-group-item">Server side APIs</li>
                  <li class="list-group-item">Gitflow</li>
                </ul>
                <p class="card-text ">
                  <a
                    href="https://github.com/dccreger/brewery-find"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-danger">
                      Check out the Repo
                    </button>
                  </a>
                  <a
                    href="https://dccreger.github.io/brewery-find/"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-danger mx-2">
                      Deployed Site
                    </button>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="card mb-3">
              <img src="/summitQuest.JPG" class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title">SummitQuest</h4>
                <p class="card-text">
                  A fullstack social platform for mountain-climbers and Hikers.
                  Track your Fourteeners climbed out of the 52 in Colorado. Add
                  peaks to your queue and journal about the hikes you've
                  completed. Additionally find info on different peaks in the
                  state.
                </p>
                <h5>Developed Skills:</h5>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">MySQL</li>
                  <li class="list-group-item">Sequelize</li>
                  <li class="list-group-item">Express.JS</li>
                  <li class="list-group-item">Node.JS</li>
                  <li class="list-group-item">Handlebars</li>
                  <li class="list-group-item">MVC Architechture</li>
                  <li class="list-group-item">Email.js</li>
                </ul>
                <p class="card-text ">
                  <a
                    href="https://github.com/gabelats/SummitQuest"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-danger">
                      Check out the Repo
                    </button>
                  </a>
                  <a
                    href="https://summitquest-babysteps-2f40964da154.herokuapp.com"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-danger mx-2">
                      Deployed Site
                    </button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
