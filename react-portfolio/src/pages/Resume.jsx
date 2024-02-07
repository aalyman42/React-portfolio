import employment from "./data/employment";
import skills from "./data/skills";
export default function Resume() {
  return (
    <div class="container">
      <div class="row align-items-start">
        <div class="col-sm-12 col-md-4">
          <h2 class="my-3">Employment</h2>
          <br />
          {employment.map((history) => (
            <div>
              <h4>{history.jobTitle}</h4>
              <h6>{history.company}</h6>
              <h6>{history.time}</h6>
              <br />
              <br />
            </div>
          ))}{" "}
        </div>
        <div class="col-sm-12 col-md-4">
          <h2 class="my-3">Education</h2>
          <br />
          <h4>University of Denver</h4>
          <h6>Full Stack Development Booot Camp</h6>
          <h6> November 2023 - February 2024</h6>
          <br />
          <br />
          <h4>University of Norther Colorado</h4>
          <h6>BA Major: Journalism | Minor: Earth Science</h6>
          <h6>August 2015 - May 2020</h6>
        </div>
        <div class="col-sm-12 col-md-4">
          <h2 class="my-3"> Skills </h2>
          <ul>
            {skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col-12">
            <h2>Resume</h2>
            <p>Download my full resume as a PDF</p>
            <a
              href="./docs/Aaron_Lyman_-_Junior_Developer.pdf"
              download="Aaron_Lyman_Resume"
            >
              <button class="btn btn-success">Download Now</button>
            </a>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
