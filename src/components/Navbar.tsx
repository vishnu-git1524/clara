import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "py-2 bg-white/90 backdrop-blur-sm shadow-sm" : "py-4 bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-semibold text-gray-900">
              Clara<span className="text-clara-gold">.</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
              Testimonials
            </a>
            <a href="#vision" className="text-gray-600 hover:text-gray-900 transition-colors">
              Vision
            </a>
          </div>

          <div>
            <Button className="bg-clara-lavender text-gray-900 hover:bg-clara-lavender/90 clara-button">Learn More</Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;