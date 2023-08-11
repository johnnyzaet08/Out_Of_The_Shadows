import React from 'react';
import image from '../images/BackgroundParallax.png';
import ResourcesComponent from '../components/Resources';
import { Background } from 'react-parallax';

const ParallaxClouds = () => {
  


  return (
    <div className="" style={{ 
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'}}>
      <ResourcesComponent />
    </div>
  );
};

export default ParallaxClouds;
