// fonts
import { Sora, Permanent_Marker, Long_Cang } from '@next/font/google';

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  variable: '--font-permanentMarker',
  weight: ['400'],
});


const longCang = Long_Cang({
  subsets: ['latin'],
  variable: '--font-longCang',
  weight: ['400'],
});

// components
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora ${permanentMarker.variable} font-permanentMarker ${longCang.variable} font-longCang relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
