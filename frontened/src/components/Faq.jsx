import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'What does this platform do?',
      answer:
        'Our platform predicts the environmental impact of future construction—houses, industries, or power plants—before they’re built. This includes carbon footprint, expected climate changes, and ecological shifts.',
    },
    {
      question: 'How accurate are the carbon footprint predictions?',
      answer:
        'We use verified emission models, land use data, and machine learning to provide high-accuracy predictions based on your project’s type, size, and location.',
    },
    {
      question: 'Can I simulate future weather conditions after construction?',
      answer:
        'Yes! Our platform simulates microclimate changes that could result from your project and shows potential temperature, rainfall, and air quality shifts.',
    },
    {
      question: 'Does the tool account for existing or planned trees nearby?',
      answer:
        'Absolutely. We use satellite data and planning records to analyze vegetation density and project how it might change or affect your carbon footprint.',
    },
    {
      question: 'Is this tool suitable for both individuals and companies?',
      answer:
        'Yes. Whether you’re building a house or a large-scale power plant, our platform scales to your needs and provides customized environmental insights.',
    },
    {
      question: 'Can I export my carbon analysis report?',
      answer:
        'You can download detailed reports in PDF format, including carbon emission breakdowns, visual maps, and suggested mitigation steps.',
    },
    {
      question: 'Is the platform free to use?',
      answer:
        'We offer a free version with basic simulations. Premium access unlocks detailed projections, larger project capacities, and team collaboration tools.',
    },
    {
      question: 'How does the platform help me reduce emissions?',
      answer:
        'Alongside predictions, our platform offers mitigation tips—like sustainable material choices, optimal layouts, and vegetation integration—to lower your project’s emissions from the start.',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-start px-4 py-16 mt-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-sky-400 text-center tracking-wide">
        Frequently Asked Questions
      </h1>

      <div className="w-full max-w-4xl space-y-6">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className="border border-gray-700 rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <button
              className={`flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none transition-colors duration-300 ${
                openIndex === index
                  ? 'bg-gray-900'
                  : 'bg-gray-800 hover:bg-gray-900'
              }`}
            >
              <h2 className="text-base md:text-lg font-medium text-white flex-1">
                {item.question}
              </h2>
              <span className="text-xl md:text-2xl text-sky-400 ml-4 transform transition-transform duration-300">
                {openIndex === index ? '▲' : '▼'}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 py-4 bg-black text-gray-300 text-base leading-relaxed transition-all duration-300">
                {item.answer}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
