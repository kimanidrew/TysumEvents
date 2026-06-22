'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BarChart3,
  Calendar,
  Users,
  TrendingUp,
  Edit,
  Trash2,
  Eye,
} from 'lucide-react';
import FlowerBackground from '@/app/components/FlowerBackground';
import WisteriaFlower from '@/app/components/WisteriaFlower';

const MY_EVENTS = [
  {
    id: '101',
    title: 'Summer Networking Event',
    date: 'July 10, 2024',
    attendees: 125,
    capacity: 200,
    status: 'Upcoming',
    views: 1240,
  },
  {
    id: '102',
    title: 'Corporate Team Building',
    date: 'June 5, 2024',
    attendees: 89,
    capacity: 100,
    status: 'Upcoming',
    views: 856,
  },
  {
    id: '103',
    title: 'Community Garden Workshop',
    date: 'April 15, 2024',
    attendees: 234,
    capacity: 250,
    status: 'Completed',
    views: 3421,
  },
];

export default function DashboardPage() {
  const [events, setEvents] = useState(MY_EVENTS);

  const stats = [
    {
      label: 'Total Events',
      value: events.length,
      icon: Calendar,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      label: 'Total Attendees',
      value: events.reduce((sum, e) => sum + e.attendees, 0),
      icon: Users,
      color: 'bg-pink-100 text-pink-600',
    },
    {
      label: 'Upcoming Events',
      value: events.filter((e) => e.status === 'Upcoming').length,
      icon: TrendingUp,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      label: 'Total Views',
      value: events.reduce((sum, e) => sum + e.views, 0),
      icon: Eye,
      color: 'bg-green-100 text-green-600',
    },
  ];

  const deleteEvent = (id: string) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  return (
    <FlowerBackground>
      <div className="section-padding">
        <div className="container-responsive max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-h1 font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-lg text-gray-700">Welcome back! Here's your event overview</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="card-elevated p-6 md:p-8 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-gray-600 text-sm font-semibold mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
              );
            })}
          </div>

          {/* Events List Section */}
          <div className="animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h2 className="text-h2 font-bold text-gray-900">My Events</h2>
                <p className="text-gray-600">Manage and track your events</p>
              </div>
              <Link href="/events/create" className="btn-primary whitespace-nowrap">
                Create New Event
              </Link>
            </div>

            {/* Events Table - Responsive */}
            {events.length > 0 ? (
              <div className="card-elevated overflow-hidden">
                {/* Desktop View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-purple-50 border-b border-purple-200">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">Event Name</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">Date</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">Attendees</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">Status</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">Views</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.map((event, index) => (
                        <tr
                          key={event.id}
                          className={`border-b border-purple-100 hover:bg-purple-50 transition-colors ${
                            index === events.length - 1 ? 'border-b-0' : ''
                          }`}
                        >
                          <td className="px-6 py-4 font-semibold text-gray-900">{event.title}</td>
                          <td className="px-6 py-4 text-gray-600">{event.date}</td>
                          <td className="px-6 py-4 text-gray-600">
                            {event.attendees} / {event.capacity}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                event.status === 'Upcoming'
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'bg-green-100 text-green-700'
                              }`}
                            >
                              {event.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600">{event.views}</td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button className="p-2 hover:bg-purple-100 rounded-lg transition-colors" title="Edit">
                                <Edit className="w-5 h-5 text-purple-600" />
                              </button>
                              <button
                                onClick={() => deleteEvent(event.id)}
                                className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                                title="Delete"
                              >
                                <Trash2 className="w-5 h-5 text-red-600" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile View */}
                <div className="md:hidden">
                  {events.map((event) => (
                    <div key={event.id} className="p-4 border-b border-purple-100 last:border-b-0">
                      <h3 className="font-bold text-gray-900 mb-2">{event.title}</h3>
                      <div className="space-y-1 text-sm text-gray-600 mb-4">
                        <p>📅 {event.date}</p>
                        <p>👥 {event.attendees} / {event.capacity} attendees</p>
                        <p>👁️ {event.views} views</p>
                      </div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                          event.status === 'Upcoming'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {event.status}
                      </span>
                      <div className="flex gap-2">
                        <button className="flex-1 p-2 bg-purple-50 hover:bg-purple-100 rounded-lg text-purple-600 font-semibold text-sm transition-colors flex items-center justify-center gap-2">
                          <Edit className="w-4 h-4" />
                          Edit
                        </button>
                        <button
                          onClick={() => deleteEvent(event.id)}
                          className="flex-1 p-2 bg-red-50 hover:bg-red-100 rounded-lg text-red-600 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="card-elevated p-12 text-center">
                <BarChart3 className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                <h3 className="text-h3 font-bold text-gray-900 mb-2">No Events Yet</h3>
                <p className="text-gray-600 mb-6">Create your first event to get started</p>
                <Link href="/events/create" className="btn-primary inline-block">
                  Create Your First Event
                </Link>
              </div>
            )}
          </div>

          {/* Decorative Flowers */}
          <div className="absolute left-10 top-1/2 opacity-15 pointer-events-none hidden lg:block">
            <WisteriaFlower size="lg" delay={1} opacity={0.15} />
          </div>
          <div className="absolute right-5 bottom-10 opacity-10 pointer-events-none hidden lg:block">
            <WisteriaFlower size="md" delay={3} opacity={0.1} />
          </div>
        </div>
      </div>
    </FlowerBackground>
  );
}
