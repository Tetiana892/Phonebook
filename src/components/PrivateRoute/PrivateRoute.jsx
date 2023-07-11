import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/autorization/autorization-selector';
import {
  Container,
  Link,
  Text,
  Title,
} from '../../page/HomePage/HomePage.styled';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      {!isLoggedIn && (
        <Container>
          <Title>Welcome to the contact book</Title>
          <Text>
            To access your contacts <br />
            please<Link to="/login">log in</Link>
          </Text>
        </Container>
      )}

      {isLoggedIn && children}
    </>
  );
}
