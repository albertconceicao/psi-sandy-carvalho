import {
  CloseTitle,
  Container,
  Content,
  Image,
  LeftContent,
  RightContent,
  SubTitle,
  Text,
  Title
} from './styles';

export function WhoAmI() {
  return (
    <Container id="sobre-mim">
      <Content>
        <LeftContent>
          <Title>sobre mim</Title>
          <SubTitle>Um pouco sobre mim</SubTitle>
          <Text>
            Eu sou a Sandy, me formei psicóloga pela Universidade Salvador.
            Tenho 26 anos. Minha atuação clínica é sempre orientada pela terapia
            familiar sistêmica.
          </Text>
          <Text>
            Ainda durante a formação, me dediquei à área de Recursos Humanos,
            atuando com recrutamento e seleção. Atualmente, dedico-me totalmente
            ao atendimento clínico individual para adolescentes, adultos, casais
            e famílias. Iniciei minha trajetória na clínica com atendimentos
            presenciais ainda na graduação com estágios em clinicas e na clinica
            escola da universidade, o que inesperadamente fez eu me apaixonar
            por me conectar com pessoas/ historias. Já a paixão pela sistêmica
            começou bem antes, ainda no 5 semestre com as aulas de uma de minhas
            professoras favoritas da universidade.
          </Text>
          <Text>
            Além da psicologia, ler livros de romance, maratonar series, ir ao
            cinema, visitar museus e viajar estão entre meus programas
            favoritos, sem duvidas as historias movem a minha vida, não importa
            em quais formatos elas estejam apresentadas.
          </Text>
          <Text>
            Quando me sinto esgotada encontro na natureza, no mar, na observação
            do céu, no artesanato e na costura a minha conexão comigo, com a
            minha história e meus antepassados e recarrego minhas energias
            novamente.
          </Text>
          <Text>
            Meu propósito é ajudar meus clientes a melhor lidar com seus medos,
            angustias, desafios da vida e buscando trazer mais qualidade de
            vida, e bem estar possibilitando a tomada de conhecimento do seu
            próprio padrão de funcionamento.
          </Text>
        </LeftContent>
        <RightContent>
          <Image src="./client-headshot.png" alt="Sandy Carvalho Foto" />
        </RightContent>
      </Content>
      <CloseTitle>Vamos Nessa Jornada Comigo?</CloseTitle>
    </Container>
  );
}
