
import React, { useEffect, useRef } from "react";
import { WifiOff, CloudOff, MicOff, BatteryFull } from "lucide-react";

const featuresData = [
  {
    icon: <WifiOff className="w-8 h-8" />,
    title: "Works Offline",
    description: "Functions without WiFi or cellular data in emergency situations.",
  },
  {
    icon: <MicOff className="w-8 h-8" />,
    title: "Discreet Activation",
    description: "Silent operation lets you call for help without alerting others.",
  },
  {
    icon: <CloudOff className="w-8 h-8" />,
    title: "Real-time GPS",
    description: "Precise location tracking even in challenging environments.",
  },
  {
    icon: <BatteryFull className="w-8 h-8" />,
    title: "Long Battery Life",
    description: "Up to 7 days of standby time for reliable protection.",
  },
];

const FeaturesSection: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

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

    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => {
      if (featuresRef.current) observer.unobserve(featuresRef.current);
    };
  }, []);

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Features Highlight</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed with your safety and peace of mind as our priority.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0 transition-opacity duration-700" 
          ref={featuresRef}
        >
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-xl bg-white border border-gray-100 shadow-sm clara-card flex flex-col items-center text-center"
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-clara-lavender/20 flex items-center justify-center mb-6">
                <div className="text-gray-900">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
