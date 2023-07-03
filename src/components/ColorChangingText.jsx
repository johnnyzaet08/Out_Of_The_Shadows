import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/MovieReel.css';

const duration = 2000; // Duración de la transición en milisegundos

const images = [
  {
    id: 1,
    title: 'OUT',
    img: "/images/HomePage/1.1 OUT.jpg",
  },
  {
    id: 2,
    title: 'OUT',
    img: "/images/HomePage/1.2 OUT.jpg",
  },
  {
    id: 3,
    title: 'OUT',
    img: "/images/HomePage/1.3 OUT.jpg",
  },
  {
    id: 4,
    title: 'OUT',
    img: "/images/HomePage/1.4 OUT.jpg",
  },
  {
    id: 5,
    title: 'OF',
    img: "/images/HomePage/2.1 OF.jpg",
  },
  {
    id: 6,
    title: 'OF',
    img: "/images/HomePage/2.2 OF.jpg",
  },
  {
    id: 7,
    title: 'OF',
    img: "/images/HomePage/2.3 OF.jpg",
  },
  {
    id: 8,
    title: 'OF',
    img: "/images/HomePage/2.4 OF.jpg",
  },
  {
    id: 9,
    title: 'THE',
    img: "/images/HomePage/3.1 THE.jpg",
  },
  {
    id: 10,
    title: 'THE',
    img: "/images/HomePage/3.2 THE.jpg",
  },
  {
    id: 11,
    title: 'THE',
    img: "/images/HomePage/3.3 THE.jpg",
  },
  {
    id: 12,
    title: 'THE',
    img: "/images/HomePage/3.4 THE.jpg",
  },
  {
    id: 13,
    title: 'SHADOWS',
    img: "/images/HomePage/4.1 SHADOWS.jpg",
  },
  {
    id: 14,
    title: 'SHADOWS',
    img: "/images/HomePage/4.2 SHADOWS.jpg",
  },
  {
    id: 15,
    title: 'SHADOWS',
    img: "/images/HomePage/4.3 SHADOWS.jpg",
  },
  {
    id: 16,
    title: 'SHADOWS',
    img: "/images/HomePage/4.4 SHADOWS.jpg",
  },  
];

function ColorChangingText() {

  const [textSelector, setTextSelector] = useState(1);
  const [nextTextSelector, setNextTextSelector] = useState(2);
  const [wordSelector, setWordSelector] = useState(1);
  const [nextWordSelector, setNextWordSelector] = useState(2);
  const [text, setText] = useState("YOU DON’T NEED TO HIDE ANYMORE");
  const sliderRef = useRef(null); // Create a reference to the Slider component

  const nextWord = () => {

    switch(wordSelector){
      case 0:
        document.querySelector(".refWord4").classList.replace("word-active", "word");
        document.querySelector(".refWord1").classList.replace("word", "word-active");
        break;
      case 1:
        document.querySelector(".refWord1").classList.replace("word-active", "word");
        document.querySelector(".refWord2").classList.replace("word", "word-active");
        break;
      case 2:
        document.querySelector(".refWord2").classList.replace("word-active", "word");
        document.querySelector(".refWord3").classList.replace("word", "word-active");
        break;
      case 3:
        document.querySelector(".refWord3").classList.replace("word-active", "word");
        document.querySelector(".refWord4").classList.replace("word", "word-active");
        break;
    }
    setWordSelector(nextWordSelector);
    setNextWordSelector((nextWordSelector + 1) % 4);

  };

  const nextText = (index) => {
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
    autoplaySpeed: duration,
    beforeChange: (index) => {
      nextText(index%3);
      nextWord();
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
      
      <div className="flex items-center justify-center w-full h-[25vh] mx-auto mb-auto mt-10 pb-12 md:pb-20">
        <div className="flex flex-cols items-center justify-center mt-auto w-[60%] h-[20vh] mx-auto">
          <h1 className="refWord1 word">Out</h1>
          <h1 className="refWord2 word">Of</h1>
          <h1 className="refWord3 word">The</h1>
          <h1 className="refWord4 word">Shadows</h1>
        </div>
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

      <div className="w-full h-[20vh] justify-center mx-auto py-10 mt-10 h-[30vh] text-center pb-12 md:pb-20">
        <div className="flex flex-cols items-center justify-center mt-auto w-[60%] h-[20vh] mx-auto">
          <h1 className="refText1 h1 text-Reel">{text}</h1>
        </div>
      </div>

    </div>
  );
}

export default ColorChangingText;