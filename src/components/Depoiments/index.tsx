import { Depoiment } from './Depoiment';
import { DepoimentsMock } from './Mock';
import {
  Button,
  Container,
  Content,
  DepoimentsBox,
  DepoimentsContainer,
  DepoimentsTitle
} from './styles';

export function Depoiments() {
  return (
    <Container>
      <Content>
        <DepoimentsTitle>depoimentos</DepoimentsTitle>

        <DepoimentsContainer>
          <Button>
            <img src="./left-arrow.svg" alt="Botão de voltar" />
          </Button>
          <DepoimentsBox>
            {DepoimentsMock.map(depoiment => (
              <Depoiment
                key={depoiment.title}
                title={depoiment.title}
                date={depoiment.date}
                text={depoiment.text}
              />
            ))}
          </DepoimentsBox>
          <Button>
            <img src="./right-arrow.svg" alt="Botão de avançar" />
          </Button>
        </DepoimentsContainer>
        <Button>Escrever depoimento</Button>
      </Content>
    </Container>
  );
}
