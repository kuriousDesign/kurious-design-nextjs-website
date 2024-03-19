import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
import HousePhotoSlide from '../HousePhotoSlide';
import { useEffect, useState } from 'react';

const SlideFirst = () => (
    <div className='h-full bg-gray-800 py-32 text-center'>
      <div className='container mx-auto h-full flex flex-col justify-center'>
        {/* title */}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 mb-8 xl:mb-0 font-permanentMarker'
        >
          FIRST STORY ROOM <span className='text-redpinkAccent'>.</span>
        </motion.h2>
      </div>
    </div>
  );

function Slides() {
    const [photoUrls, setPhotoUrls] = useState([]);
    const [slides, setSlides] = useState([]);
  
    useEffect(() => {
      fetch('/api/photos')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          const slidesArray = data.photoUrls.map(function(url, index) {
            return <HousePhotoSlide url={url} key={index} />;
          });
          slidesArray.unshift(<SlideFirst key="slide-first" />);
          setSlides(slidesArray);
          setPhotoUrls(data.photoUrls);
        })
        .catch(function(error) {
          console.error('Error fetching photos:', error);
        });
    }, []);
  
    return slides;
  }
  
  export default Slides;