
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CtaSection: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <section id="cta" className="py-24 bg-clara-lavender/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="max-w-3xl mx-auto text-center opacity-0 transition-opacity duration-700" 
          ref={ctaRef}
        >
          <h2 className="text-4xl font-light text-gray-900 mb-4">Join the Movement</h2>
          <p className="text-xl text-gray-600 mb-8">
            Be among the first to experience Clara and help shape the future of personal safety.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white border-gray-300 h-12"
              />
              <Button 
                className="bg-clara-gold text-white hover:bg-clara-gold/90 animate-pulse-glow h-12 clara-button"
              >
                Get Notified
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              We'll notify you when Clara is available for pre-order. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
