function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <h2>Contact</h2>
        <p className="section-text">
          You can connect with me through LinkedIn and GitHub as I continue
          building my portfolio and growing as a software engineer.
        </p>

        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn btn-secondary"
            href="https://linkedin.com/"
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

export default Contact;