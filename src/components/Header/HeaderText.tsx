import {
  Button,
  ButtonsContainer,
  Text,
  TextContainer,
  TextContent,
  Title
} from './styles';

export function HeaderText() {
  return (
    <TextContainer>
      <TextContent>
        <Title>Psicoterapia Sistêmica</Title>
        <Text>
          Tome conhecimento do seu próprio padrão de funcionamento Tome
          conhecimento do seu próprio padrão de funcionamento Tome conhecimento
          do seu próprio padrão de funcionamento
        </Text>

        <ButtonsContainer>
          <Button>Agende sua consulta</Button>
          <Button>Serviços</Button>
        </ButtonsContainer>
      </TextContent>
    </TextContainer>
  );
}
