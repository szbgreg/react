import React, { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import Transactions from "./components/Transactions";
import Filter from "./components/Filter";
import defaultTransactions from "./defaultTransactions";
import "./ExpenseApp.css";

// A költségkezelő alkalmazás fő komponense
function ExpenseApp() {
  const [transactions, setTransactions] = useState(defaultTransactions);
  const [searchText, setSearchText] = useState("");
  const [filterMonth, setFilterMonth] = useState("");
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Szűrjük a tranzakciókat a keresett szöveg és a hónap alapján
  const filteredTransactions = transactions
    .filter((t) => {
      const matchesText = t.description
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const matchesMonth = filterMonth
        ? new Date(t.date).getMonth() + 1 === parseInt(filterMonth)
        : true;

      return matchesText && matchesMonth;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const addTransaction = (data) => {
    setTransactions((prev) => {
      const exists = prev.find((t) => t.id === data.id);

      // Ha már létezik a tranzakció, akkor frissítjük, különben hozzáadjuk
      if (exists) {
        return prev.map((t) => (t.id === data.id ? data : t));
      } else {
        return [...prev, data];
      }
    });
  };

  // Egyenleg kiszámítása
  let balance = 0;

  filteredTransactions.forEach((transaction) => {
    balance += transaction.amount;
  });

  return (
    <div id="expense-app">
      <h1>Költségkezelő</h1>

      <p className="balance">
        Egyenleg:{" "}
        <span className={balance >= 0 ? "balance-green" : "balance-red"}>
          {balance} Ft
        </span>
      </p>

      <Filter
        searchText={searchText}
        setSearchText={setSearchText}
        filterMonth={filterMonth}
        setFilterMonth={setFilterMonth}
      />
      <Transactions
        transactions={filteredTransactions}
        onSelectTransaction={setSelectedTransaction}
      />

      <TransactionForm
        addTransaction={(d) => addTransaction(d)}
        selectedTransaction={selectedTransaction}
      />
    </div>
  );
}

export default ExpenseApp;
