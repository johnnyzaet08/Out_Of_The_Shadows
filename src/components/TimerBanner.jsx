import React, { useState, useEffect  } from 'react';
import sandClock from '../images/SandClock1.gif';
import Donation from '../images/donation.png';
import Donation1 from '../images/donation1.png';

function TimerBanner() {

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
    const timeout  = setTimeout(() => {
      if(isClosed){
        setBannerOpen(true);
        setIsClosed(false);
      };
    }, 3600);

    return () => clearTimeout(timeout);
  }, [isClosed]);

  return (
    <>
      {bannerOpen && (
        <div className={`fixed  opacity-85 md:opacity-100 w-auto z-20 ${stageCounter ? 'top-[75%]' : 'top-[15%]'}`}>
          <div className="bg-skyblue text-sm p-3 md:rounded shadow-lg flex justify-between">
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
                    src={Donation1}
                    alt="placeholder"
                    onMouseLeave={handleMouseLeave}
                  />
                ) : (
                  <img
                    src={Donation}
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