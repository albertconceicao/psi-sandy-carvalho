import { ModalityItemContainer } from './styles';

interface ModalityItemProps {
  iconName: string;
  text: string;
}

export function ModalityItem({ iconName, text }: ModalityItemProps) {
  return (
    <ModalityItemContainer>
      <img src={`./${iconName}.svg`} alt={text} />
      <p>{text}</p>
    </ModalityItemContainer>
  );
}
