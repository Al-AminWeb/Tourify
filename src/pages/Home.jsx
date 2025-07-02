import HeroBanner from "../components/HeroBanner.jsx";
import HowToUseTourify from "../components/HowToUseTourify.jsx";
import AirlineShowcase from "../components/AirlineShowcase.jsx";
import { NavLink, useLoaderData } from "react-router";
import { useState } from "react";
import PackageCard from "../components/PackageCard.jsx";
import { motion } from "framer-motion";
import PopularDestinations from "../components/PopularDestinations.jsx";
import TravelBlog from "../components/TravelBlog.jsx";
import Testimonial from "../components/Testomonial.jsx";

const Home = () => {
    const data = useLoaderData();
    const [packages, setPackages] = useState(data?.data || []);

    return (
        <div className='bg-blue-300'>
            <motion.div
                className="w-full py-5"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <HeroBanner />
            </motion.div>

            <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <HowToUseTourify />
            </motion.div>

            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <AirlineShowcase />
            </motion.div>

            <section className="py-8 px-4 lg:px-16">
                <motion.div
                    className="max-w-7xl mx-auto text-center mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3">🌍 Featured Tour Packages</h2>
                    <p className="text-gray-500 text-sm md:text-base">Top selected trips for your next adventure</p>
                </motion.div>

                <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {packages.slice(0, 6).map((tourPackage, index) => (
                        <motion.div
                            key={tourPackage._id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <PackageCard tourPackage={tourPackage} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <NavLink to="/all-packages">
                        <button className="btn btn-outline btn-primary px-8 text-lg">Show All</button>
                    </NavLink>
                </motion.div>
            </section>

        {/*    popular destination*/}
            <PopularDestinations/>
            <TravelBlog/>
            <Testimonial/>
        </div>
    );
};

export default Home;
