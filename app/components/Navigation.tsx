'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isOpen
          ? 'bg-white'
          : scrolled
          ? 'bg-white/60 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* LOGO */}
          <Link
            href="/"
            className="font-extrabold text-xl md:text-2xl tracking-tight gradient-text"
          >
            Tysum Events
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative font-semibold text-gray-700 hover:text-pink-600 transition-colors"
                >
                  {item.label}

                  {/* Active pill indicator */}
                  <span
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[6px] rounded-full bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-300 ${
                      active ? 'w-6 opacity-100' : 'w-0 opacity-0'
                    }`}
                  />

                  {/* Hover glow line */}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[6px] w-0 rounded-full bg-pink-300/40 blur-md transition-all duration-300 group-hover:w-6" />
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              href="/events/create"
              className="ml-4 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-pink-500/20"
            >
              Book an event
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-pink-50 transition text-gray-700"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-6 space-y-4 animate-fade-in-up bg-white/90 backdrop-blur-xl rounded-2xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-lg font-semibold text-gray-700 hover:text-pink-600 transition"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/events/create"
              onClick={() => setIsOpen(false)}
              className="block mx-4 text-center px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold shadow-md"
            >
              Book an Event
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;