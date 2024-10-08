import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/HomePage/Header";
import { Hero, Benefits, FeaturedPlacesToStay, Videos } from "./components/HomePage/Hero";
import PageSignUp from "./components/Authentication/PageSignUp";
import PageLogin from "./components/Authentication/PageLogin";
import Footer from "./components/HomePage/Footer";
import "./App.css";
import Booking from "./components/HomePage/calender/Booking";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white dark:from-gray-100 dark:to-gray-200 dark:text-gray-900 min-h-screen transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
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
            <Route path="/signup" element={<PageSignUp />} />
            <Route path="/login" element={<PageLogin />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
