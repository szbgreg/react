import React, { useState } from "react";

function ExpenseApp() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const addTransaction = () => {
    if (!description || !amount) return;

    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type,
    };

    setTransactions([...transactions, newTransaction]);
    setDescription("");
    setAmount("");
    setType("income");
  };

  const income = transactions.filter((t) => t.type === "income");
  const expense = transactions.filter((t) => t.type === "expense");

  return (
    <div>
      <h1>Havi Költségkezelő</h1>

      <div>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">+</option>
          <option value="expense">-</option>
        </select>

        <input
          type="text"
          placeholder="Leírás"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Összeg"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addTransaction}>Hozzáadás</button>

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
