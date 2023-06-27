import React from 'react';
import { Parallax } from "react-parallax";

import Header from '../components/Header';
import Footer from '../components/Footer';
import ColorChangingText from '../components/ColorChangingText';
import MovieReel from '../components/MovieReel';

import image from '../images/background.png';

const images = [
  {
    id: 1,
    title: 'INOCENT',
    img: "https://drive.google.com/uc?export=download&id=1IPh5IfymGpC63iArz_5xcUZ1FhloDj_k",
  },
  {
    id: 2,
    title: 'INOCENT',
    img: "https://drive.google.com/uc?export=download&id=17P47LEimRF11svnSb2Fmpb-dnuroUko2",
  },
  {
    id: 3,
    title: 'INOCENT',
    img: "https://drive.google.com/uc?export=download&id=1BlkJAOm1UeTj6eqk0cjbLcK90pTX-mC9",
  },
  {
    id: 4,
    title: 'INOCENT',
    img: "https://drive.google.com/uc?export=download&id=1q9VdKH7iDbHKVg_jZlK6poTVJjEynlxH",
  },
  {
    id: 5,
    title: 'VICTIM',
    img: "https://drive.google.com/uc?export=download&id=1_w9clgtlGlEx3xdYq9GfLioSFzTSKAwo",
  },
  {
    id: 6,
    title: 'VICTIM',
    img: "https://drive.google.com/uc?export=download&id=13ENlGKkJODkiKlJHi1CjUTmo63O8VCvU",
  },
  {
    id: 7,
    title: 'VICTIM',
    img: "https://drive.google.com/uc?export=download&id=1eqsuEZjwGobW68DEUh_oZ4Zw5XInED3K",
  },
  {
    id: 8,
    title: 'VICTIM',
    img: "https://drive.google.com/uc?export=download&id=18IBnHLlHr4aLDxthKbI-QIOUjxBSgDq6",
  },
  {
    id: 9,
    title: 'DEFENSELESS',
    img: "https://drive.google.com/uc?export=download&id=1CK5U3Vujjd0qsEc-ajWFFMVnm8_EIiem",
  },
  {
    id: 10,
    title: 'DEFENSELESS',
    img: "https://drive.google.com/uc?export=download&id=1t9AsEKZzMWMLlo0ZDtZuo8UT6TKsBhv-",
  },
  {
    id: 11,
    title: 'DEFENSELESS',
    img: "https://drive.google.com/uc?export=download&id=1Ph-0ly9_qIyT80YvDQ-C7jKE8fdMW0OV",
  },
  {
    id: 12,
    title: 'DEFENSELESS',
    img: "https://drive.google.com/uc?export=download&id=1nNaa8RbnBsAGVa0SqWb_aHWhWuPhZ42S",
  },
  {
    id: 13,
    title: 'VULNERABLE',
    img: "https://drive.google.com/uc?export=download&id=1XQkN_WKmEeX3onH3uxUkd2ALRRlo7Bk4",
  },
  {
    id: 14,
    title: 'VULNERABLE',
    img: "https://drive.google.com/uc?export=download&id=1t08xq_CNJ0ivMTA_b8kw6hKuJ-9pAjJe",
  },
  {
    id: 15,
    title: 'VULNERABLE',
    img: "https://drive.google.com/uc?export=download&id=1N8hencRN6ZrFrEjAc74Q3MdMk50UFo5J",
  },
  {
    id: 16,
    title: 'VULNERABLE',
    img: "https://drive.google.com/uc?export=download&id=1bT5j6lSbnbJps4kNPDPgoapQ75uTXkO3",
  },  
  {
    id: 17,
    title: 'PURE',
    img: "https://drive.google.com/uc?export=download&id=1zS349dnghtl4WYs1k8sB9JgZo2pq6ujF",
  },
  {
    id: 18,
    title: 'PURE',
    img: "https://drive.google.com/uc?export=download&id=1zaVxosWwhPsDyYI-HpqRVHV-wupHiUqo",
  },
  {
    id: 19,
    title: 'PURE',
    img: "https://drive.google.com/uc?export=download&id=1w3gpAwaS0NReXDTES35GrSbBIaht8pI4",
  },
  {
    id: 20,
    title: 'PURE',
    img: "https://drive.google.com/uc?export=download&id=1z7n4aTI38UIdKPQUOMqi9I3KUgLk0-t7",
  },
  {
    id: 21,
    title: 'HONEST',
    img: "https://drive.google.com/uc?export=download&id=1uluA92eFP503Rs-FXU42dUHln77GJmK5",
  },
  {
    id: 22,
    title: 'HONEST',
    img: 'https://drive.google.com/uc?export=download&id=1idYMGWjND-ZdygGVB4gbKxVtHo6vhfMx',
  },
  {
    id: 23,
    title: 'HONEST',
    img: "https://drive.google.com/uc?export=download&id=1OrSDAw-PbCfcVGogeRoEV_I_MyRrYYBc",
  },
  {
    id: 24,
    title: 'HONEST',
    img: "https://drive.google.com/uc?export=download&id=1nvcb8csnLFIUv-ZhCo0c7Id6VvRfIj04",
  },
  {
    id: 25,
    title: 'TRUSTFUL',
    img: "https://drive.google.com/uc?export=download&id=1OV6ko_FRfVFpUH2Dirwt_OwlI9ahbt4h",
  },
  {
    id: 26,
    title: 'TRUSTFUL',
    img: "https://drive.google.com/uc?export=download&id=1BWMkeeh_dNwlKxlvKGi0Qv-WrmY0XERQ",
  },
  {
    id: 27,
    title: 'TRUSTFUL',
    img: "https://drive.google.com/uc?export=download&id=1Y9bYLKwaCtb5cVrbw55MsQqepcvfNzfr",
  },
  {
    id: 28,
    title: 'TRUSTFUL',
    img: "https://drive.google.com/uc?export=download&id=1C5B5vOtYQ5gnq2BU4lC6z1A1LH6xxX7e",
  },
  {
    id: 29,
    title: 'NAÏVE',
    img: "https://drive.google.com/uc?export=download&id=1Qo4JsiWY3JD2XaxdXKSjDNtxHiptXspr",
  },
  {
    id: 30,
    title: 'NAÏVE',
    img: "https://drive.google.com/uc?export=download&id=1ib5pY2E4tU9CISW4j3aElZ8y6y8P_D7s",
  },
  {
    id: 31,
    title: 'NAÏVE',
    img: "https://drive.google.com/uc?export=download&id=1kbOaX1nGCFT5TSBJf-nrZKA95QAvnWdX",
  },
  {
    id: 32,
    title: 'NAÏVE',
    img: "https://drive.google.com/uc?export=download&id=1-m8-gFl2a3_nSFYhEd2SgQ5YZoO-QV9L",
  },  
];

function Home() {
  return (

    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow md:pt-6">

        <div className="py-4">
          <ColorChangingText/>
        </div>

        <div className="flex items-center justify-center min-h-screen ">
          <Parallax className="w-2/3" strength={400} bgImage={image} bgImageStyle={{backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="h-[90vh] w-full transition-100 flex items-center justify-center">
              <div className="text-center text-white-100 w-[75vh] md:w-[100vh] opacity-85">
                <span className="text-xl md:text-2xl xl:text-3xl font-bold">
                  Adult survivors of childhood abuse are more likely to experience mental health difficulties, including depression, anxiety, bipolar disorder, PTSD, eating disorders, and substance use disorders.
                </span>
              </div>
            </div>
          </Parallax>
        </div>

        <div className="mx-auto py-10 mr-2 ml-2 mt-5">
          <MovieReel images={images} />
        </div>

      </main>

      {/*  Site footer */}
      <Footer />
    </div>
    
  );
}

export default Home;