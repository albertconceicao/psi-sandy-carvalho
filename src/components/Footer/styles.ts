import styled from 'styled-components';

export const Container = styled.div`
  /* Add your styles here */
`;
export const FooterWarningsContent = styled.div`
  /* Add your styles here */
  background: ${({ theme }) => theme.secondary};
`;

export const FooterWarningsContainer = styled.div``;

export const FooterInfo = styled.div`
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
