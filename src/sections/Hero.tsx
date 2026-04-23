function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <p className="eyebrow">Software Engineer</p>
        <h1>Hi, I&apos;m Kenny Aragón.</h1>
        <p className="hero-text">
          I build modern web applications with React, TypeScript, .NET, and SQL,
          with a strong focus on backend logic, clean structure, and real
          business solutions.
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
        </div>
      </div>
    </section>
  );
}

export default Hero;