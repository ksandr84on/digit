import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import AboutCons from '../components/AboutCons';

const Consulting = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();


    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
  
  
  
    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <AboutCons />
      
        <Footer />
      </>
    );
    
}
export default Consulting;