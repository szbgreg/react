import React, { useState } from "react";
import TransactionForm from "./components/TransactionForm";

// A dátum formázása YYYY.MM.DD. formátumra
const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}.`;
};

// A költségkezelő alkalmazás fő komponense
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
                {t.description}: {t.amount} Ft, {formatDate(t.date)}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Kiadások</h3>
          <ul>
            {expense.map((t) => (
              <li key={t.id}>
                {t.description}: {t.amount} Ft, {t.date}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExpenseApp;
