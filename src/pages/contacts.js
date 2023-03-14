import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';



import Footer from '../components/Footer';
import Contacts2 from '../components/Contacts2';



const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);



  const toggle = () => {
    setIsOpen(!isOpen);
  };




  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
  
      <Contacts2 />
      <Footer />
    </>
  );
};

export default ContactPage;
