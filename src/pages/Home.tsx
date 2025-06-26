import React from 'react';
import { ArrowRight, Truck, Building, PenTool as Tool } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url("/images/m.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center text-white px-4">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            background: "rgba(0, 0, 0, 0.6)", // Dark overlay
            padding: "10px 20px",
            borderRadius: "5px",
            display: "inline-block",
          }}
        >
          Your Trusted Partner in Logistics
        </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{fontSize: "1.5rem",
            marginTop: "20px",
            background: "rgba(0, 0, 0, 0.6)",padding: "10px",
            borderRadius: "5px",
            display: "inline-block",}}>
            Reliable Supplies & Heavy Vehicle Rentals for All Your Construction Needs
          </p>
          <br></br>
          <Link
            to="/fleet"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Explore Our Fleet
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive solutions for construction and logistics needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Truck className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Vehicle Rentals</h3>
              <p className="text-gray-600 mb-4">
                Wide range of heavy vehicles available for rent, including trucks,
                JCBs, and excavators.
              </p>
              <Link
                to="/fleet"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Building className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Material Supply</h3>
              <p className="text-gray-600 mb-4">
                Quality construction materials including M.Stand, Dust, and Border
                materials.
              </p>
              <Link
                to="/services"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Tool className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Logistics Solutions</h3>
              <p className="text-gray-600 mb-4">
                End-to-end logistics services for construction projects of all sizes.
              </p>
              <Link
                to="/services"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Start Your Project?
          </h2>
          <Link
            to="/fleet"
            className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            View Our Fleet
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  
  );
}
