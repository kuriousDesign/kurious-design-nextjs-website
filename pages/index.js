import Link from 'next/link';
import { useEffect, useState } from 'react';
// next image
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


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
    <div className='w-full h-full bg-white flex'>
      <div className='w-full my-auto h-auto pb-20'>
        <motion.div
          variants={imageVariants}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ delay: 3.0, duration: 3.0, ease: 'easeIn' }}
          className='w-10/12 mx-auto max-w-[800px]'
        >
          <Image
            src={'/Kurious-Logo-Black-clear-bk.png'}
            width={7637}
            height={7786}
            alt=''
          />
        </motion.div>
      </div>


      
        <div className='absolute w-full h-1/6 bottom-10 flex justify-center gap-10 z-50'>
          <Link href={'/home'}>
            <button className="h-[37px] w-[100px] xl:h-[45px] xl:w-[130px] rounded-full ring-2 ring-black bg-transparent text-black text-[8px] xl:text-xs font-bold font-permanentMarker hover:ring-blue hover:text-blue hover:scale-105]">
              HOME
            </button>
          </Link>
          {isVisible && (
            <Link href={'/home'}>
              <button className="h-[37px] w-[100px] xl:h-[45px] xl:w-[130px] rounded-full ring-2 ring-black bg-black text-white text-[8px] xl:text-xs font-bold font-permanentMarker hover:bg-red-500 hover:ring-red-500 hover:scale-105 animate-[bounce_0.5s_ease-in-out_infinite]">
                DON&apos;T TOUCH
              </button>
            </Link>
          )}
        </div>
      
    </div>
  );
};

export default Splash;
