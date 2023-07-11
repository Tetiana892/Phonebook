import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../redux/contacts/contacts-requests';
import { Item, ItemContainer, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';

export default function ContactItem({ name, number, contactId }) {
  const dispatch = useDispatch();
  const infoDelete = { contactId, name };

  return (
    <Item>
      <ItemContainer>
        <span>{name}: </span>
        <span>{number}</span>

        <Button
          type="button"
          onClick={() => dispatch(deleteContactThunk(infoDelete))}
        >
          Delete
        </Button>
      </ItemContainer>
    </Item>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};
