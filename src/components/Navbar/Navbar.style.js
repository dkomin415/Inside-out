import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled.img`
  margin: 10px;
  max-width: 80px;

  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => (props.extendNavbar ? "#EFD19F" : "#ffffff")};
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};

  @media (min-width: 767px) {
    height: 100px;
  }
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: space-evenly;
  `;

export const Number = styled.h2`
  display: flex;
  align-items: center;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  padding-left: 5%;
  align-items: center;
  justify-content: flex-end;
  `;  

  export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  `;
  
  export const NavbarLinkContainer = styled.div`
  display: flex;
  `;

export const NavbarLink = styled(Link)`
  color: #27251F;
  /* color: #FD5A1E; */
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 15px;
  
  @media (max-width: 767px) {
    display: none;
  }
  `;

export const NavbarLinkExtended = styled(Link)`
  color: #DE591F;
  font-size: x-large;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-decoration: none;
  margin: 20px;
  `;


  export const MenuHamburger = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  /* color: #27251F; */
  font-size: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  @media (min-width: 767px) {
    display: none;
  }
  `;

  export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 767px) {
      display: none;
    }
    `;

    export const NavStripeOrange = styled.div`
    width: 100%;
    height: 5px;
    background-color: #FD5A1E;
    display: flex;
    flex-direction: column;
`;

    export const NavStripeBlack = styled.div`
    width: 100%;
    height: 5px;
    background-color: #27251F;
    display: flex;
    flex-direction: column;

    @media (min-width: 767px) {
      display: none;
    }
    `;
