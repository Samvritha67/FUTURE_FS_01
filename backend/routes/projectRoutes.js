const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const { isMongoActive, readJsonData, writeJsonData } = require('../config/db');

const DEFAULT_PROJECTS = [
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

// GET /api/projects
router.get('/', async (req, res) => {
  try {
    if (isMongoActive()) {
      let projects = await Project.find().sort({ createdAt: -1 });
      if (projects.length === 0) {
        projects = await Project.insertMany(DEFAULT_PROJECTS);
      }
      return res.json({ success: true, count: projects.length, data: projects });
    } else {
      let projects = readJsonData('projects');
      if (projects.length === 0) {
        projects = DEFAULT_PROJECTS;
        writeJsonData('projects', projects);
      }
      return res.json({ success: true, count: projects.length, data: projects });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/projects/:id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (isMongoActive()) {
      const project = await Project.findById(id);
      if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
      return res.json({ success: true, data: project });
    } else {
      const projects = readJsonData('projects');
      const project = projects.find(p => p.id === id || p._id === id);
      if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
      return res.json({ success: true, data: project });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
