import React from 'react';

const SustainabilityExplorer = () => {
  return (
    <div className="bg-black text-white font-sans py-10 px-5 overflow-hidden">
      {/* Centered Heading Image */}
      <div className="text-center mb-8 md:mb-10"> {/* Adjusted margin for larger screens */}
        <img
          src="/blogs 1.jpeg"
          alt="Blogs Heading"
          className="w-[90%] max-w-[410px] h-auto object-cover shadow-none mx-auto"
        />
      </div>

      {/* Responsive Card Layout */}
      <div className="scroll-container flex flex-col md:flex-row gap-4 md:gap-6 pb-8 md:overflow-x-auto md:scroll-smooth md:justify-start lg:justify-around">
        {/* Card 1 */}
        <div className="card flex-shrink-0 w-full max-w-md md:w-[calc(45%-8px)] lg:w-[22%] bg-[#1a1a1a] rounded-2xl overflow-hidden transition-transform ease-in-out duration-300 shadow-[0_4px_12px_rgba(0,255,100,0.08)] hover:scale-105 hover:shadow-[0_10px_30px_rgba(46,204,113,0.35)] h-auto md:h-[420px] p-6 text-center relative">
          <img
            src="https://th.bing.com/th/id/OIP.xg3cYJpIKuIZg4vLl4XnKAAAAA?rs=1&pid=ImgDetMain"
            alt="NDVI Green Cover"
            className="w-full h-[190px] object-cover rounded-xl block mb-5"
          />
          <div className="card-content py-2">
            <h2 className="text-lg text-[#7fffd4] mb-3 font-semibold">Green Cover with NDVI</h2>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">Analyze green zones and vegetation health through NDVI satellite data.</p>
            <a
              href="https://greenenergyhub.com/green-energy-blogs/"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more inline-block px-6 py-2.5 bg-gradient-to-r from-[#00e676] to-[#1de9b6] text-black font-semibold rounded-full transition-all ease-in-out duration-300 shadow-[0_4px_10px_rgba(0,255,150,0.3)] hover:translate-y-[-3px] hover:scale-[1.03] text-sm"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card flex-shrink-0 w-full max-w-md md:w-[calc(45%-8px)] lg:w-[22%] bg-[#1a1a1a] rounded-2xl overflow-hidden transition-transform ease-in-out duration-300 shadow-[0_4px_12px_rgba(0,255,100,0.08)] hover:scale-105 hover:shadow-[0_10px_30px_rgba(46,204,113,0.35)] h-auto md:h-[420px] p-6 text-center relative">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5f3b08d4515c242514c95656/f7890c9c-7fcc-439b-b285-5d1328b375c1/commercial-ev-charging-station.jpg"
            alt="EV Charging Station"
            className="w-full h-[190px] object-cover rounded-xl block mb-5"
          />
          <div className="card-content py-2">
            <h2 className="text-lg text-[#7fffd4] mb-3 font-semibold">EV Charging</h2>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">Find locations of electric vehicle charging stations across cities.</p>
            <a
              href="https://www.ampcontrol.io/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more inline-block px-6 py-2.5 bg-gradient-to-r from-[#00e676] to-[#1de9b6] text-black font-semibold rounded-full transition-all ease-in-out duration-300 shadow-[0_4px_10px_rgba(0,255,150,0.3)] hover:translate-y-[-3px] hover:scale-[1.03] text-sm"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card flex-shrink-0 w-full max-w-md md:w-[calc(45%-8px)] lg:w-[22%] bg-[#1a1a1a] rounded-2xl overflow-hidden transition-transform ease-in-out duration-300 shadow-[0_4px_12px_rgba(0,255,100,0.08)] hover:scale-105 hover:shadow-[0_10px_30px_rgba(46,204,113,0.35)] h-auto md:h-[420px] p-6 text-center relative">
          <img
            src="https://images.pexels.com/photos/14567781/pexels-photo-14567781.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Air Quality Index"
            className="w-full h-[190px] object-cover rounded-xl block mb-5"
          />
          <div className="card-content py-2">
            <h2 className="text-lg text-[#7fffd4] mb-3 font-semibold">Air Quality Index (AQI)</h2>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">Track real-time pollution levels for healthier urban living.</p>
            <a
              href="https://bloggers.feedspot.com/air_quality_blogs/"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more inline-block px-6 py-2.5 bg-gradient-to-r from-[#00e676] to-[#1de9b6] text-black font-semibold rounded-full transition-all ease-in-out duration-300 shadow-[0_4px_10px_rgba(0,255,150,0.3)] hover:translate-y-[-3px] hover:scale-[1.03] text-sm"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card flex-shrink-0 w-full max-w-md md:w-[calc(45%-8px)] lg:w-[22%] bg-[#1a1a1a] rounded-2xl overflow-hidden transition-transform ease-in-out duration-300 shadow-[0_4px_12px_rgba(0,255,100,0.08)] hover:scale-105 hover:shadow-[0_10px_30px_rgba(46,204,113,0.35)] h-auto md:h-[420px] p-6 text-center relative">
          <img
            src="https://media.istockphoto.com/id/2176216830/photo/concord-california-elevated-skyline-view-with-bart-train.webp?a=1&b=1&s=612x612&w=0&k=20&c=rc7zAjQAjSxZ2BTULIZtUxrGGIaF4AiwKFVkxq0HR30="
            alt="Public Transit"
            className="w-full h-[190px] object-cover rounded-xl block mb-5"
          />
          <div className="card-content py-2">
            <h2 className="text-lg text-[#7fffd4] mb-3 font-semibold">Public Transit Access</h2>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">Explore the availability of green transportation options in cities.</p>
            <a
              href="https://bloggers.feedspot.com/mass_transit_blogs/"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more inline-block px-6 py-2.5 bg-gradient-to-r from-[#00e676] to-[#1de9b6] text-black font-semibold rounded-full transition-all ease-in-out duration-300 shadow-[0_4px_10px_rgba(0,255,150,0.3)] hover:translate-y-[-3px] hover:scale-[1.03] text-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityExplorer;