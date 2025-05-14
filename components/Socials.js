import Link from 'next/link';
import { AiFillLinkedin, AiFillYoutube, AiOutlineInstagram, AiFillCloseCircle } from "react-icons/ai";
import SocialsBackgroundMobile from './SocialsBackgroundMobile';

const Socials = () => {
  const youtubeChannelUrl = 'https://www.youtube.com/@kurious-design';
  const linkedInJakeUrl = 'https://www.linkedin.com/in/jakegardnerdesign/';
  const instagramUrl = 'https://www.instagram.com/kuriousdesign/';

  // create an arrow function to exit full screen
  // this function will be called when the user clicks the exit full screen button
  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.error(`Error attempting to exit full-screen mode: ${err.message}`);
      });
    }
  };


  // create a tsx element called exitFullScreenButton that will live as a button inside a div that is fixed to the bottom left of the screen
  // the button will be an icon that is a close icon and when clicked will call the exitFullScreen function


  const exitFullScreenButton = (
    <div className='fixed bottom-3 left-3 z-50 xl:hidden'>
      <button onClick={exitFullScreen} className=' rounded-full p-2 shadow-lg hover:shadow-xl text-gray-700'>
        <AiFillCloseCircle className='w-[24px] h-[24px]' />
      </button>
    </div>
  );


  return (
    <div>
      <SocialsBackgroundMobile />
      <div className='z-50 fixed bottom-3 xl:bottom-5 left-1/2 -translate-x-1/2 w-[160px] h-auto flex flex-row justify-between items-center'>
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
      {exitFullScreenButton}
    </div>

  );
};

export default Socials;
