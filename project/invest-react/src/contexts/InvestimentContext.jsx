import { useContext } from 'react';
import { createContext, useState } from 'react';
import api from '../services/api';

export const InvestimentContext = createContext({});

export function InvestimentProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const [investiments, setInvestiments] = useState([]);

  const [removedInvestiment, setRemovedInvestiment] = useState({
    id: 0,
    name: '',
  });

  const loadInvestiments = async () => {
    const investiments = (await api.get('/investiments')).data;

    setInvestiments(investiments);
  };

  return (
    <InvestimentContext.Provider
      value={{
        showModal,
        setShowModal,
        showOffcanvas,
        setShowOffcanvas,
        investiments,
        setInvestiments,
        loadInvestiments,
        removedInvestiment,
        setRemovedInvestiment,
      }}
    >
      {children}
    </InvestimentContext.Provider>
  );
}

export function useInvestiment() {
  return useContext(InvestimentContext);
}
