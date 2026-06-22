'use client';

import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import WisteriaFlower from './WisteriaFlower';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[520px] md:min-h-[650px] overflow-hidden py-24">

      {/* 🖤 BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-[#0a0a0a] to-[#111111]" />

      {/* ✨ GOLD CONFETTI */}
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

      {/* CONTENT */}
      <div className="container-responsive max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col">

          {/* LEFT CONTENT */}
          <div className="w-full md:w-3/4 space-y-6">

            <div className="inline-flex items-center gap-2 bg-white/5 border border-yellow-500/20 px-4 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Global Luxury Event Production Specialists
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
              Crafting <span className="gradient-text">experiences</span><br />
              that become
              <span className="block gradient-text">
                lifelong memories.
              </span>
            </h1>

            <p className="text-gray-300 text-lg max-w-xl">
              Luxury events designed with cinematic detail, emotional storytelling, and flawless execution.
            </p>

            <div className="flex gap-4">
              <Link href="/events/create" className="btn-primary flex items-center">
                Book Your Event <ChevronRight className="ml-2" />
              </Link>

              <Link href="/events" className="btn-secondary">
                Explore Services
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* 🎨 ANIMATIONS (RESTORED + GOLD TUNED) */}
      <style jsx>{`

        /* 🎈 BALLOONS (now gold glow instead of pink) */
        .balloon {
          position: absolute;
          bottom: -120px;
          animation: floatUp 10s infinite ease-in-out;
          filter: drop-shadow(0 0 10px rgba(212,175,55,0.4));
        }

        .big { font-size: 64px; color: #d4af37; }
        .medium { font-size: 48px; color: #f6e7b0; }
        .small { font-size: 32px; color: #d4af37; }

        .b1 { left: 10%; animation-delay: 0s; }
        .b2 { left: 30%; animation-delay: 2s; }
        .b3 { left: 60%; animation-delay: 4s; }
        .b4 { left: 80%; animation-delay: 6s; }

        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-900px); opacity: 0; }
        }

        /* 🎆 FIREWORKS (gold luxury glow) */
        .firework {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d4af37;
          box-shadow:
            0 0 10px #d4af37,
            0 0 20px #f6e7b0,
            0 0 30px #a8841f;
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
              0 0 10px #d4af37,
              25px 0 #f6e7b0,
              -25px 0 #a8841f,
              0 25px #d4af37,
              0 -25px #f6e7b0;
          }
          100% { transform: scale(0); opacity: 0; }
        }

        /* 🎊 CONFETTI (gold luxury version) */
        .confetti {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #d4af37;
          top: -10px;
          left: 20%;
          animation: fall 6s linear infinite;
          box-shadow: 0 0 10px rgba(212,175,55,0.6);
        }

        .c2 { left: 40%; background: #f6e7b0; animation-delay: 1s; }
        .c3 { left: 60%; background: #a8841f; animation-delay: 2s; }
        .c4 { left: 80%; background: #d4af37; animation-delay: 3s; }

        @keyframes fall {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(900px); opacity: 0; }
        }

      `}</style>

    </section>
  );
};

export default HeroSection;