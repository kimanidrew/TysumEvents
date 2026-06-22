'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import WisteriaFlower from './WisteriaFlower';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-purple-50 border-t border-purple-200">
      {/* Decorative Flowers */}
      <div className="absolute left-10 top-5 opacity-30 pointer-events-none hidden lg:block">
        <WisteriaFlower size="lg" delay={0} opacity={0.3} />
      </div>

      <div className="container-responsive max-w-7xl mx-auto py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="animate-fade-in-up">
            <h3 className="text-h3 font-bold gradient-text mb-4">Tysum Global Events</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Full-service event management for corporate, social, exhibitions, concerts and private celebrations worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Browse Events
                </Link>
              </li>
              <li>
                <Link href="/events/create" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Create Event
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-bold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-purple-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span className="text-sm">info@tysumglobal.com</span>
                </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">123 Event Street, City, Country</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-200 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-600 text-sm text-center md:text-left">
            © 2026 Tysum Global Events. All rights reserved. | Made with 💜
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com/TysumGlobal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/tysum"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/tysum"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
