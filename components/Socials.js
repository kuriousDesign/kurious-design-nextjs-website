import Link from 'next/link';
import { AiFillLinkedin, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";

const Socials = () => {
  const iconSize = '32px'; // Adjust the size as needed
  return (
    <div className=' fixed bottom-2 left-1/2 -translate-x-1/2 w-[200px] h-[80px] flex flex-row justify-between items-center'>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <AiFillYoutube size={iconSize} />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <AiOutlineInstagram size={iconSize} />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <AiFillLinkedin size={iconSize} />
      </Link>
    </div>
  );
};

export default Socials;
