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
  { name: 'work', path: '/work', icon: <HiViewColumns size={iconSize} /> },
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
    <nav className='flex flex-col items-center justify-center gap-y-4 fixed left-[1%] z-10 top-20 w-16 max-w-md'>
      {/* inner */}
      <div
        className='flex w-full flex-col items-center justify-center gap-y-10 px-0 h-max py-8 bg-white/10
      backdrop-blur-sm  text-xl rounded-full'
      >
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && 'text-accent'
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {/* icon */}
              <div>{link.icon}</div>

              {/* tooltip */}
              <div className='absolute pr-14 left-14'>
                <div className='text-white relative flex items-center p-[6px] rounded-[3px]'>
                  <div className='text-[18px] leading-none'>
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
