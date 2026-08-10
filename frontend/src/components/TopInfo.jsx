import React from 'react';
import { getResumeDownloadUrl } from '../services/api';

export default function TopInfo({ profile }) {
  const edu = profile?.education || {
    institution: 'SRM Institute of Science and Technology, Ramapuram, Chennai',
    degree: 'B.Tech CSE — AI & ML Specialisation',
    year: 'Third Year (5th Semester) · Expected 2028',
    sgpaSem5: '10.0',
    cgpa: '9.4',
    class12: '97%',
    class10: '95%'
  };

  return (
    <div className="wrap" style={{ marginTop: '48px' }}>
      <div className="top-info">
        <div className="contact-panel">
          <div className="fig">Contact</div>
          <div className="name-big">Samvritha Lathish</div>
          <div className="contact-top">
            <div className="contact-line">
              <span className="clabel-mini">Phone</span>
              <a href="tel:+917356637234">+91 7356637234</a>
            </div>
            <div className="contact-line">
              <span className="clabel-mini">Email</span>
              <a href="mailto:samvrithalathish67@gmail.com">samvrithalathish67@gmail.com</a>
            </div>
            <div className="contact-line">
              <span className="clabel-mini">LinkedIn</span>
              <a href="https://linkedin.com/in/samvritha-lathish-229797343" target="_blank" rel="noopener noreferrer">
                View Profile &rarr;
              </a>
            </div>
            <div className="contact-line">
              <span className="clabel-mini">GitHub</span>
              <a href="https://github.com/Samvritha67" target="_blank" rel="noopener noreferrer">
                Samvritha67 &rarr;
              </a>
            </div>
            <div className="contact-line">
              <span className="clabel-mini">LeetCode</span>
              <a href="https://leetcode.com/u/Samvritha123" target="_blank" rel="noopener noreferrer">
                Samvritha123 &rarr;
              </a>
            </div>
          </div>

          <a 
            className="btn primary" 
            style={{ marginTop: '20px' }} 
            href={getResumeDownloadUrl()} 
            download
          >
            Download Official Resume (PDF) &darr;
          </a>
        </div>

        <div className="about-panel">
          <h3>Education &amp; Academic Honors</h3>
          <div className="edu-line">
            <b>{edu.institution}</b>
          </div>
          <div className="edu-line">{edu.degree}</div>
          <div className="edu-line">{edu.year}</div>
          
          <div className="edu-line" style={{ marginTop: '16px' }}>
            SGPA (5th Sem): <b>{edu.sgpaSem5 || '10.0'}</b>
          </div>
          <div className="edu-line">
            CGPA: <b>{edu.cgpa || '9.4'}</b>
          </div>
          <div className="edu-line">
            Class XII: <b>{edu.class12}</b> &nbsp;&middot;&nbsp; Class X: <b>{edu.class10}</b>
          </div>
        </div>
      </div>
    </div>
  );
}
