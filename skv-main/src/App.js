import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WOW from 'wowjs';


//Pages
import HomeDefault from "./pages/HomeDefault";
import AboutOne from "./pages/AboutOne";
import ServicesPage from "./pages/ServicesPage";
import GeneralContracting from './pages/GeneralContracting';
import MetrialManagment from './pages/MetrialManagment';
import BuildingRenovation from './pages/BuildingRenovation';
import ArchitectureDesign from './pages/ArchitectureDesign';
import MultistoryBuild from './pages/MultistoryBuild';
import PortfolioDetails from './pages/PortfolioDetails';
import TeamPage from './pages/TeamPage';
import TeamDetails from './pages/TeamDetails';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import Error from "./pages/Error";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import FloatingContact from './components/floatingContact/FloatingContact';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import ProjectPage from './pages/ProjectPage';

function App() {
  useEffect(() => {
    new WOW.WOW({
        live: false
      }).init();
    }, []
  );
  return (
    <Router>
          <ScrollToTop/>
        <Routes>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<HomeDefault />} />
            <Route path={`${process.env.PUBLIC_URL}/about`} element={<AboutOne />} />
            <Route path={`${process.env.PUBLIC_URL}/services`} element={<ServicesPage />} />
            <Route path={`${process.env.PUBLIC_URL}/projects`} element={<ProjectPage />} />
            <Route path={`${process.env.PUBLIC_URL}/testimonials`} element={<TestimonialsPage />} />
            <Route path={`${process.env.PUBLIC_URL}/contact`} element={<ContactPage />} />
            <Route path={`${process.env.PUBLIC_URL}/*`} element={<Error />} />
        </Routes>
        <FloatingContact/>
    </Router>
  );
}

export default App;