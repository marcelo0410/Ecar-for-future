import React, { PureComponent } from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

  render() {
    return (
      // <ResponsiveContainer width="99%">
        <BarChart
          width={660}
          height={450}
          data={this.props.visData}
          margin={{
            top: 20,
            right: 30,
            left: 40,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[15000, 34000]} label={{ value: '(CO₂-e (Mt))', angle: -90, position: 'insideLeft', offset:-18}}/>
          <Tooltip />
          <Legend />
          <Bar name='emission_fifty' dataKey="emissionFifty" stackId="a" fill="#4771b2" />
          <Bar dataKey="difference" stackId="a" fill="#a5d5d8" />
        </BarChart>
        // </ResponsiveContainer>
    );
  }
}
