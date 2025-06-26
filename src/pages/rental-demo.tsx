import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function RentalForm() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_utd11dj', 'template_t767dea', form.current, 'VjcVUiWBattGSOkWG')
      .then((result) => {
          console.log(result.text);
          setSubmitted(true);
          alert('Rental request submitted successfully!');
          form.current.reset(); // Reset the form fields
      }, (error) => {
          console.log(error.text);
          alert('Failed to submit the request, please try again.');
      });
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Request a Rental Quote</h2>
          <form ref={form} className="space-y-6" onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Type
              </label>
              <select
                name="vehicle_type"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select a vehicle</option>
                <option value="truck">Heavy Duty Truck</option>
                <option value="jcb">JCB Excavator</option>
                <option value="dump-truck">Dump Truck</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rental Start Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="rental_start_date"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rental Duration (Days)
                </label>
                <input
                  type="number"
                  name="rental_duration"
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Requirements
              </label>
              <textarea
                rows={4}
                name="additional_requirements"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Submit Rental Request
            </button>
          </form>
          {submitted && (
            <div className="mt-4 text-green-600">
              Thank you! Your rental request has been submitted.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}