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
  
  const Triangle = ({ width = 0, height = 0, fill = "green" } = {}) => {
    return (
      <svg width={width} height={height} >
        <path
          fill={fill}
          fillOpacity={0.5}
          d={`M ${Math.round(width / 2)} 0 L ${width} ${height} L 0 ${height} Z`}
        />
      </svg>
    );
  };
  const Trapezoid = ({ width, height, topWidth, fill = "green", xOffset = 0, yOffset = 0 } = {}) => {
    // Calculate points for the trapezoid path
    const bottomWidth = topWidth * 1.0; // Width of the bottom side of the trapezoid
    const halfHeight = height * 0.5; // Half the height of the trapezoid
    const topX1 = xOffset - topWidth / 2;
    const topX2 = xOffset + topWidth / 2;
    const bottomX1 = xOffset - bottomWidth / 2;
    const bottomX2 = xOffset + bottomWidth / 2;
    const topY = yOffset - halfHeight;
    const bottomY = yOffset + halfHeight;
    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <path
          fill={fill}
          fillOpacity={0.5}
          d={`M ${topX1} ${topY} L ${topX2} ${topY} L ${bottomX2} ${bottomY} L ${bottomX1} ${bottomY} Z`}
        />
      </svg>
    );
  };
  

  const TriangleIso = ({ className = '', width = 0, height = 0, fill = "green", xOffset = 0, yOffset = 0, opacity = 1.0 } = {}) => {
    // Calculate points for the triangle path
    const peakX = xOffset + width/2; // Peak of the triangle coincides with the center of the inner light
    const peakY = yOffset; // Adjust for triangle height
    const baseX1 = xOffset;
    const baseX2 = xOffset + width;
    const baseY = yOffset + height;
  
    return (
      <svg className={className} width={width+xOffset} height={height+yOffset} viewBox={`0 0 ${width+xOffset} ${height+yOffset}`}>
        <path
          fill={fill}
          fillOpacity={opacity}
          d={`M ${peakX} ${peakY} L ${baseX2} ${baseY} L ${baseX1} ${baseY} Z`}
        />
      </svg>
    );
  };

  const LightBeam = ({ className = '', width = 0, height = 0, fill = "green", xOffset = 0, yOffset = 0, opacity = 1.0 } = {}) => {
    // Calculate points for the triangle path
    const peakX = xOffset + width/2; // Peak of the triangle coincides with the center of the inner light
    const peakY = yOffset; // Adjust for triangle height
    const baseX1 = xOffset;
    const baseX2 = xOffset + width;
    const baseY = yOffset + height;
    // const rx = width/2;
    // const ry = Math.round(width*1.0/2);
    const rx = width !== 0 ? Math.round(width / 2) : 0;
    const ry = rx;


  
    return (
      <svg className={className} width={width+xOffset} height={height+yOffset+ry} viewBox={`0 0 ${width+xOffset} ${height+yOffset+ry}`}>
        <path
          fill={fill}
          fillOpacity={opacity}
          d={`M ${peakX} ${peakY} L ${baseX2} ${baseY} L ${baseX1} ${baseY} Z`}
        />
        <ellipse
            className="fill-current text-redpinkAccent"
            cx={Math.round(baseX2-baseX1)/2 + baseX1}
            cy={baseY}
            rx={rx}
            ry={ry.toString()}
        />
      </svg>
    );
  };


const beamDiameterDesktop = 300;
const beamLengthDesktop = 500;
const beamAngleNegativeDesktop = -50;
const beamAnglePositiveDesktop = 50;

const beamDiameterMobile = 150;
const beamLengthMobile = 200;
const beamAngleNegativeMobile = -40;
const beamAnglePositiveMobile = 40;
  const AssemblyComponents = () => {
    return (
        <>
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
                
            </svg>
            {/* Spotlight beam for mobile - assembly */}
            <LightBeam className="xl:hidden absolute top-0 left-0 transform -translate-x-1/2" width={beamDiameterMobile} height={beamLengthMobile} angleNeg={beamAngleNegativeMobile} anglePos={beamAnglePositiveMobile} fill='red' xOffset={2*pivotX} yOffset = {lightOffset + lightHeight - 15} opacity="0.2"/>
            {/* Spotlight beam for Desktop - assembly */}
            <LightBeam className="hidden xl:block absolute top-0 left-0 transform -translate-x-1/2" width={beamDiameterDesktop} height={beamLengthDesktop} angleNeg={beamAngleNegativeDesktop} anglePos={beamAnglePositiveDesktop} fill='red' xOffset={2*pivotX} yOffset = {lightOffset + lightHeight - 15} opacity="0.2"/>
      </>
    );
  };
  
  export const SpotlightAnimation = () => {
    return (
      <div className={`relative w-[${svgWidth}px] h-[${svgHeight}px] transform scale-[80%] xl:scale-90 font-permanentMarker`}>
        <StaticComponents />
        <motion.div
          className={`hidden xl:block absolute top-0 left-0 w-[${svgWidth}px] h-[${svgHeight}px]`}
          style={{ originX: `${pivotX}px`, originY: `${pivotY}px` }}
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 50, 62, 60, 61, -60, -35, -33, -34,0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut"}}
        >
            <AssemblyComponents />
        </motion.div>
        <motion.div
          className={`xl:hidden absolute top-0 left-0 w-[${svgWidth}px] h-[${svgHeight}px]`}
          style={{ originX: `${pivotX}px`, originY: `${pivotY}px` }}
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 35, 44, 43, 43, -45, -35, -33, -34,0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut"}}
        >
            <AssemblyComponents />
        </motion.div>
        <div className="absolute top-[180px] -left-[170px] xl:top-[290px] xl:-left-[480px] text-gray-800 w-36 h-auto font-extrabold ">
            FOLLOW MUSICIAN
        </div>
        <div className="absolute top-[210px] left-[120px] xl:top-[470px] xl:left-[270px] text-gray-800 w-36 h-auto font-extrabold ">
            BEAT/TONE REACTIVE
        </div>
      </div>
    );
  };

export default SpotlightAnimation;
