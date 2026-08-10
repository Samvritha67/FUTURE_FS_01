const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const { isMongoActive, readJsonData, writeJsonData } = require('../config/db');
const { sendContactNotification } = require('../services/emailService');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message content.'
      });
    }

    const newMessageData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject ? subject.trim() : 'Portfolio Inquiry',
      message: message.trim(),
      createdAt: new Date().toISOString(),
      notifiedByEmail: false
    };

    let savedMessage;

    if (isMongoActive()) {
      const msg = new Message(newMessageData);
      savedMessage = await msg.save();
    } else {
      const messages = readJsonData('messages');
      savedMessage = { id: Date.now().toString(), ...newMessageData };
      messages.unshift(savedMessage);
      writeJsonData('messages', messages);
    }

    // Trigger Nodemailer email notification
    const emailResult = await sendContactNotification(savedMessage);

    return res.status(201).json({
      success: true,
      message: 'Thank you for your message! Samvritha will get back to you shortly.',
      data: savedMessage,
      emailNotification: emailResult
    });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ success: false, message: 'Server error processing message.', error: error.message });
  }
});

// GET /api/contact/messages
router.get('/messages', async (req, res) => {
  try {
    if (isMongoActive()) {
      const messages = await Message.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: messages.length, data: messages });
    } else {
      const messages = readJsonData('messages');
      return res.json({ success: true, count: messages.length, data: messages });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
