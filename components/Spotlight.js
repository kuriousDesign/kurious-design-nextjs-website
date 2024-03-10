import React from "react";
import { frame, motion } from "framer-motion";

const svgWidth = 100;
const svgHeight = 1000;
const plateWidth = 60;
const frameWidth = 50;
const lightOffset = 30;
const lightHeight = 60;
const pivotX = svgWidth / 2;
const pivotY = 33;


  const StaticComponents = () => {
    return (
      <svg className={`absolute top-0 left-0 w-[${svgWidth}px] h-[${svgHeight}px]`} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        {/* Upper plate - static */}
        <rect className="fill-current text-black" x={(svgWidth - plateWidth) / 2} y="0" width={plateWidth} height="15" rx="5" />
  
        {/* Stem - static */}
        <rect className="fill-current text-black" x={(svgWidth - plateWidth) / 2 + Math.round(plateWidth / 2) - 5} y="0" width="10" height={pivotY} rx="5" ry="5" />
  
        {/* Pivot - static */}
        <circle className="fill-current text-gray-600" cx={pivotX} cy={pivotY} r="7" />
      </svg>
    );
  };
  
  const AssemblyComponents = () => {
    return (
      <svg className={`absolute top-0 left-0 w-[${svgWidth}px] h-[${svgHeight}px]`} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        {/* Outer frame - assembly */}
        <rect
          className="fill-current text-gray-700"
          x={(svgWidth - plateWidth) / 2 + Math.round((plateWidth - frameWidth) / 2)}
          y={lightOffset}
          width={frameWidth}
          height={lightHeight}
          rx="18"
        />
  
        {/* Inner light - assembly */}
        <ellipse
          className="fill-current text-redpinkAccent"
          cx={(svgWidth - plateWidth) / 2 + Math.round(plateWidth / 2)}
          cy={lightOffset + lightHeight - 15}
          rx="20"
          ry="10"
        />
  
        {/* Outer light - assembly */}
        <circle
          className="fill-current text-white"
          cx={(svgWidth - plateWidth) / 2 + Math.round(plateWidth / 2)}
          cy={lightOffset + lightHeight - 15}
          r="5"
        />
        {/* Spotlight beam - assembly */}
        <path
            className="fill-current text-yellow-300"
            d={`M ${pivotX} ${pivotY + 7} Q ${pivotX} ${lightOffset + lightHeight + 10}, ${(svgHeight - plateWidth) / 2 + Math.round(plateWidth / 2)} ${lightOffset + lightHeight - 15}`}
        />
      </svg>
    );
  };
  
  export const MovingSpotlight = () => {
    return (
      <div className={`relative w-[${svgWidth}px] h-[${svgHeight}px]`}>
        <StaticComponents />
        <motion.svg
          className={`absolute top-0 left-0 w-[${svgWidth}px] h-[${svgHeight}px]`}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          style={{ transformOrigin: `${pivotX}px ${pivotY}px` }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <AssemblyComponents />
        </motion.svg>
      </div>
    );
  };
  
const SpotlightAnimation = () => {}

export default SpotlightAnimation;
