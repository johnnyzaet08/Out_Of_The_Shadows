import React, { useState, useEffect } from 'react';
import image from '../images/BackgroundParallax.png';
import ResourcesComponent from '../components/Resources';

const ParallaxClouds = () => {
  


  return (
    <div className="" style={{ 
      backgroundImage: `url(${image})` }}>
      <ResourcesComponent />
    </div>
  );
};

export default ParallaxClouds;
