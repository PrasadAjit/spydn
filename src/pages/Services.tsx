import React from 'react';
import { Truck, Package, PenTool as Tool, Clock, Shield, ThumbsUp } from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive solutions for all your construction and logistics needs
          </p>
        </div>
      </div>

      {/* Main Services */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Truck className="w-12 h-12 text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Heavy Vehicle Rentals</h2>
              <p className="text-gray-600 mb-6">
                We offer a wide range of heavy vehicles for rent, including:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <ThumbsUp className="w-5 h-5 text-blue-600 mr-3" />
                  Trucks and Dumpers
                </li>
                <li className="flex items-center">
                  <ThumbsUp className="w-5 h-5 text-blue-600 mr-3" />
                  JCB Machines
                </li>
                <li className="flex items-center">
                  <ThumbsUp className="w-5 h-5 text-blue-600 mr-3" />
                  Excavators
                </li>
                <li className="flex items-center">
                  <ThumbsUp className="w-5 h-5 text-blue-600 mr-3" />
                  Cranes and Heavy Equipment
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Package className="w-12 h-12 text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Material Supply</h2>
              <p className="text-gray-600 mb-6">
                Quality construction materials including:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <ThumbsUp className="w-5 h-5 text-blue-600 mr-3" />
                  M.Stand Materials
                </li>
                <li className="flex items-center">
                  <ThumbsUp className="w-5 h-5 text-blue-600 mr-3" />
                  Construction Dust
                </li>
                <li className="flex items-center">
                  <ThumbsUp className="w-5 h-5 text-blue-600 mr-3" />
                  Border Materials
                </li>
                <li className="flex items-center">
                  <ThumbsUp className="w-5 h-5 text-blue-600 mr-3" />
                  Other Construction Supplies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We pride ourselves on delivering exceptional service and value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Tool className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Equipment</h3>
              <p className="text-gray-600">
                Well-maintained fleet and premium quality materials
              </p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
              <p className="text-gray-600">
                Punctual service and reliable delivery schedules
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p className="text-gray-600">
                Strict adherence to safety protocols and standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}