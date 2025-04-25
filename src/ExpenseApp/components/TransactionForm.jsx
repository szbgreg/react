import React, { useState, useEffect } from "react";
import "./TransactionForm.css";

const getCurrentDate = () => new Date().toISOString().split("T")[0];

export default function TransactionForm({
  addTransaction,
  selectedTransaction,
}) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [date, setDate] = useState(getCurrentDate());
  const [note, setNote] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (selectedTransaction) {
      setDescription(selectedTransaction.description);
      setAmount(selectedTransaction.amount);
      setDate(selectedTransaction.date);
      setType(selectedTransaction.type);
      setNote(selectedTransaction.note);
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [selectedTransaction]);

  const handleBtnClick = (e) => {
    e.preventDefault();

    // Ellenőrizzük, hogy a leírás és az összeg meg van-e adva
    if (!description || !amount) return;

    // Beállítjuk az új tranzakciót
    const newTransaction = {
      id: selectedTransaction ? selectedTransaction.id : Date.now(),
      description,
      amount: type === "income" ? parseInt(amount) : -parseInt(amount),
      date: date,
      note: note,
      type,
    };

    /*     console.log(newTransaction); */

    // Hozzáadjuk az új tranzakciót majd a formot reseteljük
    addTransaction(newTransaction);
    setDescription("");
    setAmount("");
    setDate(getCurrentDate());
    setType("income");
    setNote("");
    setIsEdit(false);
  };

  return (
    <form className="transaction-form">
      <h2>{isEdit ? "Tranzakció szerkesztése" : "Új tranzakció hozzáadása"}</h2>

      <input
        type="text"
        placeholder="Megnevezés"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Bevétel</option>
        <option value="expense">Kiadás</option>
      </select>

      <input
        type="number"
        placeholder="Összeg"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <textarea
        type="text"
        placeholder="Megjegyzés"
        value={note}
        rows={5}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>

      <button type="submit" onClick={handleBtnClick}>
        Mentés
      </button>
    </form>
  );
}
