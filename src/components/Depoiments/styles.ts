import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const DepoimentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const DepoimentsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const DepoimentBox = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
`;

export const DepoimentsTitle = styled.h3`
  text-align: center;
`;

export const DepoimentTitle = styled.h4`
  color: #8f4f3f;
  font-size: 1rem;
`;

export const DepoimentDate = styled.small`
  color: #d7b49a;
  font-size: 0.8rem;
`;

export const DepoimentText = styled.p`
  margin-top: 2.5rem;
  color: #000;
  font-size: 0.8rem;
`;

export const Button = styled.button``;
