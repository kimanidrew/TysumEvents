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
    const handleScroll = () => setScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
  ];

  const isDarkPage =
    pathname === '/' ||
    pathname === '/not-found';

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isOpen
          ? isDarkPage
            ? 'bg-black/95'
            : 'bg-white'
          : scrolled
          ? isDarkPage
            ? 'bg-black/60 backdrop-blur-xl border-b border-yellow-500/10'
            : 'bg-white/80 backdrop-blur-xl border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* LOGO */}
          <Link
            href="/"
            className="font-extrabold text-xl md:text-2xl tracking-tight"
          >
            {isDarkPage ? (
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Tysum Events
              </span>
            ) : (
              <span className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-700 bg-clip-text text-transparent">
                Tysum Events
              </span>
            )}
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm tracking-wide font-semibold transition-colors group ${
                    isDarkPage
                      ? 'text-gray-300 hover:text-yellow-400'
                      : 'text-gray-700 hover:text-yellow-600'
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 ${
                      active ? 'w-6 opacity-100' : 'w-0 opacity-0'
                    }`}
                  />

                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] w-0 rounded-full bg-yellow-400/40 blur-md transition-all duration-300 group-hover:w-6" />
                </Link>
              );
            })}

            <Link
              href="/events/create"
              className="btn-primary ml-4 px-6 py-3 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-yellow-500/20"
            >
              Book an Event
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-xl transition ${
              isDarkPage
                ? 'hover:bg-white/10 text-yellow-400'
                : 'hover:bg-black/5 text-yellow-700'
            }`}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            className={`md:hidden mt-2 pb-6 space-y-4 rounded-2xl animate-fade-in-up ${
              isDarkPage
                ? 'bg-black/90 backdrop-blur-xl border border-yellow-500/10'
                : 'bg-white backdrop-blur-xl border border-black/5 shadow-xl'
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-lg font-semibold transition ${
                  isDarkPage
                    ? 'text-gray-300 hover:text-yellow-400'
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/events/create"
              onClick={() => setIsOpen(false)}
              className="btn-primary block mx-4 text-center px-5 py-3 rounded-full text-black font-bold shadow-lg"
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