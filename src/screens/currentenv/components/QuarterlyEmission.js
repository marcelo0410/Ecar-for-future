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
  { name: "Thu", uv: 2780, pv: 3908, amt: 2000, week: "Week 1" },
  { name: "Fri", uv: 1890, pv: 4800, amt: 2181, week: "Week 1" },
  { name: "Sat", uv: 2390, pv: 3800, amt: 2500, week: "Week 1" },
  { name: "Sun", uv: 3490, pv: 4300, amt: 2100, week: "Week 1" },
  { name: "Mon", uv: 4000, pv: 2400, amt: 2400, week: "Week 2" },
  { name: "Tue", uv: 3000, pv: 1398, amt: 2210, week: "Week 2" },
  { name: "Wed", uv: 2000, pv: 9800, amt: 2290, week: "Week 2" },
  { name: "Thu", uv: 2780, pv: 3908, amt: 2000, week: "Week 2" },
  { name: "Fri", uv: 1890, pv: 4800, amt: 2181, week: "Week 2" },
  { name: "Sat", uv: 2390, pv: 3800, amt: 2500, week: "Week 2" },
  { name: "Sun", uv: 3490, pv: 4300, amt: 2100, week: "Week 2" },
  { name: "Mon", uv: 4000, pv: 2400, amt: 2400, week: "Week 3" },
  { name: "Tue", uv: 3000, pv: 1398, amt: 2210, week: "Week 3" },
  { name: "Wed", uv: 2000, pv: 9800, amt: 2290, week: "Week 3" },
  { name: "Thu", uv: 2780, pv: 3908, amt: 2000, week: "Week 3" },
  { name: "Fri", uv: 1890, pv: 4800, amt: 2181, week: "Week 3" },
  { name: "Sat", uv: 2390, pv: 3800, amt: 2500, week: "Week 3" },
  { name: "Sun", uv: 3490, pv: 4300, amt: 2100, week: "Week 3" },
  { name: "Mon", uv: 4000, pv: 2400, amt: 2400, week: "Week 4" },
  { name: "Tue", uv: 3000, pv: 1398, amt: 2210, week: "Week 4" },
  { name: "Wed", uv: 2000, pv: 9800, amt: 2290, week: "Week 4" },
  { name: "Thu", uv: 2780, pv: 3908, amt: 2000, week: "Week 4" },
  { name: "Fri", uv: 1890, pv: 4800, amt: 2181, week: "Week 4" },
  { name: "Sat", uv: 2390, pv: 3800, amt: 2500, week: "Week 4" },
  { name: "Sun", uv: 3490, pv: 4300, amt: 2100, week: "Week 4" },
  { name: "Mon", uv: 4000, pv: 2400, amt: 2400, week: "Week 5" },
  { name: "Tue", uv: 3000, pv: 1398, amt: 2210, week: "Week 5" },
  { name: "Wed", uv: 2000, pv: 9800, amt: 2290, week: "Week 5" },
  { name: "Thu", uv: 2780, pv: 3908, amt: 2000, week: "Week 5" },
  { name: "Fri", uv: 1890, pv: 4800, amt: 2181, week: "Week 5" },
  { name: "Sat", uv: 2390, pv: 3800, amt: 2500, week: "Week 5" },
  { name: "Sun", uv: 3490, pv: 4300, amt: 2100, week: "Week 5" }
]

const QuarterlyEmission = () => {
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

export default QuarterlyEmission;
