import React, {useRef, useState} from 'react';
import Slider from 'react-slick';
import AnimatedStats from './AnimatedStats';
import '../css/MovieReel.css';

const MovieReel = ({ images }) => {

  const sliderRef = useRef(null); // Create a reference to the Slider component

  const handleNextClick = () => {
    sliderRef.current.slickNext(); // Call the slickNext method to navigate to the next slide
  };

  const settings = {
    dots: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: false,
    centerMode: false,
    pauseOnHover: true,

    afterChange: (index) => {
      document.querySelector(".INOCENT").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".VICTIM").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".DEFENSELESS").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".VULNERABLE").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".PURE").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".HONEST").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".TRUSTFUL").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".NAIVE").classList.replace("text-primary", "text-gray-200");
      switch(images[index].title){
        case 'INOCENT':
          document.querySelector(".INOCENT").classList.replace("text-gray-200", "text-primary");
          break;
        case 'VICTIM':
          document.querySelector(".VICTIM").classList.replace("text-gray-200", "text-primary");
          break;
        case 'DEFENSELESS':
          document.querySelector(".DEFENSELESS").classList.replace("text-gray-200", "text-primary");
          break;
        case 'VULNERABLE':
          document.querySelector(".VULNERABLE").classList.replace("text-gray-200", "text-primary");
          break;
        case 'PURE':
          document.querySelector(".PURE").classList.replace("text-gray-200", "text-primary");
          break;
        case 'HONEST':
          document.querySelector(".HONEST").classList.replace("text-gray-200", "text-primary");
          break;
        case 'TRUSTFUL':
          document.querySelector(".TRUSTFUL").classList.replace("text-gray-200", "text-primary");
          break;
        case 'NAÏVE':
          document.querySelector(".NAIVE").classList.replace("text-gray-200", "text-primary");
          break;
      };
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <div className='container-box'>
      <div className='container-bg'>
        <div className='w-full h-auto py-2'>
          <AnimatedStats handleNextClick={handleNextClick} startValue={100} label="Total Visitors" />
          <div className='container-bts h-auto'>
            <ul className='flex items-center justify-between h-full'>
              <li>
                <a className='INOCENT text-xl text-bold text-gray-200 hover:text-underline'>INOCENT</a>
              </li>
              <li>
                <a className='VICTIM text-xl text-bold text-gray-200 hover:text-underline'>VICTIM</a>
              </li>
              <li>
                <a className='DEFENSELESS text-xl text-bold text-gray-200 hover:text-underline'>DEFENSELESS</a>
              </li>
              <li>
                <a className='VULNERABLE text-xl text-bold text-gray-200 hover:text-underline'>VULNERABLE</a>
              </li>
              <li>
                <a className='PURE text-xl text-bold text-gray-200 hover:text-underline'>PURE</a>
              </li>
              <li>
                <a className='HONEST text-xl text-bold text-gray-200 hover:text-underline'>HONEST</a>
              </li>
              <li>
                <a className='TRUSTFUL text-xl text-bold text-gray-200 hover:text-underline'>TRUSTFUL</a>
              </li>
              <li>
                <a className='NAIVE text-xl text-bold text-gray-200 hover:text-underline'>NAÏVE</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image) => (
          <div key={image.id} className="w-full px-[1px]">
            <img className="rounded-lg w-auto" src={image.img } alt={image.title} />
          </div>
        ))}
      </Slider>
    </div>
    
  );
};

export default MovieReel;
