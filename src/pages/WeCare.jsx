import React from 'react';

import Header from '../components/Header';
import PageIllustration from '../components/PageIllustration';
import Programs_Services from '../components/ProgramsServices';
import ProgramHeader from '../components/ProgramHeader';
import StopChildAbuse from '../components/StopChildAbuse';

import Footer from '../components/Footer';
import '../css/backgroundsFile.css';

function page2() {
  return (
    <div className="homeBackgroundStyle flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow mt-[10vh] md:pt-4">
        {/*  Page illustration */}

        <div className=''>
          <StopChildAbuse />
        </div>

        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <Programs_Services />

        <div className='mt-[5vh] mb-[15vh]'> 
        </div>
        

      </main>



      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default page2;
