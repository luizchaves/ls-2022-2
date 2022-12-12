import { useContext } from 'react';
import { createContext, useState } from 'react';

export const InvestimentContext = createContext({});

export function InvestimentProvider({ children }) {
  const [investiments, setInvestiments] = useState([]);

  const [removedInvestiment, setRemovedInvestiment] = useState({
    id: 0,
    name: '',
  });

  const loadInvestiments = () => {
    fetch('http://localhost:3000/investiments')
      .then((res) => res.json())
      .then((initialInvestiments) => setInvestiments(initialInvestiments));
  };

  return (
    <InvestimentContext.Provider
      value={{
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
