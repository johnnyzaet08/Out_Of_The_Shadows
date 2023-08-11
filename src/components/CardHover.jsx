import React from 'react';
import "../css/cardHover.css";

import defenselessImg from "../images/cardhover/DEFENSELESS.jpg";
import honestImg from "../images/cardhover/HONEST.jpg";
import inocentImg from "../images/cardhover/INNOCENT.jpg";
import naiveImg from "../images/cardhover/NAIVE.jpg";
import pureImg from "../images/cardhover/PURE.jpg";
import trustfulImg from "../images/cardhover/TRUSTFUL.jpg";
import victimImg from "../images/cardhover/VICTIM.jpg";
import vulnerableImg from "../images/cardhover/VULNERABLE.jpg";


const cards = [
  { 
    title: 'INOCENT', 
    copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', 
    imageURL: inocentImg,
  }, 
  { 
    title: 'VICTIM', 
    copy: 'Plan your next beach trip with these fabulous destinations', 
    imageURL: victimImg, 
  }, 
  { 
    title: 'DEFENSELESS', 
    copy: 'It\'s the desert you\'ve always dreamed of', 
    imageURL: defenselessImg,
  }, 
  { 
    title: 'VULNERABLE', 
    copy: 'Seriously, straight up, just blast off into outer space today', 
    imageURL: vulnerableImg,
  },
  { 
    title: 'PURE', 
    copy: 'Seriously, straight up, just blast off into outer space today', 
    imageURL: pureImg,
  },
  { 
    title: 'HONEST', 
    copy: 'Seriously, straight up, just blast off into outer space today', 
    imageURL: honestImg,
  },
  { 
    title: 'TRUSTFUL', 
    copy: 'Seriously, straight up, just blast off into outer space today', 
    imageURL: trustfulImg,
  },
  { 
    title: 'NAIVE', 
    copy: 'Seriously, straight up, just blast off into outer space today', 
    imageURL: naiveImg,
  },
]

function CardHover() {

  return (
    <main className="page-content">
      {cards.map((card, index) => (

        <div key={index} className={`card`} style={{ backgroundImage: `url(${card.imageURL})` }}>
          <div className="content">
            <h2 className="title"> {card.title} </h2>
            <p className="copy"> {card.copy} </p>
          </div>
        </div>
      ))}
    </main>
  );
}

export default CardHover;