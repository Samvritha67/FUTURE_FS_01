import React from 'react';

export default function Certifications() {
  const certs = [
    {
      org: 'Coursera',
      title: 'Google Python Programming',
      desc: 'Solidified Python proficiency for scripting, backend services, and application development.'
    },
    {
      org: 'DeepLearning.AI',
      title: 'AI for Everyone / AI Foundations',
      desc: 'Conceptual grounding in ML workflows, RAG pipelines, and responsible AI.'
    },
    {
      org: 'Simplilearn',
      title: 'Data Structures and Algorithms',
      desc: 'Reinforced algorithmic thinking and optimal complexity analysis for coding assessments.'
    },
    {
      org: 'Saylor Academy',
      title: 'C++ Programming',
      desc: 'Strengthened systems-level programming skills, memory management, and OOP fundamentals.'
    }
  ];

  return (
    <section id="certs">
      <div className="wrap">
        <div className="fig">Fig. 04 — Certifications &amp; Coursework</div>
        <div className="section-head">
          <h2 className="h">Certifications</h2>
        </div>
        
        <div className="cert-grid">
          {certs.map((c, idx) => (
            <div key={idx} className="cert">
              <div className="org">{c.org}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="hero-actions" style={{ marginTop: '24px', marginBottom: 0 }}>
          <a 
            className="btn ghost" 
            href="https://linkedin.com/in/samvritha-lathish-229797343" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Verified Credentials on LinkedIn &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
