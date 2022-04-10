import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Mon", uv: 4000, pv: 2400, amt: 2400, week: "Week 1" },
  { name: "Tue", uv: 3000, pv: 1398, amt: 2210, week: "Week 1" },
  { name: "Wed", uv: 2000, pv: 9800, amt: 2290, week: "Week 1" },
  { name: "Thu", uv: 2780, pv: 3908, amt: 2000, week: "Week 1" }
]

const QuarterlyEmissionAnnual = () => {
  return (
      <div style={{marginTop:"50px", paddingTop:"20px"}}>
        {/* <ResponsiveContainer width="99%" aspect={3}> */}
          <LineChart
          width={800}
          height={500}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
          <XAxis xAxisId="1" dataKey="week" allowDuplicatedCategory={false} interval={1}/>
          <XAxis xAxisId="0" dataKey="name" />
          
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        {/* </ResponsiveContainer> */}
    </div>
  );
};

export default QuarterlyEmissionAnnual;
