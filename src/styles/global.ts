import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    font: 500 16px Inter, sans-serif;
    scroll-behavior: smooth;
    transition: scroll 1.5s ease-in-out;
    ;
    a {
      text-decoration: none;
    }
  }
  button  {
    border-radius: 20px;
    font-size: 1rem;
    font-weight: 700;
    padding: 1.5rem;
    font-family: Inter, sans-serif;
    background: #8F4F3F;
    padding: 16px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  h1 {
    color: ${props => props.theme.infoTitle};
    font-size: 2rem;
    font-weight: 400;
  }
  h2 {
    font-size: 1.8125rem;
    font-weight: 400;
    color: ${props => props.theme.subTitle};
  }
  h3 {
    color: ${props => props.theme.lowTitle};
    font-size: 1.4rem;
    font-weight: 700;
    border-bottom: 2px solid ${props => props.theme.lowTitleBorder};
    max-width: 12.5rem;
    padding-bottom: 0.5rem
  }
  .container {
    padding: 40px 111px 40px;
    max-width: 1440px;
    margin: 0 auto;

    @media (max-width: 1200px) {
        padding: 80px 60px 102px;
    }
    @media (max-width: 992px) {
        padding: 80px 40px 102px;
    }
    @media (max-width: 768px) {
        padding: 72px 26px 59px 26px;
    }
  }

`;
