import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/autorization/autorization-requests';
import {
  Container,
  Form,
  Label,
  LableText,
  LableInfo,
  Input,
  FormButton,
} from '../RegistrationPage/RegistrationPage.styled';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          <LableText>Enter your email address</LableText>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autocomplete="off"
            required
          />
        </Label>
        <Label>
          <LableText>
            Enter your password
            <LableInfo>
              (minimum 7 characters, you entered {password.length})
            </LableInfo>
          </LableText>
          <Input
            type="password"
            name="password"
            value={password}
            autoComplete="off"
            required
            pattern="(?=.*\d).{7,}"
            onChange={handleChange}
            title="The password must contain at least 7 characters, numbers or lowercase letters of the English alphabet"
          />
        </Label>
        <FormButton type="submit">Log in</FormButton>
      </Form>
    </Container>
  );
}
