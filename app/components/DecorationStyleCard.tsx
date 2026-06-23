'use client';

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface DecorationStyleCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  index?: number;
}

const DecorationStyleCard: React.FC<DecorationStyleCardProps> = ({
  title,
  description,
  image,
  category,
  index = 0,
}) => {
  return (
    <Link
      href={`/events?category=${encodeURIComponent(category)}`}
      className="block group"
    >
      <div
        className="relative overflow-hidden rounded-[28px] border border-yellow-200/40 bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
        style={{ animationDelay: `${index * 0.08}s` }}
      >
        {/* IMAGE */}
        <div className="relative h-[280px] w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* GOLD OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/50 via-transparent to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="p-6 space-y-4">
          {/* TOP BADGE */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold">
              <Sparkles className="w-3 h-3" />
              Luxury Decor Style
            </span>
          </div>

          {/* TITLE */}
          <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-yellow-700 transition">
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>

          {/* CTA */}
          <div className="flex items-center justify-between pt-3 border-t border-yellow-100">
            <span className="text-sm font-semibold text-gray-500 group-hover:text-yellow-700">
              Explore Design
            </span>

            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-500 text-black group-hover:scale-110 transition">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* GOLD GLOW */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-yellow-400/20 blur-3xl rounded-full opacity-60" />
      </div>
    </Link>
  );
};

export default DecorationStyleCard;