function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>

        <div className="projects-grid">
          <article className="card project-card">
            <h3>Personal Portfolio</h3>
            <p>
              A modern personal website built with React and TypeScript to
              showcase my experience, skills, and future projects.
            </p>
          </article>

          <article className="card project-card">
            <h3>Full-Stack Business Apps</h3>
            <p>
              Experience working on internal business applications involving
              APIs, SQL stored procedures, frontend forms, reporting, and system
              improvements.
            </p>
          </article>

          <article className="card project-card">
            <h3>More Coming Soon</h3>
            <p>
              I am currently building new portfolio projects focused on backend
              services, databases, and real-world workflows.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;