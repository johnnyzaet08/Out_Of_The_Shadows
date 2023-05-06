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
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Banner from './components/Banner';
//import SignIn from './pages/SignIn';
//import SignUp from './pages/SignUp';
//import ResetPassword from './pages/ResetPassword';

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
        <Route exact path="/page2" element={<Page2 />} />
        <Route exact path="/page3" element={<Page3 />} />
        <Route exact path="/page4" element={<Page4 />} />
        <Route exact path="/page5" element={<Page5 />} />
        <Route exact path="/page6" element={<Page6 />} />
        
        {/*<Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />*/}
      </Routes>
      <Banner />
    </>
  );
}

export default App;
