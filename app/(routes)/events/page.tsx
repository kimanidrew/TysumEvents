'use client';

import React, { useState } from 'react';
import FlowerBackground from '@/app/components/FlowerBackground';
import DecorationStyleCard from '@/app/components/DecorationStyleCard';
import { Search, Filter } from 'lucide-react';

const DECOR_STYLES = [
  {
    id: '1',
    title: 'Royal Wedding Elegance',
    description:
      'Gold-accent floral arches, luxury aisle styling, and romantic candle-lit ambience.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    category: 'Wedding',
  },
  {
    id: '2',
    title: 'Corporate Prestige Setup',
    description:
      'Minimalist luxury branding, stage lighting, and executive networking ambiance.',
    image:
      'https://images.unsplash.com/photo-1519167758993-7d391dd1d67c?w=800&h=600&fit=crop',
    category: 'Corporate',
  },
  {
    id: '3',
    title: 'Golden Birthday Experience',
    description:
      'Balloon luxury walls, neon highlights, and cinematic celebration styling.',
    image:
      'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&h=600&fit=crop',
    category: 'Birthday',
  },
  {
    id: '4',
    title: 'Executive Networking Luxe',
    description:
      'High-end table layouts, ambient lighting, and premium social flow design.',
    image:
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop',
    category: 'Networking',
  },
  {
    id: '5',
    title: 'Charity Gala Gold Night',
    description:
      'Crystal chandeliers, red carpet styling, and premium donation stage setup.',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
    category: 'Charity',
  },
  {
    id: '6',
    title: 'Private Luxury Celebration',
    description:
      'Exclusive villa setups with soft floral tones and bespoke lighting design.',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
    category: 'Private',
  },
];

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Wedding',
    'Corporate',
    'Networking',
    'Birthday',
    'Charity',
    'Private',
  ];

  const filtered = DECOR_STYLES.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchCategory =
      selectedCategory === 'All' || item.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  return (
    <FlowerBackground>
      <div className="relative py-32">

        {/* GOLD GLOW BACKDROP */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-400/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="container-responsive max-w-7xl mx-auto relative z-10">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900">
              Luxury Decoration
              <span className="block bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                Styles Collection
              </span>
            </h1>

            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
              Explore our signature event decoration concepts crafted for
              unforgettable luxury experiences.
            </p>
          </div>

          {/* SEARCH */}
          <div className="mb-10 max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow-600" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search decoration styles..."
                className="w-full pl-14 pr-5 py-4 rounded-full text-black border border-yellow-200 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            {/* FILTERS */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Filter className="w-5 h-5 text-yellow-600 self-center" />

              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                    selectedCategory === c
                      ? 'bg-yellow-500 text-black'
                      : 'bg-white border border-yellow-200 text-gray-600'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* GRID */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filtered.map((item, i) => (
                <DecorationStyleCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  category={item.category}
                  index={i}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500">No decoration styles found.</p>
            </div>
          )}

        </div>
      </div>
    </FlowerBackground>
  );
}