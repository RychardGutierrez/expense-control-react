import Card from '../components/Card';

import './Expenses.css';

const Expense = ({
  expenseListComponent,
  expenseCharComponent,
  filterComponent,
}) => {
  return (
    <Card className="expenses">
      {expenseCharComponent}
      {filterComponent}
      {expenseListComponent}
    </Card>
  );
};

export default Expense;
