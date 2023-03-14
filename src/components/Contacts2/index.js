import React from 'react';
import { ButtonR } from '../ButtonElements';
import img from '../../images/svg-6.svg';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';
import { useTranslation } from 'react-i18next';

const Contacts2 = () => {
  
  const { t } = useTranslation();
  const id = 'contacts';
  const lightBg= false;
  const lightText= true;
  const topLine= t('contacts2.tittle');
  const headline= t('contacts2.tittle2');
  const description= t('contacts2.main');
  const buttonLabel= t('contacts2.button');
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
                <ButtonR to="/contacts"
                // smooth={true}
                // duration={500}
                // spy={true}
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

export default Contacts2;
