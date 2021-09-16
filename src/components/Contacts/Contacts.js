import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import './ContactPage.scss';

export default function Contacts() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
