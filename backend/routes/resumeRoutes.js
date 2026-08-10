const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// GET /api/resume/download
router.get('/download', (req, res) => {
  const resumePath = path.join(__dirname, '../assets/Samvritha_Lathish_Resume.pdf');

  if (fs.existsSync(resumePath)) {
    return res.download(resumePath, 'Samvritha_Lathish_Resume_2026.pdf');
  } else {
    // If file doesn't exist, create a clean text/pdf response
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', 'attachment; filename="Samvritha_Lathish_Resume.txt"');
    return res.send(`
===========================================================
SAMVRITHA LATHISH — RESUME
===========================================================
Email: samvrithalathish67@gmail.com | Phone: +91 7356637234
LinkedIn: linkedin.com/in/samvritha-lathish-229797343
GitHub: github.com/Samvritha67 | LeetCode: leetcode.com/u/Samvritha123

EDUCATION
-----------------------------------------------------------
SRM Institute of Science and Technology, Ramapuram, Chennai
B.Tech CSE — AI & ML Specialisation (Third Year, 5th Sem)
- SGPA (Sem 5): 10.0 / 10.0
- CGPA: 9.4 / 10.0
- Class XII: 97% | Class X: 95%

PROJECTS
-----------------------------------------------------------
1. AI Quiz Maker (FastAPI, RAG Pipeline, React, PostgreSQL)
   - Built an end-to-end study platform converting notes to Q&A.
   - Integrated accuracy prediction mascot and delta upload mode.

2. Assignment Submission Portal (SQL, DBMS Coursework)
   - Relational database schema design for assignment management.

SKILLS & CERTIFICATIONS
-----------------------------------------------------------
- Languages: Python, C, C++, SQL, JavaScript
- Web & Backend: React, Node.js, FastAPI, REST APIs, PostgreSQL
- Certifications: Google Python (Coursera), AI Foundations (DeepLearning.AI)
===========================================================
    `);
  }
});

module.exports = router;
