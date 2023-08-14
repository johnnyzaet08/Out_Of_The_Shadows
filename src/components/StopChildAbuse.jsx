import React, {useState, useEffect} from 'react';
import '../css/ImageGallery.css';
import CardHover from '../components/CardHover.jsx';

const duration = 3000; // Duración de la transición en milisegundos

const StopChildAbuse = () => {

  const [counterPrimary, setCounterPrimary] = useState(1);
  const [nextCounterPrimary, setNextCounterPrimary] = useState(2);

  const nextText = () => {

    document.querySelector(".refText1").classList.replace("section-text-active-ChildAbuse", "section-text-ChildAbuse");
    document.querySelector(".refText2").classList.replace("section-text-active-ChildAbuse", "section-text-ChildAbuse");
    document.querySelector(".refText3").classList.replace("section-text-active-ChildAbuse", "section-text-ChildAbuse");
    document.querySelector(".refText4").classList.replace("section-text-active-ChildAbuse", "section-text-ChildAbuse");
    document.querySelector(".refText5").classList.replace("section-text-active-ChildAbuse", "section-text-ChildAbuse");


    switch(counterPrimary) {
      case 1:
        document.querySelector(".refText1").classList.replace("section-text-ChildAbuse", "section-text-active-ChildAbuse");
        break;
      case 2:
        document.querySelector(".refText2").classList.replace("section-text-ChildAbuse", "section-text-active-ChildAbuse");
        break;
      case 3:
        document.querySelector(".refText3").classList.replace("section-text-ChildAbuse", "section-text-active-ChildAbuse");
        break;
      case 4:
        document.querySelector(".refText4").classList.replace("section-text-ChildAbuse", "section-text-active-ChildAbuse");
        break;
      case 5:
        document.querySelector(".refText5").classList.replace("section-text-ChildAbuse", "section-text-active-ChildAbuse");
        break;
      case 6:
        document.querySelector(".refText6").classList.replace("section-text-ChildAbuse", "section-text-active-ChildAbuse");
        break;
      default:
        document.querySelector(".refText6").classList.replace("section-text-active-ChildAbuse", "section-text-ChildAbuse");
        break;
    }
    setCounterPrimary(nextCounterPrimary);
    setNextCounterPrimary((nextCounterPrimary + 1) % 7);

  };

  useEffect(() => {

    const intervalId = setInterval(() => {
      nextText();
    }, duration);

    return () => clearInterval(intervalId);
  }, [nextCounterPrimary]);

  return (

    <div className=' block'>

      <div className='flex h-[15vh] items-center'>
        <div className="flex flex-cols justify-center max-w-3xl mx-auto text-center items-center">
          <h1 className="refText1 section-text-active-ChildAbuse"> YOU </h1>
          <h1 className="refText2 section-text-ChildAbuse"> CAN </h1>
          <h1 className="refText3 section-text-ChildAbuse"> HELP </h1>
          <h1 className="refText4 section-text-ChildAbuse"> STOP </h1>
          <h1 className="refText5 section-text-ChildAbuse"> CHILD </h1>
          <h1 className="refText6 section-text-ChildAbuse"> ABUSE </h1>
        </div>
      </div>

      <CardHover />

    </div>
    
  );
};

export default StopChildAbuse;
