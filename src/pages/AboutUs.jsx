import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutTeam from '../components/AboutTeam';
import AboutTeam2 from '../components/AboutTeam3';
import AboutHTML from '../components/AboutTeam2';
import '../css/backgroundsFile.css';
function page3() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden homeBackgroundStyle ">
      <Header />

      <main className="grow pt-[10vh] min-h-screen md:pt-[15vh] md:pb-[15vh]">

        <AboutTeam2 />

      </main>

      <Footer />
    </div>
  );
}

export default page3;
