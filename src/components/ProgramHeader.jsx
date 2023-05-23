import React, {useRef, useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/ImageGallery.css';

import INOCENT1 from '../images/StatisticsImages/1.1 INNOCENT.jpg';
import INOCENT2 from '../images/StatisticsImages/1.2 INNOCENT.jpg';
import INOCENT3 from '../images/StatisticsImages/1.3 INNOCENT.jpg';
import INOCENT4 from '../images/StatisticsImages/1.4 INNOCENT.jpg';

import VICTIM1 from '../images/StatisticsImages/2.1 VICTIM.jpg';
import VICTIM2 from '../images/StatisticsImages/2.2 VICTIM.jpg';
import VICTIM3 from '../images/StatisticsImages/2.3 VICTIM.jpg';
import VICTIM4 from '../images/StatisticsImages/2.4 VICTIM.jpg';


const images = [
    {
      id: 1,
      title: 'INOCENT',
      section: 'SECONDARY',
      img: INOCENT1,
    },
    {
      id: 2,
      title: 'INOCENT',
      section: 'SECONDARY',
      img: INOCENT2,
    },
    {
      id: 3,
      title: 'INOCENT',
      section: 'SECONDARY',
      img: INOCENT3,
    },
    {
      id: 4,
      title: 'INOCENT',
      section: 'SECONDARY',
      img: INOCENT4,
    },
    {
      id: 5,
      title: 'VICTIM',
      section: 'PRIMARY',
      img: VICTIM1,
    },
    {
      id: 6,
      title: 'VICTIM',
      section: 'PRIMARY',
      img: VICTIM2,
    },
    {
      id: 7,
      title: 'VICTIM',
      section: 'PRIMARY',
      img: VICTIM3,
    },
    {
      id: 8,
      title: 'VICTIM',
      section: 'PRIMARY',
      img: VICTIM4,
    },
];

const duration = 3000; // Duración de la transición en milisegundos

const ProgramHeader = () => {

  const sliderRef = useRef(null); // Create a reference to the Slider component

  const [currentSlide, setCurrentSlide] = useState(0);
  const [primarySection, setPrimarySection] = useState(true);
  const [counterPrimary, setCounterPrimary] = useState(1);
  const [nextCounterPrimary, setNextCounterPrimary] = useState(2);

  const nextPhotoGallery = () => {

    if(primarySection){
      switch(counterPrimary) {
        case 1:
          document.querySelector(".INOCENT1").classList.replace("section-img", "section-img-active");
          document.querySelector(".refText1").classList.replace("section-text", "section-text-active");
          break;
        case 2:
          document.querySelector(".INOCENT1").classList.replace("section-img-active", "section-img");
          document.querySelector(".refText1").classList.replace("section-text-active", "section-text");
          document.querySelector(".INOCENT2").classList.replace("section-img", "section-img-active");
          document.querySelector(".refText2").classList.replace("section-text", "section-text-active");
          break;
        case 3:
          document.querySelector(".INOCENT2").classList.replace("section-img-active", "section-img");
          document.querySelector(".refText2").classList.replace("section-text-active", "section-text");
          document.querySelector(".INOCENT3").classList.replace("section-img", "section-img-active");
          document.querySelector(".refText3").classList.replace("section-text", "section-text-active");
          break;
        case 4:
          document.querySelector(".INOCENT3").classList.replace("section-img-active", "section-img");
          document.querySelector(".refText3").classList.replace("section-text-active", "section-text");
          document.querySelector(".INOCENT4").classList.replace("section-img", "section-img-active");
          document.querySelector(".refText4").classList.replace("section-text", "section-text-active");
          break;
        case 5:
          document.querySelector(".INOCENT4").classList.replace("section-img-active", "section-img");
          document.querySelector(".refText4").classList.replace("section-text-active", "section-text");
          document.querySelector(".INOCENT5").classList.replace("section-img", "section-img-active");
          document.querySelector(".refText5").classList.replace("section-text", "section-text-active");
          break;
        case 6:
          document.querySelector(".INOCENT5").classList.replace("section-img-active", "section-img");
          document.querySelector(".refText5").classList.replace("section-text-active", "section-text");
          document.querySelector(".INOCENT6").classList.replace("section-img", "section-img-active");
          document.querySelector(".refText6").classList.replace("section-text", "section-text-active");
          break;
        default:
          document.querySelector(".INOCENT6").classList.replace("section-img-active", "section-img");
          document.querySelector(".refText6").classList.replace("section-text-active", "section-text");
          setPrimarySection(false);
          break;
      }
      setCounterPrimary(nextCounterPrimary);
      setNextCounterPrimary((nextCounterPrimary + 1) % 7);
    } 
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: false,
    centerMode: false,
    centerPadding: '0px',
    afterChange: (index) => {
      
      document.querySelector(".INOCENT").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".VICTIM").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".DEFENSELESS").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".VULNERABLE").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".PURE").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".HONEST").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".TRUSTFUL").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".NAIVE").classList.replace("text-primary", "text-gray-200");


      if(images[index].section == "PRIMARY"){
        setPrimarySection(true);
      }else{
        setPrimarySection(false);
      }
    

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
      
      
      setCurrentSlide(index);
    },
  };


  useEffect(() => {

    const intervalId = setInterval(() => {
      nextPhotoGallery();
    }, duration);

    return () => clearInterval(intervalId);
  }, [nextCounterPrimary]);

  return (
    <div>
        {
            primarySection ?

            <div className='block overflow-y-hidden'>

              <div className="flex flex-cols justify-center max-w-3xl mx-auto text-center">
                <h1 className="refText1 section-text">Out</h1>
                <h1 className="refText2 section-text">Of</h1>
                <h1 className="refText3 section-text">The</h1>
                <h1 className="refText4 section-text">Shadows</h1>
                <h1 className="refText5 section-text">Shadows</h1>
                <h1 className="refText6 section-text">Shadows</h1>
              </div>

              <section className='section pt-10'>
                <img className='INOCENT1 section-img' src={INOCENT1 } />
                <img className='INOCENT2 section-img' src={INOCENT2 } />
                <img className='INOCENT3 section-img' src={INOCENT3 } />
                <img className='INOCENT4 section-img' src={INOCENT4 } />
                <img className='INOCENT5 section-img' src={INOCENT1 } />
                <img className='INOCENT6 section-img' src={INOCENT2 } />
              </section>

            </div>

            :

            <div className='container-box'>
                <div className='w-full h-auto py-2'>
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

                <Slider ref={sliderRef} {...settings}>
                    {images.map((image) => (
                    <div key={image.id} className="w-full px-[1px]">
                        <img className="flex-grow rounded-lg w-auto h-auto" src={image.img } alt={image.title} />
                    </div>
                    ))}
                </Slider>

            </div>
            
        }
        
        
    </div>
    
  );
};

export default ProgramHeader;
