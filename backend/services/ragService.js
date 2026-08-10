/**
 * Knowledge Base for Samvritha Lathish RAG Pipeline
 */
const KNOWLEDGE_BASE = [
  {
    topic: 'education',
    keywords: ['education', 'university', 'college', 'srm', 'degree', 'cgpa', 'sgpa', 'grades', 'score', 'school', 'marks'],
    answer: "Samvritha Lathish is a 3rd-year B.Tech CSE (AI & ML Specialisation) student at SRM Institute of Science and Technology, Ramapuram, Chennai. She has a 9.4 CGPA, achieved a perfect 10.0 SGPA in her 5th semester, and scored 97% in Class XII and 95% in Class X. Expected graduation: 2028."
  },
  {
    topic: 'ai quiz maker project',
    keywords: ['quiz', 'rag', 'fastapi', 'pdf', 'notes', 'mascot', 'accuracy', 'delta', 'practice', 'study'],
    answer: "The AI Quiz Maker is a full-stack study platform built with FastAPI, Python, RAG Pipeline, React, and PostgreSQL. Key features include unlimited PDF uploads, text extraction from handwritten/typed PDFs, Q&A chatbot grounded in notes, on-screen accuracy prediction with a mascot, practice questions on demand (Easy/Medium/Hard), and Delta mode comparing new uploads with old ones."
  },
  {
    topic: 'assignment portal project',
    keywords: ['assignment', 'dbms', 'submission', 'sql', 'database', 'coursework', 'portal'],
    answer: "The Assignment Submission Portal is a database-driven application built for a DBMS course. It features a relational schema for assignments, students, and submissions, optimized query design for performance and data integrity, and structured record retrieval."
  },
  {
    topic: 'skills',
    keywords: ['skill', 'stack', 'tech', 'python', 'react', 'fastapi', 'node', 'sql', 'postgres', 'c++', 'figma', 'tools'],
    answer: "Samvritha's technical stack spans UI/UX & Design (Figma, Responsive Design), Frontend (React, JavaScript), Backend (Node.js, FastAPI, REST APIs), Databases (PostgreSQL, SQL), AI & ML (RAG Pipelines, ML Workflows, Jupyter), Languages (Python, C, C++, SQL, JS), and Tools (Git/GitHub, VS Code, Postman)."
  },
  {
    topic: 'leetcode',
    keywords: ['leetcode', 'dsa', 'algorithm', 'problem', 'solved', 'array', 'dynamic programming', 'two pointers'],
    answer: "Samvritha has solved 80+ LeetCode problems, focusing on Data Structures & Algorithms (Dynamic Programming, Divide & Conquer, Trie, Hash Table, Two Pointers, Greedy, Arrays, Strings)."
  },
  {
    topic: 'contact',
    keywords: ['contact', 'email', 'phone', 'linkedin', 'github', 'reach', 'hire', 'message'],
    answer: "You can reach Samvritha Lathish via Email at samvrithalathish67@gmail.com, Phone at +91 7356637234, LinkedIn (linkedin.com/in/samvritha-lathish-229797343), or GitHub (github.com/Samvritha67). You can also send a direct message using the contact form on this site!"
  },
  {
    topic: 'certifications',
    keywords: ['cert', 'certificate', 'coursera', 'deeplearning', 'simplilearn', 'saylor'],
    answer: "Samvritha holds certifications in: Google Python Programming (Coursera), AI for Everyone / AI Foundations (DeepLearning.AI), Data Structures & Algorithms (Simplilearn), and C++ Programming (Saylor Academy)."
  }
];

const answerQuery = (userQuery) => {
  if (!userQuery || typeof userQuery !== 'string') {
    return "Hello! I am Samvritha's AI Portfolio Assistant. Ask me anything about her projects, AI/ML skills, education, or contact details!";
  }

  const queryLower = userQuery.toLowerCase().trim();

  // Keyword score matching
  let bestMatch = null;
  let highestScore = 0;

  for (const item of KNOWLEDGE_BASE) {
    let score = 0;
    for (const kw of item.keywords) {
      if (queryLower.includes(kw)) {
        score += 1;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore > 0) {
    return bestMatch.answer;
  }

  return "Samvritha Lathish is a Computer Science & Engineering student specialising in AI & ML at SRM IST. She excels in full-stack web development (React, Node.js, FastAPI), database design (PostgreSQL/SQL), and RAG AI pipelines. Ask me about her education, projects (AI Quiz Maker, Assignment Portal), or contact info!";
};

module.exports = {
  answerQuery
};
