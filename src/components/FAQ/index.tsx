import { FaqBox } from './FaqBox';
import { Container, Content, LeftContent, RightContent } from './styles';

export function Faq() {
  return (
    <Container>
      <Content>
        <LeftContent>
          <h1>Perguntas frequentes</h1>
        </LeftContent>
        <RightContent>
          <FaqBox />
        </RightContent>
      </Content>
    </Container>
  );
}
