import Logo from '../../assets/logo.svg';
import { NavLink } from '../NavLink';
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
        <Logo />
        <Title>Psicoterapia Sistêmica</Title>
        <Text>
          Tome conhecimento do seu próprio padrão de funcionamento Tome
          conhecimento do seu próprio padrão de funcionamento Tome conhecimento
          do seu próprio padrão de funcionamento
        </Text>

        <ButtonsContainer>
          <Button>
            <NavLink url="#contato">Agende sua consulta</NavLink>
          </Button>
          <Button>
            <NavLink url="#servicos">Serviços</NavLink>
          </Button>
        </ButtonsContainer>
      </TextContent>
    </TextContainer>
  );
}
