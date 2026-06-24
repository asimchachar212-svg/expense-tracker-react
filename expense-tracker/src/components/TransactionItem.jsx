function TransactionItem({
  transaction,
  onDelete,
}) {
  return (
    <li
      className={
        transaction.amount > 0
          ? 'plus'
          : 'minus'
      }
    >
      {transaction.text} ${transaction.amount}

      <button
        onClick={() =>
          onDelete(transaction.id)
        }
      >
        ❌
      </button>
    </li>
  );
}

export default TransactionItem;