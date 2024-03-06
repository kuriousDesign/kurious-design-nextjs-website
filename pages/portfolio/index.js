import LayoutSwiper from '../../components/LayoutSwiper';
import { PortfolioSlides } from './slides';


const Portfolio = () => {
  return (
    <LayoutSwiper slides={PortfolioSlides} />
  );
};

export default Portfolio;