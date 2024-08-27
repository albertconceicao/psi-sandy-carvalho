import { Accordion } from '../Accordion';
import { FAQContent } from './styles';

export function FaqBox() {
  return (
    <>
      <FAQContent>
        <Accordion title="1. Quanto tempo dura uma sessão?">
          <p>
            Até 50 minutos para atendimentos individuais e até 1h30 para
            terapias de casal e família.
          </p>
        </Accordion>
        <Accordion title="2. Quando vou receber alta? ">
          <p>
            O objetivo da psicoterapia é tornar o cliente independente do
            terapeuta. O processo terapêutico não tem um tempo predeterminado, a
            duração é particular para cada cliente.
          </p>
        </Accordion>
        <Accordion title="3. Como funciona a primeira sessão? ">
          <p>
            O principal objetivo da primeira sessão é coletar informações do
            cliente, demandas, e motivo da busca pela terapia. As normas e
            regras, frequência, horários e política de faltas são apresentadas e
            fica aberto um espaço para tirar dúvidas, dando início ainda nesta
            sessão a aliança terapêutica.
          </p>
        </Accordion>
        <Accordion title="4. Como funciona o sigilo?">
          <p>
            Eu tenho o dever ético de resguardar todo o conteúdo trabalhado nas
            nossas sessões – até minhas anotações!
          </p>
        </Accordion>
        <Accordion title="5. Qual o valor da sessão?">
          <p>
            O Conselho Federal de Psicologia, estabeleceu regras para a
            divulgação do valor de terapia, que visam garantir a ética e a
            transparência nas práticas de psicólogos. Entre em contato comigo
            para consultar os valores.
          </p>
        </Accordion>
        <Accordion title="6. Aceito convênio?">
          <p>
            Realizo atendimentos apenas particulares. Mas forneço recibo para
            reembolso do convênio.
          </p>
        </Accordion>
        <Accordion title="7. Qual a frequência das sessões? ">
          <p>
            As sessões tem recorrência semanal. A decisão sobre o espaçamento ou
            aumento das sessões é geralmente tomada em conjunto entre o paciente
            e a psicóloga, baseado no desenvolvimento do processo terapêutico.
          </p>
        </Accordion>
        <Accordion title="8. Psicólogo ou psiquiatra ">
          <p>
            São complementares. O psiquiatra tem foco em sintomas físicos,
            enquanto a psicoterapia auxilia o cliente em aspectos emocionais.
          </p>
        </Accordion>
        <Accordion title="9. Como Saber Se Preciso De Psicoterapia?">
          <p>
            Desde o diagnóstico de transtornos mentais, sofrimento emocional
            intenso e/ou dificuldade de execultar tarefas rotineiras, até o
            autoconhecimento.
          </p>
          <ul>
            <li>
              Casos clínicos clássicos como ansiedade, depressão, síndrome do
              pânico;
            </li>
            <li>Desenvolvimento de habilidades sociais;</li>
            <li>Alterações bruscas de humor;</li>
            <li>Dificuldades em lidar com separação e/ou relacionamentos;</li>
            <li>Tomada de decisão;</li>
            <li>Medos (de animais, avião, pessoas e situações diversas);</li>
            <li>Superar a timidez;</li>
            <li>Ciúmes excessivo;</li>
            <li>
              Dificuldade em lidar com pessoas difíceis como chefes, pais,
              irmãos, colegas de trabalho ou escola;
            </li>
            <li>Pensamentos repetitivos e angustiantes;</li>
            <li>
              Distração excessiva a ponto de perder aulas, não encontrar seus
              objetos, perder compromissos.
            </li>
            <li>Baixa autoestima.</li>
          </ul>
        </Accordion>
        <Accordion title="10. Quais os benefícios da psicoterapia?">
          <ul>
            <li>
              Autoconhecimento dos seus limites pessoais, inseguranças, desejos
              e seus conflitos;
            </li>
            <li>
              Aprender a regular as emoções ao nomear e validar seus
              sentimentos;
            </li>
            <li>
              Aumento das habilidades sociais ao posicionar-se socialmente de
              maneira assertiva, sobre seus sentimentos;
            </li>
          </ul>
        </Accordion>
      </FAQContent>
    </>
  );
}
