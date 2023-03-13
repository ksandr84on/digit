import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import About from '../components/About'
import TeamNew from '../components/TeamNew'



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
      <Team />
      {/* <InfoSection {...homeObjTwo} /> */}
      <TeamNew />
     
      <Services />
    
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
