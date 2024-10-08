import React, { useState } from "react";
import {
  FaPlane,
  FaHotel,
  FaCar,
  FaUmbrella,
  FaUsers,
  FaGlobe,
  FaChevronDown,
} from "react-icons/fa";
import { useTheme } from "../../Context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const AboutUs: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      icon: <FaPlane />,
      title: "Flight Booking",
      description: "Book flights to destinations worldwide.",
    },
    {
      icon: <FaHotel />,
      title: "Hotel Reservations",
      description: "Find and book accommodations for your stay.",
    },
    {
      icon: <FaCar />,
      title: "Car Rentals",
      description: "Rent a car for your travel needs.",
    },
    {
      icon: <FaUmbrella />,
      title: "Travel Insurance",
      description: "Protect your trip with our insurance options.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`about-us ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-10 py-16 mt-20">
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Discover TravelEase
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-16 text-center max-w-3xl mx-auto"
        >
          Embark on a journey of discovery with TravelEase. We're not just about
          trips; we're about transforming your travel dreams into unforgettable
          realities.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className={`feature-card p-6 rounded-lg shadow-lg ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <FaUsers
              className={`text-5xl mb-4 ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}
            />
            <h3 className="text-xl font-semibold mb-3">Expert Explorers</h3>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Our seasoned travel gurus craft bespoke adventures tailored to your wildest dreams.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className={`feature-card p-6 rounded-lg shadow-lg ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <FaGlobe
              className={`text-5xl mb-4 ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}
            />
            <h3 className="text-xl font-semibold mb-3">World at Your Fingertips</h3>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Unlock a treasure trove of global experiences with our extensive network of partners.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className={`feature-card p-6 rounded-lg shadow-lg ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <FaUmbrella
              className={`text-5xl mb-4 ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}
            />
            <h3 className="text-xl font-semibold mb-3">Always By Your Side</h3>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Our 24/7 support team is your travel guardian angel, ensuring smooth sailing throughout your journey.
            </p>
          </motion.div>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold mb-6 text-center"
        >
          Unleash Your Wanderlust
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`service-card p-6 rounded-lg shadow-lg ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
              onClick={() => setExpandedService(expandedService === index ? null : index)}
            >
              <div
                className={`text-5xl mb-4 ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <AnimatePresence>
                {expandedService === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {service.description}
                  </motion.p>
                )}
              </AnimatePresence>
              <motion.div
                animate={{ rotate: expandedService === index ? 180 : 0 }}
                className="mt-2"
              >
                <FaChevronDown />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Odyssey</h2>
          <p
            className={`text-lg md:text-xl text-center max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            We're on a quest to ignite the explorer in you, fostering a global
            community of adventurers. Our compass points towards sustainable
            travel, ensuring that every journey leaves a positive footprint on
            the world.
          </p>
        </motion.div>
      </div>

      <style>
        {`
        .about-us {
          min-height: 100vh;
          transition: background-color 0.3s, color 0.3s;
        }
        .service-card, .feature-card {
          transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }
        .service-card:hover, .feature-card:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        `}
      </style>
    </motion.div>
  );
};

export default AboutUs;
