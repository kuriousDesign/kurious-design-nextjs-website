// components
import ParticlesContainer from '../../components/ParticlesContainer';
// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';
import { HeadlineRevolverMobile, HeadlineRevolver } from '../../components/HeadlineRevolverMobile';
import LayoutSlide from '../../components/LayoutSlide';
import LayoutSwiper from '../../components/LayoutSwiper';
import HomeSlides from './slides';

const Home = () => {

  return (
    <LayoutSwiper slides={HomeSlides} />
  );
};

export default Home;
