import { createContext, useState, useContext } from 'react';
import { Timestamp } from 'firebase/firestore';

import { Firestore } from '../services/firebase';

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
    const investiments = await Firestore.read('investiments');

    setInvestiments(investiments);
  };

  const createInvestiment = async (investiment) => {
    investiment.start = Timestamp.fromDate(new Date(investiment.start));

    investiment.end = Timestamp.fromDate(new Date(investiment.end));

    const { id } = await Firestore.create('investiments', investiment);

    const newInvestiment = { id, ...investiment };

    setInvestiments([...investiments, newInvestiment]);
  };

  const removeInvestiment = async (id) => {
    await Firestore.remove('investiments', id);

    const newInvestiments = investiments.filter(
      (investiment) => investiment.id !== id
    );

    setInvestiments(newInvestiments);
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
        removedInvestiment,
        setRemovedInvestiment,
        loadInvestiments,
        createInvestiment,
        removeInvestiment,
      }}
    >
      {children}
    </InvestimentContext.Provider>
  );
}

export function useInvestiment() {
  return useContext(InvestimentContext);
}
