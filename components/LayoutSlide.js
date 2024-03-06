import React from 'react';

const LayoutSlide = ({ className, children }) => {
  // Combine className with other Tailwind classes
  const slideClass = `w-full h-full text-white text-xl flex text-center items-center justify-center ${className}`;

  return <div className={slideClass}>{children}</div>;
};

export default LayoutSlide;