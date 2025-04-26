
import React, { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";

const statsData = [
  { value: "81%", label: "of women have experienced harassment" },
  { value: "53%", label: "feel unsafe walking alone at night" },
  { value: "1 in 5", label: "women has been a victim of attempted or completed assault" },
];

const featuresData = [
  { title: "SOS SMS", description: "Send emergency texts to your trusted contacts with your exact location" },
  { title: "Auto-Call", description: "Automatically calls emergency services or your personal contacts" },
  { title: "GPS Tracking", description: "Real-time location tracking for immediate assistance" },
];

const ProblemSolutionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);

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

    if (statsRef.current) observer.observe(statsRef.current);
    if (solutionRef.current) observer.observe(solutionRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
      if (solutionRef.current) observer.unobserve(solutionRef.current);
    };
  }, []);

  return (
    <section id="problem-solution" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">The Reality</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Women face unique safety challenges every day.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 opacity-0 transition-opacity duration-700" 
          ref={statsRef}
        >
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center clara-card"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">How Clara Helps</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple solution for complex safety concerns.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 transition-opacity duration-700" 
          ref={solutionRef}
        >
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-b from-white to-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 clara-card"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-clara-lavender mb-6 mx-auto">
                <CheckCircle className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
