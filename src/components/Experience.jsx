const experience = [
  {
    role: 'React Native Intern',
    company: 'Okie Dokie',
    period: 'Jul 2025 – Aug 2025',
    remote: true,
    points: [
      'Designed and developed complete cross-platform mobile app screens for iOS and Android using React Native.',
      'Integrated API-based dynamic data handling for real-time synchronization across the mobile ecosystem.',
      'Optimized application performance by identifying bottlenecks and implementing efficient state management.',
    ],
  },
  {
    role: 'MERN Stack Intern',
    company: 'Riyalverse Technology',
    period: 'Jul 2025',
    remote: true,
    points: [
      'Built \u201cShoppio\u201d, a full-featured e-commerce web application using the MERN stack.',
      'Implemented secure user authentication, product cataloging, dynamic cart state, and a robust admin control panel.',
      'Integrated the Razorpay payment gateway for secure, scalable transaction processing.',
      'Deployed the frontend on Vercel and backend on Netlify, ensuring seamless client-server integration via Axios.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head">
          <span className="tag">02</span>
          <h2>Experience</h2>
        </div>
        <div className="exp-grid">
          {experience.map((job) => (
            <article className="card exp-card" key={job.company}>
              <div className="exp-head">
                <h3>{job.company}</h3>
                <span className="exp-period">{job.period}</span>
              </div>
              <div className="exp-role">{job.role}</div>
              {job.remote && <div className="exp-remote">Remote</div>}
              <ul className="exp-list">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}