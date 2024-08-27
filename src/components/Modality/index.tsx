import { ModalityList } from './ModalityList';
import { Container, LeftContent } from './styles';

export function Modality() {
  return (
    <Container>
      <LeftContent>
        <h1>Modalidade</h1>
        <h4>Atendimento online</h4>
        <ModalityList />
      </LeftContent>
    </Container>
  );
}
