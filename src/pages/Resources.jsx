import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ResourcesComponent from '../components/Resources';
import backgroundGIF from '../components/backgroundGIF';

function page3() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="grow pt-16 md:pt-28">

        <ResourcesComponent />

      </main>

      <Footer />
    </div>
  );
}

export default page3;
