import Circles from "./Circles";
import Bulb from './Bulb';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import LazyYoutube from "./LazyYoutube";
import LayoutSwiper from "./LayoutSwiper";




const projectDataPage = ({ projectData, slides=[] }) => {
  const slideProject = (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* youtube */}
        <div className="w-full mx-auto flex justify-center max-w-[600px] py-16">
          <LazyYoutube videoId={projectData.youtubeEmbedId}/>
        </div>
        {/* text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 xl:mt-12 font-permanentMarker font-light'
          >
            {projectData.title} <span className='font-permanentMarker text-redpinkAccent font-light'>.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mb-4 max-w-[400px] mx-auto lg:mx-0 font-thin'
          >
            <div className='text-gray-200 font-semibold font-gothamBook'>
              {projectData.quickBlurb}
              {/* Use Link component for the YouTube playlist link */}
              <div className="mt-4 text-redpinkAccent">
                <a href={projectData.youtubePlaylistUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 cursor-pointer">YouTube Playlist</a>
              </div>
            </div>
          </motion.p>
        </div>
  
      </div>
    </div>
    <Bulb />
  </div>
  
  );

  slides.unshift(slideProject);

  return (
    <LayoutSwiper slides={slides} />
  );
};

export default projectDataPage;
