import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, LogoIcon1, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, WebsiteRights, } from './FooterElements';
import LogoTop from '../../images/logo.svg';
import LogoTopRu from '../../images/logoru.svg';
import { useTranslation } from 'react-i18next';
import i18n from "../../i18n";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
            { (i18n.language==="RU") ? 
            (  <LogoIcon1 src={LogoTopRu} onClick={toggleHome}/>) : 
            (  <LogoIcon1 src={LogoTop} onClick={toggleHome}/>) 
            }
         
          
            </FooterLinkItems>
            <FooterLinkItems>

            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{t('footer.services')}</FooterLinkTitle>
                <FooterLink to='/it-equipment'>{t('footer.it')}</FooterLink>
                <FooterLink to='/labs-equipment'>{t('footer.lab')}</FooterLink>
                <FooterLink to='/stage-equipment'>{t('footer.stage')}</FooterLink>
              
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>{t('footer.services')}</FooterLinkTitle>
                <FooterLink to='/development'>{t('footer.soft')}</FooterLink>
                <FooterLink to='/consulting'>{t('footer.consult')}</FooterLink>
           
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>{t('footer.contact')}</FooterLinkTitle>
             
                <FooterLink to='/contacts'>{t('footer.contactlink')}</FooterLink>
               
            </FooterLinkItems>
            <FooterLinkItems>
            <WebsiteRights>Digit LLC {new Date().getFullYear()} </WebsiteRights>
            <WebsiteRights>&copy; All rights reserved</WebsiteRights>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
   
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
