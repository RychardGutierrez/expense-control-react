import { useEffect, useState } from 'react';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseList from './components/ExpenseList';
import ExpensesChart from './components/ExpensesChart';
import NewExpense from './components/NewExpense';
import { DEFAULT_FILTER, EXPENSE, FILTERS } from './mock/data';
import Expense from './page/Expense';
import { getYear } from './tools/dateConverter';

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSE);
  const [filterExpenses, setFilterExpenses] = useState(expenses);

  const [selectedYear, setSelectedYear] = useState(DEFAULT_FILTER);

  const addExpenseHandle = (newExpense) => {
    setExpenses((prevState) => [newExpense, ...prevState]);
  };

  const filterExpenseHandle = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  useEffect(() => {
    setFilterExpenses(
      expenses.filter(({ date }) => getYear({ date }) === selectedYear)
    );
  }, [expenses, selectedYear]);

  const expenseFilterComponent = (
    <ExpenseFilter
      onFilterExpenseHandle={filterExpenseHandle}
      option={selectedYear}
      filters={FILTERS}
    />
  );

  const expenseCharComponent = <ExpensesChart expenses={filterExpenses} />;

  const expenseListComponent = <ExpenseList expenses={filterExpenses} />;

  return (
    <>
      <NewExpense onAddExpenseHandle={addExpenseHandle} />

      <Expense
        expenses={filterExpenses}
        filterComponent={expenseFilterComponent}
        expenseCharComponent={expenseCharComponent}
        expenseListComponent={expenseListComponent}
      />
    </>
  );
};

export default App;
