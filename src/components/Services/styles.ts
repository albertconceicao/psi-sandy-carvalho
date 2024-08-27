import styled from 'styled-components';

interface ImageContainerProps {
  imageUrl: string;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  background: url(${props => props.imageUrl}) no-repeat center center;
  background-size: cover;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0.7;
  text-shadow: 1px 1px 1px #000;
`;

export const Title = styled.h1`
  color: ${props => props.theme.textWhite};
  font-size: 2.5rem;
`;

export const TextImage = styled.p`
  color: ${props => props.theme.textWhite};
  font-size: 1.5rem;
`;
