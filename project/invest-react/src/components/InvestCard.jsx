import { Card, Col, Row } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { useInvestiment } from '../contexts/InvestimentContext';
import { formatCurrency, formatDate } from '../services/format';

function InvestCard({
  investiment: { id, title, type, category, interestRate, start, end, value },
}) {
  const { setInvestimentToBeRemoved, toogleRemoveInvestModal } =
    useInvestiment();

  const handleRemoveClick = () => {
    setInvestimentToBeRemoved({ id, title });

    toogleRemoveInvestModal();
  };

  return (
    <Col>
      <Card>
        <Card.Header>
          <span className="me-1">{title}</span>
          <span className="float-end badge bg-secondary">{type}</span>
        </Card.Header>
        <Card.Body>
          <Row xs={2}>
            <Col>Categoria:</Col>
            <Col className="text-end">{category}</Col>

            <Col>Rentabilidade:</Col>
            <Col className="text-end">{interestRate}</Col>

            <Col>Entrada:</Col>
            <Col className="text-end">{formatDate(start.seconds * 1000)}</Col>

            <Col>Resgate:</Col>
            <Col className="text-end">{formatDate(end.seconds * 1000)}</Col>

            <Col>Valor:</Col>
            <Col className="text-end">{formatCurrency(value)}</Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <FaTrashAlt className="float-end" onClick={handleRemoveClick} />
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default InvestCard;
