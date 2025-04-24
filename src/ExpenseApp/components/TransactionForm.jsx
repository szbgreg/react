import React, { useState } from "react";

export default function TransactionForm({ addTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleBtnClick = () => {
    // Ellenőrizzük, hogy a leírás és az összeg meg van-e adva
    if (!description || !amount) return;

    // Beállítjuk az új tranzakciót
    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseInt(amount),
      type,
    };

/*     console.log(newTransaction); */

    // Hozzáadjuk az új tranzakciót majd a formot reseteljük
    addTransaction(newTransaction);
    setDescription("");
    setAmount("");
    setType("income");
  };

  return (
    <div>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Bevétel</option>
        <option value="expense">Kiadás</option>
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

      <button onClick={handleBtnClick}>Hozzáadás</button>
    </div>
  );
}
