import { useState } from 'react';

// Define an array of image URLs to display in the slider
const IMAGES = [
  'https://via.placeholder.com/800x400/1abc9c/ffffff',
  'https://via.placeholder.com/800x400/3498db/ffffff',
  'https://via.placeholder.com/800x400/e74c3c/ffffff',
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
      className={`mx-1 p-2 rounded-full ${
        currentImageIndex === index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-400'
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
    <div className="relative w-full">
      <img src={IMAGES[currentImageIndex]} alt="Slider Image" className="w-full h-auto" />

      {/* Previous button */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full w-8 h-8 flex items-center justify-center"
        onClick={handlePrevClick}
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      {/* Next button */}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full w-8 h-8 flex items-center justify-center"
        onClick={handleNextClick}
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Image buttons */}
      <div className="flex justify-center mt-2">{imageButtons}</div>
    </div>
  );
};

export default ImageSlider;