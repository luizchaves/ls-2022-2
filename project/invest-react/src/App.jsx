import { useState, useEffect } from 'react';

import InvestCard from './components/InvestCard';
import InvestDrawer from './components/InvestDrawer';

import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [investiments, setInvestiments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/investiments')
      .then((res) => res.json())
      .then((initialInvestiments) => setInvestiments(initialInvestiments));
  }, []);

  return (
    <>
      <div className="container">
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
      </div>
      <InvestDrawer
        investiments={investiments}
        setInvestiments={setInvestiments}
      />
    </>
  );
}

export default App;
