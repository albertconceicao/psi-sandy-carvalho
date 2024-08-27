import styled from 'styled-components';

export const Container = styled.div`
  background: url(./header-background.png) no-repeat center center;
  background-size: cover;
  min-height: 1000px;
  min-width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 600px;
  margin-top: 50px;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    max-width: 558px;
    svg {
      display: none;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background: #fff;
  border: 2px solid ${props => props.theme.buttonBorder};
  color: ${props => props.theme.buttonGreenText};
  min-width: 222px;
  font-size: 1.3rem;

  @media (max-width: 767px) {
    min-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.theme.heroLightText};
`;

export const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: ${props => props.theme.heroLightText};
  line-height: 2.5rem;
`;
