import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";
import Header from "./components/HomePage/Header";
import {
  Hero,
  Benefits,
  FeaturedPlacesToStay,
  Videos,
} from "./components/HomePage/Hero";
import Footer from "./components/HomePage/Footer";
import "./App.css";
import Booking from "./components/HomePage/calender/Booking";
import { HelmetProvider } from "react-helmet-async";
import FlightListingPage from "./components/FlightList/FlightListingPage";
import HotelListing from "./components/Services/HotelListing";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import PaymentMethod from "./components/UserInformation/paymentmethod";
import AccountInfo from "./components/UserInformation/AccountInfo";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white dark:from-gray-100 dark:to-gray-200 dark:text-gray-900 min-h-screen transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Header
                onAuthClick={() => {
                  /* Add your auth click handler here */
                }}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="mt-4 sm:mt-8 md:mt-12 lg:mt-16">
                      <Hero />
                      <Booking />
                      <section className="mb-16"></section>
                      <Benefits />
                      <FeaturedPlacesToStay />
                      <Videos />
                    </div>
                  }
                />
                <Route path="/flightlisting" element={<FlightListingPage />} />
                <Route path="/hotellisting" element={<HotelListing />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/paymentmethod" element={<PaymentMethod />} />
                <Route path="/accountinfo" element={<AccountInfo />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
