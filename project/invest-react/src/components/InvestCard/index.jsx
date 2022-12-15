import { Card, Col, Row } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { useInvestiment } from '../../contexts/InvestimentContext';
import { formatCurrency, formatDate } from '../../services/format';

import './style.css';

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
        <Card.Header className="d-flex justify-content-between align-items-center">
          {title}
          <FaTrashAlt className="icon" onClick={handleRemoveClick} />
        </Card.Header>
        <Card.Body>
          <Row xs={2}>
            <Col>Tipo:</Col>
            <Col>{type}</Col>

            <Col>Categoria:</Col>
            <Col>{category}</Col>

            <Col>Taxa:</Col>
            <Col>{interestRate}</Col>

            <Col>Entrada:</Col>
            <Col>{formatDate(start.seconds * 1000)}</Col>

            <Col>Resgate:</Col>
            <Col>{formatDate(end.seconds * 1000)}</Col>

            <Col>Valor:</Col>
            <Col>{formatCurrency(value)}</Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default InvestCard;
