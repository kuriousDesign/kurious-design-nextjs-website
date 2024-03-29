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


const WorkSlide = ({projectId, projectData, index}) => {

  return (
      <div className='grid grid-cols-1 grid-rows-1 gap-4 cursor-pointer'>
        <Link href={`/work/${projectId.toString()}`} key={index}>
          <div className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
            <div className='flex items-center justify-center relative overflow-hidden group rounded-4xl'>
              {/* name */}
              <div className='text-lg'>{projectData.title}</div>
              <Image src={projectData.thumbUrl} width={400} height={300} alt='' />
              <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
              <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                  <div className='delay-100'>SEE </div>
                  <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                    {projectData.title.toUpperCase()}
                  </div>
                  <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
  );
};

export default WorkSlide;
