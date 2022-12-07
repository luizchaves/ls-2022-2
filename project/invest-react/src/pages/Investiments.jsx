import { useEffect } from 'react';

import InvestCard from '../components/InvestCard';
import InvestDrawer from '../components/InvestDrawer';
import Modal from '../components/Modal';
import { useInvestiment } from '../contexts/InvestimentContext';

function Investiments() {
  const { investiments, removedInvestiment, loadInvestiments } =
    useInvestiment();

  useEffect(() => {
    loadInvestiments();
  }, []);

  return (
    <>
      <h1 className="text-center my-5">
        Investimentos
        <button
          className="btn btn-dark fw-bold float-end rounded-circle"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          +
        </button>
      </h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-md-3 g-4">
        {investiments.map((investiment) => (
          <InvestCard key={investiment.id} {...investiment} />
        ))}
      </div>
      <InvestDrawer />
      <Modal title="Remover Investimento">
        Deseja remover o investimento {removedInvestiment.name}?
      </Modal>
    </>
  );
}

export default Investiments;
