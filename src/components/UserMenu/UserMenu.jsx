import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/authorization/authorization-selector';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/authorization/authorization-requests';
import { Container, UserInfoTitle, Button } from './UserMenu.styled';
import { GiExitDoor } from 'react-icons/gi';
import Notiflix from 'notiflix';

export default function UserMenu() {
  const userName = useSelector(getUserName);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <UserInfoTitle>Hello {userName}</UserInfoTitle>
        <Button
          type="button"
          onClick={() => {
            dispatch(logOut());
            navigate('/');
            Notiflix.success(`Bye. Good day.`);
          }}
        >
          Log Out
          <GiExitDoor />
        </Button>
      </Container>
    </>
  );
}
