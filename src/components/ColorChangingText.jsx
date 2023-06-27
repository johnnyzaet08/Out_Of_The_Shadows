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
    img: "https://drive.google.com/uc?export=download&id=1qcb00t74neBFjZcoT_yO7SKk99ZPhFe4",
  },
  {
    id: 2,
    title: 'OUT',
    img: "https://drive.google.com/uc?export=download&id=1t-4_kNv-WWcexNdheESsdNo5e8EriLZM",
  },
  {
    id: 3,
    title: 'OUT',
    img: "https://drive.google.com/uc?export=download&id=1GhSg8leOAsXOMG9uDBIXk46fb9mgmaPv",
  },
  {
    id: 4,
    title: 'OUT',
    img: "https://drive.google.com/uc?export=download&id=11zPaYw7P_WcVlwCCqG97w_SF0sonDJH3",
  },
  {
    id: 5,
    title: 'OF',
    img: "https://drive.google.com/uc?export=download&id=13ylU-L6KmbpQSd78gUo4WoQ6l2cqe_KC",
  },
  {
    id: 6,
    title: 'OF',
    img: "https://drive.google.com/uc?export=download&id=1A_Kfa1mQEGwKQrzTQN0zxItPpFywI75A",
  },
  {
    id: 7,
    title: 'OF',
    img: "https://drive.google.com/uc?export=download&id=1ogfZV7JKpjSGpBcCM0wDs2zSgiqrTN4J",
  },
  {
    id: 8,
    title: 'OF',
    img: "https://drive.google.com/uc?export=download&id=1YLb9CMmwtiQPy8MDgDBlr4zX9FYK30oy",
  },
  {
    id: 9,
    title: 'THE',
    img: "https://drive.google.com/uc?export=download&id=12CvXhIET2z1d9a5ToWWgAYVtHsDISdRu",
  },
  {
    id: 10,
    title: 'THE',
    img: "https://drive.google.com/uc?export=download&id=1lw1RanMrLmACCk6ZJcTAT8kSM-fDwDg6",
  },
  {
    id: 11,
    title: 'THE',
    img: "https://drive.google.com/uc?export=download&id=1sV0FQdkYudvQf4lR6rVlWkVZ2Nvy5gO8",
  },
  {
    id: 12,
    title: 'THE',
    img: "https://drive.google.com/uc?export=download&id=1UGoT4LJsMP-uf5CIDphfBgFgKGqc51yR",
  },
  {
    id: 13,
    title: 'SHADOWS',
    img: "https://drive.google.com/uc?export=download&id=1qq92V4fQ9vXFqDEisQmiKMlt3nS50fQG",
  },
  {
    id: 14,
    title: 'SHADOWS',
    img: "https://drive.google.com/uc?export=download&id=1GsyFJkPdKHvV8FJO27O9H0nHwS_RS64-",
  },
  {
    id: 15,
    title: 'SHADOWS',
    img: "https://drive.google.com/uc?export=download&id=1SFzywxF4cOV6Y_hhe6wqYjZb6pjdkhyb",
  },
  {
    id: 16,
    title: 'SHADOWS',
    img: "https://drive.google.com/uc?export=download&id=1sGr0hel-dI5g1PhBQ6muJqqqhOh0BUSo",
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