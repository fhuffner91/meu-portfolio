import { ProjectsSectionStyles } from "./styles";


export default function ProjectsSection() {
  return (
    
      <ProjectsSectionStyles>
        <section id="projects" className="projects-section">
          <h2 className="projects-section-header">Esse são alguns dos meus projetos</h2>

          <div className="projects-grid">
            <a
              href="https://codepen.io/freeCodeCamp/full/zNqgVx"
              target="_blank"
              className="project project-tile"
            >
              <img
                className="project-image"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg"
                alt="project"
              />
              <p className="project-title">
                <span className="code">&lt;</span>
                Tribute Page
                <span className="code">&#47;&gt;</span>
              </p>
            </a>
            <a
              href="https://codepen.io/freeCodeCamp/full/qRZeGZ"
              target="_blank"
              className="project project-tile"
            >
              <img
                className="project-image"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png"
                alt="project"
              />
              <p className="project-title">
                <span className="code">&lt;</span>
                Random Quote Machine
                <span className="code">&#47;&gt;</span>
              </p>
            </a>
            <a
              href="https://codepen.io/freeCodeCamp/full/wgGVVX"
              target="_blank"
              className="project project-tile"
            >
              <img
                className="project-image"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/images/calc.png"
                alt="project"
              />
              <p className="project-title">
                <span className="code">&lt;</span>
                JavaScript Calculator
                <span className="code">&#47;&gt;</span>
              </p>
            </a>
            <a
              href="https://codepen.io/freeCodeCamp/full/mVEJag"
              target="_blank"
              className="project project-tile"
            >
              <img
                className="project-image"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/images/map.jpg"
                alt="project"
              />
              <p className="project-title">
                <span className="code">&lt;</span>
                Map Data Across the Globe
                <span className="code">&#47;&gt;</span>
              </p>
            </a>
            <a
              href="https://codepen.io/freeCodeCamp/full/wGqEga"
              target="_blank"
              className="project project-tile"
            >
              <img
                className="project-image"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/images/wiki.png"
                alt="project"
              />
              <p className="project-title">
                <span className="code">&lt;</span>
                Wikipedia Viewer
                <span className="code">&#47;&gt;</span>
              </p>
            </a>
            <a
              href="https://codepen.io/freeCodeCamp/full/KzXQgy"
              target="_blank"
              className="project project-tile"
            >
              <img
                className="project-image"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tic-tac-toe.png"
                alt="project"
              />
              <p className="project-title">
                <span className="code">&lt;</span>
                Tic Tac Toe Game
                <span className="code">&#47;&gt;</span>
              </p>
            </a>
          </div>

          <a
            href="https://codepen.io/FreeCodeCamp/"
            className="btn btn-show-all"
            target="_blank"
          >
            Mostrar todos
          </a>
        </section>
      </ProjectsSectionStyles>
    
  );
}
