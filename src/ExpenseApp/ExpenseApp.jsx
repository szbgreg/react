import React, { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import Transactions from "./components/Transactions";
import Filter from "./components/Filter";
import defaultTransactions from "./defaultTransactions";

// A költségkezelő alkalmazás fő komponense
function ExpenseApp() {
  const [transactions, setTransactions] = useState(defaultTransactions);
  const [searchText, setSearchText] = useState("");
  const [filterMonth, setFilterMonth] = useState("");

  // Szűrjük a tranzakciókat a keresett szöveg és a hónap alapján
  const filteredTransactions = transactions.filter((t) => {
    const matchesText = t.description
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesMonth = filterMonth
      ? new Date(t.date).getMonth() + 1 === parseInt(filterMonth)
      : true;

    return matchesText && matchesMonth;
  });

  const addTransaction = (data) => {
    setTransactions([...transactions, data]);
  };

  // Egyenleg kiszámítása
  let balance = 0;

  filteredTransactions.forEach((transaction) => {
    balance += transaction.amount;
  });

  return (
    <div>
      <h1>Költségkezelő</h1>

      <Filter
        searchText={searchText}
        setSearchText={setSearchText}
        filterMonth={filterMonth}
        setFilterMonth={setFilterMonth}
      />

      <h2>Egyenleg: {balance} Ft</h2>

      <Transactions transactions={filteredTransactions} />

      <TransactionForm addTransaction={(d) => addTransaction(d)} />
    </div>
  );
}

export default ExpenseApp;
