import { Navbar } from '../Navbar';
import { HeaderText } from './HeaderText';
import { Container } from './styles';

export function Header() {
  return (
    <Container className="container">
      <Navbar />
      <HeaderText />
    </Container>
  );
}
