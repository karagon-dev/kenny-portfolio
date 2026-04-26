function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <p className="eyebrow">Software Engineer</p>

        <h1>I build real business software.</h1>

        <p className="hero-text">
          Software Engineer with hands-on experience developing enterprise
          applications using .NET, C#, SQL Server, React, and TypeScript.
          Currently focused on backend systems, APIs, databases, and scalable
          solutions that support real operations.
        </p>

        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href="https://github.com/karagon-dev"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            className="btn btn-secondary"
            href="https://www.linkedin.com/in/karagon-dev/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            className="btn btn-secondary"
            href="/kenny-aragon-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;