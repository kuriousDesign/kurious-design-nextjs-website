import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { projectMap } from '../copy/ProjectData';
import { useRouter } from 'next/router';
import WorkSlide from './WorkSlide';


const WorkSlider = () => {
  const router = useRouter();
  const pathname = router.pathname;
  
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[500px] xl:h-[600px]'
    >
    {Array.from(projectMap.entries()).map(([projectId, projectData], index) => {
      return (
        <SwiperSlide key={index}>
          <Link href={`/work/${projectId.toString()}`} key={index}>
            <div className='flex flex-col items-center gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[600px] flex flex-col items-center relative mx-auto justify-center pt-10'>
                <div className='flex flex-col justify-center text-center w-full h-full '>
                            
                  {/* image */}
                  <div className='mb-2 mx-auto w-[60vw] h-[60vw] max-w-[350px] max-h-[350px] rounded-full overflow-hidden'>
                    <Image className=' w-full object-cover h-full' src={projectData.thumbUrl} width={4032} height={3022} alt='' />
                  </div>
                  {/* title */}
                  <div className='text-lg pt-4 text-redpinkAccent font-permanentMarker'>{projectData.title}</div>   
                  <div className='xl:text-lg text-center font-gothamBook text-gray-400'>
                  {projectData.quickBlurb}
                </div>
                </div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px]  relative xl:pl-20'>
                {/* message */}

              </div>
            </div>
          </Link>
        </SwiperSlide>
      );
    })}
  </Swiper>
  );
};

export default WorkSlider;