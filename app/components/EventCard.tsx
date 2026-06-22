'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Heart,
  Cake,
  Briefcase,
  Sparkles,
  HelpCircle,
} from 'lucide-react';

interface EventCardProps {
  category?: string;
  keyword?: string;
  image?: string;
  index?: number;
}

const CATEGORY_STYLES: Record<
  string,
  {
    iconBg: string;
    badgeBg: string;
    icon: React.ComponentType<any>;
    tagline: string;
  }
> = {
  Wedding: {
    iconBg: 'bg-pink-500 text-white',
    badgeBg: 'bg-pink-500/20 text-pink-100 border-pink-400/30',
    icon: Heart,
    tagline: 'Crafting Your Everlasting Luxury Love Story',
  },
  'Birthday Party': {
    iconBg: 'bg-purple-500 text-white',
    badgeBg: 'bg-purple-500/20 text-purple-100 border-purple-400/30',
    icon: Cake,
    tagline: 'Cinematic, Energetic & Vibrant Celebrations',
  },
  'Corporate Event': {
    iconBg: 'bg-blue-600 text-white',
    badgeBg: 'bg-blue-500/20 text-blue-100 border-blue-400/30',
    icon: Briefcase,
    tagline: 'High-Impact Immersive Production & Design',
  },
  'Bridal Shower': {
    iconBg: 'bg-rose-400 text-white',
    badgeBg: 'bg-rose-500/20 text-rose-100 border-rose-400/30',
    icon: Sparkles,
    tagline: 'Chic, Intimate & Elegant Signature Styling',
  },
  Other: {
    iconBg: 'bg-zinc-700 text-white',
    badgeBg: 'bg-zinc-500/20 text-zinc-200 border-zinc-500/30',
    icon: HelpCircle,
    tagline: 'Custom Bespoke Event Concept Engineering',
  },
};

const CATEGORY_IMAGES: Record<string, string> = {
  Wedding: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
  'Birthday Party': 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg',
  'Corporate Event': 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
  'Bridal Shower': 'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg',
  Other: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg',
};

const EventCard: React.FC<EventCardProps> = ({
  category,
  image,
  index = 0,
}) => {
  let matchedKey = 'Other';

  const cleanCategory = String(category || 'Other').toLowerCase();

  if (cleanCategory.includes('wed') || cleanCategory.includes('marri')) {
    matchedKey = 'Wedding';
  } else if (cleanCategory.includes('birth')) {
    matchedKey = 'Birthday Party';
  } else if (cleanCategory.includes('corp') || cleanCategory.includes('offic')) {
    matchedKey = 'Corporate Event';
  } else if (cleanCategory.includes('brid') || cleanCategory.includes('show')) {
    matchedKey = 'Bridal Shower';
  }

  const currentStyle = CATEGORY_STYLES[matchedKey];
  const Icon = currentStyle.icon;
  const bgImage = image || CATEGORY_IMAGES[matchedKey];

  return (
    <Link
      href={`/events?category=${encodeURIComponent(matchedKey)}`}
      className="block w-full"
    >
      {/* CARD BODY: Removed hover transform movements entirely */}
      <div
        className="group relative min-h-[440px] w-full overflow-hidden rounded-[34px] border border-white/10 bg-slate-950 shadow-xl transition-all duration-500 flex flex-col justify-between p-7"
        style={{ animationDelay: `${index * 0.08}s` }}
      >
        {/* IMAGE */}
        <div className="absolute inset-0 scale-105 transition-transform duration-700 group-hover:scale-110">
          <Image
            src={bgImage}
            alt={matchedKey}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover opacity-80"
            priority={index < 4}
          />
        </div>

        {/* GRADIENT OVERLAY (Baseline Darkness) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/95 z-0" />

        {/* EXTRA HOVER OVERLAY: Darkens cleanly on mouseover state tracking */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-0" />

        {/* SOFT FLOATING LIGHT EFFECT */}
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-pink-500/20 blur-3xl opacity-60 animate-pulse z-0" />

        {/* TOP INTERFACE (Pinned securely above background media arrays) */}
        <div className="relative z-10 flex items-center justify-between w-full">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg transition-transform duration-500 group-hover:rotate-6 ${currentStyle.iconBg}`}
          >
            <Icon className="h-6 w-6" />
          </div>

        </div>

        {/* BOTTOM COMBINED CONTAINER: Groups text and CTA together tightly at the bottom */}
        <div className="relative z-10 w-full mt-auto space-y-6 pt-20">
          
          {/* CATEGORY TITLE + TAGLINE */}
          <div className="space-y-2 text-left">
            <h3 className="pr-20 text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
              {matchedKey}
            </h3>

            <p className="text-sm text-slate-200/90 line-clamp-2 font-light">
              {currentStyle.tagline}
            </p>
          </div>

          {/* BOTTOM CTA LINE */}
          <div className="flex items-center justify-between pt-5 border-t border-white/10 w-full">
            <span className="text-lg font-bold tracking-wide text-gray-400/60 group-hover:text-pink-200 transition">
              Explore 
            </span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-300 group-hover:bg-pink-600 group-hover:border-pink-500 group-hover:scale-110">
              <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default EventCard;
