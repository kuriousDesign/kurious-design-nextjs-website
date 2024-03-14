import LayoutSlide, { SlideHeading } from "../../../components/LayoutSlide";
import LazyYoutube from "../../../components/LazyYoutube";

const slideMurderHornet = (
    <LayoutSlide className="bg-red-600">
      <div className='max-w-[800px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[20vw]'>
        <div className='mt-10 xl:mt-40 flex justify-center'>
            <LazyYoutube videoId='eTK0e4m9wrk' height='300' width='400' />
        </div>
        <SlideHeading text="Murder Hornet" />
        <p className='text-center xl:text-left self-start mb-4'>
          The next evolution of the BoomblBee was for a halloween exhibit at Spectra Art Space called {"Spookadelia."} This edition 
          I added a thin-walled thorax that stings when you get too close. An unexpected fright! The internals of the thorax are lit
          with programmable LEDs strip. Packaging the mechanism inside the thorax and making this thing assembly friendly was an engineering
          feat! I have had a tensioner adjustment hidden in the stinger so allow maintenance to tighten up the stinger if it got too loose.
          The working principle behind the actuation of the stinger is similar to that of a fishing pole. When you reel your lure in too much
          so that it begins tugging on the last eyelet of the rod, it begins to bend the rod.
        </p>
      </div>
    </LayoutSlide>
  );

  const slideProjectStory = (
    <LayoutSlide className="bg-red-600">
      <div className='max-w-[800px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[20vw]'>
        <SlideHeading text="Project Story" />
        <p className='text-center xl:text-left self-start mb-4'>
          This was my first interactive art piece that would go into a gallery. I was so excited to be a part of the show.
        </p>
      </div>
    </LayoutSlide>
  );

  export const slides=[
    slideMurderHornet,
    slideProjectStory,
  ]

  const Dummy = () => {
    return null;
  }
  
  export default Dummy