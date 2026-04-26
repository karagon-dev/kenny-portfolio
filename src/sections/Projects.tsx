const projects = [
  {
    eyebrow: "Personal Website",
    title: "Personal Brand Platform",
    description:
      "Designed and developed this portfolio as a production-ready personal brand platform using React, TypeScript, Azure Static Web Apps, GitHub Actions, and a custom domain. The project includes cloud hosting through Azure, DNS mapping from Porkbun to Azure, custom domain configuration, and an automated deployment pipeline that publishes updates every time new changes are merged into the main branch.",
    tags: ["React", "TypeScript", "Azure", "GitHub Actions", "DNS", "CI/CD"],
    link: "https://github.com/karagon-dev/kenny-portfolio",
  },
  {
    eyebrow: "Workplace Productivity",
    title: "Real-Time Note Assistance",
    description:
      "Built a desktop productivity tool for a high-pressure interpretation environment where speed and accuracy are critical between live calls. Designed to reduce dead time between calls by improving note management, number recognition, quick-access vocabulary, abbreviation replacement, and translation support.",
    tags: ["VB.NET", "WinForms", "Desktop App", "Productivity", "API Integration"],
    link: "https://github.com/karagon-dev/NotetakingApp",
  },
  {
    eyebrow: "Freelance Project",
    title: "Zephyr Lash Art Website",
    description:
      "Developing a modern business website for a beauty service brand focused on eyelash extensions, brows, service visibility, and future booking functionality. The project is being built as a real client-facing product, with emphasis on responsive design, clear service presentation, and a scalable frontend foundation for future backend, scheduling, and payment features.",
    tags: ["React", "TypeScript", "Frontend", "Responsive Design", "Freelance"],
    link: "https://github.com/karagon-dev/zephyrlashart-web",
  },
  {
    eyebrow: "In Progress",
    title: "Full-Stack Projects",
    description:
      "Currently building new portfolio projects focused on backend services, database design, API development, automation, and real-world operational workflows.",
    tags: ["APIs", "Databases", "Automation", "Clean Architecture"],
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>

        <div className="projects-carousel">
          {projects.map((project) => (
            <article className="card project-card" key={project.title}>
              <p className="eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;