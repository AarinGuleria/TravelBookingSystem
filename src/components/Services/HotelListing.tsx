import React, { useState } from 'react';
import { FaWifi, FaUtensils, FaSwimmingPool, FaParking, FaCar, FaBicycle, FaStar, FaUser, FaBed, FaBath, FaDoorOpen, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTheme } from '../../Context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

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
  description: "Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides accommodation, an outdoor swimming pool, a bar, a shared lounge, a garden and barbecue facilities. Complimentary WiFi is provided. There is a private bathroom with bidet in all units, along with a hairdryer and free toiletries. The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental service and a car rental service are available at the accommodation, while cycling can be enjoyed nearby.",
  pricePerNight: 26,
  amenities: ["wifi", "restaurant", "pool", "parking", "car-rental", "bicycle-rental"],
  images: [
    "https://example.com/hotel-image-1.jpg",
    "https://example.com/hotel-image-2.jpg",
    "https://example.com/hotel-image-3.jpg",
    "https://example.com/hotel-image-4.jpg",
  ]
};

const HotelCard: React.FC<{ hotel: Hotel }> = ({ hotel }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'wifi': return <FaWifi />;
      case 'restaurant': return <FaUtensils />;
      case 'pool': return <FaSwimmingPool />;
      case 'parking': return <FaParking />;
      case 'car-rental': return <FaCar />;
      case 'bicycle-rental': return <FaBicycle />;
      default: return null;
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hotel.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + hotel.images.length) % hotel.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-2xl mt-12`}
    >
      <div className="md:w-2/3 relative">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={hotel.images[currentImageIndex]}
            alt={`${hotel.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-80 md:h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          <FaChevronRight />
        </button>
        <div className="absolute top-4 left-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          Featured
        </div>
      </div>
      <div className="md:w-1/3 p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4">{hotel.name}</h2>
          <div className="flex items-center mb-4">
            <FaStar className="text-yellow-500 mr-2" />
            <span className="text-xl font-semibold">{hotel.rating}</span>
            <span className={`ml-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>({hotel.reviews} reviews)</span>
          </div>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 flex items-center`}>
            <FaMapMarkerAlt className="mr-2" /> {hotel.location}
          </p>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-6 flex items-center`}>
            <FaUser className="mr-2" /> Hosted by {hotel.host}
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center"><FaUser className="mr-2" /> {hotel.guests} guests</div>
            <div className="flex items-center"><FaBed className="mr-2" /> {hotel.beds} beds</div>
            <div className="flex items-center"><FaBath className="mr-2" /> {hotel.baths} baths</div>
            <div className="flex items-center"><FaDoorOpen className="mr-2" /> {hotel.bedrooms} bedrooms</div>
          </div>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-6 line-clamp-3`}>{hotel.description}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-3 mb-6">
            {hotel.amenities.map((amenity, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} rounded-full px-3 py-1 text-sm font-semibold flex items-center`}
              >
                {getAmenityIcon(amenity)}
                <span className="ml-2">{amenity}</span>
              </motion.span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold">${hotel.pricePerNight} <span className="text-sm font-normal">/ night</span></div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-sm transition-colors duration-300"
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
  const isDarkMode = theme === 'dark';
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const startDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const generateCalendar = () => {
    const totalDays = daysInMonth(currentMonth);
    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(<td key={`empty-${i}`} className="p-1"></td>);
    }
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      const isCheckIn = checkInDate && date.toDateString() === checkInDate.toDateString();
      const isCheckOut = checkOutDate && date.toDateString() === checkOutDate.toDateString();
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
                ? 'bg-blue-600 text-white'
                : isCheckOut
                ? 'bg-green-600 text-white'
                : isDarkMode
                ? 'hover:bg-gray-700'
                : 'hover:bg-gray-200'
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
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg rounded-2xl p-6`}
    >
      <h2 className="text-2xl font-bold mb-4">Availability</h2>
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 text-sm`}>Select your check-in and check-out dates</p>
      <div className="flex justify-between items-center mb-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevMonth}
          className={`${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} text-gray-800 font-bold py-1 px-3 rounded-lg transition-colors duration-300`}
        >
          {'<'}
        </motion.button>
        <h3 className="text-xl font-semibold">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h3>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextMonth}
          className={`${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} text-gray-800 font-bold py-1 px-3 rounded-lg transition-colors duration-300`}
        >
          {'>'}
        </motion.button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <th key={day} className="p-1 text-center text-xs">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array(Math.ceil((daysInMonth(currentMonth) + startDay) / 7)).fill(null).map((_, i) => (
            <tr key={i}>
              {generateCalendar().slice(i * 7, (i + 1) * 7)}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-sm">
        {checkInDate && (
          <p>Check-in: {checkInDate.toLocaleDateString()}</p>
        )}
        {checkOutDate && (
          <p>Check-out: {checkOutDate.toLocaleDateString()}</p>
        )}
      </div>
    </motion.div>
  );
};

const HostInformation: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg rounded-2xl p-8`}
    >
      <h2 className="text-3xl font-bold mb-6">Host Information</h2>
      <div className="flex items-center mb-6">
        <img className="w-20 h-20 rounded-full mr-6" src="..." alt="Host Profile" />
        <div>
          <h3 className="text-2xl font-semibold mb-2">Fones Mimi</h3>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center`}>
            <FaStar className="text-yellow-500 mr-2" />
            <span>4.8 (28)</span> - 111 places
          </p>
        </div>
      </div>
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
        Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides accommodation, an
        outdoor swimming pool a bar, a shared lounge, a garden and barbecue facilities.
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
  const isDarkMode = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg rounded-2xl p-8`}
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
          src="https://www.google.com/maps/embed?..."
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </Card>
  );
};

const ThingsToKnowCard: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <Card title="Things to Know">
      <ul className="space-y-6">
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold mb-2">Cancellation Policy</h3>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla
            auctor, vestibulum magna sed, convallis ex.
          </p>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-2">Check-in/Out Time</h3>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Check-in: 3:00 PM - 10:00 PM
            <br />
            Check-out: 12:00 PM
          </p>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-2">Special Note</h3>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Please note that the property has a strict no-smoking policy. Guests are
            required to provide a valid government-issued ID upon check-in.
          </p>
        </motion.li>
      </ul>
    </Card>
  );
};

const HotelListing: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
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
