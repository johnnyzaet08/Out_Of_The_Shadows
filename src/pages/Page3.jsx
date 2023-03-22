import React from 'react';

import Header from '../components/Header';
import FeaturesZigZag from '../components/FeaturesZigzag';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function page3() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="grow">

        <FeaturesZigZag />
        
        <Testimonials />

        <Newsletter />

      </main>

      <Footer />
    </div>
  );
}

export default page3;
