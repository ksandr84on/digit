import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';

import Services from '../components/Services';
import Team from '../components/Team';
import Footer from '../components/Footer';

import About from '../components/About';
import TeamNew from '../components/TeamNew';
import Contacts from '../components/Contacts';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);



  const toggle = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <HeroSection />
      <About />
      <TeamNew />
      <Team />
    
   
     
      <Services />
    
     <Contacts />
      <Footer />
    </>
  );
};

export default Home;
