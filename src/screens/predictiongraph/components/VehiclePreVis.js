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
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={DataFormater}/>
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="population" fill="#8884d8" /> */}
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      //  </ResponsiveContainer>
    );
  }
}
