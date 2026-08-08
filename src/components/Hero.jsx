import useTypewriter from '../hooks/useTypewriter';

export default function Hero() {
  const typed = useTypewriter([
    'MERN Stack Developer',
    'React Native Developer',
    'Frontend Engineer',
    'Problem Solver',
  ]);

  return (
    <section className="hero">
      <div className="container">
        <span className="tag">Available for work</span>
        <h1>
          Hey, I&apos;m
          <br />
          <span className="blue">Sandeep</span>
          <br />
          <span className="orange">Kumar</span>
        </h1>
        <p className="typewriter">
          <span className="typed">{typed}</span>
          <span className="caret">|</span>
        </p>
        <p>
          I&apos;m a <strong>MERN stack &amp; mobile developer</strong> building
          full-stack web apps and cross-platform apps with React Native. Clean,
          fast, and functional — no fluff.
        </p>
        <div className="hero-actions">
          <a
            className="btn primary"
            href="https://drive.google.com/file/d/1aRBzecnaUdgM-j3eOpmk9DMfGMNsEdxA/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View resume
          </a>
          <a className="btn secondary" href="#projects">
            See my work
          </a>
        </div>
      </div>
    </section>
  );
}