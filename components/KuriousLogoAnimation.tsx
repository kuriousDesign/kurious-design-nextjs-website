import { useEffect, useRef, useState } from 'react';
import React from 'react';
import Image from 'next/image';

const imgContextsUp = require.context(`../public/kurious/up`, true);
const imageListUp = imgContextsUp.keys().map(image => imgContextsUp(image));

const imgContextsDown = require.context(`../public/kurious/down`, true);
const imageListDown = imgContextsDown.keys().map(image => imgContextsDown(image));

interface Props {
  displayStateReq?: number;
}

enum DisplayStates {
  STILL = 0,
  SHOW1 = 1,
  SHOW2 = 2,
}

let imgIdx = 0;
let imgSrc = imageListDown[0];
let displayState = -1;
let isReverse = false;
console.log('uh oh');
export default function KuriousLogoAnimation({ displayStateReq = 0 }: Props) {
  // console.log('displayStateReq');
  // console.log(displayStateReq);

  const transitionTime = 120; // ms
  // const [displayState, setDisplayState] = useState(DisplayStates.STILL);
  const [slideshow1IsActive, setSlideshow1IsActive] = useState(false);
  const [slideshow2IsActive, setSlideshow2IsActive] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isRerenderTriggered, setIsRerenderTriggered] = useState(false); // State to trigger rerender


  const playSlideshowPart1 = (reverseReq: boolean) => {
    console.log('playSlideshow 1');
    imgIdx = 0;
    setSlideshow1IsActive(true);
    isReverse = reverseReq;

    const imgSeq: string[] = imageListUp;
    if (reverseReq) {
      imgSeq.reverse();
      displayState = DisplayStates.SHOW2;
    } {
      displayState = DisplayStates.SHOW1;
    }

    const intervalId1 = setInterval(() => {
      // console.log(imgIdx);
      // console.log(imgSeq[currentImageIndex]);

      imgSrc = imgSeq[imgIdx];
      setIsRerenderTriggered(prevState => !prevState); // Toggle the state to trigger rerender

      // console.log(imgSrc.default.src);
      if (imgIdx < imgSeq.length - 1) {
        imgIdx += 1;
        // console.log(imgIdx);
      } else {
        if (displayStateReq !== 2 && !isReverse) {
          imgIdx -= 2;
        } else {
          // imgIdx = 0;
          // clearInterval(intervalId1);
          // setIsWaiting(true);
          // console.log("clearing interval");
        }
        // currentImageIndex = 0;
        // setSlideshow1IsActive(false);
        // console.log('setIsWaiting true');
    
      }
      
    }, transitionTime);

    // Clear the interval on component unmount or when actualGear equals targetGear
    return () => clearInterval(intervalId1);
  };

  const playSlideshowPart2 = () => {
    console.log('playSlideshow 2');
    displayState = DisplayStates.SHOW2;
    setSlideshow2IsActive(true);
    setIsWaiting(false);
    const imgSeq: string[] = imageListDown;
    imgIdx = 0;

    const intervalId2 = setInterval(() => {
      // console.log(currentImageIndex);
      // console.log(imgSeq[currentImageIndex]);

      imgSrc = imgSeq[imgIdx];
      if (imgIdx < imgSeq.length - 1) {
        imgIdx += 1;
      } else {
        imgIdx -= 2;
        //setSlideshow2IsActive(false);
        //clearInterval(intervalId2);
      }
      
    }, transitionTime);

    // Clear the interval on component unmount or when actualGear equals targetGear
    return () => clearInterval(intervalId2);
  };

  useEffect(() => {

    const idx = 0;
    if (displayStateReq === displayState) {
      console.log('equal');
      // console.log('isWaiting');
      // console.log(imgIdx);
      // console.log('imgRef');
      // console.log(imgRef);
      // imgIdx = 0;
    }

    if (displayStateReq !== displayState) {
      console.log('displayStateReq');
      console.log(displayStateReq);
      console.log('displayState');
      console.log(displayState);
      
      if (displayStateReq === 1) {
        console.log('new request');
        console.log(displayStateReq);
        playSlideshowPart1(false);
      } else if (displayStateReq === 2) {
        console.log('new request');
        console.log(displayStateReq);
        playSlideshowPart1(true);
      } else if (displayStateReq === 0) {
        // displayState = 0;
        console.log('displayState is zero');
      }
      
    }
 
  }, [
    displayState,
    displayStateReq,
    slideshow1IsActive,
    slideshow2IsActive,
    isWaiting,
  ]);

  const imgStyle = {
    width: '25vh',
    height: '25vh',
  };
  // console.log('fire');
  return (

    <Image
      className='absolute top-0 left-0 p-0 m-0'
      src={imgSrc.default.src}
      width={443}
      height={397}
      alt={`img${imgIdx + 1}`}
    />

  );
}
