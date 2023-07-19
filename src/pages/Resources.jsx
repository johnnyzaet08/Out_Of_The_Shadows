import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ParallaxClouds from '../components/BackgroundParallax';

import '../css/backgroundDaytoNight.css';

function page3() {
  return (
    <div className="dayToNight flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="grow pt-16 md:pt-28">

        <ParallaxClouds />
      
      </main>

      <Footer />
    </div>
  );
}

export default page3;
