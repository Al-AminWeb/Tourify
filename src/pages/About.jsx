import React from 'react';
import { Link } from 'react-router';
import missionImage from '../assets/woman enjoying beach.jpg'
import heroBgImage from '../assets/pexels-photo-2387873.jpeg'




const teamMember1 = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const teamMember2 = 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const teamMember3 = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const AboutUs = () => {
    return (
        <div className="bg-base-100 text-base-content">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
                style={{ backgroundImage: `url(${heroBgImage})` }}
            >
                <div className="absolute inset-0 bg-opacity-50"></div>
                <div className="relative container mx-auto px-4 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down">
                        About Tourify
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up">
                        Crafting unforgettable journeys and connecting you with the heart of adventure.
                    </p>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in-left">
                            <img
                                src={missionImage}
                                alt="Woman relaxing on a beach"
                                className="rounded-lg shadow-xl w-full"
                            />
                        </div>
                        <div className="animate-fade-in-right">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
                            <p className="text-base-content/80 mb-4">
                                At Tourify, our mission is to make travel accessible, authentic, and transformative. We believe that travel is more than just seeing new places; it’s about experiencing different cultures, challenging your perspectives, and creating memories that last a lifetime.
                            </p>
                            <p className="text-base-content/80">
                                We connect passionate travelers with expert local guides who share a deep love for their homeland, ensuring every trip is unique, personal, and profoundly enriching.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-base-200 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Why Travel With Us?</h2>
                        <p className="text-lg text-base-content/70 mt-2 max-w-2xl mx-auto">
                            We handle the details so you can focus on the adventure.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Feature 1 */}
                        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="card-body items-center text-center">
                                <div className="p-4 bg-primary rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                </div>
                                <h3 className="card-title mt-4">Safety First</h3>
                                <p>Your safety is our top priority. We partner with trusted guides and ensure all trips meet high safety standards.</p>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="card-body items-center text-center">
                                <div className="p-4 bg-primary rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <h3 className="card-title mt-4">Expert Local Guides</h3>
                                <p>Experience destinations like a local with our knowledgeable and passionate guides.</p>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="card-body items-center text-center">
                                <div className="p-4 bg-primary rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M12 12l-2-2m2 2l2 2m-2-2l-2 2m2-2l2-2" /></svg>
                                </div>
                                <h3 className="card-title mt-4">Tailored Packages</h3>
                                <p>From solo adventures to family trips, we offer a diverse range of packages to suit every traveler.</p>
                            </div>
                        </div>
                        {/* Feature 4 */}
                        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="card-body items-center text-center">
                                <div className="p-4 bg-primary rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </div>
                                <h3 className="card-title mt-4">Unforgettable Experiences</h3>
                                <p>We focus on creating authentic experiences that you'll cherish for years to come.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Meet Our Founders</h2>
                        <p className="text-lg text-base-content/70 mt-2 max-w-2xl mx-auto">
                            The passionate individuals who started it all.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {/* Team Member 1 */}
                        <div className="card bg-base-100 shadow-lg">
                            <figure className="px-10 pt-10">
                                <img src={teamMember1} alt="Founder 1" className="rounded-full w-32 h-32 object-cover" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Alex Johnson</h2>
                                <p className="text-base-content/70">Founder & Lead Explorer</p>
                            </div>
                        </div>
                        {/* Team Member 2 */}
                        <div className="card bg-base-100 shadow-lg">
                            <figure className="px-10 pt-10">
                                <img src={teamMember2} alt="Founder 2" className="rounded-full w-32 h-32 object-cover" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Ben Carter</h2>
                                <p className="text-base-content/70">Co-Founder & Operations Head</p>
                            </div>
                        </div>
                        {/* Team Member 3 */}
                        <div className="card bg-base-100 shadow-lg">
                            <figure className="px-10 pt-10">
                                <img src={teamMember3} alt="Founder 3" className="rounded-full w-32 h-32 object-cover" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Chloe Davis</h2>
                                <p className="text-base-content/70">Co-Founder & Experience Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary text-primary-content py-16 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Browse our curated list of tour packages and find the perfect getaway today. Your next story is waiting to be written.
                    </p>
                    <Link to="/all-packages" className="btn btn-secondary btn-lg">
                        Explore All Packages
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;