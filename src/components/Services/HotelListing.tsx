import React, { useState } from "react";
import {
  FaWifi,
  FaUtensils,
  FaSwimmingPool,
  FaParking,
  FaCar,
  FaBicycle,
  FaStar,
  FaUser,
  FaBed,
  FaBath,
  FaDoorOpen,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
} from "react-icons/fa";
import { useTheme } from "../../Context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

interface Hotel {
  name: string;
  rating: number;
  reviews: number;
  location: string;
  host: string;
  guests: number;
  beds: number;
  baths: number;
  bedrooms: number;
  description: string;
  pricePerNight: number;
  amenities: string[];
  images: string[];
}

const hotelData: Hotel = {
  name: "Best Western Cedars Hotel",
  rating: 4.8,
  reviews: 28,
  location: "1 Anzinger Court",
  host: "Fones Miml",
  guests: 6,
  beds: 10,
  baths: 3,
  bedrooms: 10,
  description:
    "Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides accommodation, an outdoor swimming pool, a bar, a shared lounge, a garden and barbecue facilities. Complimentary WiFi is provided. There is a private bathroom with bidet in all units, along with a hairdryer and free toiletries. The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental service and a car rental service are available at the accommodation, while cycling can be enjoyed nearby.",
  pricePerNight: 2145, // Changed to approximate INR equivalent
  amenities: [
    "wifi",
    "restaurant",
    "pool",
    "parking",
    "car-rental",
    "bicycle-rental",
  ],
  images: [
    "src/assets/elements/hotel view.jpg",
    "src/assets/elements/bedroom.jpg",
    "src/assets/elements/gym.jpg",
    "src/assets/elements/hall.jpg",
    "src/assets/elements/scenery.jpg",
    "src/assets/elements/scnery.jpg",
  ],
};

const HotelCard: React.FC<{ hotel: Hotel }> = ({ hotel }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi":
        return <FaWifi />;
      case "restaurant":
        return <FaUtensils />;
      case "pool":
        return <FaSwimmingPool />;
      case "parking":
        return <FaParking />;
      case "car-rental":
        return <FaCar />;
      case "bicycle-rental":
        return <FaBicycle />;
      default:
        return null;
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hotel.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + hotel.images.length) % hotel.images.length
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        isDarkMode
          ? "bg-gray-800 text-white"
          : "bg-gradient-to-br from-blue-100 to-purple-100 text-gray-900"
      } shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-2xl mt-12`}
    >
      <div className="md:w-2/3 relative overflow-hidden">
        <motion.div
          animate={{ x: `-${currentImageIndex * 100}%` }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
          className="flex"
        >
          {hotel.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${hotel.name} - Image ${index + 1}`}
              className="w-full h-80 md:h-full object-cover flex-shrink-0"
            />
          ))}
        </motion.div>
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
        >
          <FaChevronRight />
        </button>
        <div className="absolute top-4 left-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          Featured
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsFavorite(!isFavorite)}
          className={`absolute top-4 right-4 p-2 rounded-full ${
            isFavorite ? "bg-red-500" : "bg-white"
          } transition-colors duration-200`}
        >
          <FaHeart className={isFavorite ? "text-white" : "text-red-500"} />
        </motion.button>
      </div>
      <div className="md:w-1/3 p-8 flex flex-col justify-between bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-shadow">{hotel.name}</h2>
          <div className="flex items-center mb-4">
            <FaStar className="text-yellow-300 mr-2" />
            <span className="text-2xl font-semibold">{hotel.rating}</span>
            <span className="ml-2 text-gray-200">
              ({hotel.reviews} reviews)
            </span>
          </div>
          <p className="mb-4 flex items-center text-gray-200">
            <FaMapMarkerAlt className="mr-2" /> {hotel.location}
          </p>
          <p className="text-sm text-gray-200 mb-6 flex items-center">
            <FaUser className="mr-2" /> Hosted by {hotel.host}
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6 text-gray-200">
            <div className="flex items-center">
              <FaUser className="mr-2" /> {hotel.guests} guests
            </div>
            <div className="flex items-center">
              <FaBed className="mr-2" /> {hotel.beds} beds
            </div>
            <div className="flex items-center">
              <FaBath className="mr-2" /> {hotel.baths} baths
            </div>
            <div className="flex items-center">
              <FaDoorOpen className="mr-2" /> {hotel.bedrooms} bedrooms
            </div>
          </div>
          <p className="text-gray-200 mb-6 line-clamp-3">{hotel.description}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-3 mb-6">
            {hotel.amenities.map((amenity, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm font-semibold flex items-center"
              >
                {getAmenityIcon(amenity)}
                <span className="ml-2">{amenity}</span>
              </motion.span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold">
              ₹{hotel.pricePerNight}{" "}
              <span className="text-sm font-normal">/ night</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg text-sm transition-colors duration-300 hover:bg-blue-100"
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AvailabilityCalendar: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const startDay = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const generateCalendar = () => {
    const totalDays = daysInMonth(currentMonth);
    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(<td key={`empty-${i}`} className="p-1"></td>);
    }
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        i
      );
      const isCheckIn =
        checkInDate && date.toDateString() === checkInDate.toDateString();
      const isCheckOut =
        checkOutDate && date.toDateString() === checkOutDate.toDateString();
      days.push(
        <td key={i} className="p-1">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              if (!checkInDate || (checkInDate && checkOutDate)) {
                setCheckInDate(date);
                setCheckOutDate(null);
              } else {
                setCheckOutDate(date);
              }
            }}
            className={`w-8 h-8 rounded-full ${
              isCheckIn
                ? "bg-blue-600 text-white"
                : isCheckOut
                ? "bg-green-600 text-white"
                : isDarkMode
                ? "hover:bg-gray-700"
                : "hover:bg-gray-200"
            } transition-colors duration-200 text-sm`}
          >
            {i}
          </motion.button>
        </td>
      );
    }
    return days;
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        isDarkMode
          ? "bg-gray-800 text-white"
          : "bg-gradient-to-br from-green-100 to-blue-100 text-gray-900"
      } shadow-lg rounded-2xl p-6`}
    >
      <h2 className="text-2xl font-bold mb-4">Availability</h2>
      <p
        className={`${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        } mb-4 text-sm`}
      >
        Select your check-in and check-out dates
      </p>
      <div className="flex justify-between items-center mb-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevMonth}
          className={`${
            isDarkMode
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white font-bold py-1 px-3 rounded-lg transition-colors duration-300`}
        >
          {"<"}
        </motion.button>
        <h3 className="text-xl font-semibold">
          {currentMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h3>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextMonth}
          className={`${
            isDarkMode
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white font-bold py-1 px-3 rounded-lg transition-colors duration-300`}
        >
          {">"}
        </motion.button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <th key={day} className="p-1 text-center text-xs">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array(Math.ceil((daysInMonth(currentMonth) + startDay) / 7))
            .fill(null)
            .map((_, i) => (
              <tr key={i}>{generateCalendar().slice(i * 7, (i + 1) * 7)}</tr>
            ))}
        </tbody>
      </table>
      <div className="mt-4 text-sm">
        {checkInDate && <p>Check-in: {checkInDate.toLocaleDateString()}</p>}
        {checkOutDate && <p>Check-out: {checkOutDate.toLocaleDateString()}</p>}
      </div>
    </motion.div>
  );
};

const HostInformation: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        isDarkMode
          ? "bg-gray-800 text-white"
          : "bg-gradient-to-br from-yellow-100 to-red-100 text-gray-900"
      } shadow-lg rounded-2xl p-8`}
    >
      <h2 className="text-3xl font-bold mb-6">Host Information</h2>
      <div className="flex items-center mb-6">
        <img
          className="w-20 h-20 rounded-full mr-6"
          src="..."
          alt="Host Profile"
        />
        <div>
          <h3 className="text-2xl font-semibold mb-2">Fones Mimi</h3>
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } flex items-center`}
          >
            <FaStar className="text-yellow-500 mr-2" />
            <span>4.8 (28)</span> - 111 places
          </p>
        </div>
      </div>
      <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-6`}>
        Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides
        accommodation, an outdoor swimming pool a bar, a shared lounge, a garden
        and barbecue facilities.
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Joined in May 20, 2021</li>
        <li>Response rate - 100%</li>
        <li>Fast response - within a few hours</li>
      </ul>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
      >
        See host profile
      </motion.button>
    </motion.div>
  );
};

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        isDarkMode
          ? "bg-gray-800 text-white"
          : "bg-gradient-to-br from-indigo-100 to-pink-100 text-gray-900"
      } shadow-lg rounded-2xl p-8`}
    >
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      {children}
    </motion.div>
  );
};

const GMapLocationCard: React.FC = () => {
  return (
    <Card title="GMap Location">
      <div className="aspect-w-16 aspect-h-9 h-64 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.8326457962424!2d-113.06619668466384!3d37.67795997977201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80b561fe3e8c6f7d%3A0x7f7d7c5f1b1b1b1b!2s50%20W%20200%20N%2C%20Cedar%20City%2C%20UT%2084720!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </Card>
  );
};

const ThingsToKnowCard: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <Card title="Things to Know">
      <ul className="space-y-6">
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <button
            onClick={() => toggleSection("cancellation")}
            className="text-xl font-semibold mb-2 w-full text-left flex justify-between items-center"
          >
            <span>Cancellation Policy</span>
            <span>{expandedSection === "cancellation" ? "▲" : "▼"}</span>
          </button>
          <AnimatePresence>
            {expandedSection === "cancellation" && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } overflow-hidden`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nulla auctor, vestibulum magna sed, convallis ex.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            onClick={() => toggleSection("checkin")}
            className="text-xl font-semibold mb-2 w-full text-left flex justify-between items-center"
          >
            <span>Check-in/Out Time</span>
            <span>{expandedSection === "checkin" ? "▲" : "▼"}</span>
          </button>
          <AnimatePresence>
            {expandedSection === "checkin" && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } overflow-hidden`}
              >
                Check-in: 3:00 PM - 10:00 PM
                <br />
                Check-out: 12:00 PM
              </motion.p>
            )}
          </AnimatePresence>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={() => toggleSection("special")}
            className="text-xl font-semibold mb-2 w-full text-left flex justify-between items-center"
          >
            <span>Special Note</span>
            <span>{expandedSection === "special" ? "▲" : "▼"}</span>
          </button>
          <AnimatePresence>
            {expandedSection === "special" && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } overflow-hidden`}
              >
                Please note that the property has a strict no-smoking policy.
                Guests are required to provide a valid government-issued ID upon
                check-in.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.li>
      </ul>
    </Card>
  );
};

const HotelListing: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-3">
          <HotelCard hotel={hotelData} />
        </div>
        <div className="lg:col-span-2">
          <AvailabilityCalendar />
        </div>
        <div className="lg:col-span-1">
          <HostInformation />
        </div>
        <div className="lg:col-span-2">
          <GMapLocationCard />
        </div>
        <div className="lg:col-span-1">
          <ThingsToKnowCard />
        </div>
      </div>
    </div>
  );
};

export default HotelListing;
