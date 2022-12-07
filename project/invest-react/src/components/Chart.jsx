import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { formatCurrency } from '../services/format';

function Chart({ data }) {
  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip
        formatter={function (value) {
          return `${formatCurrency(value)}`;
        }}
      />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
}

export default Chart;
