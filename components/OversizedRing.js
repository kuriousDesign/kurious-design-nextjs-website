import React from 'react';

// full page component  that is transparent background and a colored ring that is larger than screen but cuts off all that is outside of the screen
// This is a div component that is a ring whose outer diameter is larger than the screen
// The ring is centered in the middle of the screen
// The ring is larger than the screen
// The overflow is hidden, so must use a parent to control this
// the outer diameter of the right is passed as a variable, and is measured in vw
// the thickness of the ring is passed as a variable and is measured in vw
// the color of the ring is passed as a variable using tailwindcss color names
export const LargeCircleSVG = ({ width, ringThickness }) => {
    return (
      <svg
        width={width}
        height={width}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="45" // Adjusted to ensure the circle fits within the SVG
          fill="none"
          stroke="green"
          strokeWidth={ringThickness}
          opacity="0.5"
        />
      </svg>
    );
  }


const CircleSVG = ({ width }) => {
    return (
      <svg
        width={width}
        height={width}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="100" // Adjusted to ensure the circle fits within the SVG
          fill="none"
          stroke="green"
          strokeWidth="8"
          opacity="0.5"
        />
      </svg>
    );
  };

  export const ColoredRing = ({ outerDiameter, thickness, color }) => {
    // Calculate the inner diameter by subtracting the thickness from the outer diameter
    const innerDiameter = outerDiameter - thickness;
  
    return (
      <div className="w-full h-full fixed inset-0 overflow-hidden flex justify-center items-center">
        <div
          className={`relative w-${outerDiameter}vw h-${outerDiameter}vw`}
          style={{ minWidth: '100vw', minHeight: '100vh' }}
        >
          <div
            className={`absolute inset-0 flex justify-center items-center rounded-full`}
            style={{
              width: `${innerDiameter}vw`,
              height: `${innerDiameter}vw`,
              backgroundColor: 'transparent',
            }}
          >
            <div
              className={`w-${thickness}vw h-${thickness}vw rounded-full`}
              style={{ backgroundColor: color }}
            ></div>
          </div>
        </div>
      </div>
    );
  };


  export const SvgRing = ({ outerDiameterVw, innerDiameterPercentage, thickness, color }) => {
    // Convert the outer diameter from vw to pixels
    const outerDiameterPx = (outerDiameterVw / 100) * window.innerWidth;
  
    // Calculate the inner diameter based on the percentage of the outer diameter
    const innerDiameterPx = outerDiameterPx * (innerDiameterPercentage / 100);
  
    return (
      <svg
        viewBox={`0 0 ${outerDiameterPx} ${outerDiameterPx}`}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={outerDiameterPx / 2}
          cy={outerDiameterPx / 2}
          r={outerDiameterPx / 2 - thickness / 2}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
        />
        <circle
          cx={outerDiameterPx / 2}
          cy={outerDiameterPx / 2}
          r={innerDiameterPx / 2}
          fill="none"
          stroke="transparent"
          strokeWidth="1" // Make inner circle very thin to act as a cutout
        />
      </svg>
    );
  };

  const OversizedRing = () => {
    const aspectSquare = {
      width: '100vw',
      height: '100vw',
    };
  
    const diameter = "100";
  
    return (
      <div className="xl:hidden fixed top-0 left-0 h-full w-full overflow-hidden z-0">
        <div className={`absolute left-1/2 transform -translate-x-1/2 top-[45vh] -translate-y-1/2 w-[70vh] h-[70vh] rounded-full bg-black bg-opacity-20`}>
        </div>
      </div>
    );
  }

export default OversizedRing;
