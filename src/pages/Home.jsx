import React from 'react';
import { Parallax } from "react-parallax";

import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturesBlocks from '../components/FeaturesBlocks';

import image from '../images/background.png';

function Home() {
  return (

    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow pt-12">

        <FeaturesBlocks />

        <div className="">
          <Parallax strength={400} bgImage={image}>
            <div className=" md:min-h-screen h-[80vh] transition-100">
              <div className="flex items-center justify-center h-full">
                <div className='absolute text-center text-white-100 w-[75vh] md:w-[100vh] opacity-85'>
                  <span className='text-center text-xl md:text-2xl xl:text-3xl text-white-100 font-bold'>
                    Adult survivors of childhood abuse are more likely to experience mental health difficulties, including depression, anxiety, bipolar disorder, PTSD, eating disorders, and substance use disorders.
                  </span>
                  <br/>
                </div>
              </div>
            </div>
          </Parallax>
        </div>

        <FeaturesBlocks />

      </main>

      {/*  Site footer */}
      <Footer />
    </div>
    
  );
}

export default Home;