import React, { useEffect ,useState } from 'react';
import '../css/changeText.css';

const duration = 3000; // Duración de la transición en milisegundos

function ChangeText() {

  const [textSelector, setTextSelector] = useState(1);
  const [stageText, setStageText] = useState(0);
  const [text, setText] = useState("YOU DON’T NEED TO HIDE ANYMORE");

  useEffect(() => {
    const nextText = setInterval(() => {
      
      switch(stageText){
        case 0:
          document.querySelector(".changeText-ref").classList.replace("changeText-text", "changeText-text-active");
          break;
        case 1:
          document.querySelector(".changeText-ref").classList.replace("changeText-text-active", "changeText-text");
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

          setTextSelector((textSelector + 1) % 3);
          break;
      }

      setStageText((stageText + 1) % 3);

    }, duration);

    return () => {
      clearInterval(nextText);
    };

  }, [stageText, textSelector]);

  return (
    <div className="flex w-full h-auto mt-20 items-center justify-center md:mt-10">
      <div className="flex flex-cols items-center justify-center mt-auto w-[60%] h-[15vh] mx-auto">
        <h1 className="changeText-ref h1 changeText-text">{text}</h1>
      </div>
    </div>

  );
}

export default ChangeText;