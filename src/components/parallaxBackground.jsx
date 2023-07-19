import React, { useEffect } from 'react';
import _ from 'lodash';
import ScaledVars from 'scaled-vars';
import '../css/parallax.css';



const ParallaxClouds = () => {
  // Config
  const clouds = [];
  const nClouds = 20;
  const minCloudSize = 0.3;
  const maxCloudSize = 1.7;
  const minCloudOffsetX = -200;
  const maxCloudOffsetX = 0;

  // Helpers
  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const createCloud = (size = '1vmin') => {

 
    const cloud = document.createElement('div');
    cloud.classList.add('Cloud');

    const cloudContainer = document.createElement('div');
    cloudContainer.classList.add('Cloud__Container');

    const cloudTop = document.createElement('div');
    cloudTop.classList.add('Cloud__Top');

    const cloudMain = document.createElement('div');
    cloudMain.classList.add('Cloud__Main');

    const cloudBottom = document.createElement('div');
    cloudBottom.classList.add('Cloud__Bottom');

    cloudContainer.appendChild(cloudTop);
    cloudContainer.appendChild(cloudMain);
    cloudContainer.appendChild(cloudBottom);

    cloud.appendChild(cloudContainer);

    document.querySelector('.FixedBody').appendChild(cloud);

    CssCustomProperties.set({ size: `${size}vh` }, cloud);

    return cloud;
  };

  // Create clouds
  document.addEventListener('DOMContentLoaded', () => {
    let fixedBodyElement = document.querySelector('.FixedBody');

    console.log("Entre 1 ");



    if (fixedBodyElement) {

      console.log("Entre2");
      for (let i = 0; i < nClouds; i++) {
        clouds.push(createCloud(getRandomArbitrary(minCloudSize, maxCloudSize)));
      }
    
    }
  }); 
 
  

  // Initialize library with list of variable options.
  const variables = new ScaledVars([
    {
      name: 'bg-color',
      scale: ScaledVars.Scales.scalePow().exponent(2).domain([500, 1500]).range(['DeepSkyBlue', 'MidnightBlue']).clamp(true),
    },
    ...clouds.map((cloud) => ({
      name: 'translateX',
      scale: ScaledVars.Scales.scaleLinear().domain([0, 1000]).range([getRandomArbitrary(minCloudOffsetX, maxCloudOffsetX) * -1, getRandomArbitrary(minCloudOffsetX, maxCloudOffsetX)]),
      unit: 'vw',
      element: cloud,
    })),
  ]);

  // Update variables based on scroll
  const update = (scroll = window.scrollY) => {
    variables.update(scroll);
  };

  // Throttle update call to prevent thrashing
  const throttledUpdate = _.throttle(update, 10);

  // Add event listener to update variables on scroll
  useEffect(() => {
    window.addEventListener('scroll', throttledUpdate);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', throttledUpdate);
    };
  }, []);

  // Initial update
  useEffect(() => {
    update(0);
  }, []);

  return (<div className="FixedBody"></div>);
};

export default ParallaxClouds;
