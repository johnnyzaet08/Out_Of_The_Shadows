import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import WeCare from './pages/WeCare';
import AboutUs from './pages/AboutUs';
import Resources from './pages/Resources';
import Donations from './pages/Donations';
import InProgress from './pages/InProgress';
import DonationBanner from './components/DonationBanner';
import TimerBanner from './components/TimerBanner';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/WeCare" element={<WeCare />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/Resources" element={<Resources />} />
        <Route exact path="/Donations" element={<Donations />} />
        <Route exact path="/InProgress" element={<InProgress />} />
      </Routes>
      <DonationBanner />
    </>
  );
}

export default App;
