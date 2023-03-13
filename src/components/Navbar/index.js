import React from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavLinksR, NavLinksLogo, NavbarContainer, Lang, MobileIcon, NavMenu, NavItem, LogoIcon,
          DropDown, DropDownContent } from './NavbarElements';
import LogoTop from '../../images/logo.svg';
import LogoTopRu from '../../images/logoru.svg';
import { useTranslation } from 'react-i18next';
import {BiChevronDown} from 'react-icons/bi'

import i18n from "../../i18n";
import ReactFlagsSelect from "react-flags-select";



const Navbar = ({ toggle }) => {



  const changeLanguage = (e) => {
   
    i18n.changeLanguage(e)
    console.log(e);
  }

  const { t } = useTranslation();

  const toggleHome = () => {
    scroll.scrollToTop();
  }



  return (
    <>
      <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav='false'>
          <NavbarContainer>
   <NavLinksLogo exact to="/">
            { (i18n.language==="RU") ? 
            (  <LogoIcon src={LogoTopRu} onClick={toggleHome}/>) : 
            (  <LogoIcon src={LogoTop} onClick={toggleHome}/>) 
            }
            </NavLinksLogo>
    
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <NavMenu>
         
              <NavItem>
                <NavLinksR exact to="/">{t('nav.home')}</NavLinksR>
              </NavItem>
             
          
              <DropDown>
                      <NavLinksR exact to="/services">{t('nav.services')} <BiChevronDown /></NavLinksR>
                      <DropDownContent>
                          <NavLinksR to ='/consulting'>{t('nav.consulting')}</NavLinksR>
                          <NavLinksR to ='/equipment'>{t('nav.equipment')}</NavLinksR>
                          <NavLinksR to ='/development'>{t('nav.development')}</NavLinksR>
                       </DropDownContent>
              </DropDown>
             
             
              <NavItem>
                <NavLinksR exact to="/contacts">{t('nav.contacts')}</NavLinksR>
              </NavItem>
              <Lang>
                <ReactFlagsSelect
                  countries={["GB", "RU"]}
                  customLabels={{ GB: "EN", RU: "RU"}}
                  placeholder=""
                  selected={i18n.language}
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
