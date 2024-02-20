import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const headlines = [
  { text: "Creative Tech", blurb: "becomes robotic" },
  { text: "Interactive Mechatronics", blurb: "for physical experiences" },
  { text: "Reactive Exhibits", blurb: "coordinate motion and light" },
  { text: "Experimental Approach", blurb: "combining new technologies to stay novel" },
  { text: "Remember!", blurb: "contractors are real people too" },
];

export const HeadlineRevolver = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 3000); // Change headline every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const distance = -10;
  const yDistance = 20;

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full">
        {headlines.map((headline, index) => (
          <motion.div
            key={index}
            initial={{ opacity: index === activeIndex ? 1 : 0, x: index % 2 === 0 ? 0 : distance }}
            animate={{ opacity: index === activeIndex ? 1 : 0, x: index === activeIndex ? 0 : (index % 2 === 0 ? 0 : distance) }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-redpinkAccent font-permanentMarker text-opacity-80"
            style={{
              zIndex: index === activeIndex ? 1 : 0,
              textAlign: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: index === activeIndex ? 1 : 0, y: index === activeIndex ? 0 : yDistance }}
              animate={{ opacity: index === activeIndex ? 1 : 0, y: index === activeIndex ? 0 : yDistance }}
              transition={{ duration: 0.5, delay: index === activeIndex ? 0.5 : 0 }}
              className="mb-2 font-permanentMarker"
            >
              {headline.text}
            </motion.div>
            <motion.div
              initial={{ opacity: index === activeIndex ? 1 : 0 }}
              animate={{ opacity: index === activeIndex ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index === activeIndex ? 0.8 : 0 }}
              className="font-gothamBook text-[16px] text-blue-300"
            >
              {headline.blurb}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export const HeadlineRevolverMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 3000); // Change headline every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-full w-full ">
      <div className="relative w-full">
        {headlines.map((headline, index) => (
          <div
            key={index}
            className={`text-3xl text-center font-bold text-redpinkAccent font-permanentMarker text-opacity-80 absolute left-1/2 top-1/2 transform -translate-x-1/2 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="mb-2 font-permanentMarker">
              {headline.text}
            </div>
            <div className="font-gothamBook text-[16px] text-blue-300">
              {headline.blurb}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};