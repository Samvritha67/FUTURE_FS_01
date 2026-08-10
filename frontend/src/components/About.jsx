import React from 'react';

export default function About() {
  const softSkills = [
    'Problem Solving',
    'Analytical Thinking',
    'Team Collaboration',
    'Strong Communication Skills',
    'Leadership',
    'Adaptability',
    'Time Management'
  ];

  return (
    <section id="about">
      <div className="wrap">
        <div className="fig">Fig. 01 — About</div>
        <div className="about-grid">
          <div>
            <p>
              I'm drawn to problems that sit at the intersection of AI and product design — taking a working model and turning it into something people can actually use. Most of my recent work involves designing the backend systems, database schemas, and APIs that power AI features, then pairing them with interfaces that stay simple and intuitive.
            </p>
            <p>
              Outside of coursework, I explore topics beyond the syllabus and compete on LeetCode to keep my problem-solving sharp. I care about structured thinking — in code, in data, and in how a product is put together.
            </p>
          </div>

          <div>
            <div className="fig" style={{ marginBottom: '12px' }}>Professional Qualities</div>
            <div className="tag-row">
              {softSkills.map((skill, index) => (
                <span key={index} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
