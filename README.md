# Samvritha Lathish — Full-Stack Portfolio Website

A production-grade, full-stack portfolio web application for **Samvritha Lathish** (B.Tech CSE — AI & ML @ SRM IST, Chennai), built following the **Future Interns Full Stack Web Development** specifications.

![Portfolio Preview](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Node.js%20%7C%20Express%20%7C%20MongoDB-blue?style=for-the-badge)

## 🚀 Features

- **Frontend (React.js)**:
  - Editorial & Modern Tech Aesthetic (*Fraunces* serif, *IBM Plex Mono*, grid background lines, gold & teal accents).
  - Animated Stat Counters (9.4 CGPA, 10.0 SGPA - Sem 5, 80+ LeetCode problems).
  - Interactive Technical Stack visualization layers.
  - Projects Showcase with filtering (All, AI/ML, Full-Stack, DBMS) and detail modal.
  - Floating RAG-powered AI Assistant Chatbot widget to ask questions about Samvritha's credentials.
  - Direct PDF Resume download from backend API.

- **Backend (Node.js + Express.js + MongoDB)**:
  - RESTful APIs for profile data, project listings, contact form submission, and resume serving.
  - **MongoDB Database** (via Mongoose) with automatic local fallback storage if MongoDB service is offline.
  - **Nodemailer Integration**: Triggers automated email notifications upon contact form submission.
  - **AI Chat RAG Service**: Answers candidate-related queries grounded in Samvritha's actual background and projects.

- **SEO & Social Visibility**:
  - Full HTML5 semantic tags, Open Graph meta tags, Twitter card tags, and **Schema.org Person JSON-LD** for search engines.

---

## 🛠️ Project Structure

```
samvritha-portfolio/
├── package.json               # Root scripts for running frontend & backend
├── README.md                  # Documentation
├── .gitignore
├── backend/
│   ├── server.js              # Express API server
│   ├── config/db.js           # Database connection & seed script
│   ├── models/                # Mongoose models (Message, Project, Profile)
│   ├── routes/                # API routes (contact, profile, projects, chat, resume)
│   ├── services/              # Email service & RAG AI engine
│   └── assets/                # Resume PDF file
└── frontend/
    ├── index.html             # Entry HTML with SEO meta tags & Schema.org
    ├── src/
    │   ├── main.jsx
    │   ├── App.jsx
    │   ├── index.css           # Global design system & theme tokens
    │   ├── components/        # React UI components
    │   └── services/          # API client
```

---

## 💻 How to Run Locally

### Prerequisites
- Node.js (v18+)
- npm (v9+)
- MongoDB (Optional — if running, set `MONGODB_URI` in `backend/.env`. If not installed, a resilient local JSON database fallback activates automatically).

### 1. Install Dependencies
From the root directory:
```bash
npm run setup
```

### 2. Start Backend & Frontend Concurrently
```bash
npm run dev
```

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

---

## 📬 Contact Form & Email Setup
Set SMTP credentials in `backend/.env` to receive live email alerts:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/samvritha_portfolio
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
NOTIFICATION_RECIPIENT=samvrithalathish67@gmail.com
```

---

## 📜 License
Developed for Samvritha Lathish's Portfolio & Future Interns Full Stack Web Development project.
