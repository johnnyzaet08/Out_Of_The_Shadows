import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../css/animatedStats.css';

const AnimatedStats = ({ startValue, label }) => {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  const { number } = useSpring({
    from: { number: 100 },
    to: { number: count },
    delay: 500,
    onRest: () => setVisible(true)
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animated-stats-container">
      <div className="animated-stats-label">{label}</div>
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
  );
};

export default AnimatedStats;