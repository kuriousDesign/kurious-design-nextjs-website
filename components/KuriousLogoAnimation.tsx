import { useEffect, useRef, useState } from 'react';

const imgContextsUp = [
  require.context(`../public/kurious/up`, true),
];

const imgContextsDown = [
  require.context(`../public/kurious/down`, true),
];

const importAll = (r: Record<string, any>) =>
  r.keys().map((key: string) => r(key).default);

interface Props {
  displayStateReq?: number;
}

enum DisplayStates {
  STILL = 0,
  SHOW1 = 1,
  SHOW2 = 2,
}

let imgIdx = 0;
export default function KuriousLogoAnimation({ displayStateReq = 0 }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const transitionTime = 25; // ms
  const [displayState, setDisplayState] = useState(DisplayStates.STILL);
  const [slideshow1IsActive, setSlideshow1IsActive] = useState(false);
  const [slideshow2IsActive, setSlideshow2IsActive] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const playSlideshowPart1 = () => {
    console.log('playSlideshow 1');
    imgIdx = 0;

    setSlideshow1IsActive(true);
    setDisplayState(DisplayStates.SHOW1);
    const imgSeq: string[] = [];

    const imgContexts = imgContextsUp;
    // console.log(`targetGear: ${targetGear}`);
    // console.log(`actualGear: ${actualGear}`);

    const images: string[] = importAll(imgContexts[0]);
    imgSeq.push(...images);

    const intervalId1 = setInterval(() => {
      // console.log(currentImageIndex);
      // console.log(imgSeq[currentImageIndex]);
      if (imgRef.current) {
        imgRef.current.src = imgSeq[imgIdx];
        if (imgIdx < imgSeq.length - 1) {
          imgIdx += 1;
          // console.log(imgIdx);
        } else {
          // currentImageIndex = 0;
          setSlideshow1IsActive(false);
          // console.log('setIsWaiting true');
          setIsWaiting(true);
          clearInterval(intervalId1);
        }
      }
    }, transitionTime);

    // Clear the interval on component unmount or when actualGear equals targetGear
    return () => clearInterval(intervalId1);
  };

  const playSlideshowPart2 = () => {
    console.log('playSlideshow 2');
    setDisplayState(DisplayStates.SHOW2);
    setSlideshow2IsActive(true);
    setIsWaiting(false);
    const imgSeq: string[] = [];
    imgIdx = 0;
    const imgContexts = imgContextsDown;
    // console.log(`targetGear: ${targetGear}`);
    // console.log(`actualGear: ${actualGear}`);

    const images = importAll(imgContexts[0]).reverse();
    imgSeq.push(...images);

    const intervalId2 = setInterval(() => {
      // console.log(currentImageIndex);
      // console.log(imgSeq[currentImageIndex]);
      if (imgRef.current) {
        imgRef.current.src = imgSeq[imgIdx];
        if (imgIdx < imgSeq.length - 1) {
          imgIdx += 1;
        } else {
          imgIdx = 0;
          setSlideshow2IsActive(false);
          clearInterval(intervalId2);
        }
      }
    }, transitionTime);

    // Clear the interval on component unmount or when actualGear equals targetGear
    return () => clearInterval(intervalId2);
  };

  useEffect(() => {
    const imgs: string[] = importAll(imgContextsDown[0]);
    const idx = 0;
    if (displayStateReq === displayState) {
      // console.log('equal');
      // console.log(isWaiting);
    }

    if (
      displayStateReq !== displayState &&
      !slideshow1IsActive &&
      !slideshow2IsActive &&
      !isWaiting &&
      imgIdx === 0
    ) {
      playSlideshowPart1();
    } else if (
      displayStateReq === displayState &&
      isWaiting &&
      !slideshow1IsActive &&
      !slideshow2IsActive
    ) {
      playSlideshowPart2();
    } else if (
      displayStateReq === displayState &&
      !slideshow1IsActive &&
      !slideshow2IsActive &&
      !isWaiting
    ) {
      console.log('imgRef.current.src');
      imgRef.current.src = imgs[idx];
    }
  }, [
    displayStateReq,
    slideshow1IsActive,
    slideshow2IsActive,
    isWaiting,
  ]);

  const imgStyle = {
    width: '25vh',
    height: '25vh',
  };

  return (
    <div
      style={imgStyle}
      className="relative left-1/2 top-4 transform -translate-x-1/2"
    >
      <img
        ref={imgRef}
        alt={`img${imgIdx + 1}`}
        className="relative left-1/2 top-0 transform -translate-x-1/2 h-full object-cover"
      />
    </div>
  );
}
