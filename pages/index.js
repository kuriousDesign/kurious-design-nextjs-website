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
    setDisplayStateReq(0);
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
          className='relative w-[443px] h-[397px] transform scale-90 sm:scale-100  left-1/2 -translate-x-1/2  '
        >
          {displayStateReq === 0 && (
            <>
               <motion.div
                className='z-0 absolute top-[86px] left-[238px] w-[80px] h-[10px] transform -rotate-[64deg] bg-redpinkAccent '
                animate={{ opacity: [0, 1, 0.8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity}}
              />
              <motion.div
                className='z-0 absolute top-[247px] left-[329px] w-[52px] h-[10px] transform rotate-[27deg] bg-redpinkAccent'
                animate={{ opacity: [0, 1, 0.8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity}}
              />
            </>
          )}
          <KuriousLogoAnimation displayStateReqInput={displayStateReq} />
        </motion.div>
      </div>
      <div className='absolute w-full h-auto bottom-24 xl:bottom-14 flex justify-center gap-10 z-50'>
        <Link href={'/home'}>
          <button className="h-[37px] w-[100px] xl:h-[45px] xl:w-[130px] rounded-full ring-2 ring-black bg-transparent text-black text-[8px] xl:text-xs font-bold font-permanentMarker hover:ring-white hover:text-white hover:scale-105 ]">
            HOME
          </button>
        </Link>
        {isVisible && (
          <button onClick={handleButtonClick} className="h-[37px] w-[100px] xl:h-[45px] xl:w-[130px] rounded-full ring-2 ring-black bg-black text-white text-[8px] xl:text-xs font-bold font-permanentMarker hover:bg-redpinkAccent hover:ring-redpinkAccent hover:scale-105 animate-[bounce_1.5s_ease-in-out_infinite]">
            DON&apos;T TOUCH
          </button>
        )}
      </div>
    </div>
  );
};

export default Splash;
