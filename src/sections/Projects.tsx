function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>

        <div className="projects-grid">
          <article className="card project-card">
            <p className="eyebrow">Personal Website</p>
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

            <a
              href="https://github.com/karagon-dev/kenny-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </article>

          <article className="card project-card">
            <p className="eyebrow">Workplace Productivity</p>
            <h3>Real-Time Note Assistance</h3>
            <p>
              Built a desktop productivity tool for a high-pressure
              interpretation environment where speed and accuracy are critical
              between live calls. Designed to reduce dead time between calls by
              giving agents a faster workflow for note management, number
              recognition, quick-access vocabulary tabs, abbreviation
              replacement, and instant translation support. Beyond the technical
              implementation, the project improved efficiency, reduced friction
              during stressful shifts, and helped create a smoother daily
              operation for users handling back-to-back calls.
            </p>

            <div className="project-tags">
              <span>VB.NET</span>
              <span>WinForms</span>
              <span>Desktop App</span>
              <span>Productivity</span>
              <span>API Integration</span>
            </div>

            <a
              href="https://github.com/karagon-dev/NotetakingApp"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </article>

          <article className="card project-card">
            <p className="eyebrow">In Progress</p>
            <h3>Full-Stack Projects</h3>
            <p>
              Currently building new portfolio projects focused on backend
              services, database design, API development, automation, and
              real-world operational workflows.
              Staying tuned ;)
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