import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Icon,
  useDisclosure
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../../assets/logo.svg';
import { NavLink } from '../NavLink';
import { MobileContainer, Nav, WebContainer } from './styles';

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = useRef();

  // const isDrawerHeader = useBreakpointValue({ base: 'sm', lg: 'md' });

  return (
    <>
      <MobileContainer>
        <Logo />
        <Button onClick={onOpen}>
          <Icon as={GiHamburgerMenu} />
        </Button>
        <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody>
              <Nav>
                <NavLink url="#sobre-mim">Sobre Mim</NavLink>
                <NavLink url="#abordagem">Abordagem</NavLink>
                <NavLink url="#modalidades">Modalidade</NavLink>
                <NavLink url="#servicos">Serviços</NavLink>
                <NavLink url="#duvidas">Dúvidas Frequentes</NavLink>
                <NavLink url="#contato">Contato</NavLink>
              </Nav>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </MobileContainer>

      <WebContainer>
        <Logo />
        <Nav>
          <NavLink url="#sobre-mim">Sobre Mim</NavLink>
          <NavLink url="#abordagem">Abordagem</NavLink>
          <NavLink url="#modalidades">Modalidade</NavLink>
          <NavLink url="#servicos">Serviços</NavLink>
          <NavLink url="#duvidas">Dúvidas Frequentes</NavLink>
          <NavLink url="#contato">Contato</NavLink>
        </Nav>
      </WebContainer>
    </>
  );
}
