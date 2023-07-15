import React, { useState, useEffect } from 'react';
import { extractFrames } from 'gif.js'; // Replace with the actual library you choose
import SrcIMG from '../images/jiji.gif';

const backgroundGIF = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const frames = extractFrames(SrcIMG); // Replace with the path to your GIF

  useEffect(() => {
    const handleScroll = (event) => {
      setCurrentFrame((prevFrame) => prevFrame + (event.deltaY > 0 ? 1 : -1));
      console.log("move jiji");
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return <img src={frames[currentFrame]} alt="Animated GIF" />;
};

export default backgroundGIF;