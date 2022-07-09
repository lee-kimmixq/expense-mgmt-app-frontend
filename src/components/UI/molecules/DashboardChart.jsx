import * as React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip} from 'recharts';
import categories from "../../../utils/categories.js";

export default function DashboardChart ({ data }) {

  return (
  <ResponsiveContainer width='100%' height="30%" >
    <PieChart width="100%" height="100%" style={{ transform: 'scale(1)' }}>
      <Pie data={data} dataKey="total" nameKey="name" cx="50%" cy="50%" fill="#8884d8" stroke='0' innerRadius={'40%'} outerRadius={'100%'}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={categories.filter(category => category.name == entry.name)[0].color} />
        ))}
      </Pie>
      <Tooltip wrapperStyle={{backgroundColor: '#000000'}} formatter={(value, name) => [`$${value}`, name]} allowEscapeViewBox={{y: true}} />
    </PieChart>
  </ResponsiveContainer>
  )
};