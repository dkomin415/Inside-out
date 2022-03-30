import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const MenuHamburger = styled.button`
width: 70px;
height: 50px;
background: none;
border: none;
color: black;
font-size: 45px;
cursor: pointer;

@media (min-width: 767px) {
  display: none;
}
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background: #fff;
  display: flex;
  flex-direction: column;

  @media (min-width: 767px) {
    height: 80px;
  }
`;

export const RightContainer = styled.div`
  flex: 80%;
  display: flex;
  align-items: center;
  padding-left: 40%;
  /* background-color: gold; */
`;

export const LeftContainer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: flex-end;
  padding-right: 2.5%;
  /* background-color: salmon; */
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 767px) {
    display: none;
  }
`;

export const NavbarLink = styled(Link)`
  color: #27251F;
  /* color: #FD5A1E; */
  font-size: large;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;
