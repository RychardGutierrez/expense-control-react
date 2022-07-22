import ExpenseDate from '../ExpenseDate';
import ExpenseItem from '../ExpenseItem';

import './index.css';

const ExpenseList = ({ expenses = [] }) => {
  const expensesContent = (
    <h2 className="text-white">You have not yet registered expenses</h2>
  );

  return !!expenses.length ? (
    <>
      {expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem
          title={title}
          dateComponent={<ExpenseDate date={date} />}
          amount={amount}
          key={`key-expense-item-${id}`}
        />
      ))}
    </>
  ) : (
    expensesContent
  );
};

export default ExpenseList;
