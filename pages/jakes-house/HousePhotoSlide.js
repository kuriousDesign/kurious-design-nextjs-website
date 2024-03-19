import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from 'next/image';

const HousePhotoSlide = ({ url }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full flex text-center justify-center items-center">LOADING...</div>
        <Image src={url} alt="" layout="fill" objectFit="contain" className="w-full h-full max-w-full max-h-full" />
      </div>
    </div>
  );
};

export default HousePhotoSlide;