import { CHART_DATA } from '../../mock/data';

import Chart from './Chart';

const ExpensesChart = ({ expenses = [] }) => {
  const totalAmount = (expenses, month) =>
    expenses
      .filter(({ date }) => date.getMonth() === month)
      .reduce((total, { amount }) => (total += parseInt(amount)), 0);

  const chartDataPoints = CHART_DATA.map((chart, index) => ({
    ...chart,
    value: totalAmount(expenses, index),
  }));

  console.log(chartDataPoints);

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
