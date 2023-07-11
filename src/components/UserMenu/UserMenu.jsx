import { useDispatch, useSelector } from 'react-redux';
import {
  getUserEmail,
  getUserName,
} from '../../redux/autorization/autorization-selector';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/autorization/autorization-requests';
import { Container, UserInfoTitle, Button } from './UserMenu.styled';

export default function UserMenu() {
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <UserInfoTitle>
          Hello {userName} | Email: {userEmail} |
        </UserInfoTitle>
        <Button
          type="button"
          onClick={() => {
            dispatch(logOut());
            navigate('/');
          }}
        >
          Log Out
        </Button>
      </Container>
    </>
  );
}
