import React from 'react';

import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import AnimatedStats from '../components/AnimatedStats';
import Footer from '../components/Footer';
import OldFilm from '../components/OldFilm';

function page3() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="grow pt-16 md:pt-28">
       
        <div>
          <h1 className="text-center text-xl md:text-2xl xl:text-3xl text-gray-900 font-bold ">Welcome to my website!</h1>
          <p className='text-center text-xl md:text-2xl xl:text-3xl text-gray-900 font-bold '>Here's an animated statistic:</p>
          <AnimatedStats startValue={100} label="Total Visitors" />
        </div>

        <Newsletter />

      </main>

      <OldFilm/>

      <Footer />
    </div>
  );
}

export default page3;
