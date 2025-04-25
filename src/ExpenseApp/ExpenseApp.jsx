import React, { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import Transactions from "./components/Transactions";

// A költségkezelő alkalmazás fő komponense
function ExpenseApp() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (data) => {
    setTransactions([...transactions, data]);
  };

  // Egyenleg kiszámítása
  let balance = 0;

  transactions.forEach((transaction) => {
    balance += transaction.amount;
  });

  return (
    <div>
      <h1>Havi Költségkezelő</h1>

      <h2>Egyenleg: {balance} Ft</h2>

      <Transactions transactions={transactions} />

      <TransactionForm addTransaction={(d) => addTransaction(d)} />
    </div>
  );
}

export default ExpenseApp;
