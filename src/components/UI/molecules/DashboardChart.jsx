import * as React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip} from 'recharts';
import categories from "../../../utils/categories.js";

export default function DashboardChart ({ data }) {

  return (
  <ResponsiveContainer width='100%' height="20%">
    <PieChart width="80%" height="100%">
      <Pie data={data} dataKey="total" nameKey="name" cx="50%" cy="50%" fill="#8884d8">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={categories.filter(category => category.name == entry.name)[0].color} />
        ))}
      </Pie>
      <Tooltip formatter={(value, name) => [`$${value}`, name]} allowEscapeViewBox={{y: true}} />
    </PieChart>
  </ResponsiveContainer>
  )
};