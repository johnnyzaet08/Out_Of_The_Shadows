import { useState } from 'react';

import imageSlider1 from '../images/ImageSlider1.jpg'
import imageSlider2 from '../images/ImageSlider2.jpg'
import imageSlider3 from '../images/ImageSlider3.jpg'

// Define an array of image URLs to display in the slider
const IMAGES = [
  imageSlider1,
  imageSlider2,
  imageSlider3,
];

function ImageSlider() {
  // State variable to keep track of the index of the currently displayed image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Event handler for clicking a button to display a specific image
  const handleButtonClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Render a series of buttons to allow the user to navigate directly to a specific image
  const imageButtons = IMAGES.map((_, index) => (
    <button
      key={index}
      className={`mx-1 mt-2 mb-1 h-8 w-6 rounded-full ${
        currentImageIndex === index ? 'bg-secondary_text text-white-100' : 'bg-gray-100 text-gray-600 hover:bg-gray-400'
      }`}
      onClick={() => handleButtonClick(index)}
    >
      {index + 1}
    </button>
  ));

  // Event handler for clicking the "previous" button
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? IMAGES.length - 1 : prevIndex - 1));
  };

  // Event handler for clicking the "next" button
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === IMAGES.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative items-center flex-cols relative w-full">
      <div className='flex justify-center mx-auto w-full xl:w-4/6 relative'>
        <img src={IMAGES[currentImageIndex]} alt="Slider Image" className="flex justify-center h-auto" />

        {/* Previous button */}
        <button
          className="absolute top-1/2 transform -translate-y-1/2 mt-2 left-2 bg-gray-500 bg-opacity-50 hover:bg-opacity-45 hover:bg-white-100 hover:text-gray-800 text-white-100 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={handlePrevClick}
        >
          <i className="fas fa-chevron-left"> ⇦ </i>
        </button>

        {/* Next button */}
        <button
          className="absolute top-1/2 transform -translate-y-1/2 mt-2 right-2 bg-gray-500 bg-opacity-50 hover:bg-opacity-45 hover:bg-white-100 hover:text-gray-800 text-white-100 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={handleNextClick}
        >
          <i className="fas fa-chevron-right"> ⇨ </i>
        </button>

        {/* Image buttons */}
        <div className="absolute flex justify-center mt-2 rounded-full opacity-80 bottom-0 pb-2">{imageButtons}</div>

      </div>

      
      
    </div>
  );
};

export default ImageSlider;