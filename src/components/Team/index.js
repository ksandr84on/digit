import React from 'react';
import Team1 from '../../images/reliability.jpg';
import Team2 from '../../images/punctuality.jpg';
import Team3 from '../../images/personalized.jpg';
import Team4 from '../../images/flexibility.jpg';
import Team5 from '../../images/support.jpg';
import Team6 from '../../images/team.jpg';
import { useTranslation } from 'react-i18next';

import { TeamContainer, TeamH1, TeamWrapper, TeamCard, TeamIcon, TeamH2, TeamP } from './TeamElements';

const Team = () => {
  const { t } = useTranslation();
  return (
    <TeamContainer id='whyus'>
      <TeamH1>{t('chooseus.tittle')}</TeamH1>
      <TeamWrapper>
        <TeamCard>
          <TeamIcon src={Team1} alt=''/>
          <TeamH2>{t('chooseus.reliability')}</TeamH2>
          {/* <TeamH2>Founder & CEO</TeamH2> */}
          <TeamP>{t('chooseus.reliability2')}</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={Team2} alt=''/>
          <TeamH2>{t('chooseus.punctuality')}</TeamH2>
          {/* <TeamH2><br/></TeamH2> */}
          <TeamP>{t('chooseus.punctuality2')}</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={Team3} alt=''/>
          <TeamH2>{t('chooseus.service')}</TeamH2>
          {/* <TeamH2>Founder & CEO</TeamH2> */}
          <TeamP>{t('chooseus.service2')}</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={Team4} alt=''/>
          <TeamH2>{t('chooseus.flex')}</TeamH2>
          {/* <TeamH2>Founder & CEO</TeamH2> */}
          <TeamP>{t('chooseus.flex2')}</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={Team5} alt=''/>
          <TeamH2>{t('chooseus.support')}</TeamH2>
          {/* <TeamH2>Founder & CEO</TeamH2> */}
          <TeamP>{t('chooseus.support2')}</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={Team6} alt=''/>
          <TeamH2>{t('chooseus.team')}</TeamH2>
          {/* <TeamH2>Founder & CEO</TeamH2> */}
          <TeamP>{t('chooseus.team2')}</TeamP>
        </TeamCard>
   
      </TeamWrapper>
    </TeamContainer>
  )
}

export default Team;
