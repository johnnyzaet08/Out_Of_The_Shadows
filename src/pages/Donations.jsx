import React from 'react';

import Header from '../components/Header';
import Donation from '../components/Donation';
import Footer from '../components/Footer';

function page3() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="pt-20">

        <Donation />

      </main>

      <Footer />
    </div>
  );
}

export default page3;
