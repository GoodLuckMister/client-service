import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { Button, Form, FormControl } from 'react-bootstrap';
import './LoginView.scss';

export default function LoginView() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const onLogin = data => dispatch(authOperations.logIn(data));

  const changeValue = e => {
    const { name, value } = e.target;

    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    onLogin(user);
    setUser({ email: '', password: '' });
  };

  return (
    <div>
      <h2>Sign in</h2>

      <Form onSubmit={handleSubmit} className="form__login" autoComplete="off">
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

        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}
