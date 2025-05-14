// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

const iconSize = 30;
export const navData = [
  { name: 'home', path: '/home', icon: <HiHome size={iconSize} /> },
  { name: 'about', path: '/about', icon: <HiUser size={iconSize} /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup size={iconSize} /> },
  { name: 'portfolio', path: '/portfolio', icon: <HiViewColumns size={iconSize} /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText size={iconSize} />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope size={iconSize} />,
  },
];

// next link
import Link from 'next/link';

// next router
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className='flex flex-col items-center justify-center gap-y-4 fixed left-[0%] z-10 top-20 w-[340px]'>
      {/* inner */}
      <div
        className='flex w-full flex-col items-left justify-center gap-y-10 px-0 h-max py-8 bg-black/70
        backdrop-blur-sm rounded-r-full font-permanentMarker text-[16px] font-thin tracking-widest uppercase'
      >
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && 'text-redpinkAccent'
              } relative flex items-left group hover:text-redpinkAccent transition-all duration-300 w-auto ml-9`}
              href={link.path}
              key={index}
            >
              {/* icon */}
              <div>{link.icon}</div>

              {/* tooltip */}
              <div className='absolute pr-10 left-10'>
                <div className=' relative flex items-center pl-[4px] rounded-[3px]'>
                  <div 
                    className={`${
                      link.path === pathname && 'text-redpinkAccent'
                    } leading-none py-2 pl-1`}>
                    {link.name}
                  </div>
                </div>
              </div>

            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
