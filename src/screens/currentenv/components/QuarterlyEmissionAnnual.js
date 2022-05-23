import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

export default class QuaterlyEmissionAnnual extends PureComponent {

  

  render() {
    return (
        <div>
            {/* <h2 className='mt-4 mb-4'>Emission Annual</h2> */}
            <div></div>
            <LineChart
            width={660}
            height={450}
            data={this.props.visData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis label={{ value: '(CO₂-e (Bt))', angle: -90, position: 'insideLeft', offset:-12}} tickFormatter={DataFormater}/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="emission" stroke="#4700D8" dot={false}/>
            {/* <Line type="monotone" dataKey="lulucf" stroke="#E04DB0" dot={false} /> */}
            </LineChart>
        </div>
    );
  }
}

