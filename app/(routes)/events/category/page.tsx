'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import FlowerBackground from '@/app/components/FlowerBackground';
import EventCard from '@/app/components/EventCard';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const CATEGORY_STYLES: Record<
  string,
  {
    title: string;
    description: string;
    heroImage: string;
    vibe: string[];
  }
> = {
  Wedding: {
    title: 'Luxury Wedding Decorations',
    description:
      'Elegant, timeless and romantic wedding experiences designed with golden luxury aesthetics.',
    heroImage:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200',
    vibe: ['Romantic', 'Elegant', 'Luxury', 'Floral'],
  },

  Birthday: {
    title: 'Birthday Celebration Designs',
    description:
      'Vibrant, joyful and cinematic birthday setups filled with color and energy.',
    heroImage:
      'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=1200',
    vibe: ['Fun', 'Colorful', 'Energetic', 'Modern'],
  },

  Corporate: {
    title: 'Corporate Event Styling',
    description:
      'Professional, premium corporate setups for conferences, galas and brand events.',
    heroImage:
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200',
    vibe: ['Professional', 'Clean', 'Premium', 'Minimal'],
  },

  Networking: {
    title: 'Networking Experiences',
    description:
      'Elegant social spaces designed to connect people in a warm premium environment.',
    heroImage:
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200',
    vibe: ['Social', 'Elegant', 'Warm', 'Modern'],
  },

  Charity: {
    title: 'Charity Gala Styling',
    description:
      'High-end luxury charity event designs with emotional storytelling aesthetics.',
    heroImage:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200',
    vibe: ['Luxury', 'Emotional', 'Elegant', 'Formal'],
  },

  Social: {
    title: 'Social Event Designs',
    description:
      'Beautiful social gatherings crafted for unforgettable shared moments.',
    heroImage:
      'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=1200',
    vibe: ['Friendly', 'Bright', 'Relaxed', 'Stylish'],
  },
};

export default function CategoryPage() {
  const params = useParams();
  const category = decodeURIComponent(params.category as string);

  const data = CATEGORY_STYLES[category] || {
    title: category,
    description: 'Premium event decoration style.',
    heroImage:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200',
    vibe: ['Elegant', 'Premium', 'Custom'],
  };

  return (
    <FlowerBackground>
      <div className="relative py-28 px-6">

        {/* HERO IMAGE BACKDROP */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${data.heroImage})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80" />

        <div className="relative max-w-6xl mx-auto text-white">

          {/* BACK BUTTON */}
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-yellow-400 mb-8 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Link>

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            {data.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10">
            {data.description}
          </p>

          {/* VIBE TAGS */}
          <div className="flex flex-wrap gap-3 mb-16">
            {data.vibe.map((v, i) => (
              <span
                key={i}
                className="px-5 py-2 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 text-sm"
              >
                {v}
              </span>
            ))}
          </div>

          {/* DECORATION STYLE CARDS */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Decoration Concepts
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-3xl overflow-hidden border border-yellow-500/20 bg-black/40 backdrop-blur-xl p-6 hover:scale-[1.02] transition"
              >
                <div className="h-40 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-black mb-5" />

                <h3 className="text-xl font-bold mb-2">
                  Concept {item}
                </h3>

                <p className="text-gray-300 text-sm">
                  Premium curated decoration layout for {category.toLowerCase()} events with luxury detailing.
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </FlowerBackground>
  );
}