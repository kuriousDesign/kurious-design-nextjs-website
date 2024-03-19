import LayoutSwiper from '../../../components/LayoutSwiper';
import Slides from './slides';

const Welcome = () => {
    const slides = Slides();
    return (
    <LayoutSwiper slides={slides} />
  );
};

export default Welcome;
