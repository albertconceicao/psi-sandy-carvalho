import { useState } from 'react';
import { toast } from 'react-hot-toast';
import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

export function DepoimentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [depoiment, setDepoiment] = useState('');
  const date = new Date();
  const actualDate = date.toLocaleDateString();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!name || !email.includes('@') || !depoiment) {
      console.log('Preencha os dados');
      toast('Preencha todos os campos para enviar sua mensagem', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }
    console.log({
      json: {
        name,
        email,
        depoiment,
        date: actualDate
      }
    });
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
        placeholder="Email"
        type="email"
        onChange={({ target }) => setEmail(target.value)}
        value={email}
        name="email"
        required
      />
      <TextArea
        placeholder="Escreva aqui o seu Depoimento"
        onChange={({ target }) => setDepoiment(target.value)}
        value={depoiment}
        name="mensagem"
      />
      <button type="submit">ENVIAR</button>
    </FormContainer>
  );
}
