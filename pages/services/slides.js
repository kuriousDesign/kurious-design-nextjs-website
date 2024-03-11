// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';
import LayoutSlide, { SlideHeading } from '../../components/LayoutSlide';

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
        MY SERVICES <span className='text-redpinkAccent'>.</span>
      </motion.h2>
    </div>
  </div>
);

const bullet = "\u2022"; // Unicode character for bullet (•)
const slidePrototyping = (
  <LayoutSlide className="bg-red-800">
    <div className='max-w-[800px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[20vw]'>
      <SlideHeading text="Prototyping" />
      <p className='text-center xl:text-left self-start mb-4'>
        Hacker and maker. Bring your idea to life with my prototyping offering.
      </p>
      <ul>
        <li>3D Printing</li>
        <li>Conceptual Design  {bullet} Proof of Concept</li>
        <li>Mechatronic Design</li>
        <li>Electronics Design</li>
        <li>Arduino {bullet} Raspberry Pi</li>
        <li>Sketching {bullet} 3D Modelling {bullet} Animation</li>
        <li>Confident with variety of Technologies</li>

      </ul>
      <div className='mt-10 xl:mt-40 flex justify-center z-50'>

      </div>
    </div>
  </LayoutSlide>
);



const slideMechatronics = (
  <LayoutSlide className="bg-purple-800">
    <div className='max-w-[800px] flex flex-col justify-start items-center h-[70vh] mt-[15vh] mb-auto mx-[20vw]'>
      <SlideHeading text="Mechatronics Design" />
      <p className='text-center xl:text-left self-start mb-4'>
        I&apos;m a mechatronics engineer. I design and build systems that bring together mechanical, electrical, and computer engineering.If it needs to move, be controlled or talk to other devices, then I can help.
      </p>
      <ul>
        <li>Electrical Schematics</li>
        <li>BOM Management</li>
        <li>Project Management</li>
        <li>Mechanical/Mechanism Design</li>
        <li>Motor Sizing {bullet} Actuator/Sensor Selection</li>
        <li>Control Systems {bullet} System Integration</li>
        <li>Motor Tuning and Control</li>
        <li>Machine Vision {bullet} Vision Inspection</li>
        <li>HMI {bullet} UI</li>
        <li>Industrial Automation</li>
        <li>Process Control State Logic</li>
        <li>Variety of Hardware and Manufacturers</li>
      
      </ul>
      <div className='mt-10 xl:mt-40 flex justify-center z-50'>

      </div>
    </div>
  </LayoutSlide>
);

export const ServicesSlides = [
  slideFirst,
  slideMechatronics,
  slidePrototyping,
];

const Dummy = () => {
  return null;
}

export default Dummy