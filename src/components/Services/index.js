import React from 'react';
import Icon1 from '../../images/svg-5.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon5 from '../../images/svg-7.svg';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon2} alt='IT consulting'/>
          <ServicesH2>IT Consulting</ServicesH2>
          <ServicesP>From designing and developing technology to implementing and managing systems or processes
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5} alt='network security'/>
          <ServicesH2>Equipment Supply</ServicesH2>
          <ServicesP>We partner with the world's leading technology manufacturers to bring you the best Equipment</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} alt='cloud solutions'/>
          <ServicesH2>Software development</ServicesH2>
          <ServicesP>Our experts specialize in custom software development for B2B and B2G markets</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;
