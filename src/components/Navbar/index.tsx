import { slide as Menu } from 'react-burger-menu';
import Logo from '../../assets/logo.svg';
import { NavLink } from '../NavLink';
import { MobileContainer, Nav, WebContainer } from './styles';

export function Navbar() {
  return (
    <>
      <MobileContainer>
        <Menu bubble>
          <Nav>
            <NavLink url="#sobre-mim">Sobre Mim</NavLink>
            <NavLink url="#abordagem">Abordagem</NavLink>
            <NavLink url="#modalidades">Modalidade</NavLink>
            <NavLink url="#servicos">Serviços</NavLink>
            <NavLink url="#duvidas">Dúvidas Frequentes</NavLink>
            <NavLink url="#contato">Contato</NavLink>
          </Nav>
        </Menu>
      </MobileContainer>

      <WebContainer className="container">
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
