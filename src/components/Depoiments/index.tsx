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
          <Button>Back</Button>
          <DepoimentsBox>
            {DepoimentsMock.map(depoiment => (
              <Depoiment
                title={depoiment.title}
                date={depoiment.date}
                text={depoiment.text}
              />
            ))}
          </DepoimentsBox>
          <Button>Previous</Button>
        </DepoimentsContainer>
        <Button>Escrever depoimento</Button>
      </Content>
    </Container>
  );
}
