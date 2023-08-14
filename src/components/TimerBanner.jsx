import React, { useState, useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
import sandClock from '../images/SandClock.gif';
import oneMinute from '../images/OneMinute.png';
import oneLife from '../images/OneLife.png';

import "../css/backgroundsFile.css";

function TimerBanner() {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  const [bannerOpen, setBannerOpen] = useState(false);
  const [stageCounter, setStageCounter] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    if(!stageCounter){
      setStageCounter(true);
      handleClose();
    }
  };

  function handleClose() {
    setBannerOpen(false);
    setIsClosed(true);
  }

  useEffect(() => {
    const timeoutTimerBanner  = setTimeout(() => {
      if(isClosed && windowSize.width > 768){
        setBannerOpen(true);
        setIsClosed(false);
      };
    }, 3600);

    return () => clearTimeout(timeoutTimerBanner);
  }, [isClosed]);

  return (
    <>
      {bannerOpen && (
        <div className={`fixed  opacity-85 md:opacity-100 w-auto z-20 ${stageCounter ? 'top-[75%]' : 'top-[15%]'}`}>
          <div className="bannerTimerBackground text-sm p-3 md:rounded shadow-lg flex justify-between">
            <div className="flex items-center justify-center h-20 w-20 fill-current text-white-500 hover:text-red-500">
              {stageCounter && (
                <a
                  className=''
                  href='/Donations'
                  rel='noreferrer'
                >
                <img
                    src={sandClock}
                    alt="placeholder"
                  />
                </a>
              )}
              {!stageCounter && (
                <>
                {isHover ? (
                  <img
                    src={oneLife}
                    alt="placeholder"
                    onMouseLeave={handleMouseLeave}
                  />
                ) : (
                  <img
                    src={oneMinute}
                    alt="placeholder"
                    onMouseEnter={handleMouseEnter}
                  />
                )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}


export default TimerBanner;