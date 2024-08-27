import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.greenBackground};
`;

export const Content = styled.div`
  /* padding: 6.25rem 0; */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LeftContent = styled.div``;

export const RightContent = styled.div`
  max-width: 600px;
`;

export const Text = styled.p``;

export const Image = styled.img`
  min-height: 24.25rem;
  width: 22.5rem;
  background: #fff;
  border: 1px solid orange;
`;
