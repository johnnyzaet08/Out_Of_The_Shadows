import React, { useRef, useEffect, useState } from 'react';
import '../css/parallax.css';

import bgImage1 from '../images/background.jpg'
import bgImage2 from '../images/background1.jpg'


function Parallax() {

    const divRef = useRef(null);

    useEffect(() => {        

        const parallaxElems = document.querySelectorAll('.parallax');

        window.addEventListener('scroll', function() {

            const start_pos = divRef.current.getBoundingClientRect().top;
            const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

            console.log("Inicio: ", start_pos);
            console.log("Voy por: ", scrollPos);

            if(start_pos <= 350){
                parallaxElems.forEach(function(elem) {
                    const speed = parseFloat(elem.getAttribute('data-speed'));
                    const newPos = start_pos - start_pos * speed;
                    console.log("newPos:", newPos);
                    elem.style.backgroundPositionY = newPos + 'px';
                });
            };
            
        });

    }, []);
  
    return (
      <div>
        <div ref={divRef} className="parallax block" style={{backgroundImage: `url(${bgImage1})`}} data-speed="0.6"></div>
        <span className='text-white-100 text-xl font-bold justify-center px-4 z-30'>Hola german</span>
      </div>
    );
  }

export default Parallax;