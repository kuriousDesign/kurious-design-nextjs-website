import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Hamburger from 'hamburger-react'
import { useState, useEffect } from 'react';
import Nav from './Nav';

const Header = () => {
  const designText = 'D E S I G N';
  const router = useRouter();
  const pathname = router.pathname;
  const isWork = pathname === '/work';
  const [isOpen, setOpen] = useState(false);

  // Close the nav whenever the route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);


  return (
    <header className='fixed z-30 w-full h-[100px]'>
      {/* nav*/}
      {isOpen && (
        <Nav />
      )}
      <div className='h-full w-full'>
        {/* nav hamburger */}
        <div className='absolute top-1/2 -translate-y-1/2 left-7'>
        <Hamburger toggled={isOpen} toggle={setOpen} duration="0.4" distance="lg" direction="right"  rounded onToggle={toggled => {
          if (toggled) {
            // open a menu
          } else {
            // close a menu
          }
        }} />
        </div>
        {/* logo */}
        <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[175px] h-auto'>
          <Link href={'/'} >
            <div className='relative flex items-center w-auto '>
              <Image
                src={'/Kurious-Logo-White-clear-bk.png'}
                width={60}
                height={60}
                alt=''
                priority={true}
              />
              <p className='absolute left-14 top-3 font-permanentMarker text-4xl text-white '>urious</p>
              <p className='absolute left-9 top-10 font-longCang whitespace-nowrap  text-xl text-red-500'>{designText}</p>
            </div>
          </Link>
        </div>
        {/* portfolio btn*/}
        {!isWork && (
          <Link href={'/work'}>
            <button className="absolute right-5 xl:right-10 top-1/2 -translate-y-1/2 h-[37px] w-[90px] xl:h-[45px] xl:w-[130px] rounded-full ring-2 ring-white bg-transparent text-white text-[8px] xl:text-xs font-bold font-permanentMarker hover:ring-blue-300 hover:text-blue-300 hover:scale-105">
              PORTFOLIO
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
