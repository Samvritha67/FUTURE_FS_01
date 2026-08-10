import React, { useState } from 'react';
import { sendChatMessage } from '../services/api';

export default function AiChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi! I'm Samvritha's AI Portfolio Assistant. Ask me anything about her skills, projects, SGPA/CGPA, or contact info!"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userQuestion = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userQuestion }]);
    setLoading(true);

    const res = await sendChatMessage(userQuestion);
    setLoading(false);

    setMessages((prev) => [
      ...prev,
      { sender: 'bot', text: res.answer || "I'm having trouble fetching details right now. Please try again!" }
    ]);
  };

  return (
    <div className="ai-widget">
      {!open && (
        <button className="ai-toggle-btn" onClick={() => setOpen(true)}>
          <span style={{ fontSize: '16px' }}>✨</span>
          <span>Ask Samvritha's AI</span>
        </button>
      )}

      {open && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--gold)' }}>●</span>
              <span>Samvritha AI Assistant</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', color: '#EEF1F7', cursor: 'pointer', fontSize: '18px' }}
            >
              &times;
            </button>
          </div>

          <div className="ai-chat-body">
            {messages.map((m, idx) => (
              <div key={idx} className={`chat-msg ${m.sender}`}>
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="chat-msg bot" style={{ fontStyle: 'italic', opacity: 0.8 }}>
                AI is searching portfolio knowledge base...
              </div>
            )}
          </div>

          <form className="ai-chat-footer" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Ask about projects, skills, CGPA..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn primary" style={{ padding: '6px 14px', fontSize: '12px' }}>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
