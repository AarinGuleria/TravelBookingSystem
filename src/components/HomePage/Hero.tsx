// Homepage imports
import React from "react";

// Hero component
const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-900 dark:from-gray-100 dark:to-gray-200 py-20 sm:py-28 transition-colors duration-300">
      {/* Glassmorphism background for light theme */}
      <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg hidden dark:block"></div>

      {/* Royal blurred color circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 max-w-xl space-y-8 mb-12 lg:mb-0">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white dark:text-gray-800 leading-tight ">
              Discover Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 dark:from-purple-600 dark:to-indigo-700">
                Perfect Adventure
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 dark:text-gray-700 leading-relaxed">
              Embark on unforgettable journeys with .fis. From luxurious
              retreats to thrilling experiences, we've curated your dream
              vacation.
            </p>
            <div className="flex space-x-4">
              <button className="bg-indigo-600 dark:bg-indigo-700 text-white dark:text-gray-100 px-8 py-4 text-lg font-semibold rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-800 transition-all duration-300 shadow-lg transform hover:scale-105">
                Start Exploring
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-6 transform rotate-3 hover:rotate-0 transition-all duration-500">
              <img
                src="https://source.unsplash.com/random/400x300?luxury+hotel"
                alt="Luxury Hotel"
                className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Benefits component
const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 to-purple-900 dark:from-gray-100 dark:to-gray-200 transition-colors duration-300">
      {/* Glassmorphism background for light theme */}
      <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg hidden dark:block"></div>

      {/* Royal blurred color circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-end mb-12">
          <div className="text-right">
            <h2 className="text-3xl font-bold mb-2 text-purple-300 dark:text-purple-800 transition-colors duration-300">
              Benefits
            </h2>
            <h1 className="text-5xl font-extrabold text-white dark:text-gray-800 transition-colors duration-300 leading-tight">
              Happening
              <br />
              Cities
            </h1>
            <div className="w-24 h-1 bg-indigo-600 dark:bg-indigo-700 mt-4 ml-auto"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-indigo-800 dark:bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="bg-purple-700 dark:bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-white text-2xl">📣</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white dark:text-gray-800">
              Cost-effective advertising
            </h3>
            <p className="text-purple-300 dark:text-purple-700">
              With a free listing, you can advertise your rental with no upfront
              costs.
            </p>
          </div>
          <div className="bg-indigo-800 dark:bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="bg-purple-700 dark:bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🌍</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white dark:text-gray-800">
              Reach millions with Chis
            </h3>
            <p className="text-purple-300 dark:text-purple-700">
              Millions of people are searching for unique places to stay around
              the world.
            </p>
          </div>
          <div className="bg-indigo-800 dark:bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="bg-purple-700 dark:bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white dark:text-gray-800">
              Secure and simple
            </h3>
            <p className="text-purple-300 dark:text-purple-700">
              A Holiday Lettings listing gives you a secure and easy way to take
              bookings and payments online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// FeaturedPlacesToStay component
const FeaturedPlacesToStay: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = React.useState<string | null>(null);

  const places = [
    {
      title: "Entire cabin - 10 beds",
      name: "Best Western Cedars...",
      address: "1 Anzinger Court",
      price: "$28/night",
      rating: 28,
      description: "A cozy cabin nestled in the woods, perfect for large groups or family gatherings.",
    },
    {
      title: "Entire cabin - 6 beds",
      name: "Bell By Greene King Inns",
      address: "32923 Judy Hill",
      price: "$250/night",
      rating: 45,
      description: "Charming inn with a rustic feel, offering comfort and a taste of local hospitality.",
    },
    {
      title: "Luxury apartment - 3 beds",
      name: "The Ritz-Carlton Residences",
      address: "15 Central Park West",
      price: "$500/night",
      rating: 49,
      description: "Opulent city living with breathtaking views and world-class amenities.",
    },
    {
      title: "Beachfront villa - 8 beds",
      name: "Sunset Paradise Resort",
      address: "789 Ocean Drive",
      price: "$350/night",
      rating: 47,
      description: "Luxurious beachfront property offering stunning ocean views and direct beach access.",
    },
    {
      title: "Mountain chalet - 5 beds",
      name: "Alpine Lodge Retreat",
      address: "42 Evergreen Lane",
      price: "$180/night",
      rating: 41,
      description: "Scenic mountain getaway perfect for ski enthusiasts and nature lovers.",
    },
    {
      title: "City loft - 2 beds",
      name: "Urban Oasis Suites",
      address: "567 Downtown Avenue",
      price: "$150/night",
      rating: 39,
      description: "Modern loft in the heart of the city, ideal for urban explorers and business travelers.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 to-purple-900 dark:from-gray-100 dark:to-gray-200 transition-colors duration-300">
      <div className="absolute inset-0 bg-white bg-opacity-100 backdrop-filter backdrop-blur-lg hidden dark:block"></div>

      <div className="absolute top-0 right-0 w-128 h-128 bg-royal-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-128 h-128 bg-royal-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold mb-2 text-white dark:text-gray-800 transition-colors duration-300">
          Featured places to stay
        </h2>
        <p className="text-xl text-purple-300 dark:text-purple-700 mb-8">
          Popular places that .fis recommends for your next adventure
        </p>

        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          {["New York", "Tokyo", "Paris", "London"].map((city) => (
            <button
              key={city}
              className="px-6 py-2 bg-indigo-800 bg-opacity-50 dark:bg-indigo-700 dark:bg-opacity-75 backdrop-filter backdrop-blur-lg text-white dark:text-gray-100 rounded-full hover:bg-opacity-50 dark:hover:bg-opacity-50 transition-all duration-300 shadow-md"
            >
              {city}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <div
              key={index}
              className="bg-indigo-800 bg-opacity-20 dark:bg-white dark:bg-opacity-90 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              onClick={() => setSelectedPlace(place.name)}
            >
              <img
                src={`https://source.unsplash.com/random/600x400?hotel,${index}`}
                alt={place.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-purple-300 dark:text-purple-700">
                  {place.title}
                </h3>
                <h4 className="text-xl font-bold mb-2 text-white dark:text-gray-800">
                  {place.name}
                </h4>
                <p className="text-indigo-300 dark:text-indigo-700 mb-4">
                  {place.address}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-white dark:text-gray-800 font-bold">
                    {place.price}
                  </p>
                  <div className="flex items-center bg-purple-700 dark:bg-purple-600 rounded-full px-3 py-1">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-white">{place.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedPlace && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-2xl w-full">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                {places.find(place => place.name === selectedPlace)?.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {places.find(place => place.name === selectedPlace)?.description}
              </p>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-800 dark:text-white font-bold">
                  {places.find(place => place.name === selectedPlace)?.price}
                </p>
                <div className="flex items-center bg-purple-700 rounded-full px-3 py-1">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span className="text-white">
                    {places.find(place => place.name === selectedPlace)?.rating}
                  </span>
                </div>
              </div>
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-300"
                onClick={() => setSelectedPlace(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Videos component
const Videos: React.FC = () => {
  const [mainVideo, setMainVideo] = React.useState({
    title: "Luxury Resort Tour",
    views: "1.2M views",
    duration: "15:30",
    category: "Luxury",
    index: 0,
  });

  const videos = [
    {
      title: "Luxury Resort Tour",
      views: "1.2M views",
      duration: "15:30",
      category: "Luxury",
    },
    {
      title: "Adventure Travel Guide",
      views: "890K views",
      duration: "12:45",
      category: "Adventure",
    },
    {
      title: "Hidden Gems of Europe",
      views: "2.5M views",
      duration: "20:15",
      category: "Exploration",
    },
    {
      title: "Culinary Journey",
      views: "1.8M views",
      duration: "18:20",
      category: "Food & Culture",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 dark:from-gray-100 dark:to-gray-200 transition-colors duration-300">
      {/* Glassmorphism background for light theme */}
      <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg hidden dark:block"></div>

      {/* Royal blurred color circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-royal-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-4">
            Explore Our Captivating Videos
          </h2>
          <p className="text-xl text-indigo-300 dark:text-indigo-700 max-w-2xl mx-auto">
            Immerse yourself in stunning visuals and inspiring stories from
            around the world.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="relative aspect-video bg-indigo-800 bg-opacity-20 dark:bg-white dark:bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg overflow-hidden">
              <img
                src={`https://source.unsplash.com/random/1200x800?travel,${mainVideo.index}`}
                alt={mainVideo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-white opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  {mainVideo.title}
                </h3>
                <div className="flex justify-between items-center">
                  <span>{mainVideo.views}</span>
                  <span className="bg-indigo-600 px-2 py-1 rounded-full text-sm">
                    {mainVideo.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 space-y-4">
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex bg-indigo-800 bg-opacity-20 dark:bg-white dark:bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-102"
                onClick={() => setMainVideo({ ...video, index })}
              >
                <div className="w-1/3 relative">
                  <img
                    src={`https://source.unsplash.com/random/300x200?travel,${index}`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="w-2/3 p-3">
                  <h4 className="text-sm font-semibold text-white dark:text-gray-800 mb-1 line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-xs text-indigo-300 dark:text-indigo-700">
                    {video.views}
                  </p>
                  <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full mt-1 inline-block">
                    {video.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero, Benefits, FeaturedPlacesToStay, Videos };
