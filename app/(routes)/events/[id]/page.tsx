'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Calendar, MapPin, Users, Share2, Heart, Clock, Ticket } from 'lucide-react';
import FlowerBackground from '@/app/components/FlowerBackground';
import WisteriaFlower from '@/app/components/WisteriaFlower';

const EVENT_DETAILS: Record<string, any> = {
  '1': {
    id: '1',
    title: 'Spring Flower Festival 2024',
    date: 'April 15, 2024',
    time: '10:00 AM - 6:00 PM',
    location: 'Central Park, New York',
    attendees: 250,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=400&fit=crop',
    category: 'Festival',
    description: 'Experience the beauty of spring flowers with our annual Spring Flower Festival. Featuring blooming wisteria, cherry blossoms, and much more.',
    fullDescription: `Join us for the most beautiful celebration of spring! This year's festival features over 50 species of flowering plants, including our signature pink wisteria. 

Experience:
- Live garden tours with expert botanists
- Local artisan vendors
- Live music performances
- Food and beverage stalls
- Photography competitions
- Family-friendly activities

This is a perfect event for nature lovers, photographers, and families looking to celebrate the season together.`,
    price: 'Free - $15',
    capacity: 500,
    ticketsRemaining: 250,
  },
  '2': {
    id: '2',
    title: 'Summer Wedding Celebration',
    date: 'June 20, 2024',
    time: '3:00 PM - 11:00 PM',
    location: 'Sunset Beach, California',
    attendees: 150,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=400&fit=crop',
    category: 'Wedding',
    description: 'A romantic beach wedding celebration with elegant wisteria-inspired decor.',
    fullDescription: `Celebrate love on the beautiful Sunset Beach! Our wedding venue features elegant decorations inspired by pink wisteria flowers. 

Included:
- Beachfront ceremony setup
- Elegant reception area
- Catering services
- Professional photography
- Floral arrangements
- Music and entertainment

Perfect for intimate wedding celebrations or vow renewals.`,
    price: '$500 - $2000',
    capacity: 200,
    ticketsRemaining: 50,
  },
};

export default function EventDetailsPage() {
  const params = useParams();
  const eventId = params.id as string;
  const event = EVENT_DETAILS[eventId];
  const [isLiked, setIsLiked] = useState(false);
  const [attendeeCount, setAttendeeCount] = useState(event?.attendees || 0);

  if (!event) {
    return (
      <FlowerBackground>
        <div className="section-padding">
          <div className="container-responsive max-w-7xl mx-auto text-center">
            <h1 className="text-h1 font-bold text-gray-900 mb-4">Event Not Found</h1>
            <p className="text-lg text-gray-700 mb-8">The event you're looking for doesn't exist.</p>
            <Link href="/events" className="btn-primary inline-block">
              Back to Events
            </Link>
          </div>
        </div>
      </FlowerBackground>
    );
  }

  return (
    <FlowerBackground>
      {/* Hero Image */}
      <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Back Button */}
        <Link
          href="/events"
          className="absolute top-4 left-4 md:top-8 md:left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-semibold text-gray-900 hover:bg-white transition-colors z-10"
        >
          ← Back
        </Link>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-semibold text-purple-600 z-10">
          {event.category}
        </div>
      </div>

      <div className="section-padding">
        <div className="container-responsive max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 animate-fade-in-up">
              {/* Title and Meta */}
              <div className="mb-8">
                <h1 className="text-h1 font-bold text-gray-900 mb-4">{event.title}</h1>
                
                {/* Key Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-6 h-6 text-purple-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Date</p>
                      <p className="font-semibold">{event.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-6 h-6 text-purple-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Time</p>
                      <p className="font-semibold">{event.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-6 h-6 text-purple-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-semibold">{event.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <Users className="w-6 h-6 text-purple-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Attendees</p>
                      <p className="font-semibold">{attendeeCount} attending</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-purple-200 my-8" />

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-h2 font-bold text-gray-900 mb-4">About This Event</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                  {event.fullDescription}
                </p>
              </div>

              {/* Decorative Flowers */}
              <div className="absolute left-10 bottom-10 opacity-20 pointer-events-none hidden lg:block">
                <WisteriaFlower size="lg" delay={0} opacity={0.2} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 animate-slide-in-right">
              <div className="card-elevated p-6 md:p-8 sticky top-24">
                {/* Price */}
                <div className="mb-6 pb-6 border-b border-purple-200">
                  <p className="text-sm text-gray-600 mb-2">Price</p>
                  <p className="text-2xl font-bold gradient-text">{event.price}</p>
                </div>

                {/* Tickets */}
                <div className="mb-6 pb-6 border-b border-purple-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Ticket className="w-5 h-5 text-purple-500" />
                    <p className="font-semibold text-gray-900">Tickets Available</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">Remaining: <span className="font-bold text-purple-600">{event.ticketsRemaining}</span> of {event.capacity}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 mb-6">
                  <button
                    onClick={() => setAttendeeCount(attendeeCount + 1)}
                    className="w-full btn-primary"
                  >
                    Get Tickets
                  </button>
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      isLiked
                        ? 'bg-red-50 text-red-600 border-2 border-red-300'
                        : 'bg-white border-2 border-purple-200 text-purple-600 hover:border-purple-400'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    {isLiked ? 'Saved' : 'Save Event'}
                  </button>
                  <button className="w-full py-3 bg-white border-2 border-purple-200 text-purple-600 rounded-full font-semibold hover:border-purple-400 transition-all flex items-center justify-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share Event
                  </button>
                </div>

                {/* Event Info Box */}
                <div className="bg-purple-50 rounded-lg p-4 space-y-3">
                  <h3 className="font-bold text-gray-900">Event Information</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>📍 Venue Capacity: {event.capacity}</p>
                    <p>👥 Current Attendees: {attendeeCount}</p>
                    <p>📧 Check your email for confirmation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FlowerBackground>
  );
}
