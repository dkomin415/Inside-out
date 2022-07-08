import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  NavbarLinkExtended,
  Number,
  Logo,
  MenuHamburger,
  NavStripeBlack,
  NavStripeOrange,
} from "../../styles/Navbar.style";
import LogoImg from "../../assets/In&OutLogo.png";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={LogoImg}></Logo>
          <Number>415-800-9999</Number>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/projects">Projects</NavbarLink>
            <NavbarLink to="/services">Services</NavbarLink>
            <NavbarLink to="/contact">Contact</NavbarLink>
            <MenuHamburger
              onClick = {() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#8801;</> : <> &#8801;</>}
            </MenuHamburger>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
            <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
            <NavbarLinkExtended to="/projects">Projects</NavbarLinkExtended>
            <NavbarLinkExtended to="/services">Services</NavbarLinkExtended>
            <NavbarLinkExtended to="/contact">Contact</NavbarLinkExtended>
      </NavbarExtendedContainer>
      )}
{/* the stripe used for design */}
<NavStripeBlack></NavStripeBlack>
<NavStripeOrange>
</NavStripeOrange>
<NavStripeBlack></NavStripeBlack>
    </NavbarContainer>
  );
}

export default Navbar;