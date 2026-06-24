import { useState, useEffect } from 'react';
import './App.css';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

function App() {
  const [transactions, setTransactions] =
    useState(() => {
      const savedTransactions =
        localStorage.getItem('transactions');

      return savedTransactions
        ? JSON.parse(savedTransactions)
        : [
            { id: 1, text: 'Cash', amount: 500 },
            { id: 2, text: 'Book', amount: -50 },
          ];
    });

  useEffect(() => {
    localStorage.setItem(
      'transactions',
      JSON.stringify(transactions)
    );
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([
      ...transactions,
      transaction,
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter(
        (transaction) =>
          transaction.id !== id
      )
    );
  };

  const amounts = transactions.map(
    (transaction) => transaction.amount
  );

  const balance = amounts.reduce(
    (total, amount) => total + amount,
    0
  );

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce(
      (total, amount) =>
        total + amount,
      0
    );

  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce(
      (total, amount) =>
        total + amount,
      0
    );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <Balance balance={balance} />

      <IncomeExpense
        income={income}
        expense={Math.abs(expense)}
      />

      <TransactionList
        transactions={transactions}
        onDelete={deleteTransaction}
      />

      <AddTransaction
        onAdd={addTransaction}
      />
    </div>
  );
}

export default App;