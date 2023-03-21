import React, { useState, useRef, useEffect } from 'react';
import "../css/header.css";
import { Link } from 'react-router-dom';


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
        document.querySelector(".header").classList.add("bg-gray-900");
      } else {
        document.querySelector(".header").classList.add("bg-transparent");
      }
      setPrevScrollPos(currentScrollPos);
    };
  }, [prevScrollPos]);

  return (
    <header className="header bg-gray-900 fixed top-0 left-0 w-full transition duration-300 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          <div className="shrink-0 mr-4">
            <Link to="/" className="block" aria-label="Logo">
              <svg className="w-8 h-8 fill-current text-purple-900" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M 10 20 L 25 2.5 L 32.5 0 L 30 7.5 L 12.5 22.5 C 15 25 15 27.5 17.5 25 C 17.5 27.5 20 30 17.5 30 A 3.55 3.55 90 0 1 15 32.5 A 12.5 12.5 90 0 0 10 25 Q 8.75 24.75 8.75 26.25 T 5 29.5 T 3 27.5 T 6.25 23.75 T 7.5 22.5 A 12.5 12.5 90 0 0 0 17.5 A 3.55 3.55 90 0 1 2.5 15 C 2.5 12.5 5 15 7.5 15 C 5 17.5 7.5 17.5 10 20 M 25 2.5 L 25 7.5 L 30 7.5 L 25.5 7 L 25 2.5" />
              </svg>
            </Link>
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Link to="/" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Home</Link>
              </li>
              <li>
                <Link to="/page2" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Page 2</Link>
              </li>
              <li>
                <Link to="/page3" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Page 3</Link>
              </li>
              <li>
                <Link to="/" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">Sign up</Link>
              </li>
            </ul>
          </nav>

          <div className="md:hidden">
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <Link to="/signin" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Sign in</Link>
                </li>
                <li>
                  <Link to="/signup" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Sign up</Link>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
}



export default Header;
