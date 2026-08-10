const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: { type: String, default: 'Samvritha Lathish' },
  title: { type: String, default: 'B.Tech CSE — AI & ML · SRM IST, Chennai' },
  headline: { type: String, default: 'Building full-stack AI products, end to end.' },
  tagline: { type: String },
  phone: { type: String, default: '+91 7356637234' },
  email: { type: String, default: 'samvrithalathish67@gmail.com' },
  linkedin: { type: String, default: 'https://linkedin.com/in/samvritha-lathish-229797343' },
  github: { type: String, default: 'https://github.com/Samvritha67' },
  leetcode: { type: String, default: 'https://leetcode.com/u/Samvritha123' },
  stats: {
    cgpa: { type: Number, default: 9.4 },
    sgpaSem5: { type: Number, default: 10.0 },
    leetcodeSolved: { type: Number, default: 80 },
    expectedGraduation: { type: Number, default: 2028 }
  },
  education: {
    institution: { type: String, default: 'SRM Institute of Science and Technology, Ramapuram, Chennai' },
    degree: { type: String, default: 'B.Tech CSE — AI & ML Specialisation' },
    year: { type: String, default: 'Third Year (5th Semester) · Expected 2028' },
    class12: { type: String, default: '97%' },
    class10: { type: String, default: '95%' }
  }
});

module.exports = mongoose.model('Profile', ProfileSchema);
