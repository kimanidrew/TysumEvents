'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, AlertCircle } from 'lucide-react';
import FlowerBackground from '@/app/components/FlowerBackground';
import WisteriaFlower from '@/app/components/WisteriaFlower';

export default function CreateEventPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',        // ✅ FIXED
    time: '',        // ✅ FIXED
    category: 'Festival',
    capacity: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const categories = [
    'Festival',
    'Wedding',
    'Corporate',
    'Networking',
    'Social',
    'Charity',
    'Conference',
    'Workshop',
    'Party',
    'Concert',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

    if (!formData.title.trim()) newErrors.title = 'Event title is required';
    if (!formData.description.trim()) newErrors.description = 'Event description is required';
    if (!formData.date) newErrors.date = 'Event date is required';
    if (!formData.time) newErrors.time = 'Event time is required';
    if (!formData.capacity) newErrors.capacity = 'Event capacity is required';

    if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required';
    if (!formData.contactEmail.trim()) newErrors.contactEmail = 'Contact email is required';
    if (!formData.contactPhone.trim()) newErrors.contactPhone = 'Contact phone is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('button clicked');

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
        console.error('API ERROR:', result);
        return;
      }

      setSubmitted(true);

      setFormData({
        title: '',
        description: '',
        date: '',   // ✅ FIXED
        time: '',   // ✅ FIXED
        category: 'Festival',
        capacity: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
      });

    } catch (error) {
      console.error('NETWORK ERROR:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FlowerBackground>
      <div className="section-padding">
        <div className="container-responsive max-w-4xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h1 className="text-h1 font-bold text-gray-900 mb-4">
              Create Your Event
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Fill in the details below to create and publish your event
            </p>
          </div>

          {/* SUCCESS */}
          {submitted && (
            <div className="mb-8 bg-green-50 border-2 border-green-200 rounded-2xl p-6 flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="font-bold text-green-900">
                  Event Created Successfully!
                </h3>
                <p className="text-green-800">
                  Your event has been sent successfully.
                </p>
              </div>
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit} className="card-elevated p-6 md:p-10 animate-fade-in-up">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

              {/* CONTACT NAME */}
              <input
                type="text"
                name="contactName"
                placeholder="Contact Name"
                value={formData.contactName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              />

              {/* CONTACT EMAIL */}
              <input
                type="email"
                name="contactEmail"
                placeholder="Contact Email"
                value={formData.contactEmail}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              />

              {/* CONTACT PHONE */}
              <input
                type="tel"
                name="contactPhone"
                placeholder="Contact Phone"
                value={formData.contactPhone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              />

              {/* TITLE */}
              <input
                type="text"
                name="title"
                placeholder="Event Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              />

              {/* DATE */}
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              />

              {/* TIME */}
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              />

              {/* CATEGORY */}
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              {/* CAPACITY */}
              <input
                type="number"
                name="capacity"
                placeholder="Guest Capacity"
                value={formData.capacity}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              />

              {/* DESCRIPTION */}
              <textarea
                name="description"
                placeholder="Event Description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors md:col-span-2"
              />

            </div>

            {/* BUTTON */}
            <div className="mt-8 flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 btn-primary font-semibold"
              >
                {loading ? 'Creating Event...' : 'Create Event'}
              </button>

              <Link href="/" className="flex-1 btn-secondary text-center font-semibold">
                Cancel
              </Link>
            </div>

          </form>

          {/* DECOR */}
          <div className="absolute right-10 bottom-20 opacity-15 pointer-events-none hidden lg:block">
            <WisteriaFlower size="lg" delay={1} opacity={0.15} />
          </div>

        </div>
      </div>
    </FlowerBackground>
  );
}