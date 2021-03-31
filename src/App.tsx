import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleTransactionModal() {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleTransactionModal}/>
      <Dashboard />
        
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleTransactionModal}
      />
        
      <GlobalStyle />
    </>
  );
}

export default App;
