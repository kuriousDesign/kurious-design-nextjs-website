"use client";
import React from 'react';

import ParticlesContainer from '../../components/ParticlesContainer';
// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';
import { HeadlineRevolverMobile, HeadlineRevolver } from '../../components/HeadlineRevolverMobile';
import LayoutSlide, { SlideHeading } from '../../components/LayoutSlide';
import ActiveProjectsList from './ActiveProjectsList';
import ServicesList from './ServicesList';
import SpotlightAnimation from '../../components/Spotlight';
import Link from 'next/link';

//import OrientationInfo from '../../components/OrientationInfo';
import useGammaColor, {UseGammaColorProps} from './../../hooks/useGammaColor';

// create a react component that uses the useGammaColor hook to replace motion.h2 below
function FirstSlideTitle(){

  const gammaColorProps = {
    h: 130,
    s: .47,
    vMax: 1, // max value
    vMin: 0, // min value
  }

  const {
    color,
    gamma,
    deviceOrientation,
    requestAccess,
    isPermissionGranted,
    isSupported,
    error,
  } = useGammaColor(gammaColorProps);

  return (
    <motion.h2
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='h2 mb-8 font-permanentMarker transition-colors duration-0'
      style={{ color }}
    >
      Seek simple<span className='text-redpinkAccent'>.</span>
    </motion.h2>
  );
}


const slideFirst = (

  <div className='h-full bg-gray-800 py-32 text-center'>
    <div className='container mx-auto h-full flex flex-col justify-center'>
      {/* title */}
      <motion.h2
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='h2 mb-8 font-permanentMarker transition-colors duration-0'
        //style={{ color }}
      >
        Seek simple<span className='text-redpinkAccent'>.</span>
      </motion.h2>
      <div className='-space-y-1'>
        <p className="font-permanentMarker my-0 h2">kuriosity</p>
        <p className="font-permanentMarker my-0 h2">kills</p>
        <p className="font-permanentMarker my-0 h2">komplexity</p>
      </div>
    </div>

  </div>
);

const slideArtMeetsRobotics = (
  <LayoutSlide className="bg-indigo-950">
  <div className='w-7/8 max-w-[900px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[12vw] text-left'>
    <SlideHeading text="Art meets Robotics" />
      <p className='text-lg md:text-lg'>
        Let me help design your next interactive creation and inject some robotic horsepower.
        Who said engineers can&apos;t be artists?
      </p>
    </div>  
  </LayoutSlide>
);

const slideItsAlive = (
  <LayoutSlide className="bg-purple-900">
  <div className='w-7/8 max-w-[900px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[12vw] text-left'>
  <SlideHeading text={"It's Alive"} punctuation="!" />
      <p className='text-lg md:text-lg'>
        Bring some life to your bar, restaurant, venue, hotel or home.
        I can make your existing space more interactive and fun, even using your existing devices.
      </p>
    </div>  
  </LayoutSlide>
);


const slideGamify = (
  <LayoutSlide className="bg-purple-800">
  <div className='w-7/8 max-w-[900px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[12vw] text-left'>
  <SlideHeading text={"Gamify your Space"} punctuation="!" />
      <p className='text-lg md:text-lg'>
        With a little bit of code and some hardware, I can turn your space into a game.
        The budget is friendlier than you think.
      </p>
    </div>  
  </LayoutSlide>
);

const slideServices = (
  <LayoutSlide className="bg-gray-800">
  <div className='w-7/8 max-w-[900px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[12vw] text-left'>
  <SlideHeading text="Jake-of-all-trades" />
      <p className='text-lg md:text-lg'>
        I&apos;m a creative engineer, roboticist, full-stack developer, and a Jake. Here is a list of the services I offer.
      </p>
 
      <div className='mt-10 xl:mt-10 flex justify-start z-50'>
        <Link href={'/services'}>
          <button className="h-[37px] w-[100px] xl:h-[45px] xl:w-[130px] rounded-full ring-2 ring-white bg-white text-gray-800 text-[13px] tracking-wider xl:text-xs font-bold font-permanentMarker hover:ring-redpinkAccent hover:text-redpinkAccent hover:bg-transparent hover:scale-105 ]">
            SERVICES
          </button>
        </Link>
      </div>
    </div>
  </LayoutSlide>
);

const slideActiveProjects = (
  <LayoutSlide className="bg-gray-800">
  <div className='w-7/8 max-w-[900px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[12vw] text-left'>
  <SlideHeading text="Recent Projects" />
      <p className='text-lg md:text-lg mb-10'>
        Kurious what I&apos;ve been up to? Here are some of my recent projects.
      </p>
      <ActiveProjectsList />

    </div>  
  </LayoutSlide>
);


const slideReactiveLighting = (
  <LayoutSlide className=" bg-black">
  <div className='w-7/8 max-w-[900px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[12vw] text-left'>
  <SlideHeading text="Reactive Lighting" />
    <p className='text-lg md:text-lg'>
      Can&apos;t afford a lighting tech at your venue, but want an interesting light show anyways? Try out my reactive lighting controls with multiple modes to suite your genre.
    </p>
    <SpotlightAnimation />
  </div>
</LayoutSlide>
);


const slideResume = (
  <LayoutSlide className=" bg-black">
  <div className='w-7/8 max-w-[900px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[12vw] text-left'>
  <SlideHeading text="record of expertise" />
    <p className='text-lg md:text-lg'>
      Explore my prior work experience and academic background.
    </p>
    <div className='mt-10 flex justify-left z-50'>
        <Link href={'/about/resume'}>
          <button className="h-[37px] w-[100px] xl:h-[45px] xl:w-[130px] rounded-full ring-2 ring-white bg-white text-black text-[13px] tracking-wider xl:text-xs font-bold font-permanentMarker hover:ring-black hover:text-black hover:bg-transparent hover:scale-105 ]">
            RÉSUMÉ
          </button>
        </Link>
    </div>
  </div>
</LayoutSlide>
);

export const HomeSlides = [
  slideFirst,
  slideServices,
  slideGamify,
  slideReactiveLighting,
  slideArtMeetsRobotics,
  slideItsAlive,
  slideActiveProjects,
  slideResume,
];

const Dummy = () => {
  return null;
}

export default Dummy