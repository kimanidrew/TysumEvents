'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  User,
  Mail,
  Phone,
  MapPin,
  LogOut,
  Heart,
  Edit,
  CheckCircle,
  Clock,
} from 'lucide-react';
import FlowerBackground from '@/app/components/FlowerBackground';
import WisteriaFlower from '@/app/components/WisteriaFlower';

const SAVED_EVENTS = [
  {
    id: '1',
    title: 'Spring Flower Festival 2024',
    date: 'April 15, 2024',
    location: 'Central Park, New York',
  },
  {
    id: '5',
    title: 'Garden Party & Tea',
    date: 'July 8, 2024',
    location: 'Botanical Garden, Seattle',
  },
  {
    id: '8',
    title: 'Music Festival 2024',
    date: 'August 15, 2024',
    location: 'Open Air Park, Nashville',
  },
];

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Sarah Anderson',
    email: 'sarah.anderson@email.com',
    phone: '+1 (555) 123-4567',
    bio: 'Event enthusiast and nature lover. Love creating memorable experiences for people.',
    location: 'New York, USA',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  });

  const [formData, setFormData] = useState(profileData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setProfileData(formData);
    setIsEditing(false);
  };

  const stats = [
    { label: 'Events Created', value: 3, icon: CheckCircle, color: 'text-purple-600' },
    { label: 'Events Attended', value: 12, icon: Clock, color: 'text-pink-600' },
    { label: 'Saved Events', value: SAVED_EVENTS.length, icon: Heart, color: 'text-red-600' },
  ];

  return (
    <FlowerBackground>
      <div className="section-padding">
        <div className="container-responsive max-w-5xl mx-auto">
          {/* Profile Header */}
          <div className="card-elevated p-6 md:p-10 mb-8 animate-fade-in-up">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={profileData.profileImage}
                  alt={profileData.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-purple-200"
                />
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h1 className="text-h1 font-bold text-gray-900 mb-2">{profileData.name}</h1>
                    <p className="text-gray-600 mb-4 max-w-xl">{profileData.bio}</p>
                  </div>
                  <button
                    onClick={() => {
                      if (isEditing) {
                        handleSave();
                      } else {
                        setIsEditing(true);
                      }
                    }}
                    className="btn-primary whitespace-nowrap self-start md:self-auto"
                  >
                    <Edit className="w-5 h-5 inline mr-2" />
                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                  </button>
                </div>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-semibold text-gray-900">{profileData.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-semibold text-gray-900">{profileData.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-semibold text-gray-900">{profileData.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Edit Form */}
          {isEditing && (
            <div className="card-elevated p-6 md:p-10 mb-8 animate-fade-in-up">
              <h2 className="text-h2 font-bold text-gray-900 mb-6">Edit Profile</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="card-elevated p-6 text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Saved Events */}
          <div className="animate-fade-in-up">
            <h2 className="text-h2 font-bold text-gray-900 mb-6">Saved Events</h2>
            {SAVED_EVENTS.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SAVED_EVENTS.map((event) => (
                  <Link key={event.id} href={`/events/${event.id}`}>
                    <div className="card-elevated p-6 h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <div className="flex items-center gap-2 mb-2 text-purple-600">
                        <Heart className="w-5 h-5 fill-current" />
                        <span className="text-sm font-semibold">Saved</span>
                      </div>
                      <h3 className="text-h3 font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">📅 {event.date}</p>
                      <p className="text-gray-600 text-sm">📍 {event.location}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="card-elevated p-12 text-center">
                <Heart className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                <h3 className="text-h3 font-bold text-gray-900 mb-2">No Saved Events</h3>
                <p className="text-gray-600 mb-6">Start saving events to your favorites</p>
                <Link href="/events" className="btn-primary inline-block">
                  Browse Events
                </Link>
              </div>
            )}
          </div>

          {/* Logout Button */}
          <div className="mt-12 text-center animate-fade-in-up">
            <button className="text-red-600 font-semibold hover:text-red-700 transition-colors flex items-center justify-center gap-2 mx-auto">
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>

          {/* Decorative Flowers */}
          <div className="absolute right-10 top-1/3 opacity-15 pointer-events-none hidden lg:block">
            <WisteriaFlower size="lg" delay={1} opacity={0.15} />
          </div>
        </div>
      </div>
    </FlowerBackground>
  );
}
