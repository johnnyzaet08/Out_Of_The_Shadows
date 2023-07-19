import React from 'react';

import Header from '../components/Header';
import InProgress from '../components/InProgress';
import Footer from '../components/Footer';

import '../css/backgroundsFile.css';

function page3() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden homeBackgroundStyle">
      <Header />

      <main className="grow pt-16 md:pt-28">

        <InProgress />

      </main>

      <Footer />
    </div>
  );
}

export default page3;
