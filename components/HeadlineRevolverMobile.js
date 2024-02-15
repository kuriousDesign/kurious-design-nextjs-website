import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const headlines = [
  { text: "Creative Tech", blurb: "becomes robotic" },
  { text: "Interactive Mechatronics", blurb: "for physical experiences" },
  { text: "Reactive Exhibits", blurb: "coordinate motion and light" },
  { text: "Experimental Approach", blurb: "combining new technologies to stay novel" },
  { text: "Remember!", blurb: "contractors are real people too" },
];

const HeadlineRevolver = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 3000); // Change headline every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden">
      <div className="relative w-full">
        {headlines.map((headline, index) => (
          <motion.div
            key={index}
            initial={{ opacity: index === activeIndex ? 1 : 0, x: index % 2 === 0 ? 0 : -20 }}
            animate={{ opacity: index === activeIndex ? 1 : 0, x: index === activeIndex ? 0 : (index % 2 === 0 ? 0 : -20) }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-redpinkAccent"
            style={{
              zIndex: index === activeIndex ? 1 : 0,
              textAlign: 'left',
            }}
          >
            <motion.div
              initial={{ opacity: index === activeIndex ? 1 : 0, y: index === activeIndex ? 0 : 20 }}
              animate={{ opacity: index === activeIndex ? 1 : 0, y: index === activeIndex ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index === activeIndex ? 0.5 : 0 }}
              className="mb-2"
            >
              {headline.text}
            </motion.div>
            <motion.div
              initial={{ opacity: index === activeIndex ? 1 : 0 }}
              animate={{ opacity: index === activeIndex ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index === activeIndex ? 0.8 : 0 }}
              className="text-sm text-blue-300"
            >
              {headline.blurb}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeadlineRevolver;
