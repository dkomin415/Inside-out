import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background: blue;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 80px;
  }
`;

export const RightContainer = styled.div`
  flex: 80%;
  display: flex;
  align-items: center;
  padding-left: 50px;
  /* background-color: gold; */
`;

export const LeftContainer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
  background-color: salmon;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;
