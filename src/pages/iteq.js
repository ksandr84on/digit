import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import AboutITEq from '../components/AboutITEq';

const ItEq = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();


    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
  
  
  
    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <AboutITEq />
      
        <Footer />
      </>
    );
}
export default ItEq;