import React, { useState } from 'react';
import Video from './video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, Lang2, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from 'react-i18next';

const HeroSection = ({changeLanguage, language}) => {
  const [hover, setHover] = useState(false)
  const { t } = useTranslation();

  const onHover = () => {
    setHover(!hover)
  }



  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>{t('hero.tittle1')}</HeroH1>
        <HeroP>
          {/* IT Systems Integration &<br /> Infrastructure Design Solutions */}
          {t('hero.tittle2')}
        </HeroP>
        <HeroBtnWrapper>
          <Button to='about'
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary='true'
          dark='true'
          smooth={true}
          duration={500}
          spy={true}
          exact="true">
            {t('main.learnmore')} {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
     
        <Lang2> <ReactFlagsSelect
    countries={["GB", "RU"]}
    customLabels={{ GB: "EN", RU: "RU"}}
    placeholder=""
    selected={language}
    onSelect={(code) => {
      changeLanguage(code)
    }}
  /> </Lang2>
      </HeroContent>

    </HeroContainer>
  )
}

export default HeroSection;
