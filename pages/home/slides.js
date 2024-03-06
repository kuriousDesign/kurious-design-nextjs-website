import ParticlesContainer from '../../components/ParticlesContainer';
// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';
import { HeadlineRevolverMobile, HeadlineRevolver } from '../../components/HeadlineRevolverMobile';
import LayoutSlide from '../../components/LayoutSlide';

const slide1 = (
  <LayoutSlide key="1" className="bg-gray-900">Slide 1</LayoutSlide>
);

const slide2 = (
  <LayoutSlide key="2" className="bg-purple-800">Slide 2</LayoutSlide>
);

const slide3 = (
  <LayoutSlide key="3" className="bg-green-800">Slide 3</LayoutSlide>
);
const slide0 = (
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

const HomeSlides = [
   slide0,
    slide1,
    slide2,
    slide3,
];

export default HomeSlides;