import AuthorizationMenu from '../../components/AutorizationMenu/AutorizationMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/autorization/autorization-selector';
import { Container, Nav, MenuLink } from './Menu.styled';
import UserMenu from '../../components/UserMenu/UserMenu';

export default function Menu() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container>
      <Nav>
        <MenuLink to="/">Home page</MenuLink>
        {isLoggedIn && <MenuLink to="contacts">Contacts</MenuLink>}
      </Nav>

      {isLoggedIn ? <UserMenu /> : <AuthorizationMenu />}
    </Container>
  );
}
