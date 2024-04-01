import React, {useState} from 'react';
import ModalPDF from './ModalPDF';
import bomF from '../images/Bom0.png';
import bomI from '../images/Bom1.png';

const LOS_ANGELES_COUNTY = [
  {
    id: 0,
    title: "Children",
    url: "/pdfs/Los_Angeles_Resources _CHILDREN.pdf",
  },
  {
    id: 1,
    title: "Domestic Violence",
    url: "../pdfs/Los_Angeles_Resources_DOMESTICVIOLENCE.pdf",
  },
  {
    id: 2,
    title: "Education",
    url: "/pdfs/Los_Angeles_Resources_EDUCATION.pdf",  
  },
  {
    id: 3,
    title: "Employment",
    url: "/pdfs/Los_Angeles_Resources_EMPLOYMENT.pdf",  
  },
  {
    id: 4,
    title: "Food",
    url: "/pdfs/Los_Angeles_Resources_FOOD.pdf",  
  },
  {
    id: 5,
    title: "Health",
    url: "/pdfs/Los_Angeles_Resources_HEALTH.pdf",  
  },
  {
    id: 6,
    title: "Homeless",
    url: "/pdfs/Los_Angeles_Resources_HOMELESS.pdf",  
  },
  {
    id: 7,
    title: "Housing",
    url: "/pdfs/Los_Angeles_Resources_HOUSING.pdf",  
  },
  {
    id: 8,
    title: "Legal",
    url: "/pdfs/Los_Angeles_Resources_LEGAL.pdf",  
  },
  {
    id: 9,
    title: "Menetal Health",
    url: "/pdfs/Los_Angeles_Resources_MENTALHEALTH.pdf",  
  },
]

const ORANGE_COUNTY = [
  {
    id: 0,
    title: "Housing",
    url: "/pdfs/Orange_Resources_HOUSING.pdf",
  },
  {
    id: 1,
    title: "Family Violence",
    url: "/pdfs/Orange_Resources_FAMILYVIOLENCESERVICES.pdf",
  },
  {
    id: 2,
    title: "Financial Assistance",
    url: "/pdfs/Orange_Resources_FINANCIALASSISTANCE.pdf",
  },
  {
    id: 3,
    title: "Food Assistance",
    url: "/pdfs/Orange_Resources_FOODASSISTANCE.pdf",
  },
  {
    id: 4,
    title: "Health Care",
    url: "/pdfs/Orange_Resources_HEALTHCARE.pdf",
  },
  {
    id: 5,
    title: "Mental Health",
    url: "/pdfs/Orange_Resources_MENTALHEALTH.pdf",
  },
  {
    id: 6,
    title: "Substance Abuse",
    url: "/pdfs/Orange_Resources_SUBSTANCEABUSE.pdf",
  },
  {
    id: 7,
    title: "Employment Services",
    url: "/pdfs/Orange_Resources_EMPLOYMENTSERVICES.pdf",
  },
  {
    id: 8,
    title: "Parenting & Childcare",
    url: "/pdfs/Orange_Resources_PARENTING&CHILDCARE.pdf",
  },
  {
    id: 9,
    title: "Elderly Services",
    url: "/pdfs/Orange_Resources_ELDERLYSERVICES.pdf",
  },
  {
    id: 10,
    title: "Legal",
    url: "/pdfs/Orange_Resources_LEGAL.pdf",
  },
]

const LOCAL_HOTLINES = [
  {
    "id": 0,
    "title": "Orange County Human Trafficking Task Force",
    "number": "None",
    "url": "https://www.ochumantrafficking.com/mission"
  },
  {
    "id": 1,
    "title": "Orange County Sheriff’s Department",
    "number": "(855)868-5400",
    "url": "None"
  },
  {
    "id": 2,
    "title": "The Human Exploitation and Trafficking Unit",
    "number": "(714)834-3600",
    "url": "None"
  },  
  {
    "id": 3,
    "title": "Los Angeles County District Attorney’s Office",
    "number": "1(888)539-2373 or 1(888)373-7888",
    "url": "None"
  },
  {
    "id": 4,
    "title": "Los Angeles County Sheriff’s Department Human Trafficking Task Force",
    "number": "(323)526-5156",
    "url": "None"
  },
  {
    "id": 5,
    "title": "Los Angeles County District Attorney Human Trafficking Victim Assistance Program – Central",
    "number": "(213)974-2039",
    "url": "None"
  },
  {
    "id": 6,
    "title": "Los Angeles Police Department Human Trafficking Unit",
    "number": "(213)486-0910",
    "url": "None"
  },
  {
    "id": 7,
    "title": "Coalition to Abolish Slavery and Human Trafficking (CAST) Hotline",
    "number": "1(888)539-2373",
    "url": "None"
  },
  {
    "id": 8,
    "title": "Children of the Night",
    "number": "1(800) 551-1300",
    "url": "None"
  },
  {
    "id": 9,
    "title": "Dream Center Human Trafficking Rescue",
    "number": "(877) 632-7234",
    "url": "None"
  },
  {
    "id": 10,
    "title": "Asian Americans Advancing Justice",
    "number": "(213) 977-7500",
    "url": "None"
  },
  {
    "id": 11,
    "title": "LA Regional Crime Stoppers",
    "number": "1(800)222-8477",
    "url": "None"
  },
  {
    "id": 12,
    "title": "U.S. Immigration & Customs Enforcement Homeland Security Investigations",
    "number": "1(866)347-2423",
    "url": "None"
  },
  {
    "id": 13,
    "title": "Saving Innocence",
    "number": "(323) 379-4232",
    "url": "https://savinginnocence.org/"
  },  
  
]

const REGIONAL_HOTLINES = [
  {
    "id": 0,
    "title": "California A21",
    "number": "1(949) 202 4681",
    "url": "None"
  },
  {
    "id": 1,
    "title": "California Department of Justice - Bureau of Criminal Information and Analysis - Child Abuse Central Index (CACI)",
    "number": "(916) 210-4241 F: (916) 227-5054",
    "url": "None"
  },
  {
    "id": 2,
    "title": "California Department of Fair Employment and Housing",
    "number": "Voice: (800) 884-1684 TTY: (800) 700-2320",
    "url": "None"
  },
  {
    "id": 3,
    "title": "Equal Employment Opportunity Commission",
    "number": "Voice: (800) 669-4000 TTY: (800) 669-6820",
    "url": "None"
  }
]


const NATIONAL_HOTLINES = [
  {
    "id": 0,
    "title": "National Human Trafficking",
    "number": "1(888) 373-7888 Text* 233733",
    "url": "None"
  },
  {
    "id": 1,
    "title": "National Domestic Violence Hotline (24/7)",
    "number": "Voice: (800) 799-7233 TTY: (800) 787-3224",
    "url": "None"
  },
  {
    "id": 2,
    "title": "National Human Trafficking Hotline",
    "number": "Voice: (888) 373-7888 TTY: 711",
    "url": "None"
  },
  {
    "id": 3,
    "title": "National Sexual Assault Hotline (RAINN)",
    "number": "Voice: (800) 656-HOPE (4673)",
    "url": "None"
  },
  {
    "id": 4,
    "title": "Norway",
    "number": "22 33 11 60; 47 4000 2554",
    "url": "None"
  },
  {
    "id": 5,
    "title": "Greece",
    "number": "1109",
    "url": "None"
  },
  {
    "id": 6,
    "title": "A21",
    "number": "None",
    "url": "https://www.a21.org/index.php"
  },
  {
    "id": 7,
    "title": "Polaris",
    "number": "None",
    "url": "https://polarisproject.org/"
  },
  {
    "id": 8,
    "title": "Mexico",
    "number": "011 52 555533 5533 (abroad); +8005533000",
    "url": "None"
  },
  {
    "id": 9,
    "title": "Australia",
    "number": "61 02 9680 2121",
    "url": "None"
  },
  {
    "id": 10,
    "title": "Thailand",
    "number": "66 02 136 6174",
    "url": "None"
  },
  {
    "id": 11,
    "title": "South Africa",
    "number": "27 21 551 0971",
    "url": "None"
  },
  {
    "id": 12,
    "title": "United Kingdom",
    "number": "44 20 7736 6994",
    "url": "None"
  },
  {
    "id": 13,
    "title": "Bulgaria",
    "number": "00359 885 237 606",
    "url": "None"
  }
]

const lines = [
  {
    "id": 0,
  },
  {
    "id": 1,
  },
  {
    "id": 2,
  },
  {
    "id": 3,
  },
  {
    "id": 4,
  },
  {
    "id": 5,
  },
  {
    "id": 6,
  },
  {
    "id": 7,
  },
  {
    "id": 8,
  },
  {
    "id": 9,
  },
  {
    "id": 10,
  },
  {
    "id": 11,
  },
  {
    "id": 12,
  },
  {
    "id": 13,
  },
  {
    "id": 14,
  },
  {
    "id": 15,
  },
  {
    "id": 16,
  },
  {
    "id": 17,
  },
  {
    "id": 18,
  },
  {
    "id": 19,
  },
  {
    "id": 20,
  },
  {
    "id": 21,
  },
]

const ResourcesComponent = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  const openModal = (url) => {
    setPdfUrl(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>

      <div className="absolute top-0 pointer-events-none opacity-[10%] w-full min-h-screen" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800" opacity="0.46">
          <defs>
            <linearGradient gradientTransform="rotate(270)" x1="50%" y1="0%" x2="50%" y2="100%" id="sssquiggly-grad">
              <stop stopColor="hsla(226, 65%, 51%, 1.00)" stopOpacity="1" offset="0%"></stop>
              <stop stopColor="hsla(0, 0%, 77%, 1.00)" stopOpacity="1" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g strokeWidth="1.5" stroke="url(#sssquiggly-grad)" fill="none" strokeLinecap="round" transform="matrix(1,0,0,1,-5,-1449.515235900879)">
            {lines.map((line, index) => (
              <div key={line.id} style={{ transform: `translateY(${index * 10}px)` }}>
                <path d="M10,10C24.583333333333332,11.041666666666666,48.75,28.75,80,15C111.25,1.25,126.66666666666666,-59.958333333333336,160,-56C193.33333333333334,-52.041666666666664,206.66666666666666,28.166666666666664,240,34C273.3333333333333,39.833333333333336,286.6666666666667,-28.208333333333332,320,-28C353.3333333333333,-27.791666666666668,366.6666666666667,33.958333333333336,400,35C433.3333333333333,36.041666666666664,446.6666666666667,-32.375,480,-23C513.3333333333334,-13.625,526.6666666666666,85.41666666666667,560,80C593.3333333333334,74.58333333333333,606.6666666666666,-38.16666666666667,640,-49C673.3333333333334,-59.83333333333333,686.6666666666666,24.458333333333332,720,28C753.3333333333334,31.541666666666668,783.3333333333334,-19.5,800,-32"/>
              </div>
              ))}
          </g>
        </svg>
      </div>  

      <section
        className=""
      >
        <div className="container w-[70%] items-center mx-auto">

        { /* Section Title */ }
          <div className="w-full mx-auto text-center mt-20">
            <div className="flex justify-center items-center">
              <img src={bomI} alt="Icono Antes" className="mr-2" width="50" height="50" />
              <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[35px] inline-block">
                LOS ANGELES COUNTY: LOCAL COMMUNITY RESOURCES
              </h2>
              <img src={bomF} alt="Icono Después" className="ml-2" width="50" height="50" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
              SERVICES BY CATEGORY
            </h3>
          </div>

          { /* Items */ }
          <div className="flex mt-5 items-center justify-center grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">

              {LOS_ANGELES_COUNTY.map((item) => (
                
                <div key={item.id} className="flex w-full items-center justify-center ">
                  <button className="pr-[10px] text-center font-medium leading-relaxed text-bold text-black hover:text-primary underline" onClick={() => openModal(item.url)}>
                    {item.title}
                  </button>
                </div>
              ))}

          </div>
              
          <ModalPDF isOpen={modalOpen} onClose={closeModal} pdfUrl={pdfUrl} />

        </div>
        


      </section>

      <section
        className="py-16 md:py-20 lg:py-16"
      >
        <div className="container w-[70%] items-center mx-auto">

          { /* Section Title */ }
          <div className="w-full mx-auto text-center">
            <div className="flex justify-center items-center">
              <img src={bomI} alt="Icono Antes" className="mr-2" width="50" height="50" />
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[35px] inline-block">
                ORANGE COUNTY: LOCAL COMMUNITY RESOURCES
              </h2>
              <img src={bomF} alt="Icono Después" className="ml-2" width="50" height="50" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
              SERVICES BY CATEGORY
            </h3>
          </div>

          { /* Items */ }
          <div className="flex mt-5 items-center justify-center grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">

              {ORANGE_COUNTY.map((item) => (
                
                <div key={item.id} className="flex w-full items-center justify-center ">
                  <button className="pr-[10px] text-center font-medium leading-relaxed text-bold text-black hover:text-primary underline" onClick={() => openModal(item.url)}>
                    {item.title}
                  </button>
                </div>
              ))}

          </div>

        </div>

      </section>

      <section
        className="py-16 md:py-20 lg:py-16"
      >
        <div className="container w-[70%] items-center mx-auto">

          { /* Section Title */ }
          <div className="w-full">
            <div className="flex justify-center items-center mb-10">
              <img src={bomI} alt="Icono Antes" className="mr-2" width="50" height="50" />
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[35px] inline-block">
                LOCAL HOTLINES
              </h2>
              <img src={bomF} alt="Icono Después" className="ml-2" width="50" height="50" />
            </div>
          </div>

          { /* Items */ }
          <div className="flex mt-5 items-center justify-center grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">

              {LOCAL_HOTLINES.map((item) => (
                
                <div key={item.id} className="flex w-full items-center justify-center ">
                  {
                    item.url != "None" ? (
                      <a href={item.url} target="_blank" className="pr-[10px] text-center font-medium leading-relaxed text-bold hover:text-primary underline">
                        {item.title}
                      </a>
                    ) : (
                      <a className="pr-[10px] text-center font-medium leading-relaxed text-bold">
                        {item.title} <br/> {item.number}
                      </a>
                    )
                  }

                </div>
              ))}

          </div>

        </div>
      </section>


      <section
        className="py-16 md:py-20 lg:py-16"
      >
        <div className="container w-[70%] items-center mx-auto">

          { /* Section Title */ }
          <div className="w-full">
            <div className="flex justify-center items-center mb-10">
              <img src={bomI} alt="Icono Antes" className="mr-2" width="50" height="50" />
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[35px] inline-block">
                REGIONAL HOTLINES
              </h2>
              <img src={bomF} alt="Icono Después" className="ml-2" width="50" height="50" />
            </div>
          </div>

          { /* Items */ }
          <div className="flex mt-5 items-center justify-center grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">

              {REGIONAL_HOTLINES.map((item) => (
                
                <div key={item.id} className="flex w-full items-center justify-center ">
                  {
                    item.url != "None" ? (
                      <a href={item.url} target="_blank" className="pr-[10px] text-center font-medium leading-relaxed text-bold hover:text-primary underline">
                        {item.title}
                      </a>
                    ) : (
                      <a className="pr-[10px] text-center font-medium leading-relaxed text-bold">
                        {item.title} <br/> {item.number}
                      </a>
                    )
                  }
                </div>
              ))}

          </div>

        </div>
      </section>


      <section
        className="py-16 md:py-20 lg:py-16"
      >
        <div className="container w-[70%] items-center mx-auto mb-10">

          { /* Section Title */ }
          <div className="w-full">
            <div className="flex justify-center items-center mb-10">
              <img src={bomI} alt="Icono Antes" className="mr-2" width="50" height="50" />
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[35px] inline-block">
                NATIONAL HOTLINES
              </h2>
              <img src={bomF} alt="Icono Después" className="ml-2" width="50" height="50" />
            </div>
          </div>

          { /* Items */ }
          <div className="flex mt-5 items-center justify-center grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">

              {NATIONAL_HOTLINES.map((item) => (
                
                <div key={item.id} className="flex w-full items-center justify-center ">
                  {
                    item.url != "None" ? (
                      <a href={item.url} target="_blank" className="pr-[10px] text-center font-medium leading-relaxed text-bold hover:text-primary underline">
                        {item.title}
                      </a>
                    ) : (
                      <a className="pr-[10px] text-center font-medium leading-relaxed text-bold">
                        {item.title} <br/> {item.number}
                      </a>
                    )
                  }
                </div>
              ))}

          </div>

        </div>
      </section>


      

    </>
  );
};

export default ResourcesComponent;
