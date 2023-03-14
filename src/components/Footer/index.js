import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, LogoIcon1, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, WebsiteRights, 
  SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements';
import LogoTop from '../../images/logo.svg';
import LogoTopRu from '../../images/logoru.svg';
import { useTranslation } from 'react-i18next';
import i18n from "../../i18n";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterWrap>
     
{/* 
        <SocialMedia> */}
					{/* <SocialMediaWrap> */}
          { (i18n.language==="RU") ? 
            (  <LogoIcon1 src={LogoTopRu} onClick={toggleHome}/>) : 
            (  <LogoIcon1 src={LogoTop} onClick={toggleHome}/>) 
            }
            
						<WebsiteRights>Digit, LLC © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
						{/* <SocialIcons>
							<SocialIconLink href="/" target="_blank" aria-label="Facebook">
								<FaFacebook/>
							</SocialIconLink>

							<SocialIconLink href="/" target="_blank" aria-label="Instagram">
								<FaInstagram/>
							</SocialIconLink>

							<SocialIconLink href="/" target="_blank" aria-label="You Tube">
								<FaYoutube/>
							</SocialIconLink>

							<SocialIconLink href="/" target="_blank" aria-label="Twitter">
								<FaTwitter/>
							</SocialIconLink>

							<SocialIconLink href="/" target="_blank" aria-label="Linkedin">
								<FaLinkedin/>
							</SocialIconLink>
						</SocialIcons> */}
					{/* </SocialMediaWrap> */}
				{/* </SocialMedia> */}
   
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
