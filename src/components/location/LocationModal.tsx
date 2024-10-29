import React, { useState } from 'react';
import { X, Search, MapPin } from 'lucide-react';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLocation: (location: string) => void;
}

interface CityGroup {
  state: string;
  cities: string[];
}

const indianCities: CityGroup[] = [
  {
    state: 'Maharashtra',
    cities: ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad']
  },
  {
    state: 'Delhi NCR',
    cities: ['New Delhi', 'Noida', 'Gurgaon', 'Faridabad', 'Ghaziabad']
  },
  {
    state: 'Karnataka',
    cities: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum']
  },
  {
    state: 'Tamil Nadu',
    cities: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Trichy']
  },
  {
    state: 'Telangana',
    cities: ['Hyderabad', 'Warangal', 'Karimnagar', 'Nizamabad']
  },
  {
    state: 'Gujarat',
    cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar']
  },
  {
    state: 'West Bengal',
    cities: ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri']
  },
  {
    state: 'Uttar Pradesh',
    cities: ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Meerut', 'Allahabad']
  },
  {
    state: 'Rajasthan',
    cities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer']
  },
  {
    state: 'Kerala',
    cities: ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur']
  }
];

const popularCities = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Kolkata',
  'Pune',
  'Ahmedabad'
];

export default function LocationModal({ isOpen, onClose, onSelectLocation }: LocationModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'popular' | 'all'>('popular');

  if (!isOpen) return null;

  const allCities = indianCities.flatMap(group => group.cities);
  const filteredCities = searchQuery
    ? allCities.filter(city =>
        city.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activeTab === 'popular'
    ? popularCities
    : allCities;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Select Your City</h2>
          <p className="text-gray-600 mt-2">Choose your service area</p>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for your city"
            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {!searchQuery && (
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('popular')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'popular'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Popular Cities
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Cities
            </button>
          </div>
        )}

        {searchQuery ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredCities.map((city) => (
              <button
                key={city}
                onClick={() => {
                  onSelectLocation(city);
                  onClose();
                }}
                className="flex items-center space-x-2 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-700">{city}</span>
              </button>
            ))}
          </div>
        ) : activeTab === 'popular' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {popularCities.map((city) => (
              <button
                key={city}
                onClick={() => {
                  onSelectLocation(city);
                  onClose();
                }}
                className="flex items-center space-x-2 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-700">{city}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {indianCities.map((group) => (
              <div key={group.state}>
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  {group.state}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {group.cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        onSelectLocation(city);
                        onClose();
                      }}
                      className="flex items-center space-x-2 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <MapPin className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-700">{city}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6">
          <button
            onClick={() => {
              onSelectLocation('Current Location');
              onClose();
            }}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Use Current Location
          </button>
        </div>
      </div>
    </div>
  );
}