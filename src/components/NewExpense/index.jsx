import { useState } from 'react';
import ExpenseButton from '../ExpenseButton';
import ExpenseForm from './ExpenseForm';
import './index.css';

const NewExpense = ({ onAddExpenseHandle }) => {
  const [openNewExpense, setOpenNewExpense] = useState(false);

  const saveExpenseDataHandle = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpenseHandle(expenseData);
  };

  const openNewExpenseHandler = () => {
    setOpenNewExpense((prevState) => !prevState);
  };

  const expenseFormComponent = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandle}
      onOpenNewExpenseHandler={openNewExpenseHandler}
    />
  );

  const expenseButtonComponent = (
    <ExpenseButton onOpenNewExpenseHandler={openNewExpenseHandler} />
  );

  return (
    <div className="new-expense">
      {openNewExpense ? expenseFormComponent : expenseButtonComponent}
    </div>
  );
};

export default NewExpense;
