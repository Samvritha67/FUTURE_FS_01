const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const { isMongoActive, readJsonData } = require('../config/db');

const DEFAULT_PROFILE = {
  name: 'Samvritha Lathish',
  title: 'B.Tech CSE — AI & ML · SRM IST, Chennai',
  headline: 'Building full-stack AI products, end to end.',
  tagline: 'Third-year Computer Science & Engineering student specialising in AI & ML, with a strong interest in full-stack web development and UI/UX design. I enjoy building complete products — from clean, intuitive interfaces to the backend systems and databases underneath them.',
  phone: '+91 7356637234',
  email: 'samvrithalathish67@gmail.com',
  linkedin: 'https://linkedin.com/in/samvritha-lathish-229797343',
  github: 'https://github.com/Samvritha67',
  leetcode: 'https://leetcode.com/u/Samvritha123',
  stats: {
    cgpa: 9.4,
    sgpaSem5: 10.0,
    leetcodeSolved: 80,
    expectedGraduation: 2028
  },
  education: {
    institution: 'SRM Institute of Science and Technology, Ramapuram, Chennai',
    degree: 'B.Tech CSE — AI & ML Specialisation',
    year: 'Third Year (5th Semester) · Expected 2028',
    sgpaSem5: '10.0',
    cgpa: '9.4',
    class12: '97%',
    class10: '95%'
  },
  softSkills: [
    'Problem Solving', 'Analytical Thinking', 'Team Collaboration',
    'Strong Communication Skills', 'Leadership', 'Adaptability', 'Time Management'
  ]
};

// GET /api/profile
router.get('/', async (req, res) => {
  try {
    if (isMongoActive()) {
      let profile = await Profile.findOne();
      if (!profile) {
        profile = await Profile.create(DEFAULT_PROFILE);
      }
      return res.json({ success: true, data: profile });
    } else {
      return res.json({ success: true, data: DEFAULT_PROFILE });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
