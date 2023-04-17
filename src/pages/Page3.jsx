import React from 'react';

import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import MovieReel from '../components/MovieReel';

import ImageAbuse1 from '../images/ImageAbuse1.jpg';
import ImageAbuse2 from '../images/ImageAbuse2.jpg';
import ImageAbuse3 from '../images/ImageAbuse3.jpg';
import ImageAbuse4 from '../images/ImageAbuse4.jpg';
import ImageAbuse5 from '../images/ImageAbuse5.jpg';

const images = [
  {
    id: 1,
    title: 'Image 1',
    img: ImageAbuse1,
  },
  {
    id: 2,
    title: 'Image 2',
    img: ImageAbuse2,
  },
  {
    id: 3,
    title: 'Image 3',
    img: ImageAbuse3,
  },
  {
    id: 4,
    title: 'Image 4',
    img: ImageAbuse4,
  },
  {
    id: 5,
    title: 'Image 5',
    img: ImageAbuse5,
  },
];

function page3() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="grow pt-16 md:pt-28">
       
        <div>
          <div className="container mx-auto w-full">
            <MovieReel images={images} />
          </div>
        </div>

        <div className='container pt-10 pb-10'>
          <Newsletter />
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default page3;
