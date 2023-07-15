import React, { useState, useEffect } from 'react';
import iamge1 from '../images/Frames/1.gif';
import iamge2 from '../images/Frames/2.gif';
import iamge3 from '../images/Frames/3.gif';
import iamge4 from '../images/Frames/4.gif';
import iamge5 from '../images/Frames/5.gif';
import iamge6 from '../images/Frames/6.gif';



const frames = [
  iamge1,
  iamge2,
  iamge3,
  iamge4,
  iamge5,
  iamge6,
  'url2',
  'url3',
  'url4',
  'url5',
  'url6',
  'url7',
  'url8',
  'url9',
  'url10',
  'url11',
  'url12',
  'url13',
  'url14',
  'url15',
]

const BackgroundGIF = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      console.log(currentFrame);
      console.log(frames[currentFrame])
      setCurrentFrame((prevFrame) => {
        const nextFrame = prevFrame + (event.deltaY > 0 ? 1 : -1);
        return Math.min(Math.max(nextFrame, 0), frames.length - 1);
      });
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  });

  return <img src={frames[currentFrame]} alt="Animated GIF" />;
};

export default BackgroundGIF;
