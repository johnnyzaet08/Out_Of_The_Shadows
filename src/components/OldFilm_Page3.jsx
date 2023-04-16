import React, { useState } from "react";
import OldFilm from "./OldFilm";

const OldFilm_Page3 = () => {
  const [images_1, setImages] = useState([
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
        <OldFilm images={images_1} />
        <div className="mt-4 text-white text-center">
          <p className="mb-2">{`Active image: ${activeImage + 1}`}</p>
          <div className="flex justify-center items-center gap-2">
            {images_1.map((_, index) => (
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

export default OldFilm_Page3;