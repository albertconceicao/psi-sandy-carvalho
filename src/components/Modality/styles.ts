import styled from 'styled-components';

export const Container = styled.div``;

export const LeftContent = styled.div``;

export const ModalityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  img:last-child {
    min-height: 438px;
    margin-top: 20px;
  }
`;

export const ModalityContent = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3.3rem;
`;

export const ModalityItemContainer = styled.div`
  max-width: 34.4375rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 0.875rem;
`;
