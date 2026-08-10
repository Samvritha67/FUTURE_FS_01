import React from 'react';

export default function Hero({ profile }) {
  const stats = profile?.stats || {
    cgpa: 9.4,
    sgpaSem5: 10.0,
    leetcodeSolved: 80,
    expectedGraduation: 2028
  };

  return (
    <>
      <div className="wrap hero">
        <span className="eyebrow">B.Tech CSE — AI &amp; ML · SRM IST, Chennai</span>
        <h1 className="name">
          Building <em>full-stack</em><br />
          AI products, end to end.
        </h1>
        <p className="tagline">
          Third-year Computer Science &amp; Engineering student specialising in AI &amp; ML, with a strong interest in full-stack web development and UI/UX design. I enjoy building complete products — from clean, intuitive interfaces to the backend systems and databases underneath them.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn primary">
            View Selected Work &rarr;
          </a>
          <a href="#contact" className="btn ghost">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="wrap">
        <div className="statline">
          <div className="stat">
            <span className="n">{stats.cgpa}</span>
            <span className="l">CGPA</span>
          </div>
          <div className="stat">
            <span className="n">{stats.sgpaSem5.toFixed(1)}</span>
            <span className="l">SGPA — Sem 5</span>
          </div>
          <div className="stat">
            <span className="n">{stats.leetcodeSolved}+</span>
            <span className="l">LeetCode Solved</span>
          </div>
          <div className="stat">
            <span className="n">{stats.expectedGraduation}</span>
            <span className="l">Expected Graduation</span>
          </div>
        </div>
      </div>
    </>
  );
}
