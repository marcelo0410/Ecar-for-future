import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      // <ResponsiveContainer width="99%">
        <BarChart
          width={660}
          height={450}
          data={this.props.visData}
          margin={{
            top: 5,
            right: 30,
            left: 45,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis padding={{ top: 15 }} label={{ value: '(people)', angle: -90, position: 'insideLeft', offset:-38}}/>
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="population" fill="#8884d8" /> */}
          <Bar dataKey="population" fill="#82ca9d" />
        </BarChart>
    // </ResponsiveContainer>
    );
  }
}
