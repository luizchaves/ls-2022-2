import { useRef, useState } from 'react';
import { Button, Form, Offcanvas } from 'react-bootstrap';
import { useInvestiment } from '../contexts/InvestimentContext';

const investimentTypes = ['LCA', 'LCI', 'CDB', 'CRI', 'CRA', 'Tesouro Direto'];

const investimentCategories = ['Pré', 'Pós', 'IPCA'];

const emptyInvestiment = {
  name: '',
  type: investimentTypes[0],
  category: investimentCategories[0],
  interest: '',
  start: '',
  end: '',
  value: 0,
};

function InvestDrawer() {
  const { showOffcanvas, setShowOffcanvas, createInvestiment } =
    useInvestiment();

  const [investiment, setInvestiment] = useState(emptyInvestiment);

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    createInvestiment(investiment);

    setInvestiment(emptyInvestiment);

    setShowOffcanvas(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    const result = name === 'value' ? Number(value) : value;

    setInvestiment({ ...investiment, [name]: result });
  };

  return (
    <Offcanvas
      show={showOffcanvas}
      onHide={handleCloseOffcanvas}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cadastrar Investimento</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <Form.Group className="mb-3" id="name">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              name="name"
              onChange={handleChange}
              value={investiment.name}
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
          <Form.Group className="mb-3" id="interest">
            <Form.Label>Rentabilidade</Form.Label>
            <Form.Control
              name="interest"
              pattern="([a-zA-Z\+\s]+)?(\d+(,\d{1,2})?%)(\s\w+)?"
              placeholder="100% CDI ou IPCA + 6% ou 12%"
              onChange={handleChange}
              value={investiment.interest}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Entrada</Form.Label>
            <Form.Control
              type="date"
              id="start"
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
              value={investiment.value === 0 ? ' ' : investiment.value}
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

export default InvestDrawer;
