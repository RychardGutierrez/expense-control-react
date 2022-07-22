import { getDay, getMonth, getYear } from '../../tools/dateConverter';

import './index.css';

const ExpenseDate = ({ date = new Date() }) => {
  const newDate = (date) => (typeof date === Date ? date : new Date(date));
  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {getMonth({ date: newDate(date) })}
      </div>
      <div className="expense-date__year">
        {getYear({ date: newDate(date) })}
      </div>
      <div className="expense-date__day">{getDay({ date: newDate(date) })}</div>
    </div>
  );
};

export default ExpenseDate;
