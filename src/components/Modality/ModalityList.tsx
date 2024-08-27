import { ModalityItem } from './ModalityItem';
import { ModalityContainer, ModalityContent } from './styles';

export function ModalityList() {
  return (
    <ModalityContainer>
      <ModalityContent>
        <ModalityItem
          iconName="icon-1"
          text="Tenha um aparelho com boa conexão à internet;"
        />
        <ModalityItem
          iconName="icon-2"
          text="Procure sempre estar em um ambiente privado, onde você se sinta confortável para falar sobre o que precisar e sem interrupções;"
        />
        <ModalityItem
          iconName="icon-3"
          text="Recomendo também que, se possível, utilize fones de ouvido, e não fotografe ou faça gravações de áudio ou vídeo durante as sessões para que o sigilo durante o atendimento seja preservado;"
        />
        <ModalityItem
          iconName="icon-4"
          text="Tudo certo, dessa forma estamos prontos para o nosso atendimento."
        />
      </ModalityContent>
      <img src="./line.svg" alt="Linha indicadora dos ícones" />
    </ModalityContainer>
  );
}
