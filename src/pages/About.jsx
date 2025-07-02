import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import missionImage from '../assets/woman enjoying beach.jpg';
import heroBgImage from '../assets/pexels-photo-2387873.jpeg';

const teamMember1 = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg';
const teamMember2 = 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg';
const teamMember3 = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 }
    })
};

const AboutUs = () => {
    return (
        <div className="bg-blue-300 text-base-content overflow-hidden">
            {/* Hero Section */}
            <motion.section
                className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
                style={{ backgroundImage: `url(${heroBgImage})` }}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0  bg-opacity-40" />
                <div className="relative container mx-auto px-4 text-center text-white">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold leading-tight mb-4"
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                    >
                        About Tourify
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl max-w-3xl mx-auto"
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        variants={fadeUp}
                    >
                        Crafting unforgettable journeys and connecting you with the heart of adventure.
                    </motion.p>
                </div>
            </motion.section>

            {/* Our Mission */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <img
                            src={missionImage}
                            alt="Woman relaxing on a beach"
                            className="rounded-lg shadow-xl w-full"
                        />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                        variants={fadeUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
                        <p className="text-base-content/80 mb-4">
                            At Tourify, our mission is to make travel accessible, authentic, and transformative...
                        </p>
                        <p className="text-base-content/80">
                            We connect passionate travelers with expert local guides...
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className=" py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">Why Travel With Us?</h2>
                        <p className="text-lg text-base-content/70 mt-2 max-w-2xl mx-auto">
                            We handle the details so you can focus on the adventure.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {['Safety First', 'Expert Local Guides', 'Tailored Packages', 'Unforgettable Experiences'].map((title, i) => (
                            <motion.div
                                key={i}
                                className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                                variants={fadeUp}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="card-body items-center text-center">
                                    <div className="p-4 bg-primary rounded-full mb-4">
                                        {/* Placeholder icons (you can keep existing SVGs) */}
                                        <span className="text-white text-2xl">🌍</span>
                                    </div>
                                    <h3 className="card-title">{title}</h3>
                                    <p className="text-sm text-base-content/70">Description for {title}...</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Team */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                    >
                        Meet Our Founders
                    </motion.h2>
                    <p className="text-lg text-base-content/70 mt-2 max-w-2xl mx-auto">
                        The passionate individuals who started it all.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {[teamMember1, teamMember2, teamMember3].map((img, i) => (
                            <motion.div
                                key={i}
                                className="card bg-base-100 shadow-lg"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                                variants={fadeUp}
                                whileHover={{ scale: 1.05, rotate: 1 }}
                                transition={{ type: 'spring' }}
                            >
                                <figure className="px-10 pt-10">
                                    <img src={img} alt={`Founder ${i + 1}`} className="rounded-full w-32 h-32 object-cover" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Name #{i + 1}</h2>
                                    <p className="text-base-content/70">Role #{i + 1}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <motion.section
                className="bg-primary text-primary-content py-16 md:py-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Browse our curated list of tour packages and find the perfect getaway today.
                    </p>
                    <Link to="/all-packages" className="btn btn-secondary btn-lg">
                        Explore All Packages
                    </Link>
                </div>
            </motion.section>
        </div>
    );
};

export default AboutUs;
