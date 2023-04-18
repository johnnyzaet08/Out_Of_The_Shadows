import React from 'react';

import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import MovieReel from '../components/MovieReel';

import INOCENT1 from '../images/ImageAbuse1.jpg';
import INOCENT2 from '../images/ImageAbuse2.jpg';
import INOCENT3 from '../images/ImageAbuse3.jpg';
import INOCENT4 from '../images/ImageAbuse4.jpg';

import VICTIM1 from '../images/ImageAbuse1.jpg';
import VICTIM2 from '../images/ImageAbuse2.jpg';
import VICTIM3 from '../images/ImageAbuse3.jpg';
import VICTIM4 from '../images/ImageAbuse4.jpg';

import DEFENSELESS1 from '../images/ImageAbuse1.jpg';
import DEFENSELESS2 from '../images/ImageAbuse2.jpg';
import DEFENSELESS3 from '../images/ImageAbuse3.jpg';
import DEFENSELESS4 from '../images/ImageAbuse4.jpg';

import VULNERABLE1 from '../images/ImageAbuse1.jpg';
import VULNERABLE2 from '../images/ImageAbuse2.jpg';
import VULNERABLE3 from '../images/ImageAbuse3.jpg';
import VULNERABLE4 from '../images/ImageAbuse4.jpg';

import PURE1 from '../images/ImageAbuse1.jpg';
import PURE2 from '../images/ImageAbuse2.jpg';
import PURE3 from '../images/ImageAbuse3.jpg';
import PURE4 from '../images/ImageAbuse4.jpg';

import HONEST1 from '../images/ImageAbuse1.jpg';
import HONEST2 from '../images/ImageAbuse2.jpg';
import HONEST3 from '../images/ImageAbuse3.jpg';
import HONEST4 from '../images/ImageAbuse4.jpg';

import TRUSTFUL1 from '../images/ImageAbuse1.jpg';
import TRUSTFUL2 from '../images/ImageAbuse2.jpg';
import TRUSTFUL3 from '../images/ImageAbuse3.jpg';
import TRUSTFUL4 from '../images/ImageAbuse4.jpg';

import NAIVE1 from '../images/ImageAbuse1.jpg';
import NAIVE2 from '../images/ImageAbuse2.jpg';
import NAIVE3 from '../images/ImageAbuse3.jpg';
import NAIVE4 from '../images/ImageAbuse4.jpg';

const images = [
  {
    id: 1,
    title: 'INOCENT',
    img: INOCENT1,
  },
  {
    id: 2,
    title: 'INOCENT',
    img: INOCENT2,
  },
  {
    id: 3,
    title: 'INOCENT',
    img: INOCENT3,
  },
  {
    id: 4,
    title: 'INOCENT',
    img: INOCENT4,
  },
  {
    id: 5,
    title: 'VICTIM',
    img: VICTIM1,
  },
  {
    id: 6,
    title: 'VICTIM',
    img: VICTIM2,
  },
  {
    id: 7,
    title: 'VICTIM',
    img: VICTIM3,
  },
  {
    id: 8,
    title: 'VICTIM',
    img: VICTIM4,
  },
  {
    id: 9,
    title: 'DEFENSELESS',
    img: DEFENSELESS1,
  },
  {
    id: 10,
    title: 'DEFENSELESS',
    img: DEFENSELESS2,
  },
  {
    id: 11,
    title: 'DEFENSELESS',
    img: DEFENSELESS3,
  },
  {
    id: 12,
    title: 'DEFENSELESS',
    img: DEFENSELESS4,
  },
  {
    id: 13,
    title: 'VULNERABLE',
    img: VULNERABLE1,
  },
  {
    id: 14,
    title: 'VULNERABLE',
    img: VULNERABLE2,
  },
  {
    id: 15,
    title: 'VULNERABLE',
    img: VULNERABLE3,
  },
  {
    id: 16,
    title: 'VULNERABLE',
    img: VULNERABLE4,
  },  
  {
    id: 17,
    title: 'PURE',
    img: PURE1,
  },
  {
    id: 18,
    title: 'PURE',
    img: PURE2,
  },
  {
    id: 19,
    title: 'PURE',
    img: PURE3,
  },
  {
    id: 20,
    title: 'PURE',
    img: PURE4,
  },
  {
    id: 21,
    title: 'HONEST',
    img: HONEST1,
  },
  {
    id: 22,
    title: 'HONEST',
    img: HONEST2,
  },
  {
    id: 23,
    title: 'HONEST',
    img: HONEST3,
  },
  {
    id: 24,
    title: 'HONEST',
    img: HONEST4,
  },
  {
    id: 25,
    title: 'TRUSTFUL',
    img: TRUSTFUL1,
  },
  {
    id: 26,
    title: 'TRUSTFUL',
    img: TRUSTFUL2,
  },
  {
    id: 27,
    title: 'TRUSTFUL',
    img: TRUSTFUL3,
  },
  {
    id: 28,
    title: 'TRUSTFUL',
    img: TRUSTFUL4,
  },
  {
    id: 29,
    title: 'NAÏVE',
    img: NAIVE1,
  },
  {
    id: 30,
    title: 'NAÏVE',
    img: NAIVE2,
  },
  {
    id: 31,
    title: 'NAÏVE',
    img: NAIVE3,
  },
  {
    id: 32,
    title: 'NAÏVE',
    img: NAIVE4,
  },  
];

function page3() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="grow pt-16 md:pt-28">
       
        <div>
          <div className="container mx-auto">
            <MovieReel images={images} />
          </div>
        </div>

        <div className='container pt-10 pb-10'>
          <Newsletter />
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default page3;
