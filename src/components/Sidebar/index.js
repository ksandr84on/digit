import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap} from './SidebarElements';
import { useTranslation } from 'react-i18next';
import ReactFlagsSelect from "react-flags-select";
import i18n from "../../i18n";

const Sidebar = ({ isOpen, toggle }) => {
  const { t } = useTranslation();

  const changeLanguage = (e) => {
 
    i18n.changeLanguage(e)
    console.log(e);
  }

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/">{t('nav.home')}</SidebarLink>
          <SidebarLink to="/services">{t('nav.services')} </SidebarLink>
          <SidebarLink to="/contacts">{t('nav.contacts')}</SidebarLink>

       
        <SideBtnWrap>
        <ReactFlagsSelect
                  countries={["GB", "RU"]}
                  customLabels={{ GB: "EN", RU: "RU"}}
                  placeholder=""
                  selected={i18n.language}
                  onSelect={(code) => {
                  changeLanguage(code)
                            }}/>
        </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
