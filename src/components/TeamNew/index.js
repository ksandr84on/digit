import React from 'react';
import { Button } from '../ButtonElements';
import img from '../../images/was.svg';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './TeamNewElements';
import { useTranslation } from 'react-i18next';

const TeamNew = () => {
  
  const { t } = useTranslation();
  const id = 'process';
  const lightBg= true;
  const lightText= false;
  const topLine= t('teamnew.tittle');
  const headline= t('teamnew.tittle2');
  const description= t('teamnew.main');
  const buttonLabel= t('teamnew.button');
  const imgStart= true;
  const alt= '';
  const dark= false;
  const primary= true;
  const darkText= true;
 
  
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
                <Button to="services"
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

export default TeamNew;
