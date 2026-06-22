'use client';

import React from 'react';

interface WisteriaFlowerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  delay?: number;
  opacity?: number;
}

const WisteriaFlower: React.FC<WisteriaFlowerProps> = ({
  size = 'md',
  delay = 0,
  opacity = 0.8,
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  return (
    <div
      className={`${sizeMap[size]} animate-flower-wave`}
      style={{
        animationDelay: `${delay}s`,
        opacity: opacity,
      }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main flower cluster */}
        <g>
          {/* Center of flower */}
          <circle cx="50" cy="50" r="6" fill="#9b6fa8" opacity="0.9" />
          
          {/* Petals - wisteria drooping cluster style */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
            const angle = (i * 40) * (Math.PI / 180);
            const distance = 20;
            const x = 50 + distance * Math.cos(angle);
            const y = 50 + distance * Math.sin(angle);
            
            return (
              <ellipse
                key={i}
                cx={x}
                cy={y}
                rx="8"
                ry="12"
                fill={`url(#gradient${i})`}
                opacity={0.85 - i * 0.05}
                style={{
                  transform: `rotate(${angle * 57.3}deg)`,
                  transformOrigin: `50px 50px`,
                }}
              />
            );
          })}
          
          {/* Secondary drooping petals */}
          {[0, 1, 2, 3].map((i) => {
            const angle = (i * 90 + 45) * (Math.PI / 180);
            const distance = 28;
            const x = 50 + distance * Math.cos(angle);
            const y = 50 + distance * Math.sin(angle);
            
            return (
              <circle
                key={`secondary-${i}`}
                cx={x}
                cy={y}
                r="6"
                fill="#d8c9e8"
                opacity={0.6}
              />
            );
          })}
        </g>

        {/* Gradients */}
        <defs>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <linearGradient
              key={`gradient${i}`}
              id={`gradient${i}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#d8c9e8" stopOpacity="1" />
              <stop offset="50%" stopColor="#b19cd9" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#9b6fa8" stopOpacity="0.8" />
            </linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
};

export default WisteriaFlower;
