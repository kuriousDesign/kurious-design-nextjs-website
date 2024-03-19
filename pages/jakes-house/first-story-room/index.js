import LayoutSwiper from '../../../components/LayoutSwiper';
import Slides from './slides';

const FirstStoryRoom = () => {
    const slides = Slides();
  return (
    <LayoutSwiper slides={slides} />
  );
};

export default FirstStoryRoom;
