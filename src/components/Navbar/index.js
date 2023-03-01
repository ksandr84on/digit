import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, Lang1, Lang, MobileIcon, NavMenu, NavItem, NavLinks, LogoIcon } from './NavbarElements';
import LogoTop from '../../images/logo.svg';
import { useTranslation } from 'react-i18next';
import i18n from  'i18next';
import ReactFlagsSelect from "react-flags-select";


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [selected, setSelected] = useState("GB");

  const { t } = useTranslation();


  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            {/* <NavLogo to="/" onClick={toggleHome}>Digit Company</NavLogo> */}
            <LogoIcon to="/" src={LogoTop} onClick={toggleHome} alt='IT consulting'/>
          
           <Lang1> <ReactFlagsSelect
    countries={["GB", "RU"]}
    customLabels={{ GB: " ", RU: " "}}
    placeholder=""
    selected={selected}
    onSelect={(code) => {
      setSelected(code)
      i18n.changeLanguage(code)
    }}
  /> </Lang1>
          
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{t('nav_about.text')}</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="process" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Our Process</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="team" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Our Team</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact Us</NavLinks>
              </NavItem>
              <Lang>
  <ReactFlagsSelect
    countries={["GB", "RU"]}
    customLabels={{ GB: "English", RU: "Russian"}}
    placeholder="Language"
    selected={selected}
    onSelect={(code) => {
      setSelected(code)
      i18n.changeLanguage(code)
    }}
  />
  </Lang>
            </NavMenu>

          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
