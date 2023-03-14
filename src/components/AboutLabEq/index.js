import React from 'react';
import { Button } from '../ButtonElements';
import img from '../../images/about.svg';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';
import { useTranslation } from 'react-i18next';

const AboutLabEq = () => {
  
  const { t } = useTranslation();
  const id = 'about';
  const lightBg= false;
  const lightText= true;
  const topLine= t('aboutlab.tittle');
  const headline= t('aboutlab.tittle2');
  const description= t('aboutlab.main');
  const buttonLabel= t('aboutlab.button');
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
              <BtnWrap>
                <Button to="whyus"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                dark2={0}
                >{buttonLabel}</Button>
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

export default AboutLabEq;
