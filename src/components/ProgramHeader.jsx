import React, {useRef, useState, useEffect} from 'react';
import Slider from 'react-slick';
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
      title: 'BLINDNESS',
      section: 'SECONDARY',
      img: INOCENT1,
    },
    {
      id: 2,
      title: 'BLINDNESS',
      section: 'SECONDARY',
      img: INOCENT2,
    },
    {
      id: 3,
      title: 'BLINDNESS',
      section: 'SECONDARY',
      img: INOCENT3,
    },
    {
      id: 4,
      title: 'BLINDNESS',
      section: 'SECONDARY',
      img: INOCENT4,
    },
    {
      id: 5,
      title: 'DEAFNESS',
      section: 'PRIMARY',
      img: VICTIM1,
    },
    {
      id: 6,
      title: 'DEAFNESS',
      section: 'PRIMARY',
      img: VICTIM2,
    },
    {
      id: 7,
      title: 'DEAFNESS',
      section: 'PRIMARY',
      img: VICTIM3,
    },
    {
      id: 8,
      title: 'DEAFNESS',
      section: 'PRIMARY',
      img: VICTIM4,
    },
];

const duration = 3000; // Duración de la transición en milisegundos

const ProgramHeader = () => {

  const sliderRef1 = useRef(null); // Create a reference to the Slider component

  const [currentSlide, setCurrentSlide] = useState(0);
  const [primarySection, setPrimarySection] = useState(true);
  const [counterPrimary, setCounterPrimary] = useState(1);
  const [nextCounterPrimary, setNextCounterPrimary] = useState(2);

  const nextPhotoGallery = (llamado = "hola") => {

    if(llamado != "hola"){
      setPrimarySection(true)
    }

    if(primarySection){
      switch(counterPrimary) {
        case 1:
          document.querySelector(".INOCENT1").classList.replace("section-img-Gallery", "section-img-active-Gallery");
          document.querySelector(".refText1").classList.replace("section-text-Gallery", "section-text-active-Gallery");
          break;
        case 2:
          document.querySelector(".INOCENT1").classList.replace("section-img-active-Gallery", "section-img-Gallery");
          document.querySelector(".refText1").classList.replace("section-text-active-Gallery", "section-text-Gallery");
          document.querySelector(".INOCENT2").classList.replace("section-img-Gallery", "section-img-active-Gallery");
          document.querySelector(".refText2").classList.replace("section-text-Gallery", "section-text-active-Gallery");
          break;
        case 3:
          document.querySelector(".INOCENT2").classList.replace("section-img-active-Gallery", "section-img-Gallery");
          document.querySelector(".refText2").classList.replace("section-text-active-Gallery", "section-text-Gallery");
          document.querySelector(".INOCENT3").classList.replace("section-img-Gallery", "section-img-active-Gallery");
          document.querySelector(".refText3").classList.replace("section-text-Gallery", "section-text-active-Gallery");
          break;
        case 4:
          document.querySelector(".INOCENT3").classList.replace("section-img-active-Gallery", "section-img-Gallery");
          document.querySelector(".refText3").classList.replace("section-text-active-Gallery", "section-text-Gallery");
          document.querySelector(".INOCENT4").classList.replace("section-img-Gallery", "section-img-active-Gallery");
          document.querySelector(".refText4").classList.replace("section-text-Gallery", "section-text-active-Gallery");
          break;
        case 5:
          document.querySelector(".INOCENT4").classList.replace("section-img-active-Gallery", "section-img-Gallery");
          document.querySelector(".refText4").classList.replace("section-text-active-Gallery", "section-text-Gallery");
          document.querySelector(".INOCENT5").classList.replace("section-img-Gallery", "section-img-active-Gallery");
          document.querySelector(".refText5").classList.replace("section-text-Gallery", "section-text-active-Gallery");
          break;
        case 6:
          document.querySelector(".INOCENT5").classList.replace("section-img-active-Gallery", "section-img-Gallery");
          document.querySelector(".refText5").classList.replace("section-text-active-Gallery", "section-text-Gallery");
          document.querySelector(".INOCENT6").classList.replace("section-img-Gallery", "section-img-active-Gallery");
          document.querySelector(".refText6").classList.replace("section-text-Gallery", "section-text-active-Gallery");
          break;
        default:
          document.querySelector(".INOCENT6").classList.replace("section-img-active-Gallery", "section-img-Gallery");
          document.querySelector(".refText6").classList.replace("section-text-active-Gallery", "section-text-Gallery");
          setPrimarySection(false);
          break;
      }
      setCounterPrimary(nextCounterPrimary);
      setNextCounterPrimary((nextCounterPrimary + 1) % 7);
    } 
  };

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: false,
    centerMode: false,
    centerPadding: '0px',
    pauseOnHover: true,
    touchMove: false,
    adaptiveHeight: true,
    //autoplay: true,
    //autoplaySpeed: 10000,

    afterChange: (index) => {
      
      document.querySelector(".BLINDNESS").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".DEAFNESS").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".INVISIBILITY-DENIAL").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".SECRETS").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".SILENCE").classList.replace("text-primary", "text-gray-200");
      document.querySelector(".INDIFFERENCE-APATHY").classList.replace("text-primary", "text-gray-200");


      if(images[index].section == "PRIMARY"){
        nextPhotoGallery("adios");
      }
    

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

            <div className='container-box-Gallery block mt-2'>

              <section className='section-Gallery'>
                <img className='INOCENT1 section-img-Gallery' src={INOCENT1 } />
                <img className='INOCENT2 section-img-Gallery' src={INOCENT2 } />
                <img className='INOCENT3 section-img-Gallery' src={INOCENT3 } />
                <img className='INOCENT4 section-img-Gallery' src={INOCENT4 } />
                <img className='INOCENT5 section-img-Gallery' src={INOCENT1 } />
                <img className='INOCENT6 section-img-Gallery' src={INOCENT2 } />
              </section>

              <div className='flex h-[15vh] items-center'>
                <div className="flex flex-cols justify-center max-w-3xl mx-auto text-center items-center">
                  <h1 className="refText1 section-text-Gallery"> YOU </h1>
                  <h1 className="refText2 section-text-Gallery"> CAN </h1>
                  <h1 className="refText3 section-text-Gallery"> HELP </h1>
                  <h1 className="refText4 section-text-Gallery"> STOP </h1>
                  <h1 className="refText5 section-text-Gallery"> CHILD </h1>
                  <h1 className="refText6 section-text-Gallery"> ABUSE </h1>
                </div>
              </div>

            </div>

            :

            <div className='flex w-full h-[60vh] justify-center items-center'>
              <div className='container-box-Gallery'>
                  <div className='w-full h-auto pb-2'>
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
                            <a className='SECRETS text-xl text-bold text-gray-200 hover:text-underline'>SECRETS</a>
                        </li>
                        <li>
                            <a className='SILENCE text-xl text-bold text-gray-200 hover:text-underline'>SILENCE</a>
                        </li>
                        <li>
                            <a className='INDIFFERENCE-APATHY text-xl text-bold text-gray-200 hover:text-underline'>INDIFFERENCE-APATHY</a>
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
            
            
        }
        
        
          
    </div>
    
  );
};

export default ProgramHeader;
