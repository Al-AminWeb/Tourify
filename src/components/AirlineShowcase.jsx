// src/components/AirlineShowcase.jsx
import React from "react";
import {
    FaPlaneDeparture,
    FaGlobeAsia,
    FaPlane,
    FaTicketAlt,
    FaPlaneArrival,
    FaPaperPlane,

    FaHelicopter,
} from "react-icons/fa";

const airlines = [
    {name: "Biman Bangladesh", icon: <FaPlaneDeparture className="text-2xl text-primary"/>},
    {name: "US-Bangla Airlines", icon: <FaPlane className="text-2xl text-secondary"/>},
    {name: "NOVOAIR", icon: <FaPaperPlane className="text-2xl text-accent"/>},
    {name: "Emirates", icon: <FaPlaneArrival className="text-2xl text-error"/>},
    {name: "Singapore Airlines", icon: <FaGlobeAsia className="text-2xl text-success"/>},
    {name: "Qatar Airways", icon: <FaTicketAlt className="text-2xl text-purple-500"/>},
    {name: "Turkish Airlines", icon: <FaPlane className="text-2xl text-blue-500"/>},
    {name: "British Airways", icon: <FaPlaneDeparture className="text-2xl text-pink-500"/>},
    {name: "Thai Lion Air", icon: <FaHelicopter className="text-2xl text-yellow-500"/>},
];

const AirlineShowcase = () => {
    return (
        <section className="bg-base-200 py-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold ">Explore Top Airlines</h2>
                <p className=" mt-2 max-w-xl mx-auto">
                    Discover airline partners available on <span
                    className="text-primary font-semibold">Tourify</span> for your next flight.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {airlines.map((airline, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 flex items-center gap-4"
                    >
                        <div className="p-3 bg-base-100 rounded-full">
                            {airline.icon}
                        </div>
                        <h3 className="text-lg font-medium text-neutral">{airline.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AirlineShowcase;
