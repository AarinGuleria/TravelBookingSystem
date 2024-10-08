import React, { useState, useEffect } from 'react';
import { FaPlane, FaClock, FaExchangeAlt, FaSuitcase, FaWifi, FaUtensils, FaChargingStation, FaTv } from 'react-icons/fa';

interface Flight {
  airline: string;
  logo: string;
  departureTime: string;
  arrivalTime: string;
  from: string;
  to: string;
  duration: string;
  layover: string;
  price: number;
  priceClass: string;
  amenities: string[];
  details: {
    departureDate: string;
    arrivalDate: string;
    flightClass: string;
    airplaneType: string;
    transitTime: string;
  }[]
}

const flightsData: Flight[] = [
  {
    airline: "Korean Air",
    logo: "https://example.com/korean-air-logo.png",
    departureTime: "10:00 AM",
    arrivalTime: "2:00 PM",
    from: "Seoul",
    to: "Tokyo",
    duration: "4h",
    layover: "Non-stop",
    price: 450,
    priceClass: "Economy",
    amenities: ["wifi", "meal", "entertainment"],
    details: [
      {
        departureDate: 'Monday, August 12 - 10:00',
        arrivalDate: 'Monday, August 12 - 14:00',
        flightClass: 'Korean Air - Economy class',
        airplaneType: 'Boeing 787 - KE 123',
        transitTime: 'Non-stop'
      }
    ]
  },
  {
    airline: "Singapore Airlines",
    logo: "https://example.com/singapore-airlines-logo.png",
    departureTime: "1:30 PM",
    arrivalTime: "7:45 PM",
    from: "Singapore",
    to: "London",
    duration: "13h 15m",
    layover: "1 stop",
    price: 1200,
    priceClass: "Business",
    amenities: ["wifi", "meal", "entertainment", "charging", "luggage"],
    details: [
      {
        departureDate: 'Tuesday, August 13 - 13:30',
        arrivalDate: 'Wednesday, August 14 - 19:45',
        flightClass: 'Singapore Airlines - Business class',
        airplaneType: 'Airbus A380 - SQ 322',
        transitTime: '2 hours 30 minutes - Dubai (DXB)'
      }
    ]
  },
  {
    airline: "Emirates",
    logo: "https://example.com/emirates-logo.png",
    departureTime: "11:45 PM",
    arrivalTime: "6:15 AM",
    from: "Dubai",
    to: "New York",
    duration: "14h 30m",
    layover: "Non-stop",
    price: 1500,
    priceClass: "First Class",
    amenities: ["wifi", "meal", "entertainment", "charging", "luggage"],
    details: [
      {
        departureDate: 'Wednesday, August 14 - 23:45',
        arrivalDate: 'Thursday, August 15 - 06:15',
        flightClass: 'Emirates - First Class',
        airplaneType: 'Airbus A380 - EK 201',
        transitTime: 'Non-stop'
      }
    ]
  },
  {
    airline: "Lufthansa",
    logo: "https://example.com/lufthansa-logo.png",
    departureTime: "8:30 AM",
    arrivalTime: "10:45 AM",
    from: "Frankfurt",
    to: "Paris",
    duration: "1h 15m",
    layover: "Non-stop",
    price: 200,
    priceClass: "Economy",
    amenities: ["wifi", "meal"],
    details: [
      {
        departureDate: 'Thursday, August 15 - 08:30',
        arrivalDate: 'Thursday, August 15 - 10:45',
        flightClass: 'Lufthansa - Economy class',
        airplaneType: 'Airbus A320 - LH 1028',
        transitTime: 'Non-stop'
      }
    ]
  },
  {
    airline: "Qatar Airways",
    logo: "https://example.com/qatar-airways-logo.png",
    departureTime: "9:20 PM",
    arrivalTime: "5:40 PM",
    from: "Doha",
    to: "Los Angeles",
    duration: "16h 20m",
    layover: "Non-stop",
    price: 1800,
    priceClass: "Business",
    amenities: ["wifi", "meal", "entertainment", "charging", "luggage"],
    details: [
      {
        departureDate: 'Friday, August 16 - 21:20',
        arrivalDate: 'Saturday, August 17 - 17:40',
        flightClass: 'Qatar Airways - Business class',
        airplaneType: 'Boeing 777 - QR 739',
        transitTime: 'Non-stop'
      }
    ]
  },
  {
    airline: "British Airways",
    logo: "https://example.com/british-airways-logo.png",
    departureTime: "3:15 PM",
    arrivalTime: "6:45 PM",
    from: "London",
    to: "Rome",
    duration: "2h 30m",
    layover: "Non-stop",
    price: 180,
    priceClass: "Economy",
    amenities: ["wifi", "meal"],
    details: [
      {
        departureDate: 'Saturday, August 17 - 15:15',
        arrivalDate: 'Saturday, August 17 - 18:45',
        flightClass: 'British Airways - Economy class',
        airplaneType: 'Airbus A320 - BA 560',
        transitTime: 'Non-stop'
      }
    ]
  },
  {
    airline: "Air France",
    logo: "https://example.com/air-france-logo.png",
    departureTime: "7:00 AM",
    arrivalTime: "9:10 AM",
    from: "Paris",
    to: "Amsterdam",
    duration: "1h 10m",
    layover: "Non-stop",
    price: 120,
    priceClass: "Economy",
    amenities: ["wifi"],
    details: [
      {
        departureDate: 'Sunday, August 18 - 07:00',
        arrivalDate: 'Sunday, August 18 - 09:10',
        flightClass: 'Air France - Economy class',
        airplaneType: 'Embraer E190 - AF 1240',
        transitTime: 'Non-stop'
      }
    ]
  },
  {
    airline: "Japan Airlines",
    logo: "https://example.com/japan-airlines-logo.png",
    departureTime: "11:55 PM",
    arrivalTime: "7:45 AM",
    from: "Tokyo",
    to: "San Francisco",
    duration: "9h 50m",
    layover: "Non-stop",
    price: 950,
    priceClass: "Premium Economy",
    amenities: ["wifi", "meal", "entertainment", "charging"],
    details: [
      {
        departureDate: 'Monday, August 19 - 23:55',
        arrivalDate: 'Tuesday, August 20 - 07:45',
        flightClass: 'Japan Airlines - Premium Economy class',
        airplaneType: 'Boeing 777 - JL 8',
        transitTime: 'Non-stop'
      }
    ]
  },
  {
    airline: "Etihad Airways",
    logo: "https://example.com/etihad-airways-logo.png",
    departureTime: "2:10 AM",
    arrivalTime: "7:40 AM",
    from: "Abu Dhabi",
    to: "Mumbai",
    duration: "3h 30m",
    layover: "Non-stop",
    price: 300,
    priceClass: "Economy",
    amenities: ["wifi", "meal", "entertainment"],
    details: [
      {
        departureDate: 'Tuesday, August 20 - 02:10',
        arrivalDate: 'Tuesday, August 20 - 07:40',
        flightClass: 'Etihad Airways - Economy class',
        airplaneType: 'Boeing 787 - EY 204',
        transitTime: 'Non-stop'
      }
    ]
  },
  {
    airline: "Cathay Pacific",
    logo: "https://example.com/cathay-pacific-logo.png",
    departureTime: "12:35 PM",
    arrivalTime: "5:15 PM",
    from: "Hong Kong",
    to: "Bangkok",
    duration: "2h 40m",
    layover: "Non-stop",
    price: 280,
    priceClass: "Economy",
    amenities: ["wifi", "meal", "entertainment"],
    details: [
      {
        departureDate: 'Wednesday, August 21 - 12:35',
        arrivalDate: 'Wednesday, August 21 - 17:15',
        flightClass: 'Cathay Pacific - Economy class',
        airplaneType: 'Airbus A330 - CX 717',
        transitTime: 'Non-stop'
      }
    ]
  }
];

const FlightListingPage: React.FC = () => {
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>(flightsData);
  const [maxPrice, setMaxPrice] = useState<number>(5000);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    setFilteredFlights(flightsData.filter(flight => flight.price <= maxPrice));
  }, [maxPrice]);

  const filterFlights = () => {
    const updatedFlights = flightsData.filter((flight) => flight.price <= maxPrice);
    setFilteredFlights(updatedFlights);
  };

  const toggleFlightDetails = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'wifi':
        return <FaWifi className="text-blue-500" />;
      case 'meal':
        return <FaUtensils className="text-green-500" />;
      case 'entertainment':
        return <FaTv className="text-purple-500" />;
      case 'charging':
        return <FaChargingStation className="text-yellow-500" />;
      case 'luggage':
        return <FaSuitcase className="text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="flight-page-container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6">Flight Listings</h1>
      <div className="filter-section flex flex-wrap justify-between items-center mb-6 gap-4">
        <select className="filter-dropdown bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
          <option value="all">Airlines</option>
          {Array.from(new Set(flightsData.map(flight => flight.airline))).map(airline => (
            <option key={airline} value={airline}>{airline}</option>
          ))}
        </select>
        <select className="filter-dropdown bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
          <option value="any">Duration</option>
          <option value="lessThan5Hours">Less than 5 hours</option>
          <option value="5to10Hours">5 to 10 hours</option>
          <option value="moreThan10Hours">More than 10 hours</option>
        </select>
        <select className="filter-dropdown bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
          <option value="all">Stop points</option>
          <option value="nonStop">Non-stop</option>
          <option value="1Stop">1 Stop</option>
          <option value="2plusStops">2+ Stops</option>
        </select>
        <select 
          className="filter-dropdown bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        >
          <option value="5000">All Prices</option>
          <option value="500">Up to $500</option>
          <option value="1000">Up to $1,000</option>
          <option value="1500">Up to $1,500</option>
          <option value="2000">Up to $2,000</option>
        </select>
        <button className="filter-button bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-md" onClick={filterFlights}>
          Filter
        </button>
      </div>

      <div className="flight-list space-y-6">
        {filteredFlights.map((flight, index) => (
          <div key={index} className="flight-item bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flight-summary flex flex-col sm:flex-row justify-between items-center" onClick={() => toggleFlightDetails(index)}>
              <div className="flight-info flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-4 sm:mb-0">
                <img src={flight.logo} alt={`${flight.airline} logo`} className="airline-logo w-16 h-16 object-contain bg-white dark:bg-gray-600 p-2 rounded-full" />
                <div className="flight-details text-center sm:text-left">
                  <p className="airline-name text-lg font-semibold">{flight.airline}</p>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-600 dark:text-gray-300">
                    <FaPlane className="text-purple-600 dark:text-purple-400" />
                    <p className="flight-route">{`${flight.from} ➡️ ${flight.to}`}</p>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-600 dark:text-gray-300">
                    <FaClock className="text-purple-600 dark:text-purple-400" />
                    <p className="flight-time">{`${flight.departureTime} - ${flight.arrivalTime}`}</p>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-600 dark:text-gray-300">
                    <FaExchangeAlt className="text-purple-600 dark:text-purple-400" />
                    <p className="flight-duration">{flight.duration}</p>
                  </div>
                  <p className="flight-layover text-sm text-gray-500 dark:text-gray-400">{flight.layover}</p>
                </div>
              </div>
              <div className="flight-price-details flex flex-col items-center sm:items-end space-y-2">
                <div className="flight-price text-2xl font-bold text-purple-600 dark:text-purple-400">
                  ${flight.price.toLocaleString()}
                </div>
                <span className="price-type text-sm text-gray-500 dark:text-gray-400">{flight.priceClass}</span>
                <div className="amenities flex space-x-2">
                  {flight.amenities.map((amenity, idx) => (
                    <span key={idx} title={amenity} className="text-lg">
                      {getAmenityIcon(amenity)}
                    </span>
                  ))}
                </div>
                <button className="view-details-button bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-md">
                  {expandedIndex === index ? '▲ Hide Details' : '▼ View Details'}
                </button>
              </div>
            </div>

            {/* Collapsible Flight Details */}
            {expandedIndex === index && flight.details.length > 0 && (
              <div className="flight-expanded-details bg-white dark:bg-gray-600 mt-4 p-4 rounded-lg">
                {flight.details.map((detail, idx) => (
                  <div key={idx} className="detail-item mb-4">
                    <div className="flex justify-between">
                      <p>{detail.departureDate}</p>
                      <p>{detail.arrivalDate}</p>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      <p>{detail.flightClass} - {detail.airplaneType}</p>
                      <p>{`Transit time: ${detail.transitTime}`}</p>
                    </div>
                    <hr className="my-2 border-gray-300 dark:border-gray-500" />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="load-more-button bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-400 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-colors duration-300 shadow-md">
          Show more
        </button>
      </div>
    </div>
  );
};

export default FlightListingPage;
