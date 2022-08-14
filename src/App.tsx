import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionContext } from './TransactionsContext';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true);
	};

	function handleCloneNewTransactionModalOpen() {
		setIsNewTransactionModalOpen(false);
	};
  
  return (
    <TransactionContext.Provider value={[]}>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloneNewTransactionModalOpen}
      />
      <GlobalStyle />
    </TransactionContext.Provider>
  );
}