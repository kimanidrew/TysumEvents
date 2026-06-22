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
    title: 'Signature Floral Experience',
    description: 'Elegant cherry blossom inspired styling across every detail and space.',
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
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      const offset = direction === 'left' ? -340 : 340;

      scrollContainerRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <FlowerBackground>
      {/* HERO */}
      <HeroSection />

      {/* WHY CHOOSE SECTION */}
      <motion.section
        className="section-padding bg-gradient-to-b from-transparent to-pink-50 relative overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="absolute top-10 left-10 text-5xl animate-bounce opacity-20">🎈</div>
        <div className="absolute bottom-10 right-20 text-6xl animate-bounce opacity-20">🎈</div>

        <div className="container-responsive max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Why Choose <span className="text-pink-600">Tysum</span> Global Events?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We don’t just plan events — we design experiences that feel cinematic, emotional, and unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  className="p-10 rounded-3xl bg-white shadow-xl  text-center hover:scale-105 transition-transform"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-rose-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* FULL WIDTH SNAP CAROUSEL */}
      <motion.section
        className="relative w-screen max-w-none overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="absolute right-0 top-1/2 opacity-20 hidden lg:block">
          <WisteriaFlower size="xl" delay={1} opacity={0.2} />
        </div>

        <div className="w-full px-0 mx-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 px-6 md:px-15 pt-16">
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-black mb-4 gradient-text">
                Featured Experiences
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-xl">
                Bespoke luxury celebration styles crafted to inspire and impress.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-end">
              <button
                onClick={() => scroll('left')}
                className="cursor-pointer w-12 h-12 rounded-full border border-pink-200 bg-white hover:bg-pink-50 active:scale-95 transition flex items-center justify-center text-gray-700 shadow-sm"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="cursor-pointer w-12 h-12 rounded-full border border-pink-200 bg-white hover:bg-pink-50 active:scale-95 transition flex items-center justify-center text-gray-700 shadow-sm"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* FULL WIDTH SCROLLER */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth px-4 sm:px-6 lg:px-8 scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-8"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {CELEBRATION_TYPES.map((event, i) => (
              <div key={event.id} className="w-[300px] sm:w-[350px] shrink-0 snap-start">
                <EventCard category={event.category} keyword={event.searchKeyword} index={i} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10 pb-16">
            <Link
              href="/events"
              className="inline-block px-8 py-4 bg-pink-600 text-white rounded-full font-bold text-lg hover:scale-105 transition shadow-lg shadow-pink-600/20"
            >
              View All Categories
            </Link>
          </div>
        </div>
      </motion.section>

      {/* CTA WITH OPACITY BACKGROUND */}
      <motion.section
        className="section-padding relative overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/60 to-pink-600/60" />

        <div className="absolute text-6xl top-10 left-10 opacity-20">🎈</div>
        <div className="absolute text-7xl bottom-10 right-10 opacity-20">🎈</div>

        <div className="relative container-responsive max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Let’s Create Something Extraordinary
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Weddings, corporate events, private celebrations — we bring it all to life.
          </p>
          <Link
            href="/events/create"
            className="inline-block px-10 py-5 bg-white text-pink-600 rounded-full font-bold text-xl hover:scale-110 transition shadow-xl"
          >
            Start Planning Today
          </Link>
        </div>
      </motion.section>
    </FlowerBackground>
  );
}