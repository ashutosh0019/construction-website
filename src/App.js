import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./Home";
import Project from "./Project";
import Contact from "./Contact";
import About from "./Aboutus";
import Services from "./Services";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import CarouselBootstrap from './components/carousel/CarouselBootstrap';
import ParticleBackground from "./components/ParticleBackground";
import WorkingStyle from "./components/working-style/WorkingStyle";


const App = () => {

  return (
    <> 
    
    <ParticleBackground />  
    <Navbar/>
    <CarouselBootstrap/>
    <WorkingStyle />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Project" element={<Project/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Contact" element={<Contact/>} />
        
      </Routes>
      <Footer />
      
      
      
    </> 
    
  );
}

export default App;
