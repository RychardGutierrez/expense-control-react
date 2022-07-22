import { useState } from 'react';
import { getDay, getMonth, getYear } from '../../tools/dateConverter';
import './ExpenseForm.css';

const initValues = {
  title: '',
  amount: '',
  date: `${getYear({})}-${getMonth({ format: '2-digit' })}-${getDay({})}`,
};

const ExpenseForm = ({ onSaveExpenseData, onOpenNewExpenseHandler }) => {
  const [valuesForm, setValuesForm] = useState(initValues);
  const { title, amount, date } = valuesForm;

  const changeForm = ({ target }) => {
    setValuesForm((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSaveExpenseData({ ...valuesForm, date: new Date(date) });
    setValuesForm(initValues);
    onOpenNewExpenseHandler();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title: </label>
          <input type="text" onChange={changeForm} name="title" value={title} />
        </div>

        <div className="new-expense__control">
          <label>Amount: </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeForm}
            name="amount"
            value={amount}
          />
        </div>

        <div className="new-expense__control">
          <label>Date: </label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-30"
            onChange={changeForm}
            name="date"
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onOpenNewExpenseHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
