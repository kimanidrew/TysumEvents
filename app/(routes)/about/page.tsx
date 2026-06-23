'use client';

import React from 'react';
import FlowerBackground from '@/app/components/FlowerBackground';
import { Sparkles, Award, Globe, Heart } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <FlowerBackground>
      <div className="relative py-32">

        {/* GOLD BACK GLOW */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-400/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="container-responsive max-w-6xl mx-auto relative z-10">

          {/* HERO */}
          <div className="text-center mb-24">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              About Tysum Global Events
            </span>

            {/* 🔥 BIG TITLE */}
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-tight">
              Crafting
              <span className="block bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                Luxury Experiences
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
              We design and produce world-class events that combine elegance,
              storytelling, and immersive design — turning every celebration
              into a timeless memory.
            </p>
          </div>

          {/* MISSION */}
          <div className="grid md:grid-cols-2 gap-14 items-center mb-28">

            <div>
              {/* 🔥 LARGE SECTION TITLE */}
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Our Mission
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                At Tysum Global Events, our mission is to transform ordinary
                gatherings into extraordinary experiences. From luxury weddings
                to corporate galas, we focus on storytelling, detail, and
                emotional impact.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-3">
                  <Award className="text-yellow-600 w-5 h-5" />
                  <span className="text-gray-700 text-lg">
                    Award-winning event design
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="text-yellow-600 w-5 h-5" />
                  <span className="text-gray-700 text-lg">
                    Global luxury execution
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Heart className="text-yellow-600 w-5 h-5" />
                  <span className="text-gray-700 text-lg">
                    Emotion-driven experiences
                  </span>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1519167758993-7d391dd1d67c?w=900&h=700&fit=crop"
                alt="Luxury event"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

          </div>

          {/* VALUES */}
          <div className="text-center mb-28">

            {/* 🔥 LARGE TITLE */}
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-12">
              What We Stand For
            </h2>

            <div className="grid md:grid-cols-3 gap-10">

              <div className="bg-white border border-yellow-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-black text-yellow-700 mb-4">
                  Elegance
                </h3>
                <p className="text-gray-600 text-lg">
                  Every detail is designed with refined luxury and beauty in mind.
                </p>
              </div>

              <div className="bg-white border border-yellow-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-black text-yellow-700 mb-4">
                  Precision
                </h3>
                <p className="text-gray-600 text-lg">
                  Flawless execution with structured planning and control.
                </p>
              </div>

              <div className="bg-white border border-yellow-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-black text-yellow-700 mb-4">
                  Innovation
                </h3>
                <p className="text-gray-600 text-lg">
                  Constantly redefining modern luxury event experiences.
                </p>
              </div>

            </div>
          </div>

          {/* CEO */}
          <div className="text-center">

            {/* 🔥 LARGE TITLE */}
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-12">
              Meet Our CEO
            </h2>

            <div className="relative bg-white border border-yellow-200 rounded-3xl shadow-xl p-12 max-w-3xl mx-auto overflow-hidden">

              <div className="absolute -top-20 -right-20 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full" />

              <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
                  alt="CEO"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>

              <h3 className="text-3xl font-black text-gray-900">
                Daniel Irungu
              </h3>

              <p className="text-yellow-600 font-semibold mt-2 text-lg">
                Founder & CEO
              </p>

              <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                Daniel leads Tysum Global Events with a vision to redefine
                luxury event production across Africa and beyond.
              </p>

              <div className="mt-6 text-gray-500 italic">
                “We don’t just plan events — we design unforgettable emotions.”
              </div>

            </div>
          </div>

        </div>
      </div>
    </FlowerBackground>
  );
}