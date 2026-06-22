'use client';

import React from 'react';

const PHOTOS = [
  '/photos/photo1.svg',
  '/photos/photo2.svg',
  '/photos/photo3.svg',
  '/photos/photo4.svg',
  '/photos/photo5.svg',
  '/photos/photo6.svg',
];

const PhotoGallery: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-responsive max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-h2 font-bold">Moments & Productions</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">A peek at recent events, staging and design.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {PHOTOS.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img src={src} alt={`Photo ${i + 1}`} className="w-full h-52 object-cover block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
