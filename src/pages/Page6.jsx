import React from 'react';

import Header from '../components/Header';
import FeaturesZigZag from '../components/FeaturesZigzag';
import Footer from '../components/Footer';

function page3() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="grow pt-16 md:pt-28">

        <FeaturesZigZag />

      </main>

      <Footer />
    </div>
  );
}

export default page3;
