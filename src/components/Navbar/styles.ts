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
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 1200px) {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    display: none;
  }
  button {
    box-shadow: unset;
  }
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const Nav = styled.div`
  /* width: 100%; */
  display: flex !important;
  gap: 30px;
  a {
    color: #fff !important;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const HamburgerMenu = styled.div`
  @media (max-width: 767px) {
    display: block;
  }
`;
