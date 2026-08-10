import React from 'react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(26, 33, 64, 0.75)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: '#FFFFFF',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          border: '1px solid var(--line)',
          padding: '32px',
          borderRadius: '2px',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: 'var(--ink)'
          }}
        >
          &times;
        </button>

        <span className={`status ${project.status ? project.status.toLowerCase() : 'done'}`}>
          {project.status}
        </span>

        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '28px', margin: '12px 0 6px' }}>
          {project.title}
        </h2>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '13px', color: 'var(--muted)', marginBottom: '16px' }}>
          {project.role}
        </div>

        <p style={{ fontSize: '15.5px', color: 'var(--ink-soft)', lineHeight: '1.6', marginBottom: '20px' }}>
          {project.desc}
        </p>

        <h4 style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '10px' }}>
          Key Features &amp; Technical Capabilities
        </h4>
        <ul className="feature-list" style={{ marginBottom: '24px' }}>
          {project.features && project.features.map((feat, idx) => (
            <li key={idx}>{feat}</li>
          ))}
        </ul>

        <h4 style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '10px' }}>
          Technologies Used
        </h4>
        <div className="stackline" style={{ marginBottom: '28px' }}>
          {project.stack && project.stack.map((tech, idx) => (
            <span key={idx} className="chip">
              {tech}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn primary"
            >
              GitHub Repository &rarr;
            </a>
          )}
          <button onClick={onClose} className="btn ghost">
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
