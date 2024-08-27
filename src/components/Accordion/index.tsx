import { ReactNode, useState } from 'react';
import { Container, Content } from './styles';

interface AccordionProps {
  title: string;
  children: ReactNode;
}
export function Accordion({ children, title }: AccordionProps) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <Container>
      <Content>
        <button onClick={toggle} type="button">
          <p>
            {isShowing ? (
              <img src="./up-arrow.svg" alt="Fechar caixa" />
            ) : (
              <img src="./down-arrow.svg" alt="Abrir caixa" />
            )}
            <span>
              <strong> {title} </strong>
            </span>
            <span className="icon" />
          </p>
          <div
            style={{ display: isShowing ? 'block' : 'none', padding: '5px' }}
          >
            {children}
          </div>
        </button>
      </Content>
    </Container>
  );
}
