import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutTeam from '../components/AboutTeam';
import AboutHTML from '../components/AboutTeam2';

function page3() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="grow pt-[10vh] md:pt-[15vh] md:pb-[15vh]">

        <AboutHTML />

      </main>

      <Footer />
    </div>
  );
}

export default page3;
