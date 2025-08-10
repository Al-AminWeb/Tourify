import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Hotel, MapPin } from 'lucide-react';

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Kuala Lumpur",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Kuala_Lumpur_Skyline_at_dusk_1.jpg",
      hotels: "2,464",
      description: "Malaysia's vibrant capital with iconic Petronas Towers"
    },
    {
      id: 2,
      name: "Maafushi",
      image: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2023/10/maafushi.jpg",
      hotels: "36",
      description: "Maldivian paradise with crystal-clear waters"
    },
    {
      id: 3,
      name: "Kolkata",
      image: "https://media.assettype.com/outlooktraveller%2F2024-01%2Fa369e7e3-f7c8-4210-ae58-1800ea5cb2ea%2FKolkata1.jpg?w=1024&auto=format%2Ccompress&fit=max",
      hotels: "1,319",
      description: "Cultural capital of India with colonial heritage"
    }
  ];

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

  const hoverVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 lg:px-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <Globe className="w-10 h-10 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Most Popular <span className="text-primary">Destinations</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Expand your travel horizons with new facets! Explore the world by choosing your ideal travel destinations in Asia, Europe, America, Australia, and more.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              whileHover="hover"
              className="relative group"
            >
              <motion.div
                variants={hoverVariants}
                className="h-full"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg h-full">
                  <motion.img
                    variants={imageHoverVariants}
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center mb-1"
                    >
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      <h3 className="text-xl font-bold">{destination.name}</h3>
                    </motion.div>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-sm mb-3"
                    >
                      {destination.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center text-sm"
                    >
                      <Hotel className="w-4 h-4 mr-2 text-primary" />
                      <span>{destination.hotels} Hotels Available</span>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300"
                  >
                    <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium shadow-lg transform group-hover:scale-110 transition-all duration-300">
                      Explore Now
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-white hover:bg-gray-100 border border-primary text-primary hover:text-primary-dark px-8 py-3 rounded-full font-medium shadow-sm transition-all duration-300 hover:shadow-md">
            View All Destinations
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PopularDestinations;