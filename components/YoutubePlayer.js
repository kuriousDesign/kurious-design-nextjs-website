// YouTubePlayer.js
import React, { useRef } from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {
  const playerRef = useRef(null);
  
  const opts = { 
    height: "300", 
    width: "400", 
    playerVars: { 
      autoplay: 1, 
    }, 
  }; 

  return (
      <YouTube videoId={videoId} ref={playerRef} opts={opts}/>
  );
};

export default YouTubePlayer;