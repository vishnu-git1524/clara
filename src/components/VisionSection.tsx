
import React, { useEffect, useRef } from "react";
import { Check } from "lucide-react";

const futureFeatures = [
  "Geo-fencing alerts and safe zones",
  "AI-powered threat detection",
  "Seamless app integration for customization",
  "Enhanced biometric authentication",
  "Community safety network integration",
  "Voice-activated emergency mode"
];

const VisionSection: React.FC = () => {
  const visionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLUListElement>(null);

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

    if (visionRef.current) observer.observe(visionRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => {
      if (visionRef.current) observer.unobserve(visionRef.current);
      if (featuresRef.current) observer.unobserve(featuresRef.current);
    };
  }, []);

  return (
    <section id="vision" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div 
              className="opacity-0 transition-opacity duration-700" 
              ref={visionRef}
            >
              <div className="mb-6">
                <span className="inline-block bg-clara-lavender/30 text-gray-900 text-sm px-3 py-1 rounded-full">
                  The Future
                </span>
              </div>
              <h2 className="text-4xl font-light text-gray-900 mb-4">Our Vision Forward</h2>
              <p className="text-xl text-gray-600 mb-8">
                Clara is evolving to provide even more comprehensive safety features. Our roadmap includes advanced technologies to keep you connected, protected, and empowered.
              </p>
              <div className="relative">
                <div className="w-64 h-64 bg-clara-pink rounded-full opacity-20 absolute blur-3xl -translate-x-10 -translate-y-10"></div>
                <div className="w-64 h-64 bg-clara-blue rounded-full opacity-20 absolute blur-3xl translate-x-20 translate-y-10"></div>
                <div className="relative z-10 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-4xl font-light text-gray-400">Clara 2.0</span>
                  </div>
                </div>
              </div>
            </div>
            
            <ul 
              className="space-y-4 opacity-0 transition-opacity duration-700" 
              ref={featuresRef}
            >
              {futureFeatures.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm clara-card"
                  style={{ animationDelay: `${0.15 * index}s` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-clara-lavender/30 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-gray-900" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
