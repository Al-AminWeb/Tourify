import React, { useState, useEffect } from 'react';
import PackageCard from '../components/PackageCard.jsx';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, rotate: -2 },
    visible: { opacity: 1, y: 0, rotate: 0 },
};

const AllPackages = () => {
    const [search, setSearch] = useState('');
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/search-packages?q=${search}`)
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, [search]);

    return (
        <motion.div
            className="bg-gradient-to-br from-blue-50 via-white to-teal-50 min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Hero Section with Zoomed BG */}
            <div className="relative overflow-hidden h-[320px]">
                <motion.div
                    className="absolute inset-0 bg-[url('/images/tour-banner.jpg')] bg-cover bg-center scale-105"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.div
                    className="relative z-10 text-center py-24 text-blue-700"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-5xl font-extrabold drop-shadow-lg"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                        Explore Our Tour Packages
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        Your adventure starts here. Discover the best destinations curated just for you.
                    </motion.p>
                </motion.div>
            </div>

            {/* Search bar with subtle animation */}
            <motion.div
                className="max-w-3xl mx-auto mt-8 mb-4 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
            >
                <motion.input
                    type="text"
                    placeholder="Search by tour name or destination"
                    className="input input-bordered w-full shadow"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    whileFocus={{ scale: 1.03, boxShadow: "0 0 0 4px rgba(0, 174, 255, 0.2)" }}
                />
            </motion.div>

            {/* Package Grid with stagger animation */}
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((tourPackage, index) => (
                        <motion.div
                            key={tourPackage._id}
                            className="cursor-pointer"
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.03,
                                rotate: 1,
                                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
                            }}
                            transition={{ type: 'spring', stiffness: 120 }}
                        >
                            <PackageCard tourPackage={tourPackage} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default AllPackages;
