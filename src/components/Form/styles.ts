import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  margin: 4rem 0;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  > button {
    border: none;
    padding: 1rem 2.5rem;
    color: #fff;
    font-weight: 300;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.primary};
    transition: 0.5s;
    width: fit-content;

    &:disabled {
      opacity: 0.5;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => darken(0.05, theme.primary)};
    }
  }
  @media (max-width: 700px) {
    margin-top: 5rem;
    grid-template-columns: 1fr;
  }
  @media (max-width: 450px) {
    > button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export const Input = styled.input`
  min-height: 3rem;
  width: 100%;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.faqTextColor};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;

  &:focus {
    border-color: ${({ theme }) => theme.faqTextColor};
  }

  &::placeholder {
    color: ${({ theme }) => theme.faqTextColor};
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;

export const Select = styled.select`
  min-height: 3rem;
  width: 100%;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.faqTextColor};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;

  option {
    color: ${({ theme }) => theme.faqTextColor};
  }
  &:focus {
    border-color: ${({ theme }) => theme.faqTextColor};
  }

  &::placeholder {
    color: ${({ theme }) => theme.faqTextColor};
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;

export const TextArea = styled.textarea`
  height: 10rem;
  width: 100%;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.faqTextColor};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  resize: none;

  grid-column: 1/3; //Faz o input ocupar a linha inteira de 3 linhas, ele vai da 1 até a 3

  &:focus {
    border-color: ${({ theme }) => theme.faqTextColor};
  }

  &::placeholder {
    color: ${({ theme }) => theme.faqTextColor};
  }

  @media (max-width: 700px) {
    grid-column: 1;
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;
