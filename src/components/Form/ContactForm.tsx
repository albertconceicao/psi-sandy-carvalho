import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import theme from '../../styles/theme';
import { FormContainer, Input, Select, TextArea } from './styles';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [selectedTerapy, setSelectedTerapyBefore] = useState('');
  const [purpose, setPurpose] = useState('');
  const [message, setMessage] = useState('');
  const [period, setPeriod] = useState('');
  const [terapyBefore, setTerapyBefore] = useState('');
  const date = new Date();
  const actualDate = date.toLocaleDateString();
  const actualHour = date.toLocaleTimeString();

  const parsePhoneNumber = (phoneNumber: string) =>
    phoneNumber.replace(/[-() ]/g, '');

  // Usage example:
  // const formattedPhone = parsePhoneNumber(phone);
  const whatsAppText = `Olá, *${name}*. Obrigado por entrar em contato comigo. Estou entrando em contato para agendar a nossa primeira sessão de *${selectedService}* no período da *${selectedPeriod}* selecionado com o propósito de *${purpose}*. Me conta, qual dia é o melhor para você?`;
  const dataApi = {
    Nome: name,
    Número_Telefone: phone,
    Email: email,
    Serviço_Terapêutico_Selecionado: selectedService,
    Motivo_Da_Busca_Por_Terapia: purpose,
    Período: selectedPeriod,
    Ja_Fez_Terapia_Antes: selectedTerapy,
    Mensagem_Opcional: message,
    Data_E_Hora: `${actualDate} - ${actualHour}`,
    Link_Para_Contatar_Cliente_No_WhatsApp: `${`https://wa.me/55${parsePhoneNumber(
      phone
    )}?text=${encodeURI(whatsAppText)}`}`,
    _subject: 'Contato via Portfólio',
    _template: 'box'
  };

  const urlsApi = [
    'https://formsubmit.co/ajax/contato@albertconceicao.dev.br',
    'https://api.sheetmonkey.io/form/q8C9wwkXizVoZ2vGU3SUVv'
  ];

  const sendDataToAPIs = async (data: any, urls: any) => {
    const promises = urls.map(url => axios.post(url, data));
    await Promise.all(promises);
  };

  const handleSelectedService = ({ target }) => {
    setService(target.value);
    setSelectedService(target.options[target.selectedIndex].text);
    console.log(target.options[target.selectedIndex].text);
  };
  const handleSelectedPeriod = ({ target }) => {
    setPeriod(target.value);
    setSelectedPeriod(target.options[target.selectedIndex].text);
    console.log(target.options[target.selectedIndex].text);
  };
  const handleSelectedTerapyBefore = ({ target }) => {
    setTerapyBefore(target.value);
    setSelectedTerapyBefore(target.options[target.selectedIndex].text);
    console.log(target.options[target.selectedIndex].text);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!name || !email.includes('@') || !purpose) {
      console.log('Preencha os dados');
      toast('Preencha todos os campos para enviar sua mensagem', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    sendDataToAPIs(dataApi, urlsApi)
      .then(response => {
        console.log(response);
        setName('');
        setEmail('');
        setPhone('');
        setService('');
        setMessage('');
        setPurpose('');
        toast('Email enviado com sucesso', {
          style: {
            background: theme.secondary,
            color: '#fff'
          }
        });
        return response;
      })
      .catch(error => {
        console.log(error);
        toast(
          'Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!',
          {
            style: {
              background: theme.error,
              color: '#fff'
            }
          }
        );
        return error;
      });
    // await axios
    //   .post('https://formsubmit.co/ajax/developer.albert@outlook.com', {
    //     Nome: name,
    //     Email: email,
    //     Mensagem: message,
    //     _subject: 'Contato via portfólio',
    //     _template: 'box'
    //   })
    //   .then(response => {
    //     setName('');
    //     setEmail('');
    //     setMessage('');
    //     toast('Email enviado com sucesso', {
    //       style: {
    //         background: theme.secondary,
    //         color: '#fff'
    //       }
    //     });
    //     return response;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     toast(
    //       'Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!',
    //       {
    //         style: {
    //           background: theme.error,
    //           color: '#fff'
    //         }
    //       }
    //     );
    //     return error;
    //   });
  };

  return (
    <FormContainer
      data-aos="fade-up"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <Input
        placeholder="Nome completo"
        type="text"
        onChange={({ target }) => setName(target.value)}
        name="nome"
        value={name}
      />
      <Input
        placeholder="Número de telefone (preferência WhatsApp)"
        type="text"
        onChange={({ target }) => setPhone(target.value)}
        name="phone"
        value={phone}
      />
      <Input
        placeholder="Email"
        type="email"
        onChange={({ target }) => setEmail(target.value)}
        value={email}
        name="email"
        required
      />
      <Select
        onChange={handleSelectedService}
        value={service}
        name="service"
        required
      >
        <option defaultValue="value">Selecione um serviço</option>
        <option value="psicoterapia-individual">
          Psicoterapia individual para adolescentes
        </option>
        <option value="psicoterapia-adultos">
          Psicoterapia individual para adultos
        </option>
        <option value="psicoterapia-casais">
          Psicoterapia individual para casais
        </option>
        <option value="psicoterapia-familias">
          Psicoterapia individual para famílias
        </option>
        <option value="palestras">Palestra</option>
      </Select>
      <TextArea
        placeholder="Escreva aqui o motivo da busca a Psicoterapia"
        onChange={({ target }) => setPurpose(target.value)}
        value={purpose}
        name="mensagem"
      />
      <Select
        onChange={handleSelectedPeriod}
        value={period}
        name="period"
        required
      >
        <option defaultValue="value">Qual período prefere?</option>
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </Select>
      <Select
        onChange={handleSelectedTerapyBefore}
        value={terapyBefore}
        name="terapy-before"
        required
      >
        <option defaultValue="value">Já fez terapia antes?</option>
        <option value="yes">Sim</option>
        <option value="no">Não</option>
      </Select>
      <TextArea
        placeholder="Escreva aqui a sua mensagem desejada."
        onChange={({ target }) => setMessage(target.value)}
        value={message}
        name="mensagem"
      />
      <button type="submit">ENVIAR</button>
    </FormContainer>
  );
}
