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

const slideFirst = (
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
      <p className='text-left'>
        With a little bit of code and some hardware, I can turn your space into a game.
        The budget is friendlier than you think.
      </p>
    </div>  
  </LayoutSlide>
);



const slideServices = (
  <LayoutSlide className="bg-green-800">
    <div className='max-w-[800px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[12vw]'>
      <SlideHeading text="Jake-of-all-trades" />
      <p className='text-left mb-4'>
        I&apos;m a mechatronics engineer, designer, full-stack developer, and a Jake.
        Here is a list of the services I offer.
      </p>
      <ServicesList />
    </div>
  </LayoutSlide>
);

const slideActiveProjects = (
  <LayoutSlide className="bg-gray-800">
    <div className='max-w-[800px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[12vw]'>
      <SlideHeading text="Active Projects" />
      <p className='text-left self-start'>
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
  <LayoutSlide className=" bg-darkblue">
  <div className='max-w-[800px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[12vw]'>
    <SlideHeading text="Reactive Lighting" />
    <p className='text-left mb-4'>
      I&apos;m a mechatronics engineer, designer, full-stack developer, and a Jake.
      Here is a list of the services I offer.
    </p>
    <SpotlightAnimation />
  </div>
</LayoutSlide>
);

export const HomeSlides = [
  slideFirst,
  slideItsAlive,
  slideGamify,
  slideServices,
  slideActiveProjects,
  slideSpotlight,
];

const Dummy = () => {
  return null;
}

export default Dummy