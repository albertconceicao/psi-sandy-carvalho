import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div``;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Button = styled.button``;
