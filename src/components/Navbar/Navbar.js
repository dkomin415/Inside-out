import React from 'react';
import { NavbarContainer, LeftContainer, RightContainer, NavbarExtendedContainer, NavbarInnerContainer } from "../../styles/Navbar.style";

function Navbar() {
  return (
  <NavbarContainer>
    <NavbarInnerContainer>
    <LeftContainer> </LeftContainer>
     <RightContainer></RightContainer>
    </NavbarInnerContainer>
    <NavbarExtendedContainer> </NavbarExtendedContainer>
     </NavbarContainer>
  );
}

export default Navbar;