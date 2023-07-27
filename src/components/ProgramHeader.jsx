import React, {useRef, useState, useEffect} from 'react';
import Slider from 'react-slick';
import '../css/ImageGallery.css';


const images = [
    {
      id: 1,
      title: 'BLINDNESS',
      section: 'SECONDARY',
      img: "/images/WeCare/2.1 BLINDNESS.jpg",
    },
    {
      id: 2,
      title: 'BLINDNESS',
      section: 'SECONDARY',
      img: "/images/WeCare/2.2. BLINDNESS.jpg",
    },
    {
      id: 3,
      title: 'BLINDNESS',
      section: 'SECONDARY',
      img: "/images/WeCare/2.3. BLINDNESS.jpg",
    },
    {
      id: 4,
      title: 'BLINDNESS',
      section: 'SECONDARY',
      img: "/images/WeCare/2.4. BLINDNESS.jpg",
    },
    {
      id: 5,
      title: 'DEAFNESS',
      section: 'SECONDARY',
      img: "/images/WeCare/3.1 DEAFNESS.jpg",
    },
    {
      id: 6,
      title: 'DEAFNESS',
      section: 'SECONDARY',
      img: "/images/WeCare/3.2 DEAFNESS.jpg",
    },
    {
      id: 7,
      title: 'DEAFNESS',
      section: 'SECONDARY',
      img: "/images/WeCare/3.3. DEAFNESS.jpg",
    },
    {
      id: 8,
      title: 'DEAFNESS',
      section: 'SECONDARY',
      img: "/images/WeCare/3.4 DEAFNESS.jpg",
    },
    {
      id: 21,
      title: 'INVISIBILITY-DENIAL',
      section: 'SECONDARY',
      img: "/images/WeCare/5.1 INVISIBILITY.jpg",
    },
    {
      id: 22,
      title: 'INVISIBILITY-DENIAL',
      section: 'SECONDARY',
      img: "/images/WeCare/5.2 INVISIBILITY.jpg",
    },
    {
      id: 23,
      title: 'INVISIBILITY-DENIAL',
      section: 'SECONDARY',
      img: "/images/WeCare/5.3 INVISIBILITY.jpg",
    },
    {
      id: 24,
      title: 'INVISIBILITY-DENIAL',
      section: 'SECONDARY',
      img: "/images/WeCare/5.4 INVISIBILITY.jpg",
    },
    {
      id: 9,
      title: 'INDIFFERENCE-APATHY',
      section: 'SECONDARY',
      img: "/images/WeCare/4.1 INDIFFERENCE  APATHY.jpg",
    },
    {
      id: 10,
      title: 'INDIFFERENCE-APATHY',
      section: 'SECONDARY',
      img: "/images/WeCare/4.2 INDIFFERENCE  APATHY.jpg",
    },
    {
      id: 11,
      title: 'INDIFFERENCE-APATHY',
      section: 'SECONDARY',
      img: "/images/WeCare/4.3. INDIFFERENCE  APATHY.jpg",
    },
    {
      id: 12,
      title: 'INDIFFERENCE-APATHY',
      section: 'SECONDARY',
      img: "/images/WeCare/4.4 INDIFFERENCE APATHY.jpg",
    },
    {
      id: 13,
      title: 'SECRETS',
      section: 'SECONDARY',
      img: "/images/WeCare/6.1 SECRET.jpg",
    },
    {
      id: 14,
      title: 'SECRETS',
      section: 'SECONDARY',
      img: "/images/WeCare/6.2 SECRET.jpg",
    },
    {
      id: 15,
      title: 'SECRETS',
      section: 'SECONDARY',
      img: "/images/WeCare/6.3 SECRET.jpg",
    },
    {
      id: 16,
      title: 'SECRETS',
      section: 'SECONDARY',
      img: "/images/WeCare/6.4 SECRET.jpg",
    },
    {
      id: 17,
      title: 'SILENCE',
      section: 'SECONDARY',
      img: "/images/WeCare/7.1 SILENCE.jpg",
    },
    {
      id: 18,
      title: 'SILENCE',
      section: 'SECONDARY',
      img: "/images/WeCare/7.2 SILENCE.jpg",
    },
    {
      id: 19,
      title: 'SILENCE',
      section: 'SECONDARY',
      img: "/images/WeCare/7.3 SILENCE.png",
    },
    {
      id: 20,
      title: 'SILENCE',
      section: 'SECONDARY',
      img: "/images/WeCare/7.4 SILENCE.jpg",
    },
];

const ProgramHeader = () => {

  const sliderRef1 = useRef(null); // Create a reference to the Slider component

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
    centerPadding: '0px',
    pauseOnHover: true,
    touchMove: false,
    adaptiveHeight: true,
    autoplay: true,

    afterChange: (index) => {
      
      document.querySelector(".BLINDNESS").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".DEAFNESS").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".INVISIBILITY-DENIAL").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".SECRETS").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".SILENCE").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".INDIFFERENCE-APATHY").classList.replace("text-primary", "text-gray-200");

      switch(images[index].title){
        case 'BLINDNESS':
          document.querySelector(".BLINDNESS").classList.replace("text-gray-200", "text-primary");
          break;
        case 'DEAFNESS':
          document.querySelector(".DEAFNESS").classList.replace("text-gray-200", "text-primary");
          break;
        case 'INVISIBILITY-DENIAL':
          document.querySelector(".INVISIBILITY-DENIAL").classList.replace("text-gray-200", "text-primary");
          break;
        case 'SECRETS':
          document.querySelector(".SECRETS").classList.replace("text-gray-200", "text-primary");
          break;
        case 'SILENCE':
          document.querySelector(".SILENCE").classList.replace("text-gray-200", "text-primary");
          break;
        case 'INDIFFERENCE-APATHY':
          document.querySelector(".INDIFFERENCE-APATHY").classList.replace("text-gray-200", "text-primary");
          break;
      };
    },
  };


  return (
    <div>
      <div className='flex w-full h-auto justify-center items-center'>
        <div className='container-box-Gallery'>
            <div className='w-full h-auto pb-2'>
              <div className='hidden text-center w-full h-auto mb-2'>
                <span className='text-2xl text-bold'>
                  You Can STOP
                </span>
              </div>
              <div className='container-bts-Gallery h-auto'>
                <ul className='flex items-center justify-between h-full'>
                  <li>
                      <a className='BLINDNESS text-xl text-bold text-gray-200 hover:text-underline'>BLINDNESS</a>
                  </li>
                  <li>
                      <a className='DEAFNESS text-xl text-bold text-gray-200 hover:text-underline'>DEAFNESS</a>
                  </li>
                  <li>
                      <a className='INVISIBILITY-DENIAL text-xl text-bold text-gray-200 hover:text-underline'>INVISIBILITY-DENIAL</a>
                  </li>
                  <li>
                      <a className='INDIFFERENCE-APATHY text-xl text-bold text-gray-200 hover:text-underline'>INDIFFERENCE-APATHY</a>
                  </li>
                  <li>
                      <a className='SECRETS text-xl text-bold text-gray-200 hover:text-underline'>SECRETS</a>
                  </li>
                  <li>
                      <a className='SILENCE text-xl text-bold text-gray-200 hover:text-underline'>SILENCE</a>
                  </li>
                </ul>
              </div>
          </div>

          <div className='items-center h-full'>
            <Slider ref={sliderRef1} {...settings}>
                {images.map((image) => (
                <div key={image.id} className="image-box-Gallery">
                    <img className="rounded-lg" src={image.img } alt={image.title} />
                </div>
                ))}
            </Slider>
          </div>
          
        </div>
      </div>
    </div>
    
  );
};

export default ProgramHeader;
