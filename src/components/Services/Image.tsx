import { ImageContainer, TextImage, Title } from './styles';

interface ImageProps {
  src: string;
  description: string;
  title: string;
}

export function Image({ src, description, title }: ImageProps) {
  return (
    <ImageContainer imageUrl={src} className="container">
      <Title>{title}</Title>
      <TextImage>{description}</TextImage>
    </ImageContainer>
  );
}
