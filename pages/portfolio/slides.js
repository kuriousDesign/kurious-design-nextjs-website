import ParticlesContainer from '../../components/ParticlesContainer';
// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';
import { HeadlineRevolverMobile, HeadlineRevolver } from '../../components/HeadlineRevolverMobile';
import LayoutSlide from '../../components/LayoutSlide';
import ProjectSlide from './ProjectSlide';
import { projectMap } from '../../copy/ProjectData';

const slide1 = (
  <LayoutSlide className="bg-gray-900">Slide 1</LayoutSlide>
);

const slide2 = (
  <LayoutSlide className="bg-purple-800">Slide 2</LayoutSlide>
);

const slide3 = (
  <LayoutSlide className="bg-green-800">Slide 3</LayoutSlide>
);
const slide0 = (
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

export const PortfolioSlides = Array.from(projectMap.entries()).map(([projectId, projectData], index) => {
  return (<ProjectSlide projectId={projectId} projectData={projectData} key={index}/>)
});

PortfolioSlides.unshift(slide0);
