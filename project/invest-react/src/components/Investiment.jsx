function Investiment({ name, type, category, interest, start, end, value }) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">
          <span className="me-1">{name}</span>
          <span className="float-end badge bg-secondary">{type}</span>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">Categoria:</div>
            <div className="col-6 text-end">{category}</div>

            <div className="col-6">Rentabilidade:</div>
            <div className="col-6 text-end">{interest}</div>

            <div className="col-6">Entrada:</div>
            <div className="col-6 text-end">{start}</div>

            <div className="col-6">Resgate:</div>
            <div className="col-6 text-end">{end}</div>

            <div className="col-6">Valor:</div>
            <div className="col-6 text-end">{value}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investiment;
