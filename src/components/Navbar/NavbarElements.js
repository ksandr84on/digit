import styled from 'styled-components';
import { NavLink as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  z-index: 1;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const LogoIcon = styled.img`
  width: 160px;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 10px
  margin-top: 10px;;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 850px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 10px;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 50px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #06C2B9;
  }

  &.active {
    border-bottom: 3px solid #06C2B9;
  }
`;

export const NavLinksR = styled(LinkR)`
  
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #06C2B9;
  }

  &.active {
    border-bottom: 3px solid #06C2B9;
  }
`;

export const NavLinksLogo = styled(LinkR)`
  
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 1rem;
  height: 100%;
  cursor: pointer;

`;

export const Lang = styled.nav`
 
align-items: center;
display: flex;

margin-top: 0.5rem;
padding: 1rem 1rem;

  cursor: pointer;

`;

export const Lang1 = styled.nav`

  cursor: pointer;

  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }

`;


export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #06C2B9;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`

export const DropDown = styled.div`
height: 50px;
position: relative;
display: inline-block;
&:hover {
    display: block;
    >div{
        display:block;
    }
}
`

export const DropDownContent = styled.div`
background: #1c2237;
display: none;
position: absolute;
min-width: 270px;
padding: 22px 16px;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 2);
z-index: 1;
`
