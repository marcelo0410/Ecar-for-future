import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DataFormater = (number) => {
  if(number > 1000000000){
    return (number/1000000000).toString() + 'B';
  }else if(number > 1000000){
    return (number/1000000).toString() + 'M';
  }else if(number > 1000){
    return (number/1000).toString() + 'K';
  }else{
    return number.toString();
  }
}

export default class Example extends PureComponent {

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
          <YAxis padding={{ top: 15 }} label={{ value: '(population)', angle: -90, position: 'insideLeft', offset:-10}} tickFormatter={DataFormater}/>
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="population" fill="#8884d8" /> */}
          <Bar dataKey="population" fill="#82ca9d" />
        </BarChart>
    // </ResponsiveContainer>
    );
  }
}
