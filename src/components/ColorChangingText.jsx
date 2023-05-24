import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/MovieReel.css';

import OUT1 from '../images/HomePage/1.1 OUT.jpg';
import OUT2 from '../images/HomePage/1.2 OUT.jpg';
import OUT3 from '../images/HomePage/1.3 OUT.jpg';
import OUT4 from '../images/HomePage/1.4 OUT.jpg';
import OF1 from '../images/HomePage/2.1 OF.jpg';
import OF2 from '../images/HomePage/2.2 OF.jpg';
import OF3 from '../images/HomePage/2.3 OF.jpg';
import OF4 from '../images/HomePage/2.4 OF.jpg';
import THE1 from '../images/HomePage/3.1 THE.jpg';
import THE2 from '../images/HomePage/3.2 THE.jpg';
import THE3 from '../images/HomePage/3.3 THE.jpg';
import THE4 from '../images/HomePage/3.4 THE.jpg';
import SHADOWS1 from '../images/HomePage/4.1 SHADOWS.jpg';
import SHADOWS2 from '../images/HomePage/4.2 SHADOWS.jpg';
import SHADOWS3 from '../images/HomePage/4.3 SHADOWS.jpg';
import SHADOWS4 from '../images/HomePage/4.4 SHADOWS.jpg';

const duration = 2000; // Duración de la transición en milisegundos

const images = [
  {
    id: 1,
    title: 'OUT',
    img: OUT1,
  },
  {
    id: 2,
    title: 'OUT',
    img: OUT2,
  },
  {
    id: 3,
    title: 'OUT',
    img: OUT3,
  },
  {
    id: 4,
    title: 'OUT',
    img: OUT4,
  },
  {
    id: 5,
    title: 'OF',
    img: OF1,
  },
  {
    id: 6,
    title: 'OF',
    img: OF2,
  },
  {
    id: 7,
    title: 'OF',
    img: OF3,
  },
  {
    id: 8,
    title: 'OF',
    img: OF4,
  },
  {
    id: 9,
    title: 'THE',
    img: THE1,
  },
  {
    id: 10,
    title: 'THE',
    img: THE2,
  },
  {
    id: 11,
    title: 'THE',
    img: THE3,
  },
  {
    id: 12,
    title: 'THE',
    img: THE4,
  },
  {
    id: 13,
    title: 'SHADOWS',
    img: SHADOWS1,
  },
  {
    id: 14,
    title: 'SHADOWS',
    img: SHADOWS2,
  },
  {
    id: 15,
    title: 'SHADOWS',
    img: SHADOWS3,
  },
  {
    id: 16,
    title: 'SHADOWS',
    img: SHADOWS4,
  },  
];

function ColorChangingText() {

  const [textSelector, setTextSelector] = useState(1);
  const [nextTextSelector, setNextTextSelector] = useState(2);
  const [text, setText] = useState("YOU DON’T NEED TO HIDE ANYMORE");
  const sliderRef = useRef(null); // Create a reference to the Slider component

  const nextImage = (index) => {
    switch(index){
      case 0:
        document.querySelector(".refText1").classList.replace("text-Reel", "text-active-Reel");
        break;
      case 1:
        document.querySelector(".refText1").classList.replace("text-active-Reel", "text-Reel");
        break;
      case 2:
        switch(textSelector){
          case 0:
            setText("YOU DON’T NEED TO HIDE ANYMORE");
            break;
          case 1:
            setText("YOU DON’T HAVE TO FEEL ASHAMED");
            break
          case 2:
            setText("WAS NOT YOUR FAULT");
            break
        }
        setTextSelector(nextTextSelector);
        setNextTextSelector((nextTextSelector + 1) % 3);
        break;
    }
    sliderRef.current.slickNext(); // Call the slickNext method to navigate to the next slide

  };

  const settings = {
    dots: false,
    slickNext: false,
    speed: 500,
    slidesToShow: 4,
    swipe: false,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (index) => {
      nextImage(index%3);
    },
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

  return (
    <div>
      <div className="w-full h-[20vh] justify-center mx-auto py-14 mt-10 text-center pb-12 md:pb-20">
        <h1 className="refText1 h1 text-Reel">{text}</h1>
      </div>
      <div className='block h-full justify-center'>
        <Slider ref={sliderRef} {...settings}>
          {images.map((image) => (
            <div key={image.id} className="px-[1px]">
              <img className="rounded-xl" src={image.img } alt={image.title} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ColorChangingText;