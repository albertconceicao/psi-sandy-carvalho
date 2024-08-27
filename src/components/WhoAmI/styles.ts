import styled from 'styled-components';

export const Container = styled.div`
  padding: 6.25rem 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LeftContent = styled.div`
  max-width: 603px;
`;

export const RightContent = styled.div`
  align-self: flex-end;
  @media (max-width: 991px) {
    align-self: flex-start;
  }
`;

export const Title = styled.h3``;

export const SubTitle = styled.h2``;

export const Text = styled.p`
  margin: 20px 0;
  font-weight: 400;
  font-size: 1rem;
`;

export const CloseTitle = styled.h1``;

export const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
  max-height: 500px;
`;
