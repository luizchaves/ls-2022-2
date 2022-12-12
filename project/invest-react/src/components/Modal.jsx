import { useInvestiment } from '../contexts/InvestimentContext';

function Modal({ title, removeInvestimentId, children }) {
  const { investiments, setInvestiments } = useInvestiment();

  const handleRemoveClick = () => {
    const newInvestiments = investiments.filter(
      (investiment) => investiment.id !== removeInvestimentId
    );

    setInvestiments(newInvestiments);

    const url = `http://localhost:3000/investiments/${removeInvestimentId}`;

    const config = {
      method: 'delete',
    };

    fetch(url, config);
  };

  return (
    <div
      className="modal fade"
      id="removeModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleRemoveClick}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
