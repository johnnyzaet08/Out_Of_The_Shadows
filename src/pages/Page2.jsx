import React from 'react';

import Header from '../components/Header';
import PageIllustration from '../components/PageIllustration';
import FeaturesBlocks from '../components/FeaturesBlocks';
import FeaturesZigZag from '../components/FeaturesZigzag';
import Testimonials from '../components/Testimonials';

import Footer from '../components/Footer';

function page2() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow pt-12 md:pt-4">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <FeaturesBlocks />
        <FeaturesZigZag />
        <Testimonials />
      </main>



      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default page2;
