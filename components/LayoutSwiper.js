import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/bundle';
import 'swiper/css/mousewheel';
import 'swiper/css/effect-fade';
import { Mousewheel, Pagination, EffectFade } from 'swiper/modules';
import LayoutSlide from './LayoutSlide';

const LayoutSwiper = ({ slides }) => {
  const pagination = {
    clickable: true,
  };
    // Ensure slides is an array before attempting to map over it
  if (!Array.isArray(slides)) {
    console.error('Slides must be an array.');
    return null;
  }
  console.error('Slides are good.');

  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#FFBA08",
        "--swiper-pagination-bullet-inactive-color": "#000",
        "--swiper-pagination-bullet-inactive-opacity": ".4",
        "--swiper-pagination-bullet-size": "14px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
        "--swiper-pagination-color": "#ff0062",
        "--swiper-pagination-left": "8px",
        "--swiper-pagination-right": "auto",
        "--swiper-pagination-bottom": "auto",
        "--swiper-pagination-top": "auto",
        "--swiper-pagination-bullet-opacity": ".3",
        "--swiper-pagination-bullet-vertical-gap": "6px",
      }}
      direction="vertical"
      pagination={pagination}
      slidesPerView={1}
      spaceBetween={0}
      mousewheel={true}
      modules={[Mousewheel, Pagination, EffectFade]}
      effect="fade"
      speed="1000"
    >
      {/* Use map function to render each LayoutSlide component */}
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {slide} {/* Render the LayoutSlide component */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LayoutSwiper;
