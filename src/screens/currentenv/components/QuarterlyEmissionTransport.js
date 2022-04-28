import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default class QuaterlyEmission extends PureComponent {
  render() {
    return (
        <div>
            <h2 className='mt-4 mb-4'>Transport</h2>
            <div></div>
            <LineChart
            width={800}
            height={500}
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
            <YAxis domain={[65, 105]}/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="transport" stroke="#4700D8" dot={false}/>
            {/* <Line type="monotone" dataKey="lulucf" stroke="#E04DB0" dot={false} /> */}
            </LineChart>
        </div>
    );
  }
}

