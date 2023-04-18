import React, {useRef} from 'react';
import Slider from 'react-slick';
import AnimatedStats from './AnimatedStats';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/MovieReel.css';

const MovieReel = ({ images }) => {

  const sliderRef = useRef(null); // Create a reference to the Slider component

  const handleNextClick = () => {
    sliderRef.current.slickNext(); // Call the slickNext method to navigate to the next slide
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    centerMode: false,
    centerPadding: '0px',
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
                <a className='text-xl text-bold hover:text-underline'>Prueba</a>
              </li>
              <li>
                <a className='text-xl text-bold hover:text-underline'>Prueba</a>
              </li>
              <li>
                <a className='text-xl text-bold hover:text-underline'>Prueba</a>
              </li>
              <li>
                <a className='text-xl text-bold hover:text-underline'>Prueba</a>
              </li>
              <li>
                <a className='text-xl text-bold hover:text-underline'>Prueba</a>
              </li>
              <li>
                <a className='text-xl text-bold hover:text-underline'>Prueba</a>
              </li>
              <li>
                <a className='text-xl text-bold hover:text-underline'>Prueba</a>
              </li>
              <li>
                <a className='text-xl text-bold hover:text-underline'>Prueba</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image) => (
          <div key={image.id} className="mx-4">
            <img src={image.img } alt={image.title} />
          </div>
        ))}
      </Slider>
    </div>
    
  );
};

export default MovieReel;
