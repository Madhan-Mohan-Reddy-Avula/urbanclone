import React, { useState } from 'react';
import { Search, MapPin, Menu, X } from 'lucide-react';
import SignInModal from './auth/SignInModal';
import SignUpModal from './auth/SignUpModal';
import LocationModal from './location/LocationModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('New York');

  const handleSignIn = () => {
    setShowSignIn(true);
    setIsOpen(false);
  };

  const handleSignUp = () => {
    setShowSignUp(true);
    setIsOpen(false);
  };

  const handleLocationClick = () => {
    setShowLocation(true);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">UrbanPro</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={handleLocationClick}
                className="flex items-center space-x-2 hover:text-indigo-600"
              >
                <MapPin className="h-5 w-5 text-gray-500" />
                <span>{currentLocation}</span>
              </button>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for services"
                  className="pl-10 pr-4 py-2 border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button 
                onClick={handleSignIn}
                className="text-gray-700 hover:text-indigo-600"
              >
                Login
              </button>
              <button 
                onClick={handleSignUp}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
              >
                Sign Up
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={handleLocationClick}
                className="flex items-center space-x-2 p-3 w-full hover:bg-gray-50"
              >
                <MapPin className="h-5 w-5 text-gray-500" />
                <span>{currentLocation}</span>
              </button>
              <div className="relative p-3">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for services"
                  className="pl-10 pr-4 py-2 border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex flex-col space-y-2 p-3">
                <button 
                  onClick={handleSignIn}
                  className="text-gray-700 hover:text-indigo-600"
                >
                  Login
                </button>
                <button 
                  onClick={handleSignUp}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <SignInModal 
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
        onSwitchToSignUp={() => {
          setShowSignIn(false);
          setShowSignUp(true);
        }}
      />

      <SignUpModal
        isOpen={showSignUp}
        onClose={() => setShowSignUp(false)}
        onSwitchToSignIn={() => {
          setShowSignUp(false);
          setShowSignIn(true);
        }}
      />

      <LocationModal
        isOpen={showLocation}
        onClose={() => setShowLocation(false)}
        onSelectLocation={setCurrentLocation}
      />
    </>
  );
}