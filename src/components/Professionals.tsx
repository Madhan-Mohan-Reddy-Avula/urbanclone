import React from 'react';
import { Star } from 'lucide-react';

const professionals = [
  {
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    profession: 'House Cleaning Expert',
    rating: 4.9,
    reviews: 284,
    price: '$25/hr'
  },
  {
    name: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    profession: 'Electrician',
    rating: 4.8,
    reviews: 156,
    price: '$35/hr'
  },
  {
    name: 'Emily Rodriguez',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    profession: 'Beauty Specialist',
    rating: 5.0,
    reviews: 198,
    price: '$40/hr'
  },
  {
    name: 'David Kim',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    profession: 'Plumber',
    rating: 4.7,
    reviews: 167,
    price: '$30/hr'
  }
];

export default function Professionals() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Top Rated Professionals
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Book services from our verified experts
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {professionals.map((professional) => (
            <div
              key={professional.name}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  className="w-full h-full object-cover"
                  src={professional.image}
                  alt={professional.name}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {professional.name}
                </h3>
                <p className="text-sm text-gray-600">{professional.profession}</p>
                <div className="mt-2 flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium text-gray-900">
                    {professional.rating}
                  </span>
                  <span className="ml-1 text-sm text-gray-500">
                    ({professional.reviews} reviews)
                  </span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-indigo-600">
                    {professional.price}
                  </span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}