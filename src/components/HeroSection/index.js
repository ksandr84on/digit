import React, { useState } from 'react';
import Video from './video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, Lang2, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import i18n from  'i18next';
import ReactFlagsSelect from "react-flags-select";

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  const [selected, setSelected] = useState("GB");

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Digit Technology Solutions</HeroH1>
        <HeroP>
          {/* IT Systems Integration &<br /> Infrastructure Design Solutions */}
          We collaborate with organizations to build innovative technology solutions that drive results
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
            Learn More {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
     
        <Lang2> <ReactFlagsSelect
    countries={["GB", "RU"]}
    customLabels={{ GB: "En", RU: "Ru"}}
    placeholder=""
    selected={selected}
    onSelect={(code) => {
      setSelected(code)
      i18n.changeLanguage(code)
    }}
  /> </Lang2>
      </HeroContent>

    </HeroContainer>
  )
}

export default HeroSection;
