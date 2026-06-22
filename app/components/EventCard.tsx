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
    iconBg: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
    badgeBg: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
    icon: Heart,
    tagline: 'Crafting Everlasting Luxury Love Stories',
  },
  'Birthday Party': {
    iconBg: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
    badgeBg: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
    icon: Cake,
    tagline: 'Cinematic Celebrations with Golden Energy',
  },
  'Corporate Event': {
    iconBg: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
    badgeBg: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
    icon: Briefcase,
    tagline: 'High-Impact Corporate Luxury Experiences',
  },
  'Bridal Shower': {
    iconBg: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
    badgeBg: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
    icon: Sparkles,
    tagline: 'Elegant Intimate Golden Moments',
  },
  Other: {
    iconBg: 'bg-white/5 text-gray-300 border border-white/10',
    badgeBg: 'bg-white/5 text-gray-300 border border-white/10',
    icon: HelpCircle,
    tagline: 'Custom Bespoke Luxury Experiences',
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
      <div
        className="group relative min-h-[460px] w-full overflow-hidden rounded-[30px] border border-yellow-500/10 bg-black transition-all duration-700 flex flex-col justify-between p-7"
        style={{ animationDelay: `${index * 0.08}s` }}
      >

        {/* IMAGE */}
        <div className="absolute inset-0 scale-105 transition-transform duration-700 group-hover:scale-110">
          <Image
            src={bgImage}
            alt={matchedKey}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover opacity-70"
            priority={index < 4}
          />
        </div>

        {/* GOLD DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/95 z-0" />

        {/* GOLD SHIMMER LAYER */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10" />

        {/* SOFT GOLD GLOW */}
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl opacity-50 animate-pulse" />

        {/* TOP ICON */}
        <div className="relative z-10 flex items-center justify-between w-full">
          <div className={`flex h-20 w-20 items-center justify-center rounded-2xl ${currentStyle.iconBg}`}>
            <Icon className="h-10 w-10" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 w-full mt-auto space-y-6 pt-20">

          <div className="space-y-2 pr-20">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {matchedKey}
            </h3>

            <p className="text-sm text-gray-300/90 font-semibold">
              {currentStyle.tagline}
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between pt-5 border-t border-white/10">
            <span className="text-sm font-semibold tracking-widest text-yellow-400/70">
              Explore
            </span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-yellow-500/20 transition-all duration-300 group-hover:bg-yellow-500 group-hover:scale-110">
              <ArrowRight className="h-4 w-4 text-yellow-400 group-hover:text-black transition" />
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default EventCard;