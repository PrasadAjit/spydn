import React from 'react';
import { Truck, Calendar, DollarSign } from 'lucide-react';

export default function Fleet() {
  const vehicles = [
    {
      name: 'Heavy Duty Truck',
      image: '/images/2.jpg',
      capacity: '25 Tons',
      rate: '₹7,000/day',
      description: 'Perfect for long-distance material transportation',
    },
    {
      name: 'JCB Excavator',
      image: '/images/1.jpg',
      capacity: 'Standard',
      rate: '₹800/hr',
      description: 'Ideal for construction and excavation work',
    },
    {
      name: 'Dump Truck',
      image: '/images/truck.jpg',
      capacity: '20 Tons',
      rate: '₹7,000/day',
      description: 'Suitable for construction material transport',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Fleet</h1>
          <p className="text-xl max-w-3xl">
            Explore our range of well-maintained heavy vehicles available for rent
          </p>
        </div>
      </div>

      {/* Vehicle Gallery */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Truck className="w-5 h-5 mr-2" />
                      <span>Capacity: {vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="w-5 h-5 mr-2" />
                      <span>Rate: {vehicle.rate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Request a Rental Demo Button */}
          <div className="mt-12 text-center">
            <a
              href="/rental-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-block"
            >
              Request a Rental Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
