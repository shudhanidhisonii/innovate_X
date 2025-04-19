import React from 'react';

const CardComponent = () => {
  const cardsData = [
    {
      size: 'small',
      icon: '🏢',
      title: 'Green AI Buildings',
      desc: 'Rate buildings for sustainability energy, material, and waste metrics.',
      link: 'https://huggingface.co/spaces/aasthaaaaa123/Greenai',
      label: 'Explore',
    },
    {
      size: 'medium',
      icon: '🗑️',
      title: 'Garbage Predictor',
      desc: 'Estimate garbage generation using machine learning and adjust local collection systems accordingly.',
      link: 'https://huggingface.co/spaces/Devanshiiiiii/garbageai',
      label: 'Try Tool',
    },
    {
      size: 'large',
      icon: '🌦️',
      title: 'Weather & AQI',
      desc: 'Get real-time weather and air quality data from APIs like OpenWeather and IQAir to help plan smarter.',
      link: 'https://huggingface.co/spaces/aasthaaaaa123/weatherforecasting123',
      label: 'Check Now',
    },
    {
      size: 'medium',
      icon: '🌍',
      title: 'Carbon Emission',
      desc: 'Predict carbon emissions in your locality using advanced models and environmental datasets.',
      link: 'https://huggingface.co/spaces/Devanshiiiiii/carbonemission',
      label: 'Calculate',
    },
    {
      size: 'small',
      icon: '🔌',
      title: 'EV Mapping',
      desc: 'Locate EV charging stations and access public transport info powered by smart mapping APIs.',
      link: 'https://huggingface.co/spaces/aasthaaaaa123/electricvehicle',
      label: 'Locate',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen py-15 px-5 font-['Poppins'] flex flex-col items-center">
      {/* Heading Image */}
      <img src="/stats1.jpg" alt="Project Heading" className="w-[410px] h-[141px] object-contain mb-10" />

      <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 py-6 lg:overflow-x-auto lg:flex-nowrap justify-center">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`relative z-0 bg-[#1a1a1a] border-2 border-[#00e676] shadow-[0_6px_15px_rgba(0,255,100,0.15)] rounded-2xl text-center text-white transition-all ease-in-out px-6 py-8 flex flex-col justify-between hover:translate-y-[-8px] hover:shadow-[0_10px_25px_rgba(0,255,150,0.3)] 
              w-full max-w-[90%] mx-auto lg:mx-0 lg:self-center
              ${card.size === 'large' ? 'lg:w-[20rem] lg:h-[28rem] text-xl' : ''}
              ${card.size === 'medium' ? 'lg:w-[18rem] lg:h-[26rem] text-lg' : ''}
              ${card.size === 'small' ? 'lg:w-[15rem] lg:h-[22rem] text-base' : ''}
            `}
          >
            <div>
              <div
                className={`text-[#7fffd4] mb-4
                  ${card.size === 'large' ? 'text-5xl' : ''}
                  ${card.size === 'medium' ? 'text-4xl' : ''}
                  ${card.size === 'small' ? 'text-4xl' : ''}
                `}
              >
                {card.icon}
              </div>
              <p
                className={`font-semibold mb-2
                  ${card.size === 'large' ? 'text-xl' : ''}
                  ${card.size === 'medium' ? 'text-lg' : ''}
                  ${card.size === 'small' ? 'text-base' : ''}
                `}
              >
                {card.title}
              </p>
              <p
                className={`text-gray-400 mt-4 px-2 leading-relaxed
                  ${card.size === 'large' ? 'text-base' : ''}
                  ${card.size === 'medium' ? 'text-sm' : ''}
                  ${card.size === 'small' ? 'text-sm' : ''}
                `}
              >
                {card.desc}
              </p>
            </div>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-6 bg-gradient-to-r from-[#00e676] to-[#1de9b6] text-black py-3 px-6 rounded-full font-semibold inline-block transition-all ease-in-out text-lg shadow-[0_4px_12px_rgba(0,255,150,0.3)] hover:scale-[1.03] hover:translate-y-[-3px] cursor-pointer"
            >
              {card.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
