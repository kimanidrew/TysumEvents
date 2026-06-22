'use client';

import React from 'react';
import WisteriaFlower from './WisteriaFlower';
import BalloonLayer from './BalloonLayer';

const FlowerBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ✨ GOLD BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-yellow-50 -z-30" />

      {/* 🌟 SOFT GOLD GLOW LAYER */}
      <div className="absolute inset-0 opacity-40 -z-20 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-amber-200/40 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-yellow-200/30 blur-3xl rounded-full" />
      </div>

      {/* 🎈 GLOBAL BALLOON LAYER */}
      <BalloonLayer />

      {/* 🌸 DECORATIVE FLOWERS (GOLD THEME HARMONY) */}
      <div className="absolute -top-10 -left-10 opacity-40 pointer-events-none hidden lg:block -z-10">
        <WisteriaFlower size="xl" delay={0} opacity={0.35} />
      </div>

      <div className="absolute -top-5 -right-5 opacity-30 pointer-events-none hidden lg:block -z-10">
        <WisteriaFlower size="lg" delay={1} opacity={0.3} />
      </div>

      <div className="absolute -bottom-10 -left-5 opacity-30 pointer-events-none hidden lg:block -z-10">
        <WisteriaFlower size="lg" delay={2} opacity={0.3} />
      </div>

      <div className="absolute -bottom-5 -right-10 opacity-40 pointer-events-none hidden lg:block -z-10">
        <WisteriaFlower size="xl" delay={3} opacity={0.35} />
      </div>

      {/* 📱 MOBILE FLOWERS */}
      <div className="absolute top-10 right-5 opacity-25 pointer-events-none block lg:hidden -z-10">
        <WisteriaFlower size="md" delay={0} opacity={0.25} />
      </div>

      <div className="absolute bottom-20 left-5 opacity-20 pointer-events-none block lg:hidden -z-10">
        <WisteriaFlower size="md" delay={2} opacity={0.2} />
      </div>

      {/* CONTENT */}
      {children}
    </div>
  );
};

export default FlowerBackground;