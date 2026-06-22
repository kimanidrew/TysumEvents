'use client';

import React, { useState } from 'react';

const EVENT_TYPES = ['Wedding', 'Bridal', 'Birthday Party', 'Corporate Event', 'Graduation'];

export default function EventForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send-event', {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error('Submission failed', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Create Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="user_name" placeholder="Your Name" className="w-full p-3 border rounded" required />
        <input name="user_email" type="email" placeholder="Your Email" className="w-full p-3 border rounded" required />
        <input name="contact" placeholder="Phone / Contact" className="w-full p-3 border rounded" required />
        <select name="event_type" className="w-full p-3 border rounded" required>
          <option value="">Select Event Type</option>
          {EVENT_TYPES.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <textarea name="event_details" placeholder="Event details..." className="w-full p-3 border rounded" rows={4} required />
        <button type="submit" disabled={loading} className="w-full bg-pink-500 text-white p-3 rounded hover:bg-pink-600">
          {loading ? 'Sending...' : 'Send Event Request'}
        </button>
        {success && <p className="text-green-600 text-center mt-2">Event sent successfully!</p>}
      </form>
    </div>
  );
}
