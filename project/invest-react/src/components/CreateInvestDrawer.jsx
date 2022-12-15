import { useState } from 'react';
import { Button, Form, Offcanvas } from 'react-bootstrap';

import { useInvestiment } from '../contexts/InvestimentContext';

const investimentTypes = ['LCA', 'LCI', 'CDB', 'CRI', 'CRA', 'Tesouro Direto'];

const investimentCategories = ['Pré', 'Pós', 'IPCA'];

const initialInvestiment = {
  title: '',
  type: investimentTypes[0],
  category: investimentCategories[0],
  interestRate: '',
  start: '',
  end: '',
  value: '',
};

function CreateInvestDrawer() {
  const {
    isShowCreateInvestDrawer,
    toogleCreateInvestDrawer,
    createInvestiment,
  } = useInvestiment();

  const [investiment, setInvestiment] = useState(initialInvestiment);

  const handleSubmit = async (event) => {
    event.preventDefault();

    createInvestiment(investiment);

    setInvestiment(initialInvestiment);

    toogleCreateInvestDrawer();
  };

  const handleChange = (event) => {
    let { name, value } = event.target;

    if (name === 'value') {
      value = Number(value);
    }

    setInvestiment({ ...investiment, [name]: value });
  };

  return (
    <Offcanvas
      show={isShowCreateInvestDrawer}
      onHide={toogleCreateInvestDrawer}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cadastrar Investimento</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <Form.Group className="mb-3" id="title">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              name="title"
              onChange={handleChange}
              value={investiment.title}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" id="type">
            <Form.Label>Tipo</Form.Label>
            <Form.Select
              name="type"
              onChange={handleChange}
              value={investiment.type}
              required
            >
              {investimentTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" id="category">
            <Form.Label>Categoria</Form.Label>
            <Form.Select
              name="category"
              onChange={handleChange}
              value={investiment.category}
              required
            >
              {investimentCategories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" id="interestRate">
            <Form.Label>Rentabilidade</Form.Label>
            <Form.Control
              name="interestRate"
              pattern="([a-zA-Z\+\s]+)?(\d+(,\d{1,2})?%)(\s\w+)?"
              placeholder="100% CDI ou IPCA + 6% ou 12%"
              onChange={handleChange}
              value={investiment.interestRate}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" id="start">
            <Form.Label>Entrada</Form.Label>
            <Form.Control
              type="date"
              name="start"
              onChange={handleChange}
              value={investiment.start}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" id="end">
            <Form.Label>Resgate</Form.Label>
            <Form.Control
              type="date"
              name="end"
              onChange={handleChange}
              value={investiment.end}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" id="value">
            <Form.Label>Valor</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              name="value"
              onChange={handleChange}
              value={String(investiment.value)}
              required
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Cadastrar
          </Button>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CreateInvestDrawer;
