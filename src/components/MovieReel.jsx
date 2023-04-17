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
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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
    <div className='w-full'>
      <AnimatedStats handleNextClick={handleNextClick} startValue={100} label="Total Visitors" />
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
