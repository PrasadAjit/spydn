import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl">
            Dhaneshwari Enterprises has been a leading provider of construction
            materials and heavy vehicle rentals, serving the industry with
            excellence and reliability.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded with a vision to provide comprehensive solutions for the
                construction industry, Dhaneshwari Enterprises has grown to become
                a trusted name in material supply and heavy vehicle rentals.
              </p>
              <p className="text-gray-600 mb-6">
                Our commitment to quality, reliability, and customer satisfaction
                has helped us build long-lasting relationships with our clients
                across the region.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">10+</h3>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">500+</h3>
                  <p className="text-gray-600">Satisfied Clients</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/1.jpg"
                alt="Construction site"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Dhaneshwari Enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Commitment to delivering the highest quality in everything we do
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Putting our customers' needs at the heart of our business
              </p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Reliability</h3>
              <p className="text-gray-600">
                Consistent and dependable service you can count on
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Safety</h3>
              <p className="text-gray-600">
                Maintaining the highest safety standards in all operations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}