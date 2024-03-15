import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ChangeText from '../components/ChangeText';
import ColorChangingText from '../components/ColorChangingText';
import ProgramHeader from '../components/ProgramHeader';

import '../css/backgroundsFile.css';

function Home() {
  return (

    <div className="flex flex-col min-h-screen overflow-hidden homeBackgroundStyle">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow md:pt-10">



        <div className="mt-20 mb-5">
          <ColorChangingText/>
        </div>

        <div className=''>
          <ChangeText />
        </div>

        <div className='flex h-auto w-full items-center justify-center'>
          <div className=' h-auto w-[70%] text-center'>
            <h1 className='mt-10 text-bold text-[2.5rem] text-black text-center`' style={{ fontFamily: 'Calendas Plus' }}>
              PURPOSE
            </h1>
            <h1 className='mt-10 mb-20 text-bold text-[2.1rem] opacity-[70%] text-justify' style={{ fontFamily: 'Calendas Plus' }}>
              OUT OF THE SHADOWS (OOTS) is a proposed non-profit that will provide support and
              understanding for the adult victims of child sex abuse who are still dealing with the pain
              and trauma. Participants will be provided a safe, confidential and judgment free
              environment.
            </h1>
          </div>
        </div>

        <div className='mb-20'>
          <ProgramHeader />
        </div>
    
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
    
  );
}

export default Home;