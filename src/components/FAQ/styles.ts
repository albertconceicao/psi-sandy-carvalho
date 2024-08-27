import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const FAQContent = styled.div``;

export const LeftContent = styled.div`
  flex: 1;
`;

export const RightContent = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.backgroundWhite};
  border-radius: 12px;
`;
