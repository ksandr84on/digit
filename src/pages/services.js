import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import Services from '../components/Services';

import Footer from '../components/Footer';




const ServicesPage = () => {
  const [isOpen, setIsOpen] = useState(false);



  const toggle = () => {
    setIsOpen(!isOpen);
  };




  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      {/* <HeroSection language={language} changeLanguage={changeLanguage} /> */}
      {/* <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} /> */}
      <Services />
      {/* <Team />
      <InfoSection {...homeObjThree} /> */}
      <Footer />
    </>
  );
};

export default ServicesPage;
