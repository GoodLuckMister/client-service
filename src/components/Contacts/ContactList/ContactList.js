import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelector, contactsOperation } from '../../../redux/contacts';
import { Button, ListGroup } from 'react-bootstrap';

export default function ContactLis() {
  const filtered = useSelector(contactsSelector.changeFilterItems);

  const dispatch = useDispatch();

  const onFetchContact = useCallback(
    () => dispatch(contactsOperation.fetchContact()),
    [dispatch],
  );
  const onDeleteContact = id => dispatch(contactsOperation.deleteContact(id));

  useEffect(() => {
    onFetchContact();
  }, [onFetchContact]);

  return (
    <>
      {filtered.map(({ id, name, number }) => (
        <ListGroup key={id}>
          <ListGroup.Item className="list__item">
            <p className="list__title">
              {name}:{number}
            </p>

            <Button
              variant="danger"
              onClick={() => onDeleteContact(id)}
              type="button"
              aria-label="delete"
            >
              Delete
            </Button>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
}
