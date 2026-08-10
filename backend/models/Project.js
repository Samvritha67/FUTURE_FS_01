const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  role: { type: String, required: true },
  desc: { type: String, required: true },
  stack: [{ type: String }],
  features: [{ type: String }],
  status: { type: String, enum: ['Ongoing', 'Done', 'Coursework'], default: 'Done' },
  githubUrl: { type: String },
  liveUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);
