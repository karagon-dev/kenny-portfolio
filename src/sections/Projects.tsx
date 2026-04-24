function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>

        <div className="projects-grid">
          <article className="card project-card">
            <p className="eyebrow">Featured Project</p>
            <h3>Personal Brand Platform</h3>
            <p>
              Designed and developed this portfolio as a production-ready
              personal brand platform using React, TypeScript, Azure Static Web
              Apps, GitHub Actions, and a custom domain.
            </p>

            <p>
              The project includes cloud hosting through Azure, DNS mapping from
              Porkbun to Azure, custom domain configuration, and an automated
              deployment pipeline that publishes updates every time new changes
              are merged into the main branch.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Azure</span>
              <span>GitHub Actions</span>
              <span>DNS</span>
              <span>CI/CD</span>
            </div>
          </article>

          <article className="card project-card">
            <h3>Full-Stack Business Applications</h3>
            <p>
              Hands-on experience working on enterprise internal applications
              involving .NET APIs, SQL Server stored procedures, React forms,
              reporting features, and end-to-end business workflow improvements.
            </p>

            <div className="project-tags">
              <span>.NET</span>
              <span>C#</span>
              <span>SQL Server</span>
              <span>React</span>
              <span>TypeScript</span>
            </div>
          </article>

          <article className="card project-card">
            <h3>Backend & Database Projects</h3>
            <p>
              Currently building new portfolio projects focused on backend
              services, database design, API development, automation, and
              real-world operational workflows.
            </p>

            <div className="project-tags">
              <span>APIs</span>
              <span>Databases</span>
              <span>Automation</span>
              <span>Clean Architecture</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;