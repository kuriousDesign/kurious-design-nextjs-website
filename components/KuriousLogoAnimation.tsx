import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const imgContextsUp = require.context(`../public/kurious/up`, true);
const imageListUp = imgContextsUp.keys().map(image => imgContextsUp(image));

const imgContextsDown = require.context(`../public/kurious/down`, true);
const imageListDown = imgContextsDown.keys().map(image => imgContextsDown(image));

interface Props {
  displayStateReqInput?: number;
}

enum DisplayStates {
  STILL = 0,
  SHOW1 = 1,
  SHOW1_REVERSE = 2,
  SHOW2 = 3,
}

let displayState = 0;
let imgIdx = 0;
let images = imageListUp;
export default function KuriousLogoAnimation({ displayStateReqInput = 0 }: Props) {

  const transitionTime = 30; // ms

  // const [displayState, setDisplayState] = useState(0);
  // const [imgIdx, setImgIdx] = useState(0);
  // const [images, setImages] = useState(imageListUp);
  const [dummy, setDummy] = useState(false);

  useEffect(() => {
    const runSlideshow = () => {
      setDummy(prevVal => !prevVal);
      const displayStateReq = displayStateReqInput;
      const isReverse = displayStateReq === DisplayStates.SHOW1_REVERSE;
      if (displayState !== displayStateReq) {
        displayState = displayStateReq;
        // console.log('new display state requested');
        // console.log(displayStateReq);
        if (displayStateReq !== 0) {
          imgIdx = 0;
        }
        
        
        if (isReverse) {
          images = imageListUp.slice().reverse();
          // console.log('reversed');
        } else {
          if (displayStateReq !== 0) {
            images = imageListUp;
          }
          
        }
      }
  
      if (displayStateReq === 0) {
        imgIdx = 0;
        images = imageListUp;
      }
      else if (imgIdx < imageListUp.length - 1) {
        // setImgIdx(prevIdx => (prevIdx + 1));
        imgIdx += 1;
      } else if (displayStateReq !== 2 && !isReverse) {
        // setImgIdx(prevIdx => (prevIdx - 2));
        imgIdx -= 2;
        // console.log('isreverse');
      } 
      // console.log(imgIdx);
    }

    const interval = setInterval(runSlideshow, transitionTime);
    return () => clearInterval(interval);
  }, [displayStateReqInput, dummy]);

  

  return (
    <>
      {displayStateReqInput === 0 && (
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
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 p-0 m-0 ${index !== imgIdx ? 'opacity-0' : 'opacity-100'}`}
        >
          <Image
            src={image.default.src}
            width={443}
            height={397}
            alt={`img${imgIdx + 1}`}
          />
        </div>
      ))}
    </>
  );
}
