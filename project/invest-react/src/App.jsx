import Investiment from './components/Investiment';

import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

const investiments = [
  {
    id: 1,
    name: 'Banco Inter',
    type: 'LCI',
    category: 'Pós',
    interest: '97% CDI',
    start: '2022-10-01',
    end: '2023-09-23',
    value: 100,
  },
  {
    id: 2,
    name: 'BTG Pactual',
    type: 'CDB',
    category: 'IPCA',
    interest: 'IPCA + 9,08%',
    start: '2022-10-01',
    end: '2023-09-28',
    value: 50,
  },
  {
    id: 3,
    name: 'Daycoval',
    type: 'LCA',
    category: 'Pré',
    interest: '12%',
    start: '2022-10-01',
    end: '2023-09-26',
    value: 50,
  },
  {
    name: 'Tesouro Selic',
    type: 'Tesouro Direto',
    category: 'Pós',
    interest: '100% SELIC',
    start: '2022-10-26',
    end: '2027-01-01',
    value: 300,
    id: 4,
  },
  {
    name: 'Tesouro IPCA',
    type: 'Tesouro Direto',
    category: 'IPCA',
    interest: 'IPCA + 5,62%',
    start: '2022-11-09',
    end: '2026-01-01',
    value: '500',
    id: 5,
  },
];

function App() {
  return (
    <div className="container">
      <h1 className="text-center my-5">Investimentos</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-md-3 g-4">
        {investiments.map((investiment) => (
          <Investiment
            key={investiment.id}
            // name={investiment.name}
            // type={investiment.type}
            // category={investiment.category}
            // interest={investiment.interest}
            // start={investiment.start}
            // end={investiment.end}
            // value={investiment.value}
            {...investiment}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
