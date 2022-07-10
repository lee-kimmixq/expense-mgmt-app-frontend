import * as React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip} from 'recharts';
import categories from "../../../utils/categories.js";

export default function ChartPie ({ data, hasTooltip, height }) {

  if (data.length === 0) return <>No Transactions Available</>

  return (
  <ResponsiveContainer width='100%' height={height || '100%'} >
    <PieChart width="100%" height="100%" style={{ transform: 'scale(1)' }}>
      <Pie data={data} dataKey="total" nameKey="name" cx="50%" cy="50%" fill="#8884d8" stroke='0' innerRadius={'40%'} outerRadius={'100%'}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={categories.filter(category => category.name === entry.name)[0].color} />
        ))}
      </Pie>
      {hasTooltip && <Tooltip wrapperStyle={{backgroundColor: '#000000'}} formatter={(value, name) => [`$${value}`, name]} allowEscapeViewBox={{y: true}} />}
    </PieChart>
  </ResponsiveContainer>
  )
};