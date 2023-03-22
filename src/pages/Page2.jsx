import React from 'react';

import Header from '../components/Header';
import Parallax from '../components/Parallax';
import Footer from '../components/Footer';
import FeaturesBlocks from '../components/FeaturesBlocks';
import FeaturesZigZag from '../components/FeaturesZigzag';

function page2() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        <FeaturesZigZag />
        <Parallax/>
        <FeaturesBlocks />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default page2;
