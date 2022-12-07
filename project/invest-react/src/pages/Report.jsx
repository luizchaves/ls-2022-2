import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

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

function Chart({ data }) {
  return (
    <BarChart
      width={600}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip
        formatter={function (value, name) {
          return `${formatCurrency(value)}`;
        }}
      />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
}
function Report() {
  const [investiments, setInvestiments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/investiments')
      .then((res) => res.json())
      .then((initialInvestiments) => setInvestiments(initialInvestiments));
  }, []);

  return (
    <>
      <h1 className="text-center my-5">Extrato</h1>
      <div className="row">
        <div className="col-3 mb-3">
          <div className="card">
            <div className="card-header fw-bold">Total</div>
            <div className="card-body fs-3">{calcTotal(investiments)}</div>
          </div>
        </div>
        <div className="col-3 mb-3">
          <div className="card">
            <div className="card-header fw-bold">Investimentos</div>
            <div className="card-body fs-3">{investiments.length}</div>
          </div>
        </div>
        <div className="col-3 mb-3">
          <div className="card">
            <div className="card-header fw-bold">Categorias</div>
            <div className="card-body fs-3">
              {countCategories(investiments)}
            </div>
          </div>
        </div>
        <div className="col-3 mb-3">
          <div className="card">
            <div className="card-header fw-bold">Tipos</div>
            <div className="card-body fs-3">{countTypes(investiments)}</div>
          </div>
        </div>
        <div className="col-6 mb-3">
          <div className="card">
            <div className="card-header fw-bold">Categorias</div>
            <div className="card-body">
              <Chart data={calcSummary(investiments, 'category')} />
            </div>
          </div>
        </div>
        <div className="col-6 mb-3">
          <div className="card">
            <div className="card-header fw-bold">Tipos</div>
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
