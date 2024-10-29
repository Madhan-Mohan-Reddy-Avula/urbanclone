import React from 'react';

export default function Hero() {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Hero background"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Home services, on demand
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Book trusted, reliable service professionals for your home. From cleaning to repairs, 
          we've got all your home needs covered.
        </p>
        <div className="mt-10">
          <div className="bg-white rounded-lg p-4 max-w-2xl">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="text"
                placeholder="Search for services"
                className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}