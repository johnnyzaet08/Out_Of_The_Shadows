import React, { useState, useRef, useEffect } from 'react';
import "../css/header.css";
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';


function Header() {


  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // Create a effect with scroll down and scroll up
  useEffect(() => {
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        document.querySelector(".header").classList.remove("bg-transparent");
      } else {
        document.querySelector(".header").classList.add("bg-transparent");
      }
      setPrevScrollPos(currentScrollPos);
    };
  }, [prevScrollPos]);

  //<span className='text-lx font-bold justify-center text-primary px-4'>Out of The <br/> Shadows </span>


  return (
    <header className="bg-white-100 header fixed top-0 left-0 w-full transition duration-1000 z-30">

      <div className="max-w-8xl mx-2 sm:px-4 lg:mx-10" >
        <div className="flex items-center justify-between h-20 ">

          <nav className="hidden xl:flex xl:grow w-auto">
            <ul className="flex grow justify-center flex-wrap w-auto">

              <li className=''>
                <ul className='flex items-center justify-between h-full mx-auto'>
                  <li>
                    <Link to="/" className="flex w-[14vh] 2xl:w-[18vh] justify-center mx-3 rounded-full font-medium text-primary hover:underline hover:bg-blue-100 hover:text-secondary_text px-6 py-3 flex transition duration-150 ease-in-out"> HOME </Link>
                  </li>
                  <li>
                    <Link to="/WeCare" className="flex w-[14vh] 2xl:w-[18vh] justify-center mx-3 rounded-full font-medium text-primary hover:underline hover:bg-blue-100 hover:text-secondary_text px-6 py-3 flex items-center transition duration-150 ease-in-out"> WE CARE </Link>
                  </li>
                  <li>
                    <Link to="/AboutUs" className="flex w-[14vh] 2xl:w-[18vh] justify-center mx-3 rounded-full font-medium text-primary hover:underline hover:bg-blue-100 hover:text-secondary_text px-6 py-3 flex items-center transition duration-150 ease-in-out"> ABOUT US </Link>
                  </li>
                </ul>
              </li>
              
              <li>
                <div className="px-2 flex flex-col items-center mx-auto justify-center">
                  <Link to="/" aria-label="Logo">
                    <img src={logo} alt='Logo' className='w-15 h-12 fill-current' />
                  </Link>
                  <span className="inline-block relative">
                    <span className="text-lg font-bold text-primary mt-2">Out Of The Shadows</span>
                  </span>
                </div>
              </li>

              <li>
                <ul className='flex items-center justify-between h-full'>
                  <li>
                    <Link to="/Resources" className="flex w-[14vh] 2xl:w-[18vh] justify-center  mx-3 rounded-full font-medium text-primary hover:underline hover:bg-blue-100 hover:text-secondary_text px-6 py-3 flex items-center transition duration-150 ease-in-out"> RESOURCES </Link>
                  </li>
                  <li>
                    <Link to="/Donations" className="flex w-[14vh] 2xl:w-[18vh] justify-center mx-3 rounded-full font-medium text-primary hover:underline hover:bg-blue-100 hover:text-secondary_text px-6 py-3 flex items-center transition duration-150 ease-in-out"> DONATIONS </Link>
                  </li>
                  <li>
                    <Link to="/InProgress" className="flex w-[18vh] 2xl:w-[18vh] justify-center mx-3 rounded-full font-medium text-primary hover:underline hover:bg-blue-100 hover:text-secondary_text px-6 py-3 flex items-center transition duration-150 ease-in-out"> IN PROGRESS </Link>
                  </li>
                </ul>
              </li>
              
            </ul>

          </nav>

          <div className="xl:hidden flex flex-cols w-full">

            <div className="flex items-center justify-left mx-0 lg:-mx-2">
              <Link to="/" className="block" aria-label="Logo">
                <img src={logo} alt='Logo' className='w-15 h-12 fill-current text-purple-900' />
              </Link>
              <span className='text-lx font-bold justify-center text-primary px-4'>Out of The <br/> Shadows </span>
            </div>

            <div className="ml-auto flex items-center">
              <div className={`menu ${mobileNavOpen ? 'active' : ''}`} id="mobile-nav" aria-expanded={mobileNavOpen}>
                {/* Contenido del menú */}
              </div>
              <button ref={trigger} className={`hamburger ml-auto ${mobileNavOpen ? 'active' : ''}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                <span className='text-primary'> Menu </span>
                <svg className="w-6 h-6 fill-current text-gray-300 hover:text-primary transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect y="4" width="24" height="2" rx="1" />
                  <rect y="11" width="24" height="2" rx="1" />
                  <rect y="18" width="24" height="2" rx="1" />
                </svg>
              </button>
            </div>


            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              
              <ul className="bg-white-100 opacity-95 px-4 py-2">
                <li>
                  <Link to="/" className="flex font-medium w-full text-secondary_text hover:text-secondary text-lg md:text-xl py-3 justify-center"> HOME </Link>
                </li>
                <li>
                  <Link to="/WeCare" className="flex font-medium w-full text-secondary_text hover:text-secondary text-lg md:text-xl py-3 justify-center"> WE CARE</Link>
                </li>
                <li>
                  <Link to="/AboutUs" className="flex font-medium w-full text-secondary_text hover:text-secondary text-lg md:text-xl py-3 justify-center"> ABOUT US </Link>
                </li>
                <li>
                  <Link to="/Resources" className="flex font-medium w-full text-secondary_text hover:text-secondary text-lg md:text-xl py-3 justify-center"> RESOURCES </Link>
                </li>
                <li>
                  <Link to="/Donations" className="flex font-medium w-full text-secondary_text hover:text-secondary text-lg md:text-xl py-3 justify-center"> DONATIONS </Link>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>

      <div className='w-fill h-0.5 bg-primary'/>

    </header>
  );
}



export default Header;
