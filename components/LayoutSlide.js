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
        className='w-full h2 mb-4 xl:mb-4 font-longCang text-[42px] xl:text-7xl lowercase font-thin'
        style={{ wordSpacing: '-0.2em' }}
      >
        {text}<span className='text-redpinkAccent'>{punctuation}</span>
    </motion.h2>
  )
};
const LayoutSlide = ({ className, children }) => {
  // Combine className with other Tailwind classes
  const slideClass = `w-full h-full text-white text-xl font-gothamBook flex items-center justify-center ${className}`;

  return <div className={slideClass}>{children}</div>;
};

export default LayoutSlide;