import { useState, useEffect } from 'react';

import InvestCard from './components/InvestCard';
import InvestDrawer from './components/InvestDrawer';
import Modal from './components/Modal';

import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [investiments, setInvestiments] = useState([]);

  const [removedInvestiment, setRemovedInvestiment] = useState({
    id: 0,
    name: '',
  });

  useEffect(() => {
    fetch('http://localhost:3000/investiments')
      .then((res) => res.json())
      .then((initialInvestiments) => setInvestiments(initialInvestiments));
  }, []);

  return (
    <>
      <div className="container mb-5">
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
            <InvestCard
              key={investiment.id}
              {...investiment}
              setRemovedInvestiment={setRemovedInvestiment}
            />
          ))}
        </div>
      </div>
      <InvestDrawer
        investiments={investiments}
        setInvestiments={setInvestiments}
      />
      <Modal
        title="Remover Investimento"
        investiments={investiments}
        setInvestiments={setInvestiments}
        removeInvestimentId={removedInvestiment.id}
      >
        Deseja remover o investimento {removedInvestiment.name}?
      </Modal>
    </>
  );
}

export default App;
