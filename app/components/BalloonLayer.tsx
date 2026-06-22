'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function BalloonLayer() {
  const balloonData = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => {
      const leftPosition = (i * 9.3) % 85 + 5;       // Smoothly balanced distribution
      const speedDuration = 22 + (i % 8);            // Slower travel profile balances the massive size
      const staggerDelay = i * 2.8;                  // Stretched gaps prevent massive balloon crowding
      const sizeScale = 1.0 + ((i % 3) * 0.35);      // Extra large scaling multiplier multipliers (1.0x to 1.7x)
      const initialRotation = ((i * 22) % 30) - 15;  // Slight natural drifting tilt

      return {
        id: i,
        left: `${leftPosition}%`,
        duration: speedDuration,
        delay: staggerDelay,
        scale: sizeScale,
        rotate: initialRotation,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden w-full h-full">
      {balloonData.map((balloon) => (
        <motion.span
          key={balloon.id}
          className="absolute text-7xl inline-block will-change-transform select-none"
          style={{
            left: balloon.left,
            top: '110%', // Sits further down to account for the increased size footprint
            scale: balloon.scale,
            rotate: balloon.rotate,
            opacity: 0.12, // Dropped opacity slightly so giant shapes stay premium and ambient
          }}
          animate={{
            top: '-15%', // Pushes completely out of view at the top boundary edge
            x: [0, (balloon.id % 2 === 0 ? 50 : -50), 0], // Wider elegant sways for larger elements
          }}
          transition={{
            duration: balloon.duration,
            delay: balloon.delay,
            repeat: Infinity,
            ease: 'linear',
            x: {
              duration: balloon.duration * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }
          }}
        >
          🎈
        </motion.span>
      ))}
    </div>
  );
}
