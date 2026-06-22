'use client';

import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import WisteriaFlower from './WisteriaFlower';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[520px] md:min-h-[650px] overflow-hidden py-30">

      {/* 🌸 BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-50 via-white to-rose-100" />

      {/* 🎊 CONFETTI */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="confetti"></div>
        <div className="confetti c2"></div>
        <div className="confetti c3"></div>
        <div className="confetti c4"></div>
      </div>

      {/* 🎈 BALLOONS */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="balloon big b1">🎈</div>
        <div className="balloon medium b2">🎈</div>
        <div className="balloon big b3">🎈</div>
        <div className="balloon small b4">🎈</div>
      </div>

      {/* 🎆 FIREWORKS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="firework fw1"></div>
        <div className="firework fw2"></div>
        <div className="firework fw3"></div>
      </div>

      <div className="container-responsive max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 STACKED LAYOUT */}
        <div className="flex flex-col">

          {/* LEFT CONTENT (75% feel) */}
          <div className="w-full md:w-3/4 space-y-6">

            <div className="inline-flex items-center gap-2 bg-pink-100/60 px-4 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-pink-500 animate-spin" />
              <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Global Event Production Specialists
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black text-gray-900 leading-11 md:leading-tight">
               Crafting <span className="gradient-text">experiences</span> <br/>that become
              <span className="block gradient-text">
                 lifelong memories.
              </span>
            </h1>

            <p className="text-gray-700 text-lg max-w-xl">
              Tysum Global Events handles corporate, social, exhibition and live events.
            </p>

            <div className="flex gap-4">
              <Link href="/events/create" className="btn-primary flex items-center">
                Start Your Event <ChevronRight className="ml-2" />
              </Link>
              <Link href="/events" className="btn-secondary">
                Explore Services
              </Link>
            </div>

          </div>

          {/* RIGHT SCENE (BELOW BUT RIGHT ALIGNED) */}
          <div className="w-full flex justify-end absolute top-0 right-0">

            <div className="relative w-full md:w-1/2 h-[320px] md:h-[380px] overflow-hidden">

              {/* glowing center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[260px] h-[260px] bg-pink-300/30 rounded-full blur-3xl animate-pulse" />
              </div>

              {/* wisteria accent */}
              <div className="absolute right-10 bottom-10 opacity-30">
                <WisteriaFlower size="lg" delay={1} opacity={0.3} />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 🎨 ANIMATIONS */}
      <style jsx>{`

        /* 🎈 BALLOONS */
        .balloon {
          position: absolute;
          bottom: -120px;
          animation: floatUp 10s infinite ease-in-out;
        }

        .big { font-size: 64px; }
        .medium { font-size: 48px; }
        .small { font-size: 32px; }

        .b1 { left: 10%; animation-delay: 0s; }
        .b2 { left: 30%; animation-delay: 2s; }
        .b3 { left: 60%; animation-delay: 4s; }
        .b4 { left: 80%; animation-delay: 6s; }

        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-900px); opacity: 0; }
        }

        /* 🎆 FIREWORKS */
        .firework {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: white;
          box-shadow:
            0 0 10px #ff4d6d,
            0 0 20px #ffd166,
            0 0 30px #06d6a0;
          animation: explode 2.8s infinite;
        }

        .fw1 { top: 15%; left: 20%; }
        .fw2 { top: 35%; left: 70%; animation-delay: 1s; }
        .fw3 { top: 55%; left: 45%; animation-delay: 2s; }

        @keyframes explode {
          0% { transform: scale(0); opacity: 0; }
          40% { opacity: 1; }
          60% {
            transform: scale(3);
            box-shadow:
              0 0 10px #ff4d6d,
              25px 0 #ffd166,
              -25px 0 #06d6a0,
              0 25px #4cc9f0,
              0 -25px #f72585;
          }
          100% { transform: scale(0); opacity: 0; }
        }

        /* 🎊 CONFETTI */
        .confetti {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #ff4d6d;
          top: -10px;
          left: 20%;
          animation: fall 6s linear infinite;
        }

        .c2 { left: 40%; background: #ffd166; animation-delay: 1s; }
        .c3 { left: 60%; background: #06d6a0; animation-delay: 2s; }
        .c4 { left: 80%; background: #4cc9f0; animation-delay: 3s; }

        @keyframes fall {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(900px); opacity: 0; }
        }

      `}</style>

    </section>
  );
};

export default HeroSection;