import React, { useState } from "react";

const OldFilm = () => {

  const [images, setImages] = useState([
    "https://via.placeholder.com/200x200?text=1",
    "https://via.placeholder.com/200x200?text=2",
    "https://via.placeholder.com/200x200?text=3",
    "https://via.placeholder.com/200x200?text=4",
    "https://via.placeholder.com/200x200?text=5",
    "https://via.placeholder.com/200x200?text=6",
    "https://via.placeholder.com/200x200?text=7",
    "https://via.placeholder.com/200x200?text=8",
    "https://via.placeholder.com/200x200?text=9",
    "https://via.placeholder.com/200x200?text=10",
  ]);

  const [activeImage, setActiveImage] = useState(0);

  const changeImage = (index) => {
    setActiveImage(index);
  };

  return (
    <div className="h-screen bg-gray-900">
      <div className="max-w-2xl mx-auto py-8">
        <div className="flex flex-wrap justify-center items-center gap-2">
          {images.map((imagen, index) => (
            <div
              key={index}
              className="w-20 h-20 rounded-full border border-white overflow-hidden"
            >
              <img src={imagen} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-4 text-white text-center">
          <p className="mb-2">{`Active image: ${activeImage + 1}`}</p>
          <div className="flex justify-center items-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => changeImage(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeImage
                    ? "bg-white"
                    : "bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldFilm;