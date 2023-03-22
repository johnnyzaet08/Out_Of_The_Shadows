import "../css/parallax.css"
import React from 'react';
import { Parallax } from "react-parallax";

import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturesBlocks from '../components/FeaturesBlocks';
import FeaturesZigZag from '../components/FeaturesZigzag';



import background1 from '../images/background1.jpg';
import background from '../images/background.jpg';

function page2() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        <FeaturesZigZag />

        <div className="">

          <Parallax strength={300} bgImage={background1}>
            <div className="content">
              <div className="text-content">Normal Parallax</div>
            </div>
          </Parallax>

          <Parallax strength={-600} bgImage={background}>
            <div className="content ">
              <div className="text-content">Reverse Parallax</div>
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

export default page2;
