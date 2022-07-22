import Card from '../Card';
import './index.css';

const ExpenseItem = ({ dateComponent, title = '', amount = '' }) => {
  return (
    <li>
      <Card className="expense-item">
        {dateComponent}
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">$ {amount}</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
