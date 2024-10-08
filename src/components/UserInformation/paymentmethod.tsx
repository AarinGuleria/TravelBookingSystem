import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCreditCard, FaPaypal, FaApplePay, FaGooglePay } from 'react-icons/fa';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { useTheme } from '../../Context/ThemeContext';

const PaymentMethod: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const paymentMethods = [
    { name: 'Credit Card', icon: FaCreditCard },
    { name: 'PayPal', icon: FaPaypal },
    { name: 'Apple Pay', icon: FaApplePay },
    { name: 'Google Pay', icon: FaGooglePay },
    { name: 'UPI', icon: RiSecurePaymentLine },
  ];

  const containerClass = `max-w-2xl mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10 p-4 sm:p-6 rounded-lg shadow-lg ${
    isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
  }`;

  const buttonClass = `w-full py-2 sm:py-3 px-3 sm:px-4 rounded-md transition-colors duration-300 ${
    isDarkMode
      ? 'bg-purple-600 text-white hover:bg-purple-700'
      : 'bg-purple-500 text-white hover:bg-purple-600'
  }`;

  const methodClass = (method: string) => `
    flex items-center p-3 sm:p-4 rounded-md cursor-pointer transition-colors duration-300
    ${selectedMethod === method
      ? isDarkMode
        ? 'bg-purple-700 text-white'
        : 'bg-purple-100 text-purple-700'
      : isDarkMode
      ? 'bg-gray-700 text-white hover:bg-gray-600'
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }
  `;

  const inputClass = `w-full p-2 rounded border ${
    isDarkMode
      ? 'bg-gray-700 text-white border-gray-600'
      : 'bg-white text-gray-900 border-gray-300'
  } focus:outline-none focus:ring-2 focus:ring-purple-500`;

  const renderPaymentForm = () => {
    switch (selectedMethod) {
      case 'Credit Card':
        return (
          <div className="mt-4 space-y-4">
            <input type="text" placeholder="Card Number" className={inputClass} />
            <div className="flex space-x-4">
              <input type="text" placeholder="MM/YY" className={`${inputClass} w-1/2`} />
              <input type="text" placeholder="CVV" className={`${inputClass} w-1/2`} />
            </div>
            <input type="text" placeholder="Cardholder Name" className={inputClass} />
          </div>
        );
      case 'PayPal':
        return (
          <div className="mt-4">
            <p>You will be redirected to PayPal to complete your payment.</p>
          </div>
        );
      case 'Apple Pay':
        return (
          <div className="mt-4">
            <p>Please confirm payment with your Apple device.</p>
          </div>
        );
      case 'Google Pay':
        return (
          <div className="mt-4">
            <p>Please confirm payment with your Google Pay account.</p>
          </div>
        );
      case 'UPI':
        return (
          <div className="mt-4">
            <input type="text" placeholder="Enter UPI ID" className={inputClass} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={containerClass}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center mt-16">Select Payment Method</h2>
      <div className="space-y-3 sm:space-y-4">
        {paymentMethods.map((method) => (
          <motion.div
            key={method.name}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={methodClass(method.name)}
            onClick={() => setSelectedMethod(method.name)}
          >
            <method.icon className="text-xl sm:text-2xl mr-3 sm:mr-4" />
            <span className="text-sm sm:text-base">{method.name}</span>
          </motion.div>
        ))}
      </div>
      {selectedMethod && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          {renderPaymentForm()}
        </motion.div>
      )}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${buttonClass} mt-4 sm:mt-6 text-sm sm:text-base`}
        disabled={!selectedMethod}
      >
        {selectedMethod ? `Pay with ${selectedMethod}` : 'Select a payment method'}
      </motion.button>
    </motion.div>
  );
};

export default PaymentMethod;
