import React from "react";
import "./Transactions.css";

// A dátum formázása YYYY.MM.DD. formátumra
const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}.`;
};

const Transactions = ({
  transactions,
  onSelectTransaction,
  onDeleteTransaction,
}) => {
  const income = transactions.filter((t) => t.type === "income");
  const expense = transactions.filter((t) => t.type === "expense");

  return (
    <div className="transactions-container">
      <div>
        <h3>Bevételek</h3>
        <ul className="transactions-list">
          {income.map((t) => (
            <li
              key={t.id}
              className="transaction"
              onClick={() => onSelectTransaction(t)}
            >
              <div className="transaction-info">
                <div className="transaction-details">
                  <span className="description">{t.description}</span>
                  <span className="date"> {formatDate(t.date)}</span>
                </div>
                <div className="transaction-meta">
                  <span className="amount income">{t.amount} Ft</span>
                </div>
              </div>

              <div className="note">
                <b>Megyjegyzés: </b> {t.note}
                <span
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteTransaction(t.id);
                  }}
                >
                  Törlés
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Kiadások</h3>
        <ul className="transactions-list">
          {expense.map((t) => (
            <li
              key={t.id}
              className="transaction"
              onClick={() => onSelectTransaction(t)}
            >
              <div className="transaction-info">
                <div className="transaction-details">
                  <span className="description">{t.description}</span>
                  <span className="date"> {formatDate(t.date)}</span>
                </div>
                <div className="transaction-meta">
                  <span className="amount expense">{t.amount} Ft</span>
                </div>
              </div>

              <div className="note">
                <b>Megyjegyzés: </b> {t.note}
                <span
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteTransaction(t.id);
                  }}
                >
                  Törlés
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Transactions;
