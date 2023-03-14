import React from 'react';
import { ButtonT } from '../ButtonElements';
import img from '../../images/svg-6.svg';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';
import { useTranslation } from 'react-i18next';
import { YMaps, Map } from "react-yandex-maps";

const Contacts2 = () => {
  
  const { t } = useTranslation();
  const id = 'contacts';
  const lightBg= false;
  const lightText= true;
  const topLine= t('contacts2.tittle');
  const headline= t('contacts2.tittle2');
  const description= t('contacts2.tel');
  const description2= t('contacts2.mail');
  const description3= t('contacts2.address');
  const description4= t('contacts2.time');
  const buttonLabel= t('contacts2.button');
  const buttonLabel2= t('contacts2.button2');
  const imgStart= false;
  const alt= '';
  const dark= true;
  const primary= true;
  const darkText= false;
 
  
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <Subtitle darkText={darkText}>{description2}</Subtitle>
              <Subtitle darkText={darkText}>{description3}</Subtitle>
              <Subtitle darkText={darkText}>{description4}</Subtitle>
              <BtnWrap>
                <ButtonT href="tel:+74996497707"
                // smooth={true}
                // duration={500}
                // spy={true}
                offset={-80}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                dark2={0}
                >{buttonLabel}</ButtonT>&nbsp;&nbsp;&nbsp;&nbsp;
                    <ButtonT href="mail:info@digitcompany.ru"
                // smooth={true}
                // duration={500}
                // spy={true}
                offset={-80}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                dark2={0}
                >{buttonLabel2}</ButtonT>
              </BtnWrap>
            </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
               
            <YMaps>
 
   
 <Map defaultState={{ center: [55.741576, 37.425584], zoom: 17 }} width="100%" height="450px"/>

</YMaps>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Contacts2;
