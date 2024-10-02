import { ContactForm } from './ContactForm';
import { DepoimentForm } from './DepoimentForm';

interface FormProps {
  isDepoiment: boolean;
}

export function Form({ isDepoiment }: FormProps) {
  return <>{isDepoiment ? <DepoimentForm /> : <ContactForm />}</>;
}
