import {
  DepoimentBox,
  DepoimentDate,
  DepoimentText,
  DepoimentTitle
} from './styles';

interface DepoimentProps {
  title: string;
  date: string;
  text: string;
}

export function Depoiment({ title, date, text }: DepoimentProps) {
  return (
    <DepoimentBox>
      <DepoimentTitle>{title}</DepoimentTitle>
      <DepoimentDate>{date}</DepoimentDate>
      <DepoimentText>{text}</DepoimentText>
    </DepoimentBox>
  );
}
