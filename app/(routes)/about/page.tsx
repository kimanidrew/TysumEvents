'use client';

import React from 'react';
import FlowerBackground from '@/app/components/FlowerBackground';
import { Sparkles, Award, Globe, Heart } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <FlowerBackground>
      <div className="relative py-32">

        {/* GOLD GLOW BACKDROP */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-400/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="container-responsive max-w-6xl mx-auto relative z-10">

          {/* HERO */}
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              About Tysum Global Events
            </span>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
              Crafting
              <span className="block bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                Luxury Experiences
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              We design and produce world-class events that combine elegance,
              storytelling, and immersive design — turning every celebration
              into a timeless memory.
            </p>
          </div>

          {/* MISSION SECTION */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Tysum Global Events, our mission is to transform ordinary
                gatherings into extraordinary experiences. From luxury weddings
                to corporate galas, we focus on storytelling, detail, and
                emotional impact.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="text-yellow-600 w-5 h-5" />
                  <span className="text-gray-700">Award-winning event design</span>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="text-yellow-600 w-5 h-5" />
                  <span className="text-gray-700">Global luxury event execution</span>
                </div>

                <div className="flex items-center gap-3">
                  <Heart className="text-yellow-600 w-5 h-5" />
                  <span className="text-gray-700">Emotion-driven experiences</span>
                </div>
              </div>
            </div>

            {/* IMAGE SIDE */}
            <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1519167758993-7d391dd1d67c?w=900&h=700&fit=crop"
                alt="Luxury event"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

          </div>

          {/* VALUES SECTION */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-10 text-gray-900">
              What We Stand For
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white border border-yellow-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <h3 className="font-bold text-xl mb-3 text-yellow-700">
                  Elegance
                </h3>
                <p className="text-gray-600">
                  Every detail is carefully designed to reflect sophistication and beauty.
                </p>
              </div>

              <div className="bg-white border border-yellow-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <h3 className="font-bold text-xl mb-3 text-yellow-700">
                  Precision
                </h3>
                <p className="text-gray-600">
                  We execute every event flawlessly with structured planning and control.
                </p>
              </div>

              <div className="bg-white border border-yellow-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <h3 className="font-bold text-xl mb-3 text-yellow-700">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We continuously redefine modern event experiences with creativity.
                </p>
              </div>

            </div>
          </div>

          {/* CEO SECTION */}
          <div className="mt-28 text-center">

            <h2 className="text-4xl font-bold text-gray-900 mb-10">
              Meet Our CEO
            </h2>

            <div className="bg-white border border-yellow-200 rounded-3xl shadow-xl p-10 max-w-3xl mx-auto relative overflow-hidden">

              {/* GOLD GLOW */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full" />

              {/* CEO IMAGE */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
                  alt="CEO"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                Daniel Irungu
              </h3>

              <p className="text-yellow-600 font-semibold mt-1">
                Founder & Chief Executive Officer
              </p>

              <p className="text-gray-600 mt-5 leading-relaxed">
                Daniel leads Tysum Global Events with a vision to redefine
                luxury event production across Africa and beyond. With a passion
                for design, storytelling, and precision execution, he has built
                a brand that transforms celebrations into cinematic experiences.
              </p>

              <div className="mt-6 text-sm text-gray-500">
                “We don’t just plan events — we design unforgettable emotions.”
              </div>

            </div>
          </div>

        </div>
      </div>
    </FlowerBackground>
  );
}