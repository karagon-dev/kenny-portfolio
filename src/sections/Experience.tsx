function Experience() {
  const experiences = [
    {
      role: "Junior Software Engineer",
      company: "TransPerfect",
      period: "Mar 2025 – Present",
      description:
        "Developing and maintaining enterprise internal applications using .NET, C#, SQL Server, React, TypeScript, and Azure DevOps.",
      highlights: [
        "Build backend services, stored procedures, repositories, controllers, DTOs, and REST APIs.",
        "Support frontend integrations, bug fixes, testing, production troubleshooting, and code reviews.",
        "Automate repetitive workflows with PowerShell and contribute to CI/CD-driven delivery.",
      ],
    },
    {
      role: "Operations Supervisor",
      company: "TransPerfect",
      period: "Oct 2023 – Mar 2025",
      description:
        "Led a high-performing interpreter team in a quality-driven environment where accuracy, speed, and consistency were critical.",
      highlights: [
        "Redesigned QA feedback tracking with more specific error categories to identify patterns and improve coaching.",
        "Helped the team consistently exceed monthly KPIs and improve performance month over month.",
        "Developed top performers through mentoring, delegation, monitoring, and structured coaching.",
      ],
    },
    {
      role: "Spanish - English Interpreter",
      company: "TransPerfect",
      period: "Feb 2023 – Oct 2023",
      description:
        "Delivered real-time interpretation across medical, legal, banking, insurance, public service, and emergency-related contexts.",
      highlights: [
        "Worked under strict QA standards requiring accuracy, number verification, and complete message conveyance.",
        "Built a note-taking productivity application to improve interpreter workflows, reduce friction, and support QA performance.",
      ],
    },
  ];

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <h2>Experience</h2>

        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item" key={experience.role}>
              <div className="timeline-marker" />

              <div className="timeline-content card">
                <div className="experience-header">
                  <div>
                    <h3>{experience.role}</h3>
                    <p className="experience-company">{experience.company}</p>
                  </div>

                  <span className="experience-period">{experience.period}</span>
                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;