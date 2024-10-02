import { useState } from 'react';
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
  const [depoiment, setIsDepoiment] = useState(false);

  function handleWriteDepoiment() {
    setIsDepoiment(true);
  }
  function handleMakeContact() {
    setIsDepoiment(false);
  }
  return (
    <Container id="contato">
      <Content className="container">
        <LeftContent>
          {depoiment ? (
            <>
              <h3>depoimento</h3>
              <h2>Escreva seu depoimento</h2>
            </>
          ) : (
            <>
              <h3>contato</h3>
              <h2>Entre em contato</h2>
            </>
          )}
        </LeftContent>
        <RightContent>
          <ButtonsContainer>
            <Button onClick={handleMakeContact}>Entrar em contato</Button>
            <Button onClick={handleWriteDepoiment}>Escrever depoimento</Button>
          </ButtonsContainer>
          <Form isDepoiment={depoiment} />
        </RightContent>
      </Content>
    </Container>
  );
}
