import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import AboutDev from '../components/AboutDev';

const Dev = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();


    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
  
  
  
    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <AboutDev />
      
        <Footer />
      </>
    );
}
export default Dev;