import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg dark:bg-gray-900 dark:bg-opacity-70'
        : 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900'
    } shadow-lg mb-8`}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center flex-shrink-0">
            <div className="text-2xl font-bold">
              <span className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300">.fis</span>
            </div>
          </div>
          <div className="hidden lg:block flex-grow">
            <div className="ml-10 flex items-center justify-center space-x-4">
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Home</Link>
              <Link to="/listing" className="text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">About</Link>
              <Link to="/templates" className="text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Services</Link>
              <Link to="/other" className="text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Contact Us</Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300 shadow-md">
              Sign up
            </button>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-purple-500 transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-gray-100 dark:bg-gray-800 rounded-b-lg shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:text-white dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Home</Link>
            <Link to="/listing" className="text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:text-white dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">About</Link>
            <Link to="/templates" className="text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:text-white dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Services</Link>
            <Link to="/other" className="text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:text-white dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Contact Us</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-300 dark:border-gray-700">
            <div className="flex items-center justify-between px-5 space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
              </button>
              <Link to="/login" className="text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 w-full text-center">Sign in</Link>
              <Link to="/signup" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300 shadow-md w-full text-center">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
