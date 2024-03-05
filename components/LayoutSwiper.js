import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/bundle';
import 'swiper/css/mousewheel';
import 'swiper/css/effect-fade';
import { Mousewheel, Pagination, EffectFade } from 'swiper/modules';

const LayoutSwiper = () => {
  const pagination = {
    clickable: true,
  };

  return (
    <Swiper
      style={{
        // Custom styles here
      }}
      direction="vertical"
      pagination={pagination}
      slidesPerView={1}
      spaceBetween={0}
      mousewheel={true}
      modules={[Mousewheel, Pagination, EffectFade]}
      effect="fade"
      speed="600"
    >
      {/* Swiper slides here */}
      <SwiperSlide>
        <div className="w-full h-full text-white text-xl bg-[#181717] flex text-center items-center justify-center">Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full text-white text-xl bg-green-500 flex text-center items-center justify-center">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide className="text-white text-xl">Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
};

export default LayoutSwiper;
