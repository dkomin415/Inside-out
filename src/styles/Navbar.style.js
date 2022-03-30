import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width:  100%;
  height: 80px;
  background: blue;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    height: 80px;
  }
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 50px;
  background-color: gold;
  `;

  export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
  background-color: salmon;
  `;

  export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;`;

  export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;