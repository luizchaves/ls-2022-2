import { useState } from 'react';

function InvestDrawer({ investiments, setInvestiments }) {
  const investimentTypes = [
    'LCA',
    'LCI',
    'CDB',
    'CRI',
    'CRA',
    'Tesouro Direto',
  ];

  const investimentCategories = ['Pré', 'Pós', 'IPCA'];

  const emptyInvestiment = {
    name: '',
    type: investimentTypes[0],
    category: investimentCategories[0],
    interest: '',
    start: '',
    end: '',
    value: '',
  };

  const [investiment, setInvestiment] = useState(emptyInvestiment);

  const createInvestimentData = async (investiment) => {
    const url = 'http://localhost:3000/investiments';

    const config = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(investiment),
    };

    const res = await fetch(url, config);

    const newInvestiment = await res.json();

    return newInvestiment;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(investiment);

    const newInvestimento = await createInvestimentData(investiment);

    setInvestiments([...investiments, newInvestimento]);

    setInvestiment(emptyInvestiment);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInvestiment({ ...investiment, [name]: value });
  };

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">
          Cadastrar Investimento
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={handleChange}
              value={investiment.name}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              Tipo
            </label>
            <select
              className="form-control"
              id="type"
              name="type"
              onChange={handleChange}
              value={investiment.type}
              required
            >
              {investimentTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Categoria
            </label>
            <select
              className="form-control"
              id="category"
              name="category"
              onChange={handleChange}
              value={investiment.category}
              required
            >
              {investimentCategories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="interest" className="form-label">
              Rentabilidade
            </label>
            <input
              type="text"
              className="form-control"
              id="interest"
              name="interest"
              pattern="([a-zA-Z\+\s]+)?(\d+(,\d{1,2})?%)(\s\w+)?"
              placeholder="100% CDI ou IPCA + 6% ou 12%"
              onChange={handleChange}
              value={investiment.interest}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="start" className="form-label">
              Entrada
            </label>
            <input
              type="date"
              className="form-control"
              id="start"
              name="start"
              onChange={handleChange}
              value={investiment.start}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="end" className="form-label">
              Resgate
            </label>
            <input
              type="date"
              className="form-control"
              id="end"
              name="end"
              onChange={handleChange}
              value={investiment.end}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="value" className="form-label">
              Valor
            </label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              id="value"
              name="value"
              onChange={handleChange}
              value={investiment.value}
              required
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-dark">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InvestDrawer;
