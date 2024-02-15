import Circles from "../../../components/Circles";
import Bulb from '../../../components/Bulb';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
import LazyYoutube from "../../../components/LazyYoutube";

const BoombleBee = () => {
  const embedId = 'RFKhKwp5L1E';
  // const embedId = 'RFKhKwp5L1E?si=EphKdZxRRFO36JJf';
  // const fullLink = 'https://www.youtube.com/embed/RFKhKwp5L1E?si=EphKdZxRRFO36JJf';
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-12 font-permanentMarker font-light'
            >
              The BoombleBee <span className='font-permanentMarker text-redpinkAccent font-light'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0 font-thin'
            >
              An acoustically-triggered mechatronic bee that is driven by a stereo amplifier.
            </motion.p>
          </div>
          {/* youtube */}
          <LazyYoutube videoId={embedId}/>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default BoombleBee;
