// TravelBlog.jsx
import React from 'react';
import { NavLink } from 'react-router';

const TravelBlog = () => {
    return (
        <section className="bg-blue-50 py-16 px-4 lg:px-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                Latest Travel Insights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {/* Blog Post 1 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/pmvyrfzawsez9qfwoavc?_a=BACADKGT"
                        alt="Blog Post 1"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold text-lg text-gray-800">10 Tips for Budget Travel</h3>
                        <p className="text-gray-500 text-sm mb-4">Learn how to travel the world without breaking the bank.</p>
                        <NavLink to="/blog/10-tips-for-budget-travel">
                            <button className="btn btn-primary w-full">Read More</button>
                        </NavLink>
                    </div>
                </div>

                {/* Blog Post 2 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src="https://lonelyplanetstatic.imgix.net/marketing/best-in-travel/2025/categories/countries/cameroon/tourists-paddling-boats-river-cameroon.jpg?auto=format&fp-y=0.546875&fit=crop&w=1920&h=1280&q=75"
                        alt="Blog Post 2"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold text-lg text-gray-800">Top 5 Destinations in 2025</h3>
                        <p className="text-gray-500 text-sm mb-4">The most popular travel spots for the upcoming year.</p>
                        <NavLink to="/blog/top-5-destinations-in-2025">
                            <button className="btn btn-primary w-full">Read More</button>
                        </NavLink>
                    </div>
                </div>

                {/* Blog Post 3 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src="https://solotravelerworld.com/wp-content/uploads/2024/01/Solo-travel-is-when-you-leave-behind-everyone-you-know-and-embark-on-a-trip.png"
                        alt="Blog Post 3"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold text-lg text-gray-800">Ultimate Guide to Solo Travel</h3>
                        <p className="text-gray-500 text-sm mb-4">Tips and advice for traveling alone safely and confidently.</p>
                        <NavLink to="/blog/ultimate-guide-to-solo-travel">
                            <button className="btn btn-primary w-full">Read More</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelBlog;
