import { useEffect } from 'react';
import { Button, Modal, Row } from 'react-bootstrap';

import InvestCard from '../components/InvestCard';
import InvestDrawer from '../components/InvestDrawer';
import { useInvestiment } from '../contexts/InvestimentContext';
import api from '../services/api';

function Investiments() {
  const {
    showModal,
    setShowModal,
    setShowOffcanvas,
    investiments,
    removedInvestiment,
    setInvestiments,
    loadInvestiments,
  } = useInvestiment();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowOffcanvas = () => {
    setShowOffcanvas(true);
  };

  const handleRemoveInvestiment = () => {
    const newInvestiments = investiments.filter(
      (investiment) => investiment.id !== removedInvestiment.id
    );

    setInvestiments(newInvestiments);

    setShowModal(false);

    api.delete(`/investiments/${removedInvestiment.id}`);
  };

  useEffect(() => {
    loadInvestiments();
  }, []);

  return (
    <>
      <h1 className="text-center my-5">
        Investimentos
        <Button
          variant="dark"
          className="fw-bold float-end rounded-circle"
          onClick={handleShowOffcanvas}
        >
          +
        </Button>
      </h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {investiments.map((investiment) => (
          <InvestCard key={investiment.id} {...investiment} />
        ))}
      </Row>
      <InvestDrawer />
      <Modal show={showModal} onHide={handleCloseModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Remover Investimento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deseja remover o investimento {removedInvestiment.name}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleRemoveInvestiment}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Investiments;
