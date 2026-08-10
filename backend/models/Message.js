const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  subject: {
    type: String,
    default: 'Portfolio Inquiry'
  },
  message: {
    type: String,
    required: [true, 'Message content is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  notifiedByEmail: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Message', MessageSchema);
