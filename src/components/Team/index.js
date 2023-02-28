import React from 'react';
import Team1 from '../../images/team-1.jpg';
import Team2 from '../../images/team-2.jpg';
import Team3 from '../../images/team-3.jpg';

import { TeamContainer, TeamH1, TeamWrapper, TeamCard, TeamIcon, TeamH2, TeamP } from './TeamElements';

const Team = () => {
  return (
    <TeamContainer id='team'>
      <TeamH1>Our Team</TeamH1>
      <TeamWrapper>
        <TeamCard>
          {/* <TeamIcon src={Team1} alt='IT consulting'/>
          <TeamH2>Gloria Karlinchak</TeamH2>
          <TeamH2>Founder & CEO</TeamH2>
          <TeamP>Gloria founded GloTech after spending more than 30 years working
          for the federal government accumulating experience in software engineering
          and cloud security.</TeamP> */}
        </TeamCard>
        <TeamCard>
          {/* <TeamIcon src={Team2} alt='cloud solutions'/>
          <TeamH2>Dan Billings</TeamH2>
          <TeamH2>CFO</TeamH2>
          <TeamP>Dan  is an energetic and enthusiastic business leader with strengths
          in disciplined financial execution, strategic planning, technology innovation
          and product delivery.</TeamP> */}
        </TeamCard>
        <TeamCard>
          {/* <TeamIcon src={Team3} alt='network security'/>
          <TeamH2>Fabiana Oliveira</TeamH2>
          <TeamH2>Senior Software Engineer</TeamH2>
          <TeamP>Fabiana joined GloTech with over 12 years of professional experience
          in technical management, technical strategy and full stack software engineering
          from a variety of industries.</TeamP> */}
        </TeamCard>
      </TeamWrapper>
    </TeamContainer>
  )
}

export default Team;
