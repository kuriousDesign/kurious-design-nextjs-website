import React from 'react';

const OctopusStickFigure = ({ bodyColor='purple', suctionCupColor='red' }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="h-screen w-screen"
    >
      {/* Body */}
      <circle cx="50" cy="50" r="20" fill={bodyColor} />

      {/* Arms */}
      <line x1="30" y1="40" x2="10" y2="20" stroke={suctionCupColor} strokeWidth="5" />
      <line x1="70" y1="40" x2="90" y2="20" stroke={suctionCupColor} strokeWidth="5" />

      {/* Legs */}
      <line x1="30" y1="60" x2="10" y2="80" stroke={suctionCupColor} strokeWidth="5" />
      <line x1="70" y1="60" x2="90" y2="80" stroke={suctionCupColor} strokeWidth="5" />
    </svg>
  );
};

export default OctopusStickFigure;
