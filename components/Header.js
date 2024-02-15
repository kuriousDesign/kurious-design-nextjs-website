// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';



const Header = () => {
  const designText = 'D E S I G N';
  return (
    <header className='absolute z-30 w-full flex items-center px-0 xl:h-[90px] bg-blue-500 bg-opacity-30'>
      <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-3 xl:py-8'>
          {/* logo */}
          <div className='w-[175px] '>
            <Link href={'/'} >
              <div className='relative flex items-center w-auto '>
                <Image
                  src={'/Kurious-Logo-White-clear-bk.png'}
                  width={60}
                  height={48}
                  alt=''
                  priority={true}
                />
                <p className='absolute left-14 top-3 font-permanentMarker text-4xl text-white '>urious</p>
                <p className='absolute left-9 top-10 font-longCang whitespace-nowrap  text-xl text-red-500'>{designText}</p>
              </div>
            </Link>
          </div>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
