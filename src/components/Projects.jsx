import Tilt from './Tilt';

const projects = [
  {
    title: 'Raahi',
    tagline: 'College Bus Tracking System',
    description:
      'A real-time college bus tracking platform that helps students monitor bus locations, with geofencing alerts and role-based interfaces for students, drivers, and admins.',
    tags: ['MERN Stack', 'Geofencing'],
    color: 'p1',
    live: 'https://raahi-main.vercel.app/login',
  },
  {
    title: 'Radhe Pharmacy',
    tagline: 'On-demand Medicine Delivery',
    description:
      'An on-demand medicine delivery platform connecting users with local pharmacies — a cross-platform mobile app for users plus a web dashboard for admins, with JWT auth.',
    tags: ['MERN Stack', 'React Native'],
    color: 'p2',
    live: 'https://www.radhepharmacy.app',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <span className="tag">03</span>
          <h2>Selected work</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <Tilt key={project.title}>
              <article className={`card ${project.color || 'p1'}`}>
                <div className="project-top">
                  <span>Project {String(i + 1).padStart(2, '0')}</span>
                  <span className="number">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags?.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="link-meta">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Visit live site ↗
                  </a>
                </div>
              </article>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
