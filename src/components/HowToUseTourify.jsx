import React from "react";
import { FaPlane, FaHotel, FaTags } from "react-icons/fa";

const guideData = [
    {
        icon: <FaPlane className="text-3xl text-blue-600" />,
        title: "How to book a flight?",
        button: "Learn More",
    },
    {
        icon: <FaHotel className="text-3xl text-green-600" />,
        title: "How to book a hotel?",
        button: "Learn More",
    },
    {
        icon: <FaTags className="text-3xl text-purple-600" />,
        title: "How to get discounts?",
        button: "Learn More",
    },
];

const HowToUseTourify = () => {
    return (
        <div className="py-8 ">
            <div className="max-w-6xl mx-auto px-4 grid gap-y-6 gap-x-8 md:grid-cols-3">
                {guideData.map((guide, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-100 rounded-xl p-6 flex items-center gap-6 transition-shadow duration-300 hover:shadow-2xl"
                    >
                        <div className="p-4 bg-white rounded-lg flex items-center justify-center">
                            {guide.icon}
                        </div>
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold text-neutral">
                                {guide.title}
                            </h2>
                            <button className="btn btn-sm mt-2 bg-yellow-500 text-white hover:bg-yellow-400">
                                {guide.button}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowToUseTourify;
