import React, { useState } from 'react';

export default function LeetCodeSection() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    { name: 'Dynamic Programming', count: '18+ Solved' },
    { name: 'Divide & Conquer', count: '10+ Solved' },
    { name: 'Trie', count: '6+ Solved' },
    { name: 'Hash Table', count: '22+ Solved' },
    { name: 'Two Pointers', count: '14+ Solved' },
    { name: 'Greedy', count: '12+ Solved' },
    { name: 'Arrays', count: '30+ Solved' },
    { name: 'Strings', count: '25+ Solved' }
  ];

  return (
    <div className="wrap" style={{ marginTop: '-24px', marginBottom: '48px' }}>
      <div className="cp-block">
        <div>
          <div className="cnum">80+</div>
          <div className="clabel">LeetCode Problems Solved</div>
        </div>
        <div>
          <p style={{ margin: '0 0 14px', color: 'var(--ink-soft)', fontSize: '15px' }}>
            Core CS fundamentals: Data Structures &amp; Algorithms, Object-Oriented Programming, Operating Systems concepts. Click a topic to highlight problem areas:
          </p>
          <div className="tag-row">
            {topics.map((t, idx) => (
              <span
                key={idx}
                className={`tag ${selectedTopic === t.name ? 'active' : ''}`}
                style={{
                  cursor: 'pointer',
                  borderColor: selectedTopic === t.name ? 'var(--gold-deep)' : 'var(--line)',
                  background: selectedTopic === t.name ? 'var(--gold-tint)' : 'var(--bg-panel)'
                }}
                onClick={() => setSelectedTopic(selectedTopic === t.name ? null : t.name)}
              >
                {t.name} {selectedTopic === t.name ? `(${t.count})` : ''}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
