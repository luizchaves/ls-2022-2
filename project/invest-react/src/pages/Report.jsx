import { useEffect } from 'react';
import Chart from '../components/Chart';
import { useInvestiment } from '../contexts/InvestimentContext';

import { formatCurrency } from '../services/format';

function calcTotal(investiments) {
  const total = investiments.reduce((sum, val) => sum + val.value, 0);

  return formatCurrency(total);
}

function countCategories(investiments) {
  const categories = investiments.map((investiment) => investiment.category);

  return new Set(categories).size;
}

function calcSummary(investiments, name) {
  const categories = investiments.reduce((acc, { category, type, value }) => {
    const keys = {
      type,
      category,
    };

    const key = keys[name];

    acc[key] = (acc[key] || 0) + value;

    return acc;
  }, {});

  const values = Object.entries(categories)
    .sort((a, b) => b[1] - a[1])
    .map(([category, value]) => ({
      name: category,
      value,
    }));

  return values;
}

function countTypes(investiments) {
  const types = investiments.map((investiment) => investiment.type);

  return new Set(types).size;
}

function Report() {
  const { investiments, loadInvestiments } = useInvestiment();

  useEffect(() => {
    loadInvestiments();
  }, []);

  return (
    <>
      <h1 className="text-center my-5">Extrato</h1>
      <div className="row">
        <div className="col-3 mb-3">
          <div className="card">
            <div className="card-header fw-bold">Valor Total</div>
            <div className="card-body fs-3">{calcTotal(investiments)}</div>
          </div>
        </div>
        <div className="col-3 mb-3">
          <div className="card">
            <div className="card-header fw-bold">Total de Investimentos</div>
            <div className="card-body fs-3">{investiments.length}</div>
          </div>
        </div>
        <div className="col-3 mb-3">
          <div className="card">
            <div className="card-header fw-bold">Total de Categorias</div>
            <div className="card-body fs-3">
              {countCategories(investiments)}
            </div>
          </div>
        </div>
        <div className="col-3 mb-3">
          <div className="card">
            <div className="card-header fw-bold">Total de Tipos</div>
            <div className="card-body fs-3">{countTypes(investiments)}</div>
          </div>
        </div>
        <div className="col-6 mb-3">
          <div className="card">
            <div className="card-header fw-bold">
              Investimentos por Categorias
            </div>
            <div className="card-body">
              <Chart data={calcSummary(investiments, 'category')} />
            </div>
          </div>
        </div>
        <div className="col-6 mb-3">
          <div className="card">
            <div className="card-header fw-bold">Investimentos por Tipos</div>
            <div className="card-body">
              <Chart data={calcSummary(investiments, 'type')} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Report;
