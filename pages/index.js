import Link from 'next/link';
import { useEffect, useState } from 'react';
// next image
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(true);
      console.log('visibility');
      clearInterval(interval);
    }, 3000); // Change headline every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-full bg-blue flex'>
      <div className='absolute top-1/2 transform -translate-y-1/2 left-0 w-full h-[500px]'>
        
        <motion.div
          variants={imageVariants}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ delay: 3.0, duration: 3.0, ease: 'easeIn' }}
          className='relative w-[443px] m-auto max-w-[443px]'
        >
          <div className='z-0 absolute top-[86px] left-[238px] w-[80px] h-[10px] transform -rotate-[64deg] bg-redpinkAccent animate-[pulse_4.5s_ease-in-out_infinite]' />
          <div className='z-0 absolute top-[247px] left-[329px] w-[52px] h-[10px] transform rotate-[27deg] bg-redpinkAccent animate-[pulse_2.5s_ease-in-out_infinite]' />

          <Image
            className='absolute top-0 left-0'
            src={'/Kurious-Logo-Black-clear-bk.png'}
            width={443}
            height={397}
            alt=''
          />
          <KuriousLogoAnimation />
          
        </motion.div>
        
      </div>
      <div className='absolute w-full h-auto bottom-10 xl:bottom-14 flex justify-center gap-10 z-50'>
        <Link href={'/home'}>
          <button className="h-[37px] w-[100px] xl:h-[45px] xl:w-[130px] rounded-full ring-2 ring-black bg-transparent text-black text-[8px] xl:text-xs font-bold font-permanentMarker hover:ring-blue hover:text-blue hover:scale-105]">
            HOME
          </button>
        </Link>
        {isVisible && (
          <Link href={'/home'}>
            <button className="h-[37px] w-[100px] xl:h-[45px] xl:w-[130px] rounded-full ring-2 ring-black bg-black text-white text-[8px] xl:text-xs font-bold font-permanentMarker hover:bg-red-500 hover:ring-red-500 hover:scale-105 animate-[bounce_1.5s_ease-in-out_infinite]">
              DON&apos;T TOUCH
            </button>
          </Link>
        )}
      </div>
      
    </div>
  );
};

export default Splash;
