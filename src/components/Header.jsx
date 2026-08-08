export default function Header() {
  return (
    <header>
      <div className="container nav">
        <div className="logo">
          SANDEEP<span>.</span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}