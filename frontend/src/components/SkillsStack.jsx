import React from 'react';

export default function SkillsStack() {
  const stackLayers = [
    { label: 'UI / UX & Design', items: ['Figma', 'Responsive Web Design', 'User-Centric Interfaces'] },
    { label: 'Frontend', items: ['React', 'JavaScript', 'HTML5 & CSS3', 'Vite'] },
    { label: 'Backend', items: ['Node.js', 'FastAPI', 'Express.js', 'REST APIs'] },
    { label: 'Database', items: ['PostgreSQL', 'SQL', 'MongoDB', 'Mongoose'] },
    { label: 'AI & ML', items: ['AI & ML Specialisation', 'RAG Pipelines', 'ML Workflows', 'Responsible AI', 'Jupyter Notebook'] },
    { label: 'Languages I Know', items: ['Python', 'C', 'C++', 'SQL', 'JavaScript'] },
    { label: 'Tools & Platforms', items: ['Git / GitHub', 'VS Code', 'Postman / Thunder Client', 'Jupyter Notebook', 'npm'] }
  ];

  return (
    <section id="skills">
      <div className="wrap">
        <div className="fig">Fig. 02 — Technical Stack</div>
        <div className="section-head">
          <h2 className="h">Skills &amp; Tools</h2>
        </div>

        <div className="stack">
          {stackLayers.map((layer, idx) => (
            <div key={idx} className="stack-row">
              <div className="stack-label">{layer.label}</div>
              <div className="stack-items">
                {layer.items.map((item, i) => (
                  <span key={i} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
