import React from 'react';
import Image from 'next/image';

const images = require.context('../public/kurious/down', true);
const imageList = images.keys().map(image => images(image));

function ImageGallery() {
    imageList.map((image) => (
        console.log(image.default)
    ))
  return (
    <div>
      {imageList.map((image, index) => (
        <Image key={index} src={image.default} alt={`image-${index}`} />
      ))}
    </div>
  );
}

export default ImageGallery;