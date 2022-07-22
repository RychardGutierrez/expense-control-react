import './index.css';

const ExpenseFilter = ({ onFilterExpenseHandle, option, filters = [] }) => {
  const handleChangeValue = ({ target }) => {
    onFilterExpenseHandle(target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={option} onChange={handleChangeValue}>
          {filters.map(({ value, label, id }) => (
            <option value={value} key={id}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
