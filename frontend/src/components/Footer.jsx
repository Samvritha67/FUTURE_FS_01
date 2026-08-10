import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div 
        className="wrap" 
        style={{ 
          width: '100%', 
          display: 'flex', 
          justify: 'space-between', 
          flexWrap: 'wrap', 
          gap: '10px' 
        }}
      >
        <span>&copy; {new Date().getFullYear()} Samvritha Lathish</span>
        <span>Built with React.js, Node.js, Express &amp; MongoDB</span>
      </div>
    </footer>
  );
}
