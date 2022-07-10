import * as React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip} from 'recharts';
import categories from "../../../utils/categories.js";

export default function ReportsDonutChart ({ data }) {

  if (data.length === 0) return <>No Transactions Available</>

  return (
  <ResponsiveContainer width='100%' height="100%">
    <PieChart width="100%" height="100%">
      <Pie data={data} dataKey="total" nameKey="name" cx="50%" cy="50%" fill="#8884d8" innerRadius='40%'>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={categories.filter(category => category.name == entry.name)[0].color} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
  )
};