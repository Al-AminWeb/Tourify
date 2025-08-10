// TravelBlog.jsx
import React from 'react';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';

const TravelBlog = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const hoverCard = {
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    };

    const hoverButton = {
        scale: 1.05,
        transition: {
            duration: 0.2
        }
    };

    return (
        <section className="bg-blue-50 py-16 px-4 lg:px-16">
            <motion.h2 
                className="text-3xl font-bold text-blue-800 mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Latest Travel Insights
            </motion.h2>
            
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Blog Post 1 */}
                <motion.div 
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    variants={itemVariants}
                    whileHover={hoverCard}
                >
                    <motion.img
                        src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/pmvyrfzawsez9qfwoavc?_a=BACADKGT"
                        alt="Blog Post 1"
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                    <div className="p-4">
                        <h3 className="font-semibold text-lg text-gray-800">10 Tips for Budget Travel</h3>
                        <p className="text-gray-500 text-sm mb-4">Learn how to travel the world without breaking the bank.</p>
                        <NavLink to="/blog/10-tips-for-budget-travel">
                            <motion.button 
                                className="btn btn-primary w-full"
                                whileHover={hoverButton}
                                whileTap={{ scale: 0.98 }}
                            >
                                Read More
                            </motion.button>
                        </NavLink>
                    </div>
                </motion.div>

                {/* Blog Post 2 */}
                <motion.div 
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    variants={itemVariants}
                    whileHover={hoverCard}
                >
                    <motion.img
                        src="https://lonelyplanetstatic.imgix.net/marketing/best-in-travel/2025/categories/countries/cameroon/tourists-paddling-boats-river-cameroon.jpg?auto=format&fp-y=0.546875&fit=crop&w=1920&h=1280&q=75"
                        alt="Blog Post 2"
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                    <div className="p-4">
                        <h3 className="font-semibold text-lg text-gray-800">Top 5 Destinations in 2025</h3>
                        <p className="text-gray-500 text-sm mb-4">The most popular travel spots for the upcoming year.</p>
                        <NavLink to="/blog/top-5-destinations-in-2025">
                            <motion.button 
                                className="btn btn-primary w-full"
                                whileHover={hoverButton}
                                whileTap={{ scale: 0.98 }}
                            >
                                Read More
                            </motion.button>
                        </NavLink>
                    </div>
                </motion.div>

                {/* Blog Post 3 */}
                <motion.div 
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    variants={itemVariants}
                    whileHover={hoverCard}
                >
                    <motion.img
                        src="https://solotravelerworld.com/wp-content/uploads/2024/01/Solo-travel-is-when-you-leave-behind-everyone-you-know-and-embark-on-a-trip.png"
                        alt="Blog Post 3"
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                    <div className="p-4">
                        <h3 className="font-semibold text-lg text-gray-800">Ultimate Guide to Solo Travel</h3>
                        <p className="text-gray-500 text-sm mb-4">Tips and advice for traveling alone safely and confidently.</p>
                        <NavLink to="/blog/ultimate-guide-to-solo-travel">
                            <motion.button 
                                className="btn btn-primary w-full"
                                whileHover={hoverButton}
                                whileTap={{ scale: 0.98 }}
                            >
                                Read More
                            </motion.button>
                        </NavLink>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default TravelBlog;