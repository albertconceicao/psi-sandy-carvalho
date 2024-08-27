import {
  Container,
  FooterInfo,
  FooterWarningsContainer,
  FooterWarningsContent
} from './styles';

export function Footer() {
  return (
    <Container>
      <FooterWarningsContent>
        <FooterWarningsContainer className="container">
          <strong>
            <i>Atenção</i>
          </strong>
          <p>
            Este site não oferece atendimento imediato a pessoas em crise
            suicida.{' '}
          </p>
          <p>
            Em caso de emergência,{' '}
            <strong>procure o hospital mais próximo</strong>. Havendo risco de
            morte,{' '}
            <strong>ligue imediatamente para o SAMU (telefone 192)</strong>.
          </p>
        </FooterWarningsContainer>
      </FooterWarningsContent>
      <FooterInfo>
        <p className="container">
          Psicóloga Sandy Carvalho &copy; - Todos os direitos reservados |
          Desenvolvido por Albert Conceição
        </p>
      </FooterInfo>
      {/* <FooterNavbar /> */}
    </Container>
  );
}
