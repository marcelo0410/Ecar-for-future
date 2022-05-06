import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default class QuaterlyEmission extends PureComponent {
  render() {
    return (
        <div>
            <h2 className='mt-4 mb-4'>Emission By Gas</h2>
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
            <YAxis label={{ value: '(CO₂-e (Mt))', angle: -90, position: 'insideLeft', offset:-3}}/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="electricity" stroke="#8884d8" activeDot={{ r: 8 }} dot={false}/>
            <Line type="monotone" dataKey="stationaryEnergy" stroke="#BE8C63" dot={false}/>
            <Line type="monotone" dataKey="transport" stroke="#4700D8" dot={false} strokeWidth={3}/>
            <Line type="monotone" dataKey="fugitiveEmissions" stroke="#6BCB77" dot={false}/>
            <Line type="monotone" dataKey="industrialProcessesAndProductUse" stroke="#FF5F00" dot={false}/>
            <Line type="monotone" dataKey="agriculture" stroke="#8FBDD3" dot={false}/>
            <Line type="monotone" dataKey="waste" stroke="#F0A500" dot={false}/>
            <Line type="monotone" dataKey="lulucf" stroke="#E04DB0" dot={false} />
            </LineChart>
        </div>
    );
  }
}

