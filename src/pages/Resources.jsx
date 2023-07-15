import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ResourcesComponent from '../components/Resources';
import BackgroundGIF from '../components/backgroundGIF';

function page3() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="grow pt-16 md:pt-28">

        <BackgroundGIF />


      </main>

      <Footer />
    </div>
  );
}

export default page3;
