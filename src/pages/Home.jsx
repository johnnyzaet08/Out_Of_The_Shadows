import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ChangeText from '../components/ChangeText';
import ColorChangingText from '../components/ColorChangingText';
import CardHover from '../components/CardHover';

import '../css/backgroundsFile.css';

const images = [
  {
    id: 1,
    title: 'INOCENT',
    img: "/images/StatisticsImages/1.1 INNOCENT.jpg",
  },
  {
    id: 2,
    title: 'INOCENT',
    img: "/images/StatisticsImages/1.2 INNOCENT.jpg",
  },
  {
    id: 3,
    title: 'INOCENT',
    img: "/images/StatisticsImages/1.3 INNOCENT.jpg",
  },
  {
    id: 4,
    title: 'INOCENT',
    img: "/images/StatisticsImages/1.4 INNOCENT.jpg",
  },
  {
    id: 5,
    title: 'VICTIM',
    img: "/images/StatisticsImages/2.1 VICTIM.jpg",
  },
  {
    id: 6,
    title: 'VICTIM',
    img: "/images/StatisticsImages/2.2 VICTIM.jpg",
  },
  {
    id: 7,
    title: 'VICTIM',
    img: "/images/StatisticsImages/2.3 VICTIM.jpg",
  },
  {
    id: 8,
    title: 'VICTIM',
    img: "/images/StatisticsImages/2.4 VICTIM.jpg",
  },
  {
    id: 9,
    title: 'DEFENSELESS',
    img: "/images/StatisticsImages/3.1 DEFENSELESS.jpg",
  },
  {
    id: 10,
    title: 'DEFENSELESS',
    img: "/images/StatisticsImages/3.2 DEFENSELESS.jpg",
  },
  {
    id: 11,
    title: 'DEFENSELESS',
    img: "/images/StatisticsImages/3.3 DEFENSELESS.jpg",
  },
  {
    id: 12,
    title: 'DEFENSELESS',
    img: "/images/StatisticsImages/3.4 DEFENSELESS.jpg",
  },
  {
    id: 13,
    title: 'VULNERABLE',
    img: "/images/StatisticsImages/4.1 VULNERABLE.jpg",
  },
  {
    id: 14,
    title: 'VULNERABLE',
    img: "/images/StatisticsImages/4.2 VULNERABLE.jpg",
  },
  {
    id: 15,
    title: 'VULNERABLE',
    img: "/images/StatisticsImages/4.3 VULNERABLE.jpg",
  },
  {
    id: 16,
    title: 'VULNERABLE',
    img: "/images/StatisticsImages/4.4 VULNERABLE.jpg",
  },  
  {
    id: 17,
    title: 'PURE',
    img: "/images/StatisticsImages/5.1 PURE.jpg",
  },
  {
    id: 18,
    title: 'PURE',
    img: "/images/StatisticsImages/5.2 PURE.jpg",
  },
  {
    id: 19,
    title: 'PURE',
    img: "/images/StatisticsImages/5.3 PURE.jpg",
  },
  {
    id: 20,
    title: 'PURE',
    img: "/images/StatisticsImages/5.4 PURE.jpg",
  },
  {
    id: 21,
    title: 'HONEST',
    img: "/images/StatisticsImages/6.1 HONEST.jpg",
  },
  {
    id: 22,
    title: 'HONEST',
    img: "/images/StatisticsImages/6.2 HONEST.jpg",
  },
  {
    id: 23,
    title: 'HONEST',
    img: "/images/StatisticsImages/6.3 HONEST.jpg",
  },
  {
    id: 24,
    title: 'HONEST',
    img: "/images/StatisticsImages/6.4 HONEST.jpg",
  },
  {
    id: 25,
    title: 'TRUSTFUL',
    img: "/images/StatisticsImages/7.1 TRUSTFUL.jpg",
  },
  {
    id: 26,
    title: 'TRUSTFUL',
    img: "/images/StatisticsImages/7.2 TRUSTFUL.jpg",
  },
  {
    id: 27,
    title: 'TRUSTFUL',
    img: "/images/StatisticsImages/7.3 TRUSTFUL.jpg",
  },
  {
    id: 28,
    title: 'TRUSTFUL',
    img: "/images/StatisticsImages/7.4 TRUSTFUL.jpg",
  },
  {
    id: 29,
    title: 'NAÏVE',
    img: "/images/StatisticsImages/8.1 NAIVE.jpg",
  },
  {
    id: 30,
    title: 'NAÏVE',
    img: "/images/StatisticsImages/8.2 NAIVE.jpg",
  },
  {
    id: 31,
    title: 'NAÏVE',
    img: "/images/StatisticsImages/8.3 NAIVE.jpg",
  },
  {
    id: 32,
    title: 'NAÏVE',
    img: "/images/StatisticsImages/8.4 NAIVE.jpg",
  },  
];

function Home() {
  return (

    <div className="flex flex-col min-h-screen overflow-hidden homeBackgroundStyle">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow md:pt-10">

        <div className=''>
          <ChangeText />
        </div>

        <div className="mx-auto py-5 mr-2 ml-2">
          <CardHover />
        </div>

        <h1 className='mt-20 text-bold text-[30px] text-center'>
          Adult survivors of childhood abuse are more likely to experience mental health difficulties, including depression, anxiety, bipolar disorder, PTSD, eating disorders, and substance use disorders.
        </h1>

        <div className="mt-10 mb-5">
          <ColorChangingText/>
        </div>
        
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
    
  );
}

export default Home;