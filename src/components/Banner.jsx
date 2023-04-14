import React, { useState, useEffect  } from 'react';
import Donation from '../images/donation.png';
import Donation1 from '../images/donation1.png';

function Banner() {

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
    // Set a timeout to hide the component after 3 seconds
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
        <div className="fixed bottom-20 right-1 opacity-85 md:opacity-100 md:right-4 w-auto z-60">
          <div className="bg-target text-sm p-3 md:rounded shadow-lg flex justify-between">
            <div className="text-white-100 inline-flex justify-center">
              <a
                className="felx items-center"
                href="/page3"
                rel="noreferrer"
              >
                <div className="flex items-center justify-center h-24 w-24 fill-current text-white-500 hover:text-red-500">
                  {isHover ? (
                    <img
                      src={Donation1}
                      alt="placeholder"
                      onMouseLeave={handleMouseLeave}
                    />
                  ) : (
                    /*<svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-28 w-28 fill-current text-white-500 hover:text-red-500"
                      viewBox="0 0 34 34"
                      onMouseEnter={handleMouseEnter}
                      >
                      <path
                        d="M 0 13 V 33 L 34 33 L 34 13 L 32 13 L 32 31 L 2 31 L 2 13 L 0 13 M 28 21 L 28 27 L 25 27 L 17 29 L 16 29 C 15 29 13.3333 27.6667 9 25 L 6 23 C 5 21 7 21 7 21 L 12 23 C 12 24 14 24 14 24 L 19 24 A 1 0.7 0 0 0 19 23 L 14 23 A 1 1.005 0 0 1 14 21 L 19 21 C 20 20 24 20 25 21 L 28 21 M 0 0 L 0 5.7 L 3.35 7.2 C 4 8.1 5 9.2 6 9.45 C 7 9.8 8 9.8 9 9.3 L 10.2 8.7 L 14 9.1 A 1 0.9 0 0 0 14 7.2 L 10 6.3 A 1 0.3 0 0 1 10 6.2 L 14 7.1 C 14.8167 7.133 14.9333 6.7267 15 6.54 C 15.2 6.0267 15 5.5133 14.8 5 L 13.1 3 C 12.7333 2.6667 12.3667 2.37 12 2.45 L 5 2.6 L 0 0 Z M 9.7 9 C 9.4 9.3333 9.6 9.6667 10 9.9 L 11.2 9.7 C 11.1333 9.4667 11.1667 9.2333 11.35 8.82 L 10.2 8.7 C 10 8.8 9.8 8.9 9.7 9 M 9 9.3 L 9 9.7 C 8.5067 9.82 8.2533 9.8 8.2 9.6 C 8.4667 9.52 8.7333 9.45 9 9.3 M 12.3 8.9 C 12 9.2667 12.05 9.6333 12.1 10 C 12.2 10.3333 12.7 10.6667 13 11 L 15.18 13.2 A 1 12 0 0 0 15.285 13.2 L 17.5 11 C 18.2 10.3333 18.3 10.1667 18.35 10 C 18.5 9.6 18.4 9 18 8.75 C 17.3333 8.2 16.6667 8.6 16.35 9 L 15.5 9.85 C 15.3333 10 15.1667 10 15 9.9 L 14.2 9.09"
                      />
                    </svg>*/
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


export default Banner;