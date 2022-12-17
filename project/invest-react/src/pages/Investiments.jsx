import { Button, Modal, Row } from 'react-bootstrap';

import InvestCard from '../components/InvestCard';
import CreateInvestDrawer from '../components/CreateInvestDrawer';
import { useInvestiment } from '../contexts/InvestimentContext';
import { useEffect } from 'react';

function Investiments() {
  const {
    isShowRemoveInvestModal,
    toogleRemoveInvestModal,
    toogleCreateInvestDrawer,
    investiments,
    investimentToBeRemoved,
    removeInvestiment,
    loadInvestiments,
  } = useInvestiment();

  const handleRemoveInvestiment = () => {
    removeInvestiment(investimentToBeRemoved.id);

    toogleRemoveInvestModal();
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
          onClick={toogleCreateInvestDrawer}
        >
          +
        </Button>
      </h1>
      <Row xs={1} md={2} lg={3} xxl={4} className="g-4">
        {investiments.map((investiment) => (
          <InvestCard key={investiment.id} investiment={investiment} />
        ))}
      </Row>
      <CreateInvestDrawer />
      <Modal
        show={isShowRemoveInvestModal}
        onHide={toogleRemoveInvestModal}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Remover Investimento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deseja remover o investimento {investimentToBeRemoved.title}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toogleRemoveInvestModal}>
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
