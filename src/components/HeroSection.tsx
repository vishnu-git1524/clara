
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-soft pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in-up section-delay-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900">
              Clara<span className="text-clara-gold">—</span><br />
              <span className="font-medium">Safety at One Press.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              A discreet smart device designed to protect and empower women everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-clara-lavender text-gray-900 hover:bg-clara-lavender/90 px-8 py-6 text-lg animate-pulse-glow clara-button"
                size="lg"
              >
                Learn More
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-300 hover:bg-gray-50 px-8 py-6 text-lg clara-button"
                size="lg"
                disabled
              >
                Watch Video
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center opacity-0 animate-fade-in section-delay-2">
            <div className="w-48 h-48 bg-clara-pink rounded-full opacity-20 absolute blur-3xl"></div>
            <div className="w-64 h-64 bg-clara-blue rounded-full opacity-20 absolute blur-3xl -translate-x-20 translate-y-20"></div>
            <div className="relative z-10 animate-float">
              <div className="w-32 h-56 bg-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-white">
                <div className="w-16 h-16 rounded-full bg-clara-gold flex items-center justify-center">
                  <span className="text-white font-medium">C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
