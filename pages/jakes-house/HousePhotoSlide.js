import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from 'next/image';

const HousePhotoSlide = ({ url }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="relative w-full h-full">
        <Image src={url} layout="fill" objectFit="cover" objectPosition="center" alt="" className="transform rotate-90" />
      </div>
    </div>
  );
};

export default HousePhotoSlide;