const express = require('express');
const router = express.Router();
const { answerQuery } = require('../services/ragService');

// POST /api/chat
router.post('/', (req, res) => {
  try {
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ success: false, message: 'Question parameter is required.' });
    }

    const answer = answerQuery(question);
    return res.json({
      success: true,
      question,
      answer,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
