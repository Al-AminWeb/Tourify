// PopularDestinations.jsx
import React from 'react';

const PopularDestinations = () => {
    return (
        <section className="bg-blue-50 py-16 px-4 lg:px-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                Most Popular Destinations
            </h2>
            <p className="text-gray-500 text-sm md:text-base text-center mb-10">
                Expand your travel horizons with new facets! Explore the world by choosing your ideal travel destinations in Asia, Europe, America, Australia, and more.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Destination 1 */}
                <div className="relative">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Kuala_Lumpur_Skyline_at_dusk_1.jpg"
                        alt="Kuala Lumpur"
                        className="w-full h-[400px] object-cover rounded-xl"
                    />
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-4 rounded-bl-xl rounded-tr-xl">
                        <h3 className="font-semibold text-lg">Kuala Lumpur</h3>
                        <p className="text-sm">2,464 Hotels Available</p>
                    </div>
                </div>

                {/* Destination 2 */}
                <div className="relative">
                    <img
                        src="https://www.barcelo.com/guia-turismo/wp-content/uploads/2023/10/maafushi.jpg"
                        alt="Maafushi"
                        className="w-full h-[400px] object-cover rounded-xl"
                    />
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-4 rounded-bl-xl rounded-tr-xl">
                        <h3 className="font-semibold text-lg">Maafushi</h3>
                        <p className="text-sm">36 Hotels Available</p>
                    </div>
                </div>

                {/* Destination 3 */}
                <div className="relative">
                    <img
                        src="https://media.assettype.com/outlooktraveller%2F2024-01%2Fa369e7e3-f7c8-4210-ae58-1800ea5cb2ea%2FKolkata1.jpg?w=1024&auto=format%2Ccompress&fit=max"
                        alt="Kolkata"
                        className="w-full h-[400px] object-cover rounded-xl"
                    />
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-4 rounded-bl-xl rounded-tr-xl">
                        <h3 className="font-semibold text-lg">Kolkata</h3>
                        <p className="text-sm">1,319 Hotels Available</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularDestinations;
