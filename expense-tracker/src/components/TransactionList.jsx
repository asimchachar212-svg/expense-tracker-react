
import TransactionItem from './TransactionItem';

function TransactionList({
  transactions,
  onDelete,
}) {
  return (
    <div>
      <h3>History</h3>

      <ul>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;