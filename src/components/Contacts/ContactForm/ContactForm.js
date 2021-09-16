import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperation, contactsSelector } from '../../../redux/contacts';
import { Button, Form, FormControl } from 'react-bootstrap';

export default function ContactForm() {
  const [contacts, setContacts] = useState({
    name: '',
    number: '',
  });
  const items = useSelector(contactsSelector.getItems);
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    text => dispatch(contactsOperation.addContact(text)),
    [dispatch],
  );

  const changeValue = e => {
    const { name, value } = e.target;

    setContacts(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitClick = e => {
    e.preventDefault();

    if (items.some(contact => contact.name === contacts.name)) {
      setContacts({
        name: '',
        number: '',
      });
      return alert(`${contacts.name} is already in contacts`);
    }

    onSubmit(contacts);
    setContacts({
      name: '',
      number: '',
    });
  };

  return (
    <Form onSubmit={onSubmitClick} className="book__form">
      <Form.Label className="label">
        Name
        <FormControl
          type="text"
          size="lg"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={contacts.name}
          onChange={changeValue}
        />
      </Form.Label>
      <br />
      <Form.Label className="label">
        Number
        <FormControl
          type="tel"
          size="lg"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={contacts.number}
          onChange={changeValue}
        />
      </Form.Label>
      <br />
      <Button variant="success" type="submit" aria-label="add contact">
        add contact
      </Button>
    </Form>
  );
}
