'use client';

import React, { useState } from 'react';
import EventCard from '@/app/components/EventCard';
import FlowerBackground from '@/app/components/FlowerBackground';
import { Search, Filter } from 'lucide-react';

const ALL_EVENTS = [
  {
    id: '1',
    title: 'Spring Flower Festival 2024',
    date: 'April 15, 2024',
    time: '10:00 AM',
    location: 'Central Park, New York',
    attendees: 250,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=300&fit=crop',
    category: 'Festival',
  },
  {
    id: '2',
    title: 'Summer Wedding Celebration',
    date: 'June 20, 2024',
    time: '3:00 PM',
    location: 'Sunset Beach, California',
    attendees: 150,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=300&fit=crop',
    category: 'Wedding',
  },
  {
    id: '3',
    title: 'Corporate Gala Night',
    date: 'May 10, 2024',
    time: '7:00 PM',
    location: 'Grand Hotel, Chicago',
    attendees: 300,
    image: 'https://images.unsplash.com/photo-1519167758993-7d391dd1d67c?w=500&h=300&fit=crop',
    category: 'Corporate',
  },
  {
    id: '4',
    title: 'Networking Breakfast',
    date: 'March 25, 2024',
    time: '8:00 AM',
    location: 'Downtown Coffee House, Boston',
    attendees: 75,
    image: 'https://images.unsplash.com/photo-1507842266343-583f20270319?w=500&h=300&fit=crop',
    category: 'Networking',
  },
  {
    id: '5',
    title: 'Garden Party & Tea',
    date: 'July 8, 2024',
    time: '2:00 PM',
    location: 'Botanical Garden, Seattle',
    attendees: 120,
    image: 'https://images.unsplash.com/photo-1507848695917-a9fb3e51eef4?w=500&h=300&fit=crop',
    category: 'Social',
  },
  {
    id: '6',
    title: 'Product Launch Event',
    date: 'May 30, 2024',
    time: '6:00 PM',
    location: 'Tech Hub, San Francisco',
    attendees: 500,
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=500&h=300&fit=crop',
    category: 'Corporate',
  },
  {
    id: '7',
    title: 'Annual Charity Gala',
    date: 'April 22, 2024',
    time: '7:30 PM',
    location: 'Hilton Downtown, Los Angeles',
    attendees: 400,
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=500&h=300&fit=crop',
    category: 'Charity',
  },
  {
    id: '8',
    title: 'Music Festival 2024',
    date: 'August 15, 2024',
    time: '12:00 PM',
    location: 'Open Air Park, Nashville',
    attendees: 1000,
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=300&fit=crop',
    category: 'Festival',
  },
];

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Festival', 'Wedding', 'Corporate', 'Networking', 'Social', 'Charity'];

  const filteredEvents = ALL_EVENTS.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <FlowerBackground>
      <div className="section-padding">
        <div className="container-responsive max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h1 className="text-h1 font-bold text-gray-900 mb-4">Explore Events</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover and join amazing events happening around the world
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12 animate-slide-in-left">
            {/* Search Bar */}
            <div className="mb-6 relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-purple-500" />
              <input
                type="text"
                placeholder="Search events by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 bg-white border-2 border-purple-200 rounded-full focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              <Filter className="w-5 h-5 text-gray-600 self-center hidden sm:block" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'bg-white border-2 border-purple-200 text-purple-600 hover:border-purple-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8 animate-fade-in-up">
            <p className="text-gray-600 font-semibold">
              Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredEvents.map((event, index) => (
                <EventCard key={event.id} {...event} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 animate-fade-in-up">
              <p className="text-xl text-gray-500 mb-4">No events found</p>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </FlowerBackground>
  );
}
