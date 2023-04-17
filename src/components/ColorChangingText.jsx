import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/MovieReel.css';

import Image1 from '../images/HomePage/1.1 OUT.jpg';
import Image2 from '../images/HomePage/1.2 OUT.jpg';
import Image3 from '../images/HomePage/1.3 OUT.jpg';
import Image4 from '../images/HomePage/1.4 OUT.jpg';
import Image5 from '../images/HomePage/2.1 OF.jpg';
import Image6 from '../images/HomePage/2.2 OF.jpg';
import Image7 from '../images/HomePage/2.3 OF.jpg';
import Image8 from '../images/HomePage/2.4 OF.jpg';
import Image9 from '../images/HomePage/3.1 THE.jpg';
import Image10 from '../images/HomePage/3.2 THE.jpg';
import Image11 from '../images/HomePage/3.3 THE.jpg';
import Image12 from '../images/HomePage/3.4 THE.jpg';
import Image13 from '../images/HomePage/4.1 SHADOWS.jpg';
import Image14 from '../images/HomePage/4.2 SHADOWS.jpg';
import Image15 from '../images/HomePage/4.3 SHADOWS.jpg';
import Image16 from '../images/HomePage/4.4 SHADOWS.jpg';

const duration = 2000; // Duración de la transición en milisegundos

const images = [
  {
    id: 1,
    title: 'Image 1',
    img: Image1,
  },
  {
    id: 2,
    title: 'Image 2',
    img: Image2,
  },
  {
    id: 3,
    title: 'Image 3',
    img: Image3,
  },
  {
    id: 4,
    title: 'Image 4',
    img: Image4,
  },
  {
    id: 5,
    title: 'Image 5',
    img: Image5,
  },
  {
    id: 6,
    title: 'Image 6',
    img: Image6,
  },
  {
    id: 7,
    title: 'Image 7',
    img: Image7,
  },
  {
    id: 8,
    title: 'Image 8',
    img: Image8,
  },
  {
    id: 9,
    title: 'Image 9',
    img: Image9,
  },
  {
    id: 10,
    title: 'Image 10',
    img: Image10,
  },
  {
    id: 11,
    title: 'Image 11',
    img: Image11,
  },
  {
    id: 12,
    title: 'Image 12',
    img: Image12,
  },
  {
    id: 13,
    title: 'Image 13',
    img: Image13,
  },
  {
    id: 14,
    title: 'Image 14',
    img: Image14,
  },
  {
    id: 15,
    title: 'Image 15',
    img: Image15,
  },
  {
    id: 16,
    title: 'Image 16',
    img: Image16,
  },  
];

function ColorChangingText() {

  const [textSelector, setTextSelector] = useState(0);
  const [nextTextSelector, setNextTextSelector] = useState(1);
  const sliderRef = useRef(null); // Create a reference to the Slider component

  const handleNextClick = () => {
    sliderRef.current.slickNext(); // Call the slickNext method to navigate to the next slide
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      switch(textSelector){
        case 0:
          document.querySelector(".refText1").classList.replace("text-gray-800", "text-primary");
          document.querySelector(".refText5").classList.replace("text-gray-200", "text-gray-300");
          break;
        case 1:
          document.querySelector(".refText2").classList.replace("text-gray-800", "text-primary");
          document.querySelector(".refText5").classList.replace("text-gray-300", "text-gray-400");
          break;
        case 2:
          document.querySelector(".refText3").classList.replace("text-gray-800", "text-red-500");
          document.querySelector(".refText5").classList.replace("text-gray-400", "text-gray-500");
          break;
        case 3:
          document.querySelector(".refText4").classList.replace("text-gray-800", "text-green-500");
          document.querySelector(".refText5").classList.replace("text-gray-500", "text-gray-800");
          break;
        default:
          document.querySelector(".refText1").classList.replace("text-primary", "text-gray-800");
          document.querySelector(".refText2").classList.replace("text-primary", "text-gray-800");
          document.querySelector(".refText3").classList.replace("text-red-500", "text-gray-800");
          document.querySelector(".refText4").classList.replace("text-green-500", "text-gray-800");
          document.querySelector(".refText5").classList.replace("text-gray-800", "text-gray-200");
      }
      setTextSelector(nextTextSelector);
      setNextTextSelector((nextTextSelector + 1) % 5);
      handleNextClick();
    }, duration);

    return () => clearInterval(intervalId);
  }, [nextTextSelector]);

  return (
    <div>
      <div className="flex flex-cols justify-center max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h1 className="refText1 h1 mb-4 mx-2 text-gray-800">Out</h1>
        <h1 className="refText2 h1 mb-4 mx-2 text-gray-800">Of</h1>
        <h1 className="refText3 h1 mb-4 mx-2 text-gray-800">The</h1>
        <h1 className="refText4 h1 mb-4 mx-2 text-gray-800">Shadows</h1>
      </div>
      <div className='flex flex-cols justify-center max-w-3xl mx-auto text-center pb-12 md:pb-20'>
        <h1 className="refText5 h1 mb-4 mx-2 text-gray-200">Out Of The Shadows</h1>
      </div>
      <div className=''>
        <Slider ref={sliderRef} {...settings}>
          {images.map((image) => (
            <div key={image.id} className="mx-4">
              <img src={image.img } alt={image.title} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ColorChangingText;