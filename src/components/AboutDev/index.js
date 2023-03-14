import React from 'react';
import { ButtonR } from '../ButtonElements';
import img from '../../images/aboutdev.svg';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';
import { useTranslation } from 'react-i18next';

const AboutDev = () => {
  
  const { t } = useTranslation();
  const id = 'about';
  const lightBg= false;
  const lightText= true;
  const topLine= t('aboutdev.tittle');
  const headline= t('aboutdev.tittle2');
  const description= t('aboutdev.main');
  const description2= t('aboutdev.main2');
  const buttonLabel= t('aboutdev.button');
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
              <BtnWrap>
                <ButtonR to="/contacts"
           
                offset={-80}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                dark2={0}
                >{buttonLabel}</ButtonR>
              </BtnWrap>
            </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default AboutDev;
