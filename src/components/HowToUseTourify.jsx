import React from "react";
import { FaPlane, FaHotel, FaTags } from "react-icons/fa";
import { motion } from "framer-motion";

const guideData = [
  {
    icon: <FaPlane className="text-3xl text-blue-600" />,
    title: "How to book a flight?",
    description: "Step-by-step guide to finding and booking the perfect flight",
    button: "Learn More",
    color: "from-blue-50 to-white",
    hoverColor: "hover:bg-blue-100"
  },
  {
    icon: <FaHotel className="text-3xl text-green-600" />,
    title: "How to book a hotel?",
    description: "Find the best accommodations for your travel needs",
    button: "Learn More",
    color: "from-green-50 to-white",
    hoverColor: "hover:bg-green-100"
  },
  {
    icon: <FaTags className="text-3xl text-purple-600" />,
    title: "How to get discounts?",
    description: "Tips and tricks to save money on your travels",
    button: "Learn More",
    color: "from-purple-50 to-white",
    hoverColor: "hover:bg-purple-100"
  },
];

// Animation variants defined directly in the component
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeIn = (direction) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeOut"
    },
  },
});

const HowToUseTourify = () => {
  return (
    <motion.div 
      className="py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn('up')}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Use <span className="text-primary">Tourify</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quick guides to help you get the most out of your travel experience
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
        >
          {guideData.map((guide, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn('up')}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`h-full bg-gradient-to-b ${guide.color} rounded-2xl overflow-hidden shadow-md transition-all duration-300 ${guide.hoverColor} group-hover:shadow-xl`}>
                <div className="p-8 flex flex-col h-full">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 mb-6  rounded-lg flex items-center justify-center shadow-sm"
                  >
                    {guide.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{guide.description}</p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`self-start px-6 py-2 rounded-full font-medium text-white ${idx === 0 ? 'bg-blue-600 hover:bg-blue-700' : idx === 1 ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'} transition-colors duration-300 shadow-sm`}
                  >
                    {guide.button}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HowToUseTourify;