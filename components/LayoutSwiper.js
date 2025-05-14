'use client'; // Required if using Next.js app directory

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/effect-fade';
import { Mousewheel, Pagination, EffectFade } from 'swiper/modules';

const LayoutSwiper = ({ slides }) => {
  const pagination = { clickable: true };

  const [paginationStyles, setPaginationStyles] = useState({});

  const updateStyles = () => {
    const isWide = window.innerWidth >= 768;
    setPaginationStyles({
      "--swiper-pagination-color": "#FFBA08",
      "--swiper-pagination-bullet-inactive-color": "#000",
      "--swiper-pagination-bullet-inactive-opacity": ".4",
      "--swiper-pagination-bullet-size": isWide ? '16px' : '11px',
      "--swiper-pagination-bullet-horizontal-gap": "6px",
      "--swiper-pagination-color": "#ff0062",
      "--swiper-pagination-left": isWide ? '18px' : '8px',
      "--swiper-pagination-right": "auto",
      "--swiper-pagination-bottom": "auto",
      "--swiper-pagination-top": "auto",
      "--swiper-pagination-bullet-opacity": ".9",
      "--swiper-pagination-bullet-vertical-gap": "6px",
    });
  };

  useEffect(() => {
    // Set initial styles
    updateStyles();

    // Add resize listener
    window.addEventListener('resize', updateStyles);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', updateStyles);
  }, []);

  if (!Array.isArray(slides)) return null;
  if (Object.keys(paginationStyles).length === 0) return null;

  return (
    <Swiper
      style={paginationStyles}
      direction="vertical"
      pagination={pagination}
      slidesPerView={1}
      spaceBetween={0}
      mousewheel={true}
      modules={[Mousewheel, Pagination, EffectFade]}
      effect="fade"
      speed={500}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LayoutSwiper;
