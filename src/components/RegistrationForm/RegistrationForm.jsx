import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register({
        name: username,
        email: email,
        password: password,
      })
    );
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="username"
          value={username}
          type="text"
          onChange={handleChange}
          required
        />
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          value={email}
          type="email"
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          value={password}
          type="password"
          onChange={handleChange}
          required
        />
        <button>Register</button>
      </form>
    </div>
  );
};
