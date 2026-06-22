'use client';

import React from 'react';
import WisteriaFlower from './WisteriaFlower';
import BalloonLayer from './BalloonLayer'; // Import the balloon layer component

const FlowerBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50 -z-30" />

      {/* 1. Global Balloon Animation Layer (Stacked at -z-20 to float behind text but over gradient) */}
      <BalloonLayer />

      {/* 2. Decorative Wisteria Flowers Stack - Top Left */}
      <div className="absolute -top-10 -left-10 opacity-40 pointer-events-none hidden lg:block -z-10">
        <WisteriaFlower size="xl" delay={0} opacity={0.4} />
      </div>

      {/* Decorative Flowers - Top Right */}
      <div className="absolute -top-5 -right-5 opacity-30 pointer-events-none hidden lg:block -z-10">
        <WisteriaFlower size="lg" delay={1} opacity={0.3} />
      </div>

      {/* Decorative Flowers - Bottom Left */}
      <div className="absolute -bottom-10 -left-5 opacity-30 pointer-events-none hidden lg:block -z-10">
        <WisteriaFlower size="lg" delay={2} opacity={0.3} />
      </div>

      {/* Decorative Flowers - Bottom Right */}
      <div className="absolute -bottom-5 -right-10 opacity-40 pointer-events-none hidden lg:block -z-10">
        <WisteriaFlower size="xl" delay={3} opacity={0.4} />
      </div>

      {/* Mobile Flowers */}
      <div className="absolute top-10 right-5 opacity-25 pointer-events-none block lg:hidden -z-10">
        <WisteriaFlower size="md" delay={0} opacity={0.25} />
      </div>

      <div className="absolute bottom-20 left-5 opacity-20 pointer-events-none block lg:hidden -z-10">
        <WisteriaFlower size="md" delay={2} opacity={0.2} />
      </div>

      {/* Content Canvas (Renders perfectly over the background and balloons) */}
      {children}
    </div>
  );
};

export default FlowerBackground;
