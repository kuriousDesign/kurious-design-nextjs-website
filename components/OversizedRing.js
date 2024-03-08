import React from 'react';

// full page component  that is transparent background and a colored ring that is larger than screen but cuts off all that is outside of the screen
// This is a div component that is a ring whose outer diameter is larger than the screen
// The ring is centered in the middle of the screen
// The ring is larger than the screen
// The overflow is hidden, so must use a parent to control this
// the outer diameter of the right is passed as a variable, and is measured in vw
// the thickness of the ring is passed as a variable and is measured in vw
// the color of the ring is passed as a variable using tailwindcss color names



  export const SvgRing = ({ outerDiameterPx=100, thicknessPx=20, color='#ff0000', opacity=1.0 }) => {
    return (
      <div className={`"w-[${outerDiameterPx}px] h-[${outerDiameterPx}px]"`}>
        <svg
          viewBox={`0 0 ${outerDiameterPx} ${outerDiameterPx}`}
          width={`${outerDiameterPx}`}
          height={`${outerDiameterPx}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx={outerDiameterPx / 2}
            cy={outerDiameterPx / 2}
            r={outerDiameterPx / 2 - thicknessPx / 2}
            fill="none"
            stroke={color}
            strokeWidth={thicknessPx}
            strokeOpacity={opacity}
          />
          <circle
            cx={outerDiameterPx / 2}
            cy={outerDiameterPx / 2}
            r={outerDiameterPx / 2 - thicknessPx}
            fill="none"
            stroke="transparent"
            strokeWidth="1" // Make inner circle very thin to act as a cutout
          />
        </svg>
      </div>
    );
  };

  const OversizedRing = () => {
    return (
        <div className={`absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-[70vh] h-[70vh] rounded-full bg-black bg-opacity-20`} />
    );
  }

export default OversizedRing;
