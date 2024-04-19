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

    a {
      text-decoration: none;
    }
  }
  button  {
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 700;
    padding: 1.5rem;
    font-family: Inter, sans-serif;
  }
  .container {
    padding: 40px 111px 40px;

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
