import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import KuriousLogoAnimation from '../components/KuriousLogoAnimation';

// variants
const imageVariants = {
  initial: {
    x: '100%',
    width: '100%',
    color: 'rgb(255,0,0)',
  },
  animate: {
    x: '-100%',
    width: '100%',
    color: 'rgb(255,0,0)',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
    color: ['rgb(255,0,0)', 'rgb(255,0,0)'],
  },
};

const Splash = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayStateReq, setDisplayStateReq] = useState(0); // Initial display state

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(true);
      clearInterval(interval);
    }, 100); // Change headline every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Function to handle button click
  const handleButtonClick = () => {
    setDisplayStateReq(prevState => (prevState + 1) % 3); // Increment and wrap around to 0 if greater than 2
  };




  return (
    <div className='w-full h-full bg-blue flex'>
      <div className='absolute top-1/2 transform -translate-y-1/2 left-0 w-full h-[500px]'>
        <motion.div
          variants={imageVariants}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ delay: 3.0, duration: 3.0, ease: 'easeIn' }}
          className='relative w-[443px] m-auto max-w-[443px] transform scale-90 xl:scale-100'
        >
          {displayStateReq === 0 && (
            <>
              <div className='z-0 absolute top-[86px] left-[238px] w-[80px] h-[10px] transform -rotate-[64deg] bg-redpinkAccent animate-[pulse_4.5s_ease-in-out_infinite]' />
              <div className='z-0 absolute top-[247px] left-[329px] w-[52px] h-[10px] transform rotate-[27deg] bg-redpinkAccent animate-[pulse_2.5s_ease-in-out_infinite]' />
            </>
          )}
          <KuriousLogoAnimation displayStateReq={displayStateReq} />
        </motion.div>
      </div>
      <div className='absolute w-full h-auto bottom-24 xl:bottom-14 flex justify-center gap-10 z-50'>
        <Link href={'/home'}>
          <button className="h-[37px] w-[100px] xl:h-[45px] xl:w-[130px] rounded-full ring-2 ring-black bg-transparent text-black text-[8px] xl:text-xs font-bold font-permanentMarker hover:ring-blue hover:text-blue hover:scale-105]">
            HOME
          </button>
        </Link>
        {isVisible && (
          <button onClick={handleButtonClick} className="h-[37px] w-[100px] xl:h-[45px] xl:w-[130px] rounded-full ring-2 ring-black bg-black text-white text-[8px] xl:text-xs font-bold font-permanentMarker hover:bg-red-500 hover:ring-red-500 hover:scale-105 animate-[bounce_1.5s_ease-in-out_infinite]">
            DON&apos;T TOUCH
          </button>
        )}
      </div>
    </div>
  );
};

export default Splash;
