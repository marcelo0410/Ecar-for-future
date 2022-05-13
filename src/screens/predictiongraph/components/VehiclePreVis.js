import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


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
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="population" fill="#8884d8" /> */}
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      //  </ResponsiveContainer>
    );
  }
}
