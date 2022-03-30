import React from 'react';
import { NavbarContainer, LeftContainer, RightContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLinkContainer, NavbarLink } from "../../styles/Navbar.style";


function Navbar() {
  return (
  <NavbarContainer>
    <NavbarInnerContainer>
    <LeftContainer>
       </LeftContainer>
     <RightContainer>

      <NavbarLinkContainer>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/projects">Projects</NavbarLink>
        <NavbarLink to="/services">Services</NavbarLink>
        <NavbarLink to="/contact">Contact</NavbarLink>

      </NavbarLinkContainer>
     </RightContainer>
    </NavbarInnerContainer>
    <NavbarExtendedContainer> </NavbarExtendedContainer>
     </NavbarContainer>
  );
}

export default Navbar;