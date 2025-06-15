import React, {useState} from 'react';
import {useLoaderData} from "react-router";
import PackageCard from "../components/PackageCard.jsx";

const MyBookings = () => {
    const data = useLoaderData()
    const [packages, setPackages] = useState(data?.data || [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {
                packages.map(tourPackage => (
                    <PackageCard key={tourPackage._id} tourPackage={tourPackage} />
                ))
            }
        </div>
    );
};

export default MyBookings;
