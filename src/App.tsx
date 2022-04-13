import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import Modal from 'react-modal';
import { useState } from "react";

export function App() {
  const [
    isNewTransactionModalOpen,
    setIsNewTransactionModalOpen
  ] = useState(true);
  
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }
  
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal
        ariaHideApp={false}
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}
