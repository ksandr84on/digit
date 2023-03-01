import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';

import i18n from "../i18n";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language,setLanguage] = useState('GB')


  const toggle = () => {
    setIsOpen(!isOpen);
  };


  const changeLanguage = (e) => {
    setLanguage(e)
    i18n.changeLanguage(e)
    console.log(e);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} language={language} changeLanguage={changeLanguage}/>
      <HeroSection language={language} changeLanguage={changeLanguage} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <Team />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
