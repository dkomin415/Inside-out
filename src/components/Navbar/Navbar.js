import React from 'react';
import { NavbarContainer, LeftContainer, RightContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLinkContainer, NavbarLink, Logo, MenuHamburger } from "../../styles/Navbar.style";
import LogoImg from "../../assets/In&OutLogo.png";


function Navbar() {
  return (
  <NavbarContainer>
    <NavbarInnerContainer>
    <LeftContainer>
      <Logo src={LogoImg}></Logo>
       </LeftContainer>
     <RightContainer>

      <NavbarLinkContainer>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/projects">Projects</NavbarLink>
        <NavbarLink to="/services">Services</NavbarLink>
        <NavbarLink to="/contact">Contact</NavbarLink>
        <MenuHamburger> &#8801;</MenuHamburger>

      </NavbarLinkContainer>
     </RightContainer>
    </NavbarInnerContainer>
    <NavbarExtendedContainer> </NavbarExtendedContainer>
     </NavbarContainer>
  );
}

export default Navbar;