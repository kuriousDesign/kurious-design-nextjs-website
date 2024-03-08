import { motion } from 'framer-motion';
import React from 'react';
import { fadeIn } from '../variants';

export const SlideHeading = ({ text, punctuation = '.' }) => {
  return (       
    <motion.h2
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='h2 mb-8 xl:mb-0 font-permanentMarker'
      >
        {text} <span className='text-redpinkAccent'>{punctuation}</span>
    </motion.h2>
  )
};
const LayoutSlide = ({ className, children }) => {
  // Combine className with other Tailwind classes
  const slideClass = `w-full h-full text-white text-xl flex text-center items-center justify-center ${className}`;

  return <div className={slideClass}>{children}</div>;
};

export default LayoutSlide;