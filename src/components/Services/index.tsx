import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {
  A11y,
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from './Image';

export const Services = () => (
  <Swiper
    id="servicos"
    modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    autoplay={{ delay: 5000 }}
    pagination={{ clickable: true }}
    onSwiper={swiper => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    effect="coverflow"
  >
    <SwiperSlide>
      <Image
        src="./casal.jpg"
        description="O principal objetivo da terapia de casal é, promover um espaço seguro de diálogo em que o casal possa expressar opiniões sobre situações que estão interferindo no relacionamento. A partir do olhar sistêmico observo as interações do casal, suas habilidades, padrões de comportamento, crenças familiares, e como lidam com os problemas. Com base nessas observações são sugeridas algumas intervenções que visam possibilitar a resolução de conflitos, treino de habilidades do casal, autoconhecimento e abrir um espaço de comunicação assertiva e não violenta, buscando um alinhamento entre as expectativas do casal"
        title="Psicoterapia de Casal"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Image
        src="./individual.jpg"
        description="A psicoterapia é um processo de autoconhecimento, crescimento e desenvolvimento pessoal, possibilitando a criação de hábitos saudáveis, aumentando a auto confiança, aprendendo a impor limites  e desenvolvendo a inteligência emocional. Te ajuda a lidar com situações para além de transtornos mentais"
        title="Psicoterapia Individual "
      />
    </SwiperSlide>
    <SwiperSlide>
      <Image
        src="./palestra.jpg"
        description="As palestras possuem temas personalizados, de acordo com as necessidades da empresa ou instituição. Os temas como ansiedade, depressão e inteligência emocional, prevenção e promoção de cuidados relacionados à saúde mental, programas educacionais, culturais, desenvolvimento de habilidades, e qualidade de vida sãos os mais comuns.

        O principal objetivo das palestrar é gerar um impacto positivo no grupo, garantindo a conexão com temas de grande importância para a saúde mental."
        title="Palestra"
      />
    </SwiperSlide>
    {/* <SwiperSlide>
      <Image
        src="./casal.jpg"
        description="Description for slide 1"
        title="Slide 4"
      />
    </SwiperSlide> */}
  </Swiper>
);
