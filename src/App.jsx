import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainView from "./pages/Main";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/style.css';
import './assets/css/open-iconic-bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/aos.css';
import './assets/css/ionicons.min.css';
import './assets/css/flaticon.css';
import './assets/css/icomoon.css';

function App() {
  React.useEffect(() => {
    const scripts = [
      '/assets/js/jquery.min.js',
      '/assets/js/jquery.easing.1.3.js',
      '/assets/js/jquery.waypoints.min.js',
      '/assets/js/jquery.stellar.min.js',
      '/assets/js/owl.carousel.min.js',
      '/assets/js/jquery.magnific-popup.min.js',
      '/assets/js/aos.js',
      '/assets/js/jquery.animateNumber.min.js',
      '/assets/js/scrollax.min.js',
      '/assets/js/main.js',
    ];
    scripts.forEach((scriptSrc) => {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
      
      script.onload = () => console.log(`${scriptSrc} loaded successfully`);
      script.onerror = (e) => console.error(`${scriptSrc} failed to load`, e);
    });

    // Cleanup scripts when component unmounts
    return () => {
      scripts.forEach((scriptSrc) => {
        const script = document.querySelector(`script[src="${scriptSrc}"]`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainView />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
