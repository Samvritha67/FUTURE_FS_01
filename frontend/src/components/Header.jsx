import React, { useState } from 'react';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="site">
      <nav>
        <a href="#" className="brand">
          Samvritha<span>.</span>Lathish
        </a>

        <button 
          className="navtoggle" 
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navlinks ${navOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={() => setNavOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setNavOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setNavOpen(false)}>Projects</a></li>
          <li><a href="#certs" onClick={() => setNavOpen(false)}>Certifications</a></li>
          <li><a href="#contact" onClick={() => setNavOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
