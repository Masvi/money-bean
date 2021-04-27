import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionProvider } from "./TransactionsContext";

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleTransactionModal() {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleTransactionModal}/>
      <Dashboard />
        
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleTransactionModal}
      />
        
      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;
