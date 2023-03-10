import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, Lang, MobileIcon, NavMenu, NavItem, NavLinks, LogoIcon,
          DropDown, NavLinksD, DropDownContent } from './NavbarElements';
import LogoTop from '../../images/logo.svg';
import LogoTopRu from '../../images/logoru.svg';
import { useTranslation } from 'react-i18next';
import {BiChevronDown} from 'react-icons/bi'


import ReactFlagsSelect from "react-flags-select";



const Navbar = ({ toggle, changeLanguage, language}) => {
  const [scrollNav, setScrollNav] = useState(false);

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
        
            { (language==="RU") ? 
            (  <LogoIcon to="/" src={LogoTopRu} onClick={toggleHome} alt='IT consulting'/>) : 
            (  <LogoIcon to="/" src={LogoTop} onClick={toggleHome} alt='IT consulting'/>) 
            }
       
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <NavMenu>
              <NavItem>
                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{t('nav.about')}</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="process" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{t('nav.process')}</NavLinks>
              </NavItem>
          
              <DropDown>
                      <NavLinks to ='services' smooth={true} duration={500} exact='true'>{t('nav.services')} <BiChevronDown /></NavLinks>
                      <DropDownContent>
                          <NavLinksD to ='sobrenosotros'>{t('nav.consulting')}</NavLinksD>
                          <NavLinksD to ='descubre'>{t('nav.equipment')}</NavLinksD>
                          <NavLinksD to ='contactenos'>{t('nav.development')}</NavLinksD>
                       </DropDownContent>
              </DropDown>
             
              <NavItem>
                <NavLinks to="team" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{t('nav.team')}</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{t('nav.contacts')}</NavLinks>
              </NavItem>
              <Lang>
                <ReactFlagsSelect
                  countries={["GB", "RU"]}
                  customLabels={{ GB: "EN", RU: "RU"}}
                  placeholder=""
                  selected={language}
                  onSelect={(code) => {
                  changeLanguage(code)
                            }}/>
              </Lang>
            </NavMenu>

          </NavbarContainer>
        </Nav>
      </IconContext.Provider>

    </>
  );
};

export default Navbar;
