import React from 'react';

const facts = [
  { title: "💻 E-Waste Generation", content: "The average person generates about 7 kg (15 lbs) of e-waste per year, including old phones, laptops, chargers, etc." },
  { title: "🔌 Local Impact", content: "If 1000 people in a neighborhood threw away that much, that’s 7,000 kg (7 metric tons) of e-waste." },
  { title: "🌳 Carbon Offset", content: "To offset the carbon footprint of manufacturing and disposing of that much e-waste, you'd need to plant about 350 mature trees." },
  { title: "🏞️ Visualized Impact", content: "That’s a mini forest the size of a football field!" },
  { title: "☁️ Weather Connection", content: "Improper disposal of e-waste releases toxins and greenhouse gases, contributing to urban heat islands — making cities up to 7°C (13°F) hotter than nearby rural areas." },
];

const FactCard = ({ title, content }) => (
  <div
    className="w-80 max-w-xs shrink-0 bg-transparent text-white p-6 rounded-2xl mx-6 backdrop-blur-md hover:scale-105 transition duration-300 ease-in-out"
    style={{
      border: '2px solid #1de9b6',
      boxShadow: '0 0 20px rgba(29, 233, 182, 0.7)',
    }}
  >
    <h3 className="text-sm uppercase mb-2 tracking-wide" style={{ color: '#1de9b6' }}>
      Did you know?
    </h3>
    <h2 className="text-xl font-bold mb-3 leading-snug break-words">
      {title}
    </h2>
    <p className="text-base text-gray-200 break-words leading-normal">
      {content}
    </p>
  </div>
);

export default function Fact() {
  return (
    <div className="bg-black py-10 flex flex-col items-center">
      {/* Image section */}
      <img 
        src="/facts.jpeg" 
        alt="Sustainability Facts" 
        className="w-[410px] h-[141px] mb-8" 
      />

      {/* Marquee container */}
      <div className="relative overflow-hidden w-full">
        <div className="flex animate-marquee">
          {[...facts, ...facts].map((fact, index) => (
            <FactCard key={index} {...fact} />
          ))}
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
    </div>
  );
}
