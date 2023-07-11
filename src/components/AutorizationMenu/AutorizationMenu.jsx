import { Container, Link } from './AutorizationMenu.styled';

export default function AuthorizationMenu() {
  return (
    <Container>
      <Link to="/register">Registration</Link>
      <Link to="/login">Login in</Link>
    </Container>
  );
}
