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


const slideFirst = (
  <div className='h-full bg-gray-800 py-32 text-center'>
    <div className='container mx-auto h-full flex flex-col justify-center'>
      {/* title */}
      <motion.h2
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='h2 mb-8 xl:mb-0 font-permanentMarker'
      >
        VIDEO <span className='text-redpinkAccent'>.</span>
        <p>coming soon</p>
      </motion.h2>
    </div>
  </div>
);

const slideArtMeetsRobotics = (
  <LayoutSlide className="bg-indigo-600">
    <div className='max-w-[800px] flex flex-col justify-start items-start h-[70vh] mt-[15vh] mb-auto mx-[12vw]'>
      <SlideHeading text="Art meets Robotics" />
      {/* subtitle */}
      <motion.p
        variants={fadeIn('down', 0.3)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 font-gothamBook text-blue-400 text-lg xl:text-xl font-semibold'
      >
        Let me help design your next interactive creation and inject some robotic horsepower.
        Who said engineers can&apos;t be artists?
      </motion.p>
    </div>  
  </LayoutSlide>
);

const slideItsAlive = (
  <LayoutSlide className="bg-red-900">
    <div className='max-w-[800px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[12vw]'>
      <SlideHeading text={"It's Alive"} punctuation="!" />
      <p className='text-left'>
        Bring some life to your bar, restaurant, music venue, hotel or home using existing equipment.
        Let me connect lights, sounds and whatever to your space to make it interactive.
      </p>
    </div>  
  </LayoutSlide>
);


const slideGamify = (
  <LayoutSlide className="bg-purple-800">
    <div className='max-w-[800px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[12vw]'>
      <SlideHeading text={"Gamify your Space"} punctuation="!" />
      <p className='text-center xl:text-left'>
        With a little bit of code and some hardware, I can turn your space into a game.
        The budget is friendlier than you think.
      </p>
    </div>  
  </LayoutSlide>
);



const slideServices = (
  <LayoutSlide className="bg-green-800">
    <div className='max-w-[800px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[20vw]'>
      <SlideHeading text="Jake-of-all-trades" />
      <p className='text-center xl:text-left self-start mb-4'>
        I&apos;m a mechatronics engineer, designer, full-stack developer, and a Jake. Here is a list of the services I offer.
      </p>
      <ServicesList />
      <div className='mt-10 xl:mt-40 flex justify-center z-50'>
        <Link href={'/services'}>
          <button className="h-[37px] w-[100px] xl:h-[45px] xl:w-[130px] rounded-full ring-2 ring-white bg-white text-green-800 text-[10px] xl:text-xs font-bold font-permanentMarker hover:ring-black hover:text-black hover:bg-transparent hover:scale-105 ]">
            SERVICES
          </button>
        </Link>
      </div>
    </div>
  </LayoutSlide>
);

const slideActiveProjects = (
  <LayoutSlide className="bg-gray-800">
    <div className='max-w-[800px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[12vw]'>
      <SlideHeading text="Active Projects" />
      <p className='text-left self-start mb-4'>
        Here is a list of what I&apos;m currently working on.
      </p>
      <ActiveProjectsList />

    </div>  
  </LayoutSlide>
);
const slideFirstOld = (
  <div className='h-full w-full'>
  {/* left chunk */}
  <div className='overflow-hidden w-full xl:w-2/3 h-2/3 xl:h-full absolute left-0 top-0 '>
    {/* bg img */}
    <div className='bg-ufo2 absolute mix-blend-color-dodge object-scale-down w-full h-full left-0 bg-no-repeat '/>
    <div className='absolute text-center xl:text-left flex flex-col justify-center left-1/2 xl:left-36 transform -translate-x-1/2 xl:translate-x-0 bottom-2 xl:bottom-[10%] opacity-70'>
        {/* title */}
        <motion.h1
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h1 font-permanentMarker'
        >
          <span className='text-redpinkAccent'> Art</span>
          <span className=''> meets </span>
          <span className='text-redpinkAccent'> Robotics</span>
        </motion.h1>
        {/* subtitle */}
        <motion.p
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 font-gothamBook text-blue-400 text-lg xl:text-xl font-semibold'
        >
          Let me help design your next interactive creation and inject some robotic horsepower.
          Who said engineers can&apos;t be artists?
        </motion.p>


      {/* text */}
    </div>
  </div>

  {/* right chunk or bottom chunk for mobile */}
  <div className='absolute w-full xl:w-1/3 h-1/3 xl:h-full right-0 bottom-0 bg-gradient-to-b from-blue to-lightblue'>
    {/* particles */}
    <ParticlesContainer />
    <div className="absolute hidden xl:block left-7 top-56">
      <HeadlineRevolver/>
    </div>
    <div className="absolute xl:hidden left-0 top-6 w-full">
      <HeadlineRevolverMobile/>
    </div>
  </div>
  </div>
);

const slideSpotlight = (
  <LayoutSlide className=" bg-gray-800">
  <div className='max-w-[800px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[12vw]'>
    <SlideHeading text="Reactive Lighting" />
    <p className='text-center xl:text-left mb-10'>
      Can&apos;t afford a lighting tech at your venue, but want an interesting light show anyways? Try out my reactive lighting controls with multiple modes to suite your genre.
    </p>
    <SpotlightAnimation />
  </div>
</LayoutSlide>
);


const slideResume = (
  <LayoutSlide className=" bg-gray-800">
  <div className='max-w-[800px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[12vw]'>
    <SlideHeading text="About my Experience" />
    <p className='text-center xl:text-left mb-10'>
      Check out my work and academic background using my interactive resume.
    </p>
    <div className='mt-10 xl:mt-40 flex justify-center z-50'>
        <Link href={'/about/resume'}>
          <button className="h-[37px] w-[100px] xl:h-[45px] xl:w-[130px] rounded-full ring-2 ring-white bg-white text-green-800 text-[10px] xl:text-xs font-bold font-permanentMarker hover:ring-black hover:text-black hover:bg-transparent hover:scale-105 ]">
            RESUME
          </button>
        </Link>
    </div>
  </div>
</LayoutSlide>
);

export const HomeSlides = [
  slideFirst,
  slideSpotlight,
  slideArtMeetsRobotics,
  slideItsAlive,
  slideGamify,
  slideServices,
  slideActiveProjects,
  slideResume,

];

const Dummy = () => {
  return null;
}

export default Dummy