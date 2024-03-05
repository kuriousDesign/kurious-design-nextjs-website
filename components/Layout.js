// fonts
import { Sora, Permanent_Marker, Long_Cang } from '@next/font/google';
// import GothamBook from '../public/fonts/GothamBook.otf'
import localFont from 'next/font/local'
import Header from './Header';

// components
import Socials from './Socials';
import { useRouter } from 'next/router';
import React, { useEffect, useState, useRef} from 'react';
import Head from 'next/head';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/mousewheel';
import 'swiper/css/effect-fade';

// import required modules
import { Mousewheel, Pagination, EffectFade } from 'swiper/modules';
 
// Font files can be colocated inside of `pages`
const gothamBook = localFont({ 
  src: '../public/fonts/GothamBook.otf',
  variable: '--font-gothamBook',
  weight: '400' 
})


// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  variable: '--font-permanentMarker',
  weight: ['400'],
});


const longCang = Long_Cang({
  subsets: ['latin'],
  variable: '--font-longCang',
  weight: ['400'],
});



const Layout = ({ children }) => {
  const router = useRouter();
  // const [isSplash, setIsSplash] = useState(router.pathname === '/');
  const isSplash = router.pathname === '/';
  useEffect(() => {

    return () => {
      // router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  const pagination = {
    clickable: true,
  };

  return (
    <div
      className={`page bg-blue-950 text-white  ${sora.variable} font-sora ${permanentMarker.variable} font-permanentMarker ${longCang.variable} font-longCang ${gothamBook.variable} font-gothamBook relative`}
    >
      <Head> {/* Add Head component here */}
        <link rel="icon" href="/logo.ico" /> {/* Replace "your-favicon.ico" with your favicon file path */}
      </Head>
      {!isSplash && (
        <>
          <Header />
            <Swiper
              style={{
                "--swiper-pagination-color": "#FFBA08",
                "--swiper-pagination-bullet-inactive-color": "#000",
                "--swiper-pagination-bullet-inactive-opacity": ".4",
                "--swiper-pagination-bullet-size": "16px",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
                "--swiper-pagination-color": "#ff0062",
                "--swiper-pagination-left": "8px",
                "--swiper-pagination-right": "auto",
                "--swiper-pagination-bottom": "auto",
                "--swiper-pagination-top": "auto",
                "--swiper-pagination-bullet-opacity": "1",
                "--swiper-pagination-bullet-vertical-gap": "6px",
              }}
                direction={'vertical'}
                pagination={pagination}
                slidesPerView={1}
                spaceBetween={0}
                mousewheel={true}
                modules={[Mousewheel, Pagination, EffectFade]}
                effect="fade"
                speed="600"
                >
                <SwiperSlide className=''>
                  <div className='w-full h-full text-white text-xl bg-[#181717] flex text-center items-center justify-center'>Slide 1 </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                  <div className='w-full h-full text-white text-xl bg-green-500 flex text-center items-center justify-center'>Slide 2 </div>
                </SwiperSlide>
                <SwiperSlide className='text-white text-xl'>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
          <Socials />
        </>
      )}
      
      {children}
      
    </div>
  );
};

export default Layout;

















