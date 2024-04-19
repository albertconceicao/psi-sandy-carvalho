import { Form } from '../Form';
import {
  Button,
  ButtonsContainer,
  Container,
  Content,
  LeftContent,
  RightContent
} from './styles';

export function Contact() {
  return (
    <Container id="contato">
      <Content>
        <LeftContent>
          <h3>contato</h3>
          <h2>Entrar em contato</h2>
        </LeftContent>
        <RightContent>
          <ButtonsContainer>
            <Button>Entrar em contato</Button>
            <Button>Escrever depoimento</Button>
          </ButtonsContainer>
          <Form />
        </RightContent>
      </Content>
    </Container>
  );
}
