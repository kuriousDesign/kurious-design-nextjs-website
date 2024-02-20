// next image
import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';
import HeadlineRevolverMobile from '../components/HeadlineRevolverMobile';

const Home = () => {
  return (
    <div className='h-full w-full'>
      {/* left chunk */}
      <div className='overflow-hidden w-2/3 h-full absolute left-0 top-0 '>
        {/* bg img */}
        <div className='bg-ufo2 absolute mix-blend-color-dodge w-full h-full right-0 bg-no-repeat '/>
        <div className='absolute text-center xl:text-left flex flex-col justify-center left-36 bottom-[10%] opacity-70'>
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
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 font-gothamBook text-blue-400 text-xl font-semibold'
            >
              Let me help design your next interactive creation and inject some robotic horsepower.
              Who said engineers can&apos;t be artists?
            </motion.p>

    
          {/* text */}
        </div>
      </div>

      {/* right chunk */}
      <div className='absolute w-1/3 h-full right-0 top-0 bg-gradient-to-b from-blue-950 to-blue-500'>
        {/* particles */}
        <ParticlesContainer />
        <div className="relative left-7 top-56">
          <HeadlineRevolverMobile/>
        </div>
      </div>
    </div>
  );
};

export default Home;
