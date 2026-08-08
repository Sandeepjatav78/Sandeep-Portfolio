const items = [
  'Web Development',
  'UI Design',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'MERN Stack',
  'Node.js',
  'Problem Solving',
  'Clean Code',
];

export default function Marquee() {
  return (
    <div className="marquee">
      <span>
        {[...items, ...items].map((item, i) => (
          <span className="marquee-item" key={i}>
            {item} <span className="star">✦</span>{' '}
          </span>
        ))}
      </span>
    </div>
  );
}