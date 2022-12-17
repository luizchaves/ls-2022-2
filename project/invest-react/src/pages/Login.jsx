import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Alert, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import GoogleButton from 'react-google-button';

import { useUserAuth } from '../contexts/UserAuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    try {
      await logIn(email, password);

      navigate('/investiments');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate('/investiments');
    } catch (error) {
      setError(err.message);
    }
  };

  return (
    <Row className="p-4 justify-content-center">
      <Col lg="6">
        <h2 className="mb-3">Entrar</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div>
            <Button variant="primary" type="Submit">
              Entrar
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn m-auto"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </Col>
    </Row>
  );
};

export default Login;
