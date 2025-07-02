// Testimonial.jsx
import React from 'react';

const Testimonial = () => {
    return (
        <section className="bg-blue-50 py-16 px-4 lg:px-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                What Our Travelers Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-gray-600 text-lg mb-4">
                        "This trip was unforgettable! The best experience I've ever had. Highly recommend it!"
                    </p>
                    <div className="flex items-center">
                        <img
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                            alt="Traveler"
                            className="w-12 h-12 rounded-full mr-3"
                        />
                        <div>
                            <p className="font-semibold text-lg">John Doe</p>
                            <p className="text-sm text-gray-500">New York, USA</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-gray-600 text-lg mb-4">
                        "The best vacation I’ve ever had! Fantastic destination and excellent customer service."
                    </p>
                    <div className="flex items-center">
                        <img
                            src="https://randomuser.me/api/portraits/women/1.jpg"
                            alt="Traveler"
                            className="w-12 h-12 rounded-full mr-3"
                        />
                        <div>
                            <p className="font-semibold text-lg">Jane Smith</p>
                            <p className="text-sm text-gray-500">London, UK</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-gray-600 text-lg mb-4">
                        "A trip of a lifetime! Beautiful scenery, fantastic guides, and memorable moments."
                    </p>
                    <div className="flex items-center">
                        <img
                            src="https://randomuser.me/api/portraits/men/2.jpg"
                            alt="Traveler"
                            className="w-12 h-12 rounded-full mr-3"
                        />
                        <div>
                            <p className="font-semibold text-lg">Mike Johnson</p>
                            <p className="text-sm text-gray-500">Sydney, Australia</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
