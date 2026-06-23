'use client';

import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import EventCard from './components/EventCard';
import FlowerBackground from './components/FlowerBackground';
import WisteriaFlower from './components/WisteriaFlower';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const CELEBRATION_TYPES = [
  { id: 'cat-1', category: 'Wedding', searchKeyword: 'wedding-ceremony-decor' },
  { id: 'cat-2', category: 'Birthday Party', searchKeyword: 'birthday-celebration-cake' },
  { id: 'cat-3', category: 'Corporate Event', searchKeyword: 'corporate-event-gala' },
  { id: 'cat-4', category: 'Bridal Shower', searchKeyword: 'bridal-shower-garden' },
  { id: 'cat-5', category: 'Office Celebration', searchKeyword: 'office-party-champagne' },
  { id: 'cat-6', category: 'Marriage Anniversary', searchKeyword: 'anniversary-dinner-luxury' },
  { id: 'cat-7', category: 'Bespoke Gala', searchKeyword: 'concert-live-celebration' },
];

const FEATURES = [
  {
    icon: Sparkles,
    title: 'Personalized Planning',
    description: 'Tailored luxury events designed around your story, vision, and atmosphere.',
  },
  {
    icon: Heart,
    title: 'Signature Experience',
    description: 'Elegant, cinematic styling crafted with premium attention to detail.',
  },
  {
    icon: Zap,
    title: 'Flawless Execution',
    description: 'From planning to production — everything runs seamlessly on the day.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const offset = direction === 'left' ? -380 : 380;

    scrollContainerRef.current.scrollBy({
      left: offset,
      behavior: 'smooth',
    });
  };

  return (
    <FlowerBackground>
      {/* HERO */}
      <HeroSection />

      {/* WHY CHOOSE SECTION (DARK LUXURY) */}
      <motion.section
        className="section-padding bg-transparent relative overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-5xl">✨</div>
          <div className="absolute bottom-10 right-20 text-6xl">✨</div>
        </div>

        <div className="container-responsive max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-6">
              Why Choose <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">Tysum</span> Global Events?
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              We design cinematic luxury experiences that transform moments into timeless memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={i}
                  className="p-10 rounded-2xl bg-white/5 border border-yellow-500/10 shadow-2xl backdrop-blur-md text-center hover:scale-105 transition-transform"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                    <Icon className="w-12 h-12 text-yellow-400" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-black">
                    {feature.title}
                  </h3>

                  <p className="text-gray-500 text-lg">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* FULL WIDTH CAROUSEL */}
      <motion.section
        className="relative w-screen max-w-none overflow-hidden bg-transparent"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="absolute right-0 top-1/2 opacity-10 hidden lg:block">
          <WisteriaFlower size="xl" delay={1} opacity={0.2} />
        </div>

        {/* HEADER */}
        <div className="w-full px-0 mx-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 px-6 md:px-16 pt-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-black block bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                Featured Experiences
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl font-semibold">
                Bespoke luxury celebrations crafted with cinematic detail.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-yellow-500/20 bg-white/5 hover:bg-yellow-500/10 transition flex items-center justify-center text-yellow-400"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-yellow-500/20 bg-white/5 hover:bg-yellow-500/10 transition flex items-center justify-center text-yellow-400"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* CAROUSEL (EDGE TO EDGE FIXED) */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth px-0"
          >
            {CELEBRATION_TYPES.map((event, i) => (
              <div
                key={event.id}
                className="w-[320px] sm:w-[350px] shrink-0 snap-start first:pl-6 last:pr-6"
              >
                <EventCard
                  category={event.category}
                  index={i}
                />
              </div>
            ))}
          </div>

          {/* CTA LINK */}
          <div className="text-center mt-12 pb-16">
            <Link
              href="/events"
              className="inline-block px-10 py-4 rounded-full font-bold text-black bg-gradient-to-r from-yellow-400 to-yellow-600 hover:scale-105 transition shadow-lg"
            >
              View All Categories
            </Link>
          </div>
        </div>
      </motion.section>

      {/* CTA SECTION (BLACK + GOLD) */}
      <motion.section
        className="section-padding relative overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#0a0a0a]/90 to-black/90" />

        {/* gold glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl" />
        </div>

        <div className="relative container-responsive max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Let’s Create Something Extraordinary
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Weddings, corporate events, private celebrations — designed with luxury precision.
          </p>

          <Link
            href="/events/create"
            className="inline-block px-12 py-5 rounded-full font-bold text-black bg-gradient-to-r from-yellow-400 to-yellow-600 hover:scale-110 transition shadow-xl"
          >
            Start Planning Today
          </Link>
        </div>
      </motion.section>
    </FlowerBackground>
  );
}