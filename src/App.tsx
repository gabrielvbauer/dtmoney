import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';

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
    <>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard />
      <Modal
					isOpen={isNewTransactionModalOpen}
					onRequestClose={handleCloneNewTransactionModalOpen}
				>
					<h2>Cadastrar transação</h2>
				</Modal>
      <GlobalStyle />
    </>
  );
}