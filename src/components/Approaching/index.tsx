import { Title } from '../Header/styles';
import { SubTitle } from '../WhoAmI/styles';
import {
  Container,
  Content,
  Image,
  LeftContent,
  RightContent,
  Text
} from './styles';

export function Approaching() {
  return (
    <Container id="abordagem">
      <Content className="container">
        <LeftContent>
          <Image
            src="./mockup-method.jpg"
            alt="Ilustração de uma mulher sentada em uma cadeira com uma flor na mão"
          />
        </LeftContent>
        <RightContent>
          <Title>Abordagem</Title>
          <SubTitle>Terapia Relacional Sistêmica</SubTitle>

          <Text>
            A terapia Relacional Sistêmica parte do pressuposto de que o sujeito
            não pode ser compreendido sem, conhecer os sistemas e ambientes em
            que está inserido. Neste viés as sessões passeiam por seus
            relacionamentos amorosos, familiares e de amizade. Sendo essas
            relações exploradas conjuntamente nas sessões de psicoterapia,
            permitindo ao cliente identificar seu próprio padrão de
            funcionamento, a partir de reflexões pontuais, perguntas, atividade
            com objetivos predefinidos e outras propostas terapêuticas. A partir
            dessas técnicas o cliente passa a desenvolver novas habilidades,
            nomear e validar seus sentimentos e emoções, e por consequência
            passa a lidar de forma mais saudável com seus conflitos internos e
            externos.
          </Text>
          <Text>
            Neste viés as sessões passeiam por seus relacionamentos amorosos,
            familiares e de amizade. Sendo essas relações exploradas
            conjuntamente nas sessões de psicoterapia, permitindo ao cliente
            identificar seu próprio padrão de funcionamento, a partir de
            reflexões pontuais, perguntas, atividade com objetivos predefinidos
            e outras propostas terapêuticas.
          </Text>
          <Text>
            A partir dessas técnicas o cliente passa a desenvolver novas
            habilidades, nomear e validar seus sentimentos e emoções, e por
            consequência passa a lidar de forma mais saudável com seus conflitos
            internos e externos.
          </Text>
        </RightContent>
      </Content>
    </Container>
  );
}
