'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import FlowerBackground from '@/app/components/FlowerBackground';
import WisteriaFlower from '@/app/components/WisteriaFlower';

export default function CreateEventPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    category: 'Wedding',
    capacity: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const categories = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Bridal Shower',
    'Office Celebration',
    'Marriage Anniversary',
    'Bespoke Gala',
    'Concert',
    'Conference',
    'Private Event',
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.contactName.trim())
      newErrors.contactName = 'Contact name is required';

    if (!formData.contactEmail.trim())
      newErrors.contactEmail = 'Contact email is required';

    if (!formData.contactPhone.trim())
      newErrors.contactPhone = 'Phone number is required';

    if (!formData.title.trim())
      newErrors.title = 'Event title is required';

    if (!formData.date)
      newErrors.date = 'Event date is required';

    if (!formData.time)
      newErrors.time = 'Event time is required';

    if (!formData.capacity)
      newErrors.capacity = 'Guest capacity is required';

    if (!formData.description.trim())
      newErrors.description = 'Description is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setSubmitted(false);

    try {
      const response = await fetch('/api/send-event', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (!response.ok) {
        console.error(result);
        return;
      }

      setSubmitted(true);

      setFormData({
        title: '',
        description: '',
        date: '',
        time: '',
        category: 'Wedding',
        capacity: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const inputStyles =
    'w-full px-5 py-4 bg-white border border-yellow-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-800 transition-all';

  return (
    <FlowerBackground>
      <div className="relative section-padding py-32">

        {/* GOLD GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-400/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="container-responsive max-w-5xl mx-auto relative z-10">

          {/* HEADER */}
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-5 py-2 rounded-full bg-yellow-100 text-yellow-800 font-semibold text-sm mb-6">
              Luxury Event Planning
            </span>

            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              Start Planning Your
              <span className="block bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                Extraordinary Event
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Every unforgettable celebration begins with a vision.
              Share your event details and let Tysum Global Events
              transform them into an exceptional experience.
            </p>
          </div>

          {/* SUCCESS MESSAGE */}
          {submitted && (
            <div className="mb-8 rounded-2xl border border-green-200 bg-green-50 p-6 flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="font-bold text-green-800">
                  Event Request Submitted
                </h3>
                <p className="text-green-700">
                  Thank you. Our team will contact you shortly.
                </p>
              </div>
            </div>
          )}

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur-md border border-yellow-100 rounded-[32px] shadow-2xl p-8 md:p-12 animate-fade-in-up"
          >
            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="contactName"
                placeholder="Full Name"
                value={formData.contactName}
                onChange={handleChange}
                className={inputStyles}
              />

              <input
                type="email"
                name="contactEmail"
                placeholder="Email Address"
                value={formData.contactEmail}
                onChange={handleChange}
                className={inputStyles}
              />

              <input
                type="tel"
                name="contactPhone"
                placeholder="Phone Number"
                value={formData.contactPhone}
                onChange={handleChange}
                className={inputStyles}
              />

              <input
                type="text"
                name="title"
                placeholder="Event Title"
                value={formData.title}
                onChange={handleChange}
                className={inputStyles}
              />

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={inputStyles}
              />

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={inputStyles}
              />

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={inputStyles}
              >
                {categories.map((category) => (
                  <option key={category}>
                    {category}
                  </option>
                ))}
              </select>

              <input
                type="number"
                name="capacity"
                placeholder="Expected Guests"
                value={formData.capacity}
                onChange={handleChange}
                className={inputStyles}
              />

              <textarea
                name="description"
                rows={6}
                placeholder="Tell us about your event..."
                value={formData.description}
                onChange={handleChange}
                className={`${inputStyles} md:col-span-2 resize-none`}
              />

            </div>

            {/* ACTIONS */}
            <div className="flex flex-col md:flex-row gap-4 mt-10">

              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-4 rounded-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 text-black font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-yellow-500/20"
              >
                {loading
                  ? 'Submitting Request...'
                  : 'Submit Event Request'}
              </button>

              <Link
                href="/"
                className="flex-1 py-4 rounded-full border border-yellow-300 text-center font-semibold text-gray-700 hover:bg-yellow-50 transition"
              >
                Cancel
              </Link>

            </div>
          </form>

          {/* DECORATION */}
          <div className="absolute right-0 bottom-0 opacity-10 hidden lg:block pointer-events-none">
            <WisteriaFlower
              size="lg"
              delay={1}
              opacity={0.1}
            />
          </div>

        </div>
      </div>
    </FlowerBackground>
  );
}