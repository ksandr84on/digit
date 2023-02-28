import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, LogoIcon1, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, } from './FooterElements';
import LogoTop from '../../images/logo.svg';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to='about' smooth={true} duration={500} spy={true} exact='true'>Who We Are</FooterLink>
                <FooterLink to='team' smooth={true} duration={500} spy={true} exact='true'>Our Team</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Our Process</FooterLinkTitle>
                <FooterLink to='our process' smooth={true} duration={500} spy={true} exact='true'>How We Work</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Our Services</FooterLinkTitle>
                <FooterLink to='services' smooth={true} duration={500} spy={true} exact='true'>What We Do</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink>
                  <a href='mailto:blavbla'>blabla.com</a>
                </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            {/* <SocialLogo to='/' onClick={toggleHome}>
              Digit Company
            </SocialLogo> */}
            <LogoIcon1 src={LogoTop} onClick={toggleHome}>
           
            </LogoIcon1>
            <WebsiteRights>Digit LLC {new Date().getFullYear()} &copy; All rights reserved</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
