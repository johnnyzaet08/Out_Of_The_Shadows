import React, { useState, useEffect } from 'react';
import image from '../images/BackgroundParallax.png';
import ResourcesComponent from '../components/Resources';

const ParallaxClouds = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="" style={{ 
      backgroundPosition: `-${scrollPosition * 1}px 0`,
      backgroundImage: `url(${image})` }}>
      <ResourcesComponent />
    </div>
  );
};

export default ParallaxClouds;
