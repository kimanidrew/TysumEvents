'use client';

import React from 'react';

const PinkLeaves: React.FC = () => {
  const leaves = new Array(6).fill(0).map((_, i) => ({
    id: i,
    left: 6 + i * 14,
    delay: i * 0.6,
    scale: 0.9 + (i % 3) * 0.15,
  }));

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 overflow-hidden pink-wave">
      {leaves.map((l) => (
        <svg
          key={l.id}
          className="pink-leaf absolute"
          style={{ left: `${l.left}%`, bottom: `${5 + (l.id % 2) * 6}%`, transform: `scale(${l.scale})`, animationDelay: `${l.delay}s` }}
          viewBox="0 0 120 320"
          width="140"
          height="380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`g${l.id}`} x1="0" x2="1">
              <stop offset="0%" stopColor="#ffd6e6" />
              <stop offset="60%" stopColor="#ff9ccf" />
              <stop offset="100%" stopColor="#ff77b3" />
            </linearGradient>
          </defs>

          <g opacity="0.95" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M60 0 C70 30 90 80 60 120 C30 160 40 220 60 260" stroke={`url(#g${l.id})`} fill="none" />
            <path d="M62 10 C68 30 85 70 62 100 C40 130 48 180 62 210" stroke={`url(#g${l.id})`} fill="none" />
          </g>

          <g transform="translate(18,80)">
            <ellipse cx="12" cy="12" rx="12" ry="6" fill={`url(#g${l.id})`} opacity="0.95" />
            <ellipse cx="28" cy="36" rx="16" ry="8" fill={`url(#g${l.id})`} opacity="0.9" />
            <ellipse cx="6" cy="56" rx="10" ry="5" fill={`url(#g${l.id})`} opacity="0.85" />
          </g>
        </svg>
      ))}
    </div>
  );
};

export default PinkLeaves;
