import React, { useState } from 'react';
import { sendContactMessage } from '../services/api';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success'|'error', text: '' }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', text: 'Please fill in all required fields (Name, Email, Message).' });
      return;
    }

    setLoading(true);
    const result = await sendContactMessage(formData);
    setLoading(false);

    if (result.success) {
      setStatus({ type: 'success', text: result.message || 'Message submitted successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus({ type: 'error', text: result.message || 'Failed to send message. Please try again.' });
    }
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="fig">Fig. 05 — Get In Touch</div>
        <div className="contact-container">
          <div>
            <h2 className="h" style={{ marginBottom: '16px' }}>Let's Connect &amp; Collaborate</h2>
            <p style={{ color: 'var(--ink-soft)', fontSize: '16px', maxWidth: '440px' }}>
              Whether you have a full-stack engineering role, an AI/ML opportunity, or want to discuss a project, feel free to send a message!
            </p>

            <ul className="link-list">
              <li>
                <a href="mailto:samvrithalathish67@gmail.com">
                  <span>Email: samvrithalathish67@gmail.com</span>
                  <span className="arrow">&rarr;</span>
                </a>
              </li>
              <li>
                <a href="tel:+917356637234">
                  <span>Phone: +91 7356637234</span>
                  <span className="arrow">&rarr;</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/samvritha-lathish-229797343" target="_blank" rel="noopener noreferrer">
                  <span>LinkedIn: Samvritha Lathish</span>
                  <span className="arrow">&rarr;</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/Samvritha67" target="_blank" rel="noopener noreferrer">
                  <span>GitHub: Samvritha67</span>
                  <span className="arrow">&rarr;</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-form-box">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Smith"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@company.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Internship Inquiry / Project Discussion"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button type="submit" className="btn primary" disabled={loading} style={{ width: '100%', justifyContent: 'center' }}>
                {loading ? 'Submitting Message...' : 'Send Message & Alert Backend →'}
              </button>

              {status && (
                <div className={`toast ${status.type}`}>
                  {status.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
