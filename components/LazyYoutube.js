import React, { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";

const LazyYoutube = ({ videoId, height=300, width=400 }) => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);
  const opts = { 
    height: height.toString(), 
    width: width.toString(), 
    playerVars: { 
      autoplay: 1, 
    }, 
  }; 

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoad(true);
        observer.disconnect();
      }
    });

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoRef}>
      {load ? (
        <YouTube videoId={videoId} ref={videoRef} opts={opts}/>
      ) : (
        <div className={`w-[${width} h-${height}] bg-gray-700`}>Loading...</div>
      )}
    </div>
  );
};

export default LazyYoutube;