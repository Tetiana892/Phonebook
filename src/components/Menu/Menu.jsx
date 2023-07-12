import AuthorizationMenu from '../../components/AutorizationMenu/AutorizationMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/authorization/authorization-selector';

import UserMenu from '../../components/UserMenu/UserMenu';
import { Container, Nav, MenuLink } from './Menu.styled';

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
