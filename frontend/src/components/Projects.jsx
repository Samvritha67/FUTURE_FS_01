import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const fallbackProjects = [
    {
      id: 'ai-quiz-maker',
      title: 'AI Quiz Maker',
      category: 'AI / Full-Stack',
      role: 'Full-Stack · FastAPI + RAG · React · PostgreSQL',
      desc: "A full-stack, AI-powered study platform that turns a student's own notes into summaries, Q&A, and practice material — built with a FastAPI backend using a Retrieval-Augmented Generation (RAG) pipeline and a React frontend, backed by a PostgreSQL schema for users, uploads, and quiz history.",
      stack: ['Python 3.12+', 'FastAPI', 'RAG Pipeline', 'React', 'Node.js / npm', 'PostgreSQL', 'Git', 'Postman / Thunder Client'],
      features: [
        'Unlimited PDF uploads per user',
        'Text extraction from handwritten and typed PDFs',
        'Unlimited AI-generated topic summaries',
        'Q&A chatbot grounded in the uploaded material',
        'On-screen accuracy prediction, shown via a mascot',
        'Unlimited flashcards and practice questions on demand',
        'Easy / Medium / Hard difficulty levels',
        'Delta mode — compares new uploads against older ones'
      ],
      status: 'Ongoing',
      githubUrl: 'https://github.com/Samvritha67',
      liveUrl: '#'
    },
    {
      id: 'assignment-portal',
      title: 'Assignment Submission Portal',
      category: 'DBMS / SQL',
      role: 'DBMS Course Project',
      desc: 'A database-driven portal built for a DBMS course, focused on structured data modelling and reliable submission handling. The project centres on schema design and query efficiency for managing assignment records end to end.',
      stack: ['SQL', 'Database Design', 'DBMS', 'Relational Schemas', 'Query Optimization'],
      features: [
        'Relational schema for assignments, students, and submissions',
        'Structured storage and retrieval of submission records',
        'Query design focused on data integrity and efficiency'
      ],
      status: 'Coursework',
      githubUrl: 'https://github.com/Samvritha67',
      liveUrl: '#'
    }
  ];

  const projectList = (projects && projects.length > 0) ? projects : fallbackProjects;

  const filteredList = filter === 'All'
    ? projectList
    : projectList.filter(p => p.category && p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="projects">
      <div className="wrap">
        <div className="fig">Fig. 03 — Selected Work</div>
        <div className="section-head">
          <h2 className="h">Projects</h2>
        </div>

        <div className="project-filters">
          {['All', 'AI / Full-Stack', 'DBMS / SQL'].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects">
          {filteredList.map((p, idx) => (
            <article 
              key={idx} 
              className="project"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedProject(p)}
            >
              <div className="project-meta">
                <span className={`status ${p.status ? p.status.toLowerCase() : 'done'}`}>
                  {p.status}
                </span>
                <h3>{p.title}</h3>
                <div className="role">{p.role}</div>
                <p className="desc">{p.desc}</p>
                <div className="stackline">
                  {p.stack && p.stack.slice(0, 5).map((tech, i) => (
                    <span key={i} className="chip">{tech}</span>
                  ))}
                  {p.stack && p.stack.length > 5 && (
                    <span className="chip">+{p.stack.length - 5} more</span>
                  )}
                </div>
                <div style={{ marginTop: '16px', fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', color: 'var(--gold-deep)' }}>
                  Click to view full architecture &amp; features &rarr;
                </div>
              </div>

              <ul className="feature-list">
                {p.features && p.features.slice(0, 4).map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
