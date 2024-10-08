import React, { useState, useEffect, useRef } from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking: React.FC = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(new Date());
  const [guests, setGuests] = useState(5);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(2);
  const [infants, setInfants] = useState(1);
  const [showGuestOptions, setShowGuestOptions] = useState(false);
  const guestOptionsRef = useRef<HTMLDivElement>(null);

  const toggleGuestOptions = () => setShowGuestOptions(!showGuestOptions);

  const incrementGuests = (type: string) => {
    if (type === 'adults') setAdults(adults + 1);
    if (type === 'children') setChildren(children + 1);
    if (type === 'infants') setInfants(infants + 1);
    setGuests(adults + children + infants + 1);
  };

  const decrementGuests = (type: string) => {
    if (type === 'adults' && adults > 0) setAdults(adults - 1);
    if (type === 'children' && children > 0) setChildren(children - 1);
    if (type === 'infants' && infants > 0) setInfants(infants - 1);
    setGuests(adults + children + infants - 1);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (guestOptionsRef.current && !guestOptionsRef.current.contains(event.target as Node)) {
        setShowGuestOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const customDatePickerStyles = `
    .react-datepicker {
      font-family: 'Arial', sans-serif;
      border: none;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      border-radius: 25px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      background: rgba(255, 255, 255, 0.25);
    }
    .react-datepicker__header {
      background-color: rgba(255, 255, 255, 0.1);
      border-bottom: none;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      padding-top: 8px;
    }
    .react-datepicker__day-name, .react-datepicker__day {
      width: 2.5rem;
      line-height: 2.5rem;
      margin: 0.166rem;
      color: #4B0082;
    }
    .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range {
      background-color: rgba(75, 0, 130, 0.8);
      color: white;
      border-radius: 50%;
    }
    .react-datepicker__day:hover {
      background-color: rgba(138, 43, 226, 0.5);
      border-radius: 50%;
    }
  `;

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-3/4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1 flex justify-between items-center w-4/5 h-20 rounded-full space-x-2 transition-all duration-300 shadow-lg z-20">
      <div className="w-full h-full bg-white dark:bg-gray-800 bg-opacity-20 dark:bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full flex justify-between items-center px-6 space-x-2">
        <style>{customDatePickerStyles}</style>
        
        {/* Check-in Date */}
        <div className="relative flex items-center space-x-2">
          <FaCalendarAlt className="text-lg text-indigo-900 dark:text-indigo-300 opacity-90" />
          <div>
            <p className="text-xs text-indigo-900 dark:text-indigo-300">Check in</p>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              dateFormat="dd MMM yyyy"
              className="text-sm font-bold bg-transparent focus:outline-none text-indigo-900 dark:text-indigo-300 cursor-pointer"
              popperPlacement="bottom"
              popperModifiers={[
                {
                  name: 'offset',
                  options: {
                    offset: [0, 8],
                  },
                },
              ]}
            />
          </div>
        </div>

        {/* Check-out Date */}
        <div className="relative flex items-center space-x-2">
          <FaCalendarAlt className="text-lg text-indigo-900 dark:text-indigo-300 opacity-90" />
          <div>
            <p className="text-xs text-indigo-900 dark:text-indigo-300">Check out</p>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              dateFormat="dd MMM yyyy"
              className="text-sm font-bold bg-transparent focus:outline-none text-indigo-900 dark:text-indigo-300 cursor-pointer"
              popperPlacement="bottom"
              popperModifiers={[
                {
                  name: 'offset',
                  options: {
                    offset: [0, 8],
                  },
                },
              ]}
            />
          </div>
        </div>

        {/* Guests */}
        <div className="relative flex items-center space-x-2" ref={guestOptionsRef}>
          <FaUser className="text-lg text-indigo-900 dark:text-indigo-300 opacity-90" />
          <div>
            <p className="text-xs text-indigo-900 dark:text-indigo-300">Guests</p>
            <div
              className="text-sm font-bold bg-transparent focus:outline-none text-indigo-900 dark:text-indigo-300 cursor-pointer"
              onClick={toggleGuestOptions}
            >
              {guests} Guests
            </div>

            {/* Guest Options Dropdown */}
            {showGuestOptions && (
              <div className="absolute top-12 right-0 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg p-4 rounded-3xl shadow-lg space-y-4 z-30 border border-indigo-300 dark:border-indigo-700">
                {/* Adults */}
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-300">Adults</p>
                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-indigo-600 transition-colors duration-200"
                      onClick={() => decrementGuests('adults')}
                    >
                      -
                    </button>
                    <p className="text-indigo-900 dark:text-indigo-300 w-8 text-center text-sm font-bold">{adults}</p>
                    <button
                      className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-indigo-600 transition-colors duration-200"
                      onClick={() => incrementGuests('adults')}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-300">Children</p>
                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-indigo-600 transition-colors duration-200"
                      onClick={() => decrementGuests('children')}
                    >
                      -
                    </button>
                    <p className="text-indigo-900 dark:text-indigo-300 w-8 text-center text-sm font-bold">{children}</p>
                    <button
                      className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-indigo-600 transition-colors duration-200"
                      onClick={() => incrementGuests('children')}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Infants */}
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-300">Infants</p>
                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-indigo-600 transition-colors duration-200"
                      onClick={() => decrementGuests('infants')}
                    >
                      -
                    </button>
                    <p className="text-indigo-900 dark:text-indigo-300 w-8 text-center text-sm font-bold">{infants}</p>
                    <button
                      className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-indigo-600 transition-colors duration-200"
                      onClick={() => incrementGuests('infants')}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search Button */}
        <button className="bg-indigo-600 p-3 rounded-full hover:bg-indigo-700 transition-colors duration-300">
          <FiSearch className="text-xl text-white" />
        </button>
      </div>
    </div>
  );
};

export default Booking;
