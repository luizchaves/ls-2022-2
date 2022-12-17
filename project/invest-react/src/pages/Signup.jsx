import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Alert, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { useUserAuth } from '../contexts/UserAuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signUp(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Row className="p-4 justify-content-center">
      <Col lg="6">
        <h2 className="mb-3">Cadastro</h2>
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
              Cadastro
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default Signup;
