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

        <div className="">
          <Parallax strength={300} bgImage={image}>
            <div className=" md:min-h-screen h-[65vh] transition-100">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white-100 text-2xl md:text-5xl">Normal Parallax</div>
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