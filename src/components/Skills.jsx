const categories = [
  {
    title: 'Languages',
    items: ['Java', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5/CSS3'],
  },
  {
    title: 'Frameworks',
    items: ['React.js', 'React Native', 'Node.js', 'Express.js', 'Tailwind CSS'],
  },
  {
    title: 'Tools & Cloud',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'AWS',
      'Linux',
      'VS Code',
      'Vercel',
      'Netlify',
      'Razorpay API',
      'Chrome DevTools',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <span className="tag">04</span>
          <h2>Skills</h2>
        </div>
        {categories.map((cat) => (
          <div className="skill-group" key={cat.title}>
            <h3 className="skill-group-title">{cat.title}</h3>
            <div className="skills-grid">
              {cat.items.map((item) => (
                <div className="skill" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
