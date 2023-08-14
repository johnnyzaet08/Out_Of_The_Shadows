import React, { useState, useEffect  } from 'react';
import Donation from '../images/donation.png';
import Donation1 from '../images/donation1.png';

function DonationBanner() {

  const [bannerOpen, setBannerOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    const timeout  = setTimeout(() => {
      if(isClosed){
        setBannerOpen(true);
        setIsClosed(false);
      };
    }, 3600);

    return () => clearTimeout(timeout);
  }, [isClosed]);

  function handleClose() {
    setBannerOpen(false);
    setIsClosed(true);
  }

  return (
    <>
      {bannerOpen && (
        <div className="fixed w-[35%] xs:[25%] md:w-[20%] lg:w-[15%] xl:w-[10%] bottom-20 right-1 opacity-85 md:opacity-100 md:right-4 w-auto z-20">
          <div className="bg-target text-sm p-3 md:rounded shadow-lg flex justify-between">
            <div className="text-white-100 inline-flex justify-center">
              <a
                className="felx items-center"
                href="/Donations"
                rel="noreferrer"
              >
                <div className="flex w-full h-auto items-center justify-center fill-current text-white-500 hover:text-red-500">
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
                </div>

              </a>
            </div>
            <button onClick={handleClose} className="text-white-100 hover:text-slate-400 pl-2 ml-3 border-l border-white-100">
              <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}


export default DonationBanner;