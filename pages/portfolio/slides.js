import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { projectMap } from '../../copy/ProjectData';
import ProjectSlide from './ProjectSlide';

const slideFirst = (
  <div className='h-full bg-gray-800 py-32 text-center'>
    <div className='container mx-auto h-full flex flex-col justify-center'>
      {/* title */}
      <motion.h2
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='h2 mb-8 xl:mb-0 font-permanentMarker'
      >
        MY WORK <span className='text-redpinkAccent'>.</span>
      </motion.h2>
    </div>
  </div>
);

export const PortfolioSlides = Array.from(projectMap.entries()).map(([projectId, projectData]) => {
  return (<ProjectSlide projectId={projectId} projectData={projectData} key={projectId}/>)
});

PortfolioSlides.unshift(slideFirst);


const Dummy = () => {
  return null;
}

export default Dummy