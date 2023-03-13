import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';



const ContactPage = () => {
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
      <InfoSection {...homeObjTwo} />
      <Services /> */}
      {/* <Team /> */}
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default ContactPage;
