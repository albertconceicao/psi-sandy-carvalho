import styled from 'styled-components';

export const WebContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1200px) {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.div`
  /* width: 100%; */
  display: flex;
  gap: 30px;
  a {
    color: #fff !important;
  }
  /* @media (max-width: 767px) {
    flex-direction: column;
  } */
`;

export const HamburgerMenu = styled.div`
  @media (max-width: 767px) {
    display: block;
  }
`;
