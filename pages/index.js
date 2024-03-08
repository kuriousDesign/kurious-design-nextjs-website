import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import KuriousLogoAnimation from '../components/KuriousLogoAnimation';
import OversizedRing, { ColoredRing, LargeCircleSVG, SvgRing } from '../components/OversizedRing';

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
    console.log('splash useEffect');
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
    <div className='w-full h-full bg-blue flex overflow-hidden'>
      <div className={`absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-black bg-opacity-10`} />
      <div className='absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-auto h-auto'>
        <SvgRing outerDiameterPx={1000} thicknessPx={200} color={'#c447f5'} opacity={0.75}/>
      </div>
      <div className='absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-auto h-auto'>
        <SvgRing outerDiameterPx={700} thicknessPx={100} color='#ff0000' opacity={0.70}/>
      </div>
      
      <div className='absolute top-1/2 transform -translate-y-1/2 left-0 w-full h-[397px]'>
        <motion.div
          variants={imageVariants}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ delay: 3.0, duration: 3.0, ease: 'easeIn' }}
          className='relative w-[443px] h-[397px] transform scale-90 sm:scale-100  left-1/2 -translate-x-1/2  '
        >
          <KuriousLogoAnimation displayStateReqInput={displayStateReq} />
        </motion.div>
      </div>
      <div className='absolute w-full h-auto bottom-24 xl:bottom-14 flex justify-center gap-10 z-50'>
        <Link href={'/home'}>
          <button className="h-[37px] w-[100px] xl:h-[45px] xl:w-[130px] rounded-full ring-2 ring-white bg-transparent text-white text-[10px] xl:text-xs font-bold font-permanentMarker hover:ring-black hover:text-black hover:scale-105 ]">
            I&apos;M KURIOUS
          </button>
        </Link>
        {isVisible && (
          <button onClick={handleButtonClick} className="h-[37px] w-[100px] xl:h-[45px] xl:w-[130px] rounded-full ring-2 ring-black bg-black text-white text-[10px] xl:text-xs font-bold font-permanentMarker hover:bg-redpinkAccent hover:ring-redpinkAccent hover:scale-105 animate-[bounce_1.5s_ease-in-out_infinite]">
            DON&apos;T TOUCH
          </button>
        )}
      </div>
    </div>
  );
};

export default Splash;
