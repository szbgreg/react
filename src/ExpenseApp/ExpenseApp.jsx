import React, { useState } from "react";
import TransactionForm from "./components/TransactionForm";

function ExpenseApp() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (data) => {
    setTransactions([...transactions, data]);
  };

  const income = transactions.filter((t) => t.type === "income");
  const expense = transactions.filter((t) => t.type === "expense");

  return (
    <div>
      <h1>Havi Költségkezelő</h1>

      <TransactionForm addTransaction={(d) => addTransaction(d)} />

      <div>
        <div>
          <h3>Bevételek</h3>
          <ul>
            {income.map((t) => (
              <li key={t.id}>
                {t.description}: {t.amount} Ft
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Kiadások</h3>
          <ul>
            {expense.map((t) => (
              <li key={t.id}>
                {t.description}: {t.amount} Ft
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExpenseApp;
