import React, { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import Transactions from "./components/Transactions";

// A költségkezelő alkalmazás fő komponense
function ExpenseApp() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (data) => {
    setTransactions([...transactions, data]);
  };

  return (
    <div>
      <h1>Havi Költségkezelő</h1>

      <Transactions transactions={transactions} />

      <TransactionForm addTransaction={(d) => addTransaction(d)} />
    </div>
  );
}

export default ExpenseApp;
