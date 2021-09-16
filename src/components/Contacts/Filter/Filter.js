import { useSelector, useDispatch } from 'react-redux';
import { contactsSelector, contactsAction } from '../../../redux/contacts';
import { FormControl, InputGroup } from 'react-bootstrap';

export default function Filter() {
  const value = useSelector(contactsSelector.getFilter);
  const dispatch = useDispatch();
  const onChange = ({ currentTarget: { value } }) =>
    dispatch(contactsAction.filterChanged(value));

  return (
    <InputGroup size="sm">
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-sm">
          Find contacts by name
        </InputGroup.Text>
      </InputGroup.Prepend>

      <FormControl
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={value}
        onChange={onChange}
      />
    </InputGroup>
  );
}
