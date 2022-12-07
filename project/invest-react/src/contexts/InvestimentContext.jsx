import { createContext, useContext, useState } from 'react';

export const InvestimentContext = createContext({});

export function InvestimentProvider({ children }) {
  const [investiments, setInvestiments] = useState([]);

  const [removedInvestiment, setRemovedInvestiment] = useState({
    id: 0,
    name: '',
  });

  const loadInvestiments = async () => {
    const res = await fetch('http://localhost:3000/investiments');

    const newInvestiments = await res.json();

    setInvestiments(newInvestiments);
  };

  return (
    <InvestimentContext.Provider
      value={{
        investiments,
        setInvestiments,
        removedInvestiment,
        setRemovedInvestiment,
        loadInvestiments,
      }}
    >
      {children}
    </InvestimentContext.Provider>
  );
}

export function useInvestiment() {
  return useContext(InvestimentContext);
}
