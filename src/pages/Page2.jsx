import React from 'react';

import Header from '../components/Header';
import PageIllustration from '../components/PageIllustration';
import Testimonials from '../components/Testimonials';
import ImageSlider from '../components/ImageSlider';

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
        <Testimonials />

        <div>
          <h1>Welcome to My Page</h1>

          {/* Insert the ImageSlider component here */}
          <ImageSlider />

          <p>Some other content on the page...</p>
        </div>
        
      </main>



      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default page2;
