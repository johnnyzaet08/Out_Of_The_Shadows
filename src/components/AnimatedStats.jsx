import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../css/animatedStats.css';

const AnimatedStats = ({ startValue, label, handleNextClick }) => {
  const [date, setDate] = useState(new Date());
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  
  const { number } = useSpring({
    from: { number: startValue },
    to: { number: count },
    delay: 0,
    onRest: () => setVisible(true)
  });


  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 30000); // Actualiza cada minuto (60000 milisegundos)

    return () => {
      clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
    };
  }, []);

  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      handleNextClick();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container w-full h-auto'>
      <div className="animated-stats-container">
        <div>{formattedDate}</div>
        <div>{formattedTime}</div>
        <div className="animated-stats-label">
          {label}
        </div>
        <div className="animated-stats-number-container">
          {visible ? (
            <animated.span className="animated-stats-number">
              {number.to((n) => n.toFixed(0))}
            </animated.span>
          ) : (
            <span className="animated-stats-number">0</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimatedStats;