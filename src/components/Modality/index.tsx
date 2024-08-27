import { ModalityList } from './ModalityList';
import { Container, LeftContent } from './styles';

export function Modality() {
  return (
    <Container id="modalidades">
      <LeftContent>
        <h1>Modalidade</h1>
        <h4>Sub Title</h4>
        <ModalityList />
      </LeftContent>
    </Container>
  );
}
