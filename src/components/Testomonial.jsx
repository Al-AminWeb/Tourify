import React from 'react';
import { motion } from 'framer-motion';

const Testimonial = () => {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const hoverCard = {
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)",
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    };

    const hoverAvatar = {
        scale: 1.1,
        transition: {
            duration: 0.3
        }
    };

    return (
        <section className="bg-blue-50 py-16 px-4 lg:px-16">
            <motion.h2 
                className="text-3xl font-bold text-blue-800 mb-12 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 0.6,
                    ease: "easeOut"
                }}
            >
                What Our Travelers Say
                <motion.div 
                    className="w-24 h-1 bg-blue-400 mx-auto mt-4"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                />
            </motion.h2>
            
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Testimonial 1 */}
                <motion.div 
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    variants={item}
                    whileHover={hoverCard}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <svg 
                            className="w-10 h-10 text-blue-400 mb-4" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            "This trip was unforgettable! The best experience I've ever had. Highly recommend it!"
                        </p>
                        <div className="flex items-center">
                            <motion.img
                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                alt="Traveler"
                                className="w-12 h-12 rounded-full mr-3 border-2 border-blue-200"
                                whileHover={hoverAvatar}
                            />
                            <div>
                                <p className="font-semibold text-lg">John Doe</p>
                                <p className="text-sm text-gray-500">New York, USA</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Testimonial 2 */}
                <motion.div 
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    variants={item}
                    whileHover={hoverCard}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <svg 
                            className="w-10 h-10 text-blue-400 mb-4" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            "The best vacation I've ever had! Fantastic destination and excellent customer service."
                        </p>
                        <div className="flex items-center">
                            <motion.img
                                src="https://randomuser.me/api/portraits/women/1.jpg"
                                alt="Traveler"
                                className="w-12 h-12 rounded-full mr-3 border-2 border-blue-200"
                                whileHover={hoverAvatar}
                            />
                            <div>
                                <p className="font-semibold text-lg">Jane Smith</p>
                                <p className="text-sm text-gray-500">London, UK</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Testimonial 3 */}
                <motion.div 
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    variants={item}
                    whileHover={hoverCard}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.0 }}
                    >
                        <svg 
                            className="w-10 h-10 text-blue-400 mb-4" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            "A trip of a lifetime! Beautiful scenery, fantastic guides, and memorable moments."
                        </p>
                        <div className="flex items-center">
                            <motion.img
                                src="https://randomuser.me/api/portraits/men/2.jpg"
                                alt="Traveler"
                                className="w-12 h-12 rounded-full mr-3 border-2 border-blue-200"
                                whileHover={hoverAvatar}
                            />
                            <div>
                                <p className="font-semibold text-lg">Mike Johnson</p>
                                <p className="text-sm text-gray-500">Sydney, Australia</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Testimonial;