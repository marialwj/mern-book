import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Utilize the LOGIN_USER mutation with useMutation hook
  // const [login, { loading, error }] = useMutation(LOGIN_USER, {
  //   onCompleted: (data) => {
  //     Auth.login(data.login.token); 
  //   },
  //   onError: (error) => {
  //     console.error(error);
  //     setShowAlert(true); 
  //   },
  // });

  const [login, {loading,error}] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(true); 
      return; 
    }
    console.log(userFormData);
    setValidated(true); 
    setShowAlert(false); 
    const {data} = await login({ variables: { ...userFormData } });
    console.log(data);
    console.log(data.login.token);
    Auth.login(data.login.token);
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {showAlert && (
          <Alert dismissible onClose={() => setShowAlert(false)} variant="danger">
            Something went wrong with your login credentials
            {error && <p>{error.message}</p>} 
          </Alert>
        )}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email" // Ensure input type is email for appropriate validation
            placeholder="Your email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password) || loading}
          type="submit"
          variant="success"
        >
          {loading ? 'Logging in...' : 'Submit'}
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
