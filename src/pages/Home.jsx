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
            <h1 className='mt-10 mb-20 text-bold text-[30px] text-center lg:text-[40px]' style={{ fontFamily: 'Calendas Plus' }}>
              Adult survivors of childhood abuse are more likely to experience mental health difficulties, including depression, anxiety, bipolar disorder, PTSD, eating disorders, and substance use disorders.
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