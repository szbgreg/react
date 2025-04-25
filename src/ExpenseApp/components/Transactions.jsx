import React from "react";

// A dátum formázása YYYY.MM.DD. formátumra
const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}.`;
};

const Transactions = ({ transactions }) => {
  const income = transactions.filter((t) => t.type === "income");
  const expense = transactions.filter((t) => t.type === "expense");
  return (
    <div>
      <div>
        <h3>Bevételek</h3>
        <ul>
          {income.map((t) => (
            <li key={t.id}>
              {t.description}: {t.amount} Ft, {formatDate(t.date)}  {t.note}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Kiadások</h3>
        <ul>
          {expense.map((t) => (
            <li key={t.id}>
              {t.description}: {t.amount} Ft, {t.date} {t.note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Transactions;
