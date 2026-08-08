export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head">
          <span className="tag">01</span>
          <h2>About me</h2>
        </div>
        <div className="about-grid">
          <div className="card about-card">
            <h3>Who I am</h3>
            <p>
              I&apos;m Sandeep Kumar, a MERN stack and mobile developer who cares
              about the details. I build full-stack web apps with React, Node.js,
              and Express, plus cross-platform apps with React Native. When
              I&apos;m not coding, I&apos;m tinkering with side projects or
              learning something new.
            </p>
          </div>
          <div className="card">
            <h3>Quick facts</h3>
            <ul className="facts">
              <li>
                <span>Based in</span> <span>Panipat, India</span>
              </li>
              <li>
                <span>Degree</span>{' '}
                <span>MCA @ PIET (CGPA 7.9)</span>
              </li>
              <li>
                <span>Degree</span>{' '}
                <span>BCA @ Kurukshetra University (2020–23)</span>
              </li>
              <li>
                <span>Focus</span> <span>MERN &amp; Mobile</span>
              </li>
              <li>
                <span>Status</span> <span>Open to work</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}