import React from 'react';
import Icon1 from '../../images/svg-5.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon5 from '../../images/svg-7.svg';
import Icon7 from '../../images/svg-8.svg';
import Icon8 from '../../images/svg-4.svg';
import { useTranslation } from 'react-i18next';
import { ServicesContainer, ServicesH1, LinkR, ServicesWrapper, ServicesWrapper2, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
  const { t } = useTranslation();
  return (
    <ServicesContainer id='services'>
      <ServicesH1>{t('services.tittle')}</ServicesH1>
      <ServicesWrapper>
        <LinkR href="/it-equipment">
        <ServicesCard>
          <ServicesIcon src={Icon2} alt=''/>
          <ServicesH2>{t('services.it')}</ServicesH2>
          <ServicesP>{t('services.it2')}
          </ServicesP>
        </ServicesCard>
        </LinkR>
        <LinkR href="/labs-equipment">
        <ServicesCard>
          <ServicesIcon src={Icon7} alt=''/>
          <ServicesH2>{t('services.lab')}</ServicesH2>
          <ServicesP>{t('services.lab2')}
          </ServicesP>
        </ServicesCard>
        </LinkR>
        <LinkR href="/stage-equipment">
        <ServicesCard>
          <ServicesIcon src={Icon5} alt=''/>
          <ServicesH2>{t('services.stage')}</ServicesH2>
          <ServicesP>{t('services.stage2')}</ServicesP>
        </ServicesCard>
        </LinkR>
        </ServicesWrapper>
        <ServicesWrapper2>
        <LinkR href="/development">
        <ServicesCard>
          <ServicesIcon src={Icon1} alt=''/>
          <ServicesH2>{t('services.soft')}</ServicesH2>
          <ServicesP>{t('services.soft2')}</ServicesP>
        </ServicesCard>
        </LinkR>
        <LinkR href="/consulting">
        <ServicesCard>
          <ServicesIcon src={Icon8} alt=''/>
          <ServicesH2>{t('services.consult')}</ServicesH2>
          <ServicesP>{t('services.consult2')}
          </ServicesP>
        </ServicesCard>
        </LinkR>
      </ServicesWrapper2>
    </ServicesContainer>
  )
}

export default Services;
