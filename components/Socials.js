import Link from 'next/link';
import { AiFillLinkedin, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import SocialsBackgroundMobile from './SocialsBackgroundMobile';

const Socials = () => {
  const youtubeChannelUrl = 'https://www.youtube.com/@kurious-design';
  const linkedInJakeUrl = 'https://www.linkedin.com/in/jakegardnerdesign/';
  const instagramUrl = 'https://www.instagram.com/kuriousdesign/';
  return (
    <div>
      <SocialsBackgroundMobile />
      <div className='z-50 fixed bottom-3 xl:bottom-5 left-1/2 -translate-x-1/2 w-[200px] h-auto flex flex-row justify-between items-center'>
        <Link href={youtubeChannelUrl} target="_blank" rel="noopener noreferrer"className='hover:text-accent transition-all duration-300 flex items-center'>
          <AiFillYoutube className='w-[24px] h-[24px] xl:w-[32px] xl:h-[32px]' />
        </Link>
        <Link href={instagramUrl} target="_blank" rel="noopener noreferrer" className='hover:text-accent transition-all duration-300 flex items-center'>
          <AiOutlineInstagram className='w-[24px] h-[24px] xl:w-[32px] xl:h-[32px]' />
        </Link>
        <Link href={linkedInJakeUrl} target="_blank" rel="noopener noreferrer" className='hover:text-accent transition-all duration-300 flex items-center'>
          <AiFillLinkedin className='w-[24px] h-[24px] xl:w-[32px] xl:h-[32px]' />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
