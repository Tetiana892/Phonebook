import { Container, Link, Logo } from './AutorizationMenu.styled';
import iconLogo from '../images/iconsTelephone-64.png';

export default function AuthorizationMenu() {
  return (
    <>
      <Logo src={iconLogo} alt="Logo" width="40" />
      <Container>
        <Link to="/register">Registration</Link>
        <Link to="/login">Login in</Link>
      </Container>
    </>
  );
}
