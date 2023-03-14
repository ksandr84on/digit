import React, { useState } from 'react';
import Video from './video3.mp4';

import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';


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
         <VideoBg autoPlay loop muted playsInline src={Video} type='video/mp4' />
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

      </HeroContent>

    </HeroContainer>
  )
}

export default HeroSection;
