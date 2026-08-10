const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const { connectDB, isMongoActive } = require('./config/db');

// Route imports
const profileRoutes = require('./routes/profileRoutes');
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');
const chatRoutes = require('./routes/chatRoutes');
const resumeRoutes = require('./routes/resumeRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect Database
connectDB();

// API Routes
app.use('/api/profile', profileRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/resume', resumeRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    database: isMongoActive() ? 'MongoDB' : 'Local JSON Fallback',
    service: 'Samvritha Lathish Portfolio API',
    futureInternsTask: 'Full Stack Web Development - Personal Professional Portfolio Website'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`
🚀 ==============================================================
   Samvritha Lathish Portfolio API Server Running on Port ${PORT}
   Mode: ${process.env.NODE_ENV || 'development'}
   Health Check: http://localhost:${PORT}/api/health
==============================================================
  `);
});
