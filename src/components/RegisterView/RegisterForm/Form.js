import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../../redux/auth';
import { Button, Form, FormControl } from 'react-bootstrap';

export default function RegisterForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const onRegister = data => dispatch(authOperations.register(data));

  const changeValue = e => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    onRegister(user);
    setUser({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>

      <Form onSubmit={handleSubmit} className="form__login" autoComplete="off">
        <Form.Label className="form__login-label">
          Name
          <FormControl
            className="form__login-control"
            type="text"
            name="name"
            value={user.name}
            onChange={changeValue}
          />
        </Form.Label>

        <Form.Label className="form__login-label">
          Email
          <FormControl
            className="form__login-control"
            type="email"
            name="email"
            value={user.email}
            onChange={changeValue}
          />
        </Form.Label>

        <Form.Label className="form__login-label">
          Password
          <FormControl
            className="form__login-control"
            type="password"
            name="password"
            value={user.password}
            onChange={changeValue}
          />
        </Form.Label>

        <Button type="submit">Registration</Button>
      </Form>
    </div>
  );
}
