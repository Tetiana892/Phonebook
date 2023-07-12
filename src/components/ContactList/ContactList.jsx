// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from '../../redux/contacts/contacts-requests';
import {
  getContacts,
  getFilter,
} from '../../redux/contacts/contacts-selectors';
import ContactItem from '../../components/ContactItem/ContactItem';
import { List, Error } from './ContactList.styled';

export default function ContactList() {
  const data = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filterList = () => {
    const normalValue = filter.toLowerCase().trim();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalValue)
    );
  };

  const contactsList = filterList();

  return (
    <List>
      {contactsList.length > 0 ? (
        contactsList.map(({ id, name, number }) => {
          return (
            <ContactItem key={id} name={name} number={number} contactId={id} />
          );
        })
      ) : (
        <Error>
          <strong>Oops, nothing</strong>
        </Error>
      )}
    </List>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContact: PropTypes.func,
// };
