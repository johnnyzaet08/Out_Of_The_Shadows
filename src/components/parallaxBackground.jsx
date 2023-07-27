import React, { useEffect } from 'react';
import _ from 'lodash';
import ScaledVars from 'scaled-vars';
import '../css/parallax.css';


const ParallaxClouds = () => {


  // Config
  const nClouds = 2;
  const minCloudSize = 0.3;
  const maxCloudSize = 1.7;

  // Helpers
  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const createCloud = () => {

 
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');

    const cloudContainer = document.createElement('div');
    cloudContainer.classList.add('cloud_Container');

    const cloudTop = document.createElement('div');
    cloudTop.classList.add('cloud_Top');

    const cloudMain = document.createElement('div');
    cloudMain.classList.add('cloud_Main');

    const cloudBottom = document.createElement('div');
    cloudBottom.classList.add('cloud_Bottom');

    cloudContainer.appendChild(cloudTop);
    cloudContainer.appendChild(cloudMain);
    cloudContainer.appendChild(cloudBottom);

    cloud.appendChild(cloudContainer);

    document.querySelector('.FixedBody').appendChild(cloud);

  };

  // Create clouds
  

  useEffect(() => {
    let fixedBodyElement = document.querySelector('.FixedBody');
    if (fixedBodyElement) {
      for (let i = 0; i < nClouds; i++) {
        createCloud(getRandomArbitrary(minCloudSize, maxCloudSize));
      }
    }
  }, []);

  return (

  <div className="FixedBody">

  </div>

  );
};

export default ParallaxClouds;
