function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav">
        <a className="logo" href="#hero">
          Kenny Aragón
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;