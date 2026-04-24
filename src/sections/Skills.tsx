function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="card">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SCSS</li>
            </ul>
          </div>

          <div className="card">
            <h3>Backend</h3>
            <ul>
              <li>C#</li>
              <li>.NET Core</li>
              <li>REST APIs</li>
              <li>Dapper</li>
            </ul>
          </div>

          <div className="card">
            <h3>Database & Tools</h3>
            <ul>
              <li>SQL Server</li>
              <li>Azure DevOps</li>
              <li>Git</li>
              <li>Swagger</li>
              <li>xUnit</li>
            </ul>
          </div>

          <div className="card">
            <h3>Practices</h3>
            <ul>
              <li>CI/CD</li>
              <li>Agile Methodologies</li>
              <li>DevOps</li>
              <li>Debugging</li>
            </ul>
          </div>

          <div className="card">
            <h3>Business Strengths</h3>
            <ul>
              <li>Leadership</li>
              <li>Communication</li>
              <li>Ownership</li>
              <li>Troubleshooting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;