import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import PackageCard from '../components/PackageCard.jsx';

const AllPackages = () => {
    const data = useLoaderData();
    const [packages, setPackages] = useState(data?.data || []);

    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 min-h-screen">
            {/* Hero section */}
            <div className="text-center py-12 bg-[url('/images/tour-banner.jpg')] bg-cover bg-center text-blue-600 shadow-lg">
                <h1 className="text-5xl font-extrabold drop-shadow-lg">Explore Our Tour Packages</h1>
                <p className="mt-4 text-lg font-light">Your adventure starts here. Discover the best destinations curated just for you.</p>
            </div>

            {/* Package Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map(tourPackage => (
                        <div
                            key={tourPackage._id}
                            className="transform hover:-translate-y-1 hover:shadow-xl transition duration-300"
                        >
                            <PackageCard tourPackage={tourPackage} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllPackages;
