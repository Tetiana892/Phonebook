import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContactThunk } from '../../redux/contacts/contacts-requests';
import { getContacts } from '../../redux/contacts/contacts-selectors';

import {
  FormContainer,
  InputContainer,
  LabelInput,
  Input,
  Button,
} from './ContactForm.styled';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const changeName = e => setName(e.target.value);
  const changeNumber = e => setNumber(e.target.value);

  const handlerSubmit = e => {
    e.preventDefault();

    const newContact = {
      name,
      number,
    };

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? Notify.warning(`${name} : ${number} is already in contacts`)
      : dispatch(addContactThunk(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer onSubmit={handlerSubmit}>
      <InputContainer>
        <LabelInput>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={changeName}
            placeholder="Enter name"
            autoComplete="off"
          />
        </LabelInput>

        <LabelInput>
          Number
          <Input
            type="tel"
            name="number"
            phonePattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={changeNumber}
            placeholder="Enter phone number"
            autoComplete="off"
          />
        </LabelInput>
      </InputContainer>

      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
}
