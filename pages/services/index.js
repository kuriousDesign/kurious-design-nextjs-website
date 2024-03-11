import LayoutSwiper from '../../components/LayoutSwiper';
import { ServicesSlides } from './slides';

const Home = () => {
  return (
    <LayoutSwiper slides={ServicesSlides} />
  );
};

export default Home;
