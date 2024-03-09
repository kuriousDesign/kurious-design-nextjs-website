import React from "react";
import { frame, motion } from "framer-motion";


const plateWidth = 60;
const frameWidth = 50;
const stemHeight = 60;
const lightOffset = 30;
const lightHeight = 60;
export const Spotlight = () => {

    return (
      <svg className="w-[100px] h-[100px]">
        {/* Upper plate */}
        <rect className="fill-current text-black" x="0" y="0" width={plateWidth} height="15" rx="10"/>

         {/* Stem */}
         <rect className="fill-current text-black" x={Math.round((plateWidth)/2) - 5}  y="0" width="10" height={stemHeight} rx="5" ry="5" />
  
        {/* Outer frame */}
        <rect className="fill-current text-gray-700" x={Math.round((plateWidth-frameWidth)/2)} y={lightOffset} width={frameWidth} height={lightHeight} rx="18"  />
  
        {/* Inner light */}
        <ellipse className="fill-current text-redpinkAccent" cx={Math.round((plateWidth)/2)} cy={lightOffset+lightHeight-15} rx="20%" ry="10%" />

  
        {/* Outer light */}
        <circle className="fill-current text-white" cx={Math.round((plateWidth)/2)} cy={lightOffset+lightHeight-15}  r="5%" />
      </svg>
    );
  };


const SpotlightAnimation = () => {
  const subtexts = [
    { text: "Subtext 1", x: "20%", y: "30%" },
    { text: "Subtext 2", x: "50%", y: "70%" },
    { text: "Subtext 3", x: "80%", y: "50%" },
  ];

  const spotlightVariants = {
    animate: {
      x: ["50%", "20%", "50%", "80%", "50%"], // x positions for spotlight
      y: ["50%", "30%", "50%", "50%", "50%"], // y positions for spotlight
      transition: {
        duration: 4, // total duration for each spotlight's animation cycle
        ease: "easeInOut",
        loop: Infinity,
      },
    },
  };

  const subtextVariants = {
    lit: { opacity: 1 },
    dim: { opacity: 0.2 },
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {subtexts.map((subtext, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            top: subtext.y,
            left: subtext.x,
            transform: "translate(-50%, -50%)",
            color: "white",
          }}
          variants={subtextVariants}
          initial="dim"
          animate="dim"
          whileHover="lit" // Hover effect
        >
          {subtext.text}
        </motion.div>
      ))}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        style={{ width: "100%", height: "100%", position: "absolute" }}
        variants={spotlightVariants}
        initial="animate"
        animate="animate"
      >
        <defs>
          <radialGradient id="spotlightGradient">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="50" fill="url(#spotlightGradient)" />
      </motion.svg>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        style={{ width: "100%", height: "100%", position: "absolute" }}
        variants={spotlightVariants}
        initial="animate"
        animate="animate"
      >
        <defs>
          <radialGradient id="spotlightGradient">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="50" fill="url(#spotlightGradient)" />
      </motion.svg>
    </div>
  );
};

export default SpotlightAnimation;
