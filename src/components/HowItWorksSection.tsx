
import React, { useEffect, useRef } from "react";
import { Send, PhoneCall, Navigation } from "lucide-react";

const steps = [
  {
    icon: <Send className="w-10 h-10 text-clara-lavender" />,
    title: "Button Press",
    description: "Discreetly press Clara's button once to activate emergency mode.",
  },
  {
    icon: <PhoneCall className="w-10 h-10 text-clara-lavender" />,
    title: "SMS/Call",
    description: "Clara automatically sends SOS messages and calls your emergency contacts.",
  },
  {
    icon: <Navigation className="w-10 h-10 text-clara-lavender" />,
    title: "Help Arrives",
    description: "Your contacts receive your exact location and can send immediate help.",
  },
];

const HowItWorksSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

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

    if (stepsRef.current) observer.observe(stepsRef.current);

    return () => {
      if (stepsRef.current) observer.unobserve(stepsRef.current);
    };
  }, []);

  return (
    <section 
      id="how-it-works" 
      className="py-24 bg-gray-50" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to ensure your safety and peace of mind.
          </p>
        </div>

        <div 
          className="relative opacity-0 transition-opacity duration-700" 
          ref={stepsRef}
        >
          {/* Timeline connector */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300/30 hidden md:block" style={{ transform: "translateY(-50%)", zIndex: 0 }}></div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center z-10 clara-card bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                style={{ animationDelay: `${0.3 * index}s` }}
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-md mb-6 border-4 border-gray-50 z-20">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
