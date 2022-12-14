import { Card, Col, Row } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { useInvestiment } from '../contexts/InvestimentContext';
import { formatCurrency, formatDate } from '../services/format';

function InvestCard({ id, name, type, category, interest, start, end, value }) {
  const { setRemovedInvestiment, setShowModal } = useInvestiment();

  const handleRemoveClick = () => {
    setRemovedInvestiment({ id, name });

    setShowModal(true);
  };

  return (
    <Col>
      <Card>
        <Card.Header>
          <span className="me-1">{name}</span>
          <span className="float-end badge bg-secondary">{type}</span>
        </Card.Header>
        <Card.Body>
          <Row xs={2}>
            <Col>Categoria:</Col>
            <Col className="text-end">{category}</Col>

            <Col>Rentabilidade:</Col>
            <Col className="text-end">{interest}</Col>

            <Col>Entrada:</Col>
            <Col className="text-end">{formatDate(start)}</Col>

            <Col>Resgate:</Col>
            <Col className="text-end">{formatDate(end)}</Col>

            <Col>Valor:</Col>
            <Col className="text-end">{formatCurrency(value)}</Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <FaTrashAlt
            className="float-end"
            data-bs-toggle="modal"
            data-bs-target="#removeModal"
            onClick={handleRemoveClick}
          />
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default InvestCard;
