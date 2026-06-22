'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import WisteriaFlower from './WisteriaFlower';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black border-t border-yellow-500/10">

      {/* DECORATIVE GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-10 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full" />
      </div>

      {/* FLOWER DECOR */}
      <div className="absolute left-10 top-10 opacity-20 hidden lg:block pointer-events-none">
        <WisteriaFlower size="lg" delay={0} opacity={0.2} />
      </div>

      <div className="container-responsive max-w-7xl mx-auto py-14 md:py-20 relative z-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Tysum Global Events
              </span>
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Luxury event production crafted with cinematic storytelling, precision execution, and timeless elegance.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {['/', '/events', '/events/create'].map((href, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="hover:text-yellow-400 transition"
                  >
                    {href === '/' ? 'Home' :
                     href === '/events' ? 'Events' : 'Create Event'}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/help" className="hover:text-yellow-400">Help Center</Link></li>
              <li><Link href="/faq" className="hover:text-yellow-400">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-yellow-400">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>

            <ul className="space-y-4 text-gray-400 text-sm">

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-yellow-400" />
                info@tysumglobal.com
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-yellow-400" />
                +1 (555) 123-4567
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-yellow-400 mt-1" />
                123 Event Street, Global City
              </li>

            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-yellow-500/10 mb-10" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Tysum Global Events — Crafted in luxury
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4">

            {[
              { Icon: FaFacebook, href: '#' },
              { Icon: FaInstagram, href: '#' },
              { Icon: FaXTwitter, href: '#' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="w-10 h-10 rounded-full border border-yellow-500/20 bg-white/5 flex items-center justify-center text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <item.Icon className="w-5 h-5" />
              </a>
            ))}

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;