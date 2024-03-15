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
    title: 'INNOCENT', 
    copy: 'Child’s simplicity, pure heart, and lack of knowledge', 
    imageURL: inocentImg,
  }, 
  { 
    title: 'VICTIM', 
    copy: 'Child’s harmed, injured, or killed as a result of a crime, or a violent act', 
    imageURL: victimImg, 
  }, 
  { 
    title: 'DEFENSELESS', 
    copy: 'Child’s vulnerability and needs to be taken care of', 
    imageURL: defenselessImg,
  }, 
  { 
    title: 'VULNERABLE', 
    copy: 'Child’s risk of experiencing physical or emotional harm', 
    imageURL: vulnerableImg,
  },
  { 
    title: 'PURE', 
    copy: 'Child’s clean, clear, unmixed, and chaste heart', 
    imageURL: pureImg,
  },
  { 
    title: 'HONEST', 
    copy: 'Child’s truthfulness in what she/he says and do', 
    imageURL: honestImg,
  },
  { 
    title: 'TRUSTFUL', 
    copy: 'Child’s beliefs in the reliability, truth, ability, or strength onpeople', 
    imageURL: trustfulImg,
  },
  { 
    title: 'NAÏVE', 
    copy: 'Child’s natural and unaffected; innocence', 
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