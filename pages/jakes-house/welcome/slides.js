// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../../variants';

import Link from 'next/link';
import LayoutSlide, { SlideHeading } from '../../../components/LayoutSlide';

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
        WELCOME <span className='text-redpinkAccent'>!</span>
        <p>{"to jake's house"}</p>
      </motion.h2>
    </div>
  </div>
);

const slideVacancies = (
  <LayoutSlide className=" bg-gray-800">
  <div className='max-w-[800px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[12vw]'>
    <SlideHeading text="Current Vacancies" />
    <p className='text-center xl:text-left mb-10'>
      Check out which rooms are available when and for how much.
    </p>
    <h2>FIRST STORY ROOM</h2>
    <p className='text-center xl:text-left mb-10'>
      Current available and searching for potential AirBnB Manager, $1400/month including utilities.
    </p>
    <div className='mt-10 xl:mt-40 flex justify-center z-50'>
        <Link href={'/jakes-house/first-story-room'}>
          <button className="h-[37px] w-[100px] xl:h-[45px] xl:w-[130px] rounded-full ring-2 ring-white bg-white text-green-800 text-[10px] xl:text-xs font-bold font-permanentMarker hover:ring-black hover:text-black hover:bg-transparent hover:scale-105 ]">
            EXPLORE
          </button>
        </Link>
    </div>
    <h2>AIRBNB ROOM</h2>
    <p className='text-center xl:text-left mb-10'>
      {"Check the AirBnB calendar and schedule direct through me to avoide paying all the fees :)"}
    </p>
    <div className='mt-10 xl:mt-40 flex justify-center z-50'>
        <Link href={'/jakes-house/first-story-room'}>
          <button className="h-[37px] w-[100px] xl:h-[45px] xl:w-[130px] rounded-full ring-2 ring-white bg-white text-green-800 text-[10px] xl:text-xs font-bold font-permanentMarker hover:ring-black hover:text-black hover:bg-transparent hover:scale-105 ]">
            EXPLORE
          </button>
        </Link>
    </div>
  </div>
</LayoutSlide>
);



const slideSpirit = (
  <LayoutSlide className="bg-red-900">
    <div className='max-w-[800px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[12vw]'>
      <SlideHeading text={"Digital Nomads"} punctuation="!" />
      <p className='text-left'>
        This place is geared toward you. Month-to-month leases, high-speed internet, and a travel atmosphere.
        The house is fully furnished and the kitchen is stocked with more than the essentials, enjoy!
      </p>
    </div>  
  </LayoutSlide>
);


const Slides = () => {
  return [
    slideFirst,
    slideSpirit,
    slideVacancies
  ];
}

export default Slides;