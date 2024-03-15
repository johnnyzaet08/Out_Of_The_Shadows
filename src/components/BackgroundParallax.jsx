import React from 'react';
import image from '../images/BackgroundParallax.png';
import ResourcesComponent from '../components/Resources';
import { Background } from 'react-parallax';
import '../css/backgroundsFile.css';

const ParallaxClouds = () => {
  


  return (
    <div className="homeBackgroundStyle flex flex-col mt-20 min-h-screen overflow-hidden">
      <ResourcesComponent />
    </div>
  );
};

export default ParallaxClouds;
