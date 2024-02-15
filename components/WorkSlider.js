// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'boomblebee',
          path: '/thumb_boomblebee.jpg',
        },
        {
          title: 'shark hole',
          path: '/thumb_sharkhole.jpg',
        },
        {
          title: 'urbanputt course',
          path: '/thumb3.jpg',
        },
        {
          title: 'radgear ui',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'marinoarm',
          path: '/thumb4.jpg',
        },
        {
          title: 'viconkart',
          path: '/thumb1.jpg',
        },
        {
          title: 'airbag machine',
          path: '/thumb2.jpg',
        },
        {
          title: 'robotic workcell',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

import { useRouter } from 'next/router';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';
import Link from 'next/link';

const WorkSlider = () => {
  const router = useRouter();
  const pathname = router.pathname; //gets the current path

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                const path = `${pathname}/${image.title}`;
                return (
                  <Link
                    href={path}
                    key={index}
                  >
                    <div
                      className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                      key={index}
                    >
                      <div className='flex items-center justify-center relative overflow-hidden group'>
                        {/* image */}
                        <Image src={image.path} width={500} height={300} alt='' />
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                        {/* title */}
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                            {/* title part 1 */}
                            <div className='delay-100'>SEE THE</div>
                            {/* title part 2 */}
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                              {image.title.toUpperCase()}
                            </div>
                            {/* icon */}
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;