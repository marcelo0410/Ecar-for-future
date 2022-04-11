import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '2010',
        electricity: 51.01,
        stationary_energy: 23.16,
        transport: 22.55,
        fugitive_emissions:12.27,
        industrial_processes_and_product_use:8.63,
        agriculture:20.14,
        waste:3.97,
        LULUCF:9.35
      },
      {
        name: '2011',
        electricity: 50.90,
        stationary_energy: 24.10,
        transport: 22.52,
        fugitive_emissions:11.30,
        industrial_processes_and_product_use:8.68,
        agriculture:20.47,
        waste:3.61,
        LULUCF:5.61
      },
      {
        name: '2012',
        electricity: 47,
        stationary_energy: 24.77,
        transport: 23.18,
        fugitive_emissions:11.56,
        industrial_processes_and_product_use:7.50,
        agriculture:20.59,
        waste:3.38,
        LULUCF:4.68
      },
      {
        name: '2013',
        electricity: 45.02,
        stationary_energy: 24.37,
        transport: 23.39,
        fugitive_emissions:10.80,
        industrial_processes_and_product_use:7.49,
        agriculture:20.67,
        waste:3.42,
        LULUCF:3.17
      },
    {
        name: '2014',
        electricity: 47.47,
        stationary_energy: 24.36,
        transport: 23.86,
        fugitive_emissions:13.02,
        industrial_processes_and_product_use:7.66,
        agriculture:19.89,
        waste:3.30,
        LULUCF:0.50
      },
  {
    name: '2015',
    electricity: 49.30,
    stationary_energy: 22.1,
    transport: 24.03,
    fugitive_emissions:12.72,
    industrial_processes_and_product_use:7.71,
    agriculture:19.57,
    waste:3.44,
    LULUCF:-5.51
  },
  {
    name: '2016',
    electricity: 48.75,
    stationary_energy: 25.66,
    transport: 24.34,
    fugitive_emissions:12.97,
    industrial_processes_and_product_use:7.91,
    agriculture:20.63,
    waste:3.52,
    LULUCF:-8.15
  },
  {
    name: '2017',
    electricity: 46.24,
    stationary_energy: 26.27,
    transport: 25.06,
    fugitive_emissions:14.19,
    industrial_processes_and_product_use:7.87,
    agriculture:20.31,
    waste:3.46,
    LULUCF:-5.35
  },
  {
    name: '2018',
    electricity: 45.34,
    stationary_energy: 27.46,
    transport: 25.24,
    fugitive_emissions:13.50,
    industrial_processes_and_product_use:8.18,
    agriculture:18.86,
    waste:3.37,
    LULUCF:-6.31
  },
  {
    name: '2019',
    electricity: 43.57,
    stationary_energy: 26.16,
    transport: 24.93,
    fugitive_emissions:13.90,
    industrial_processes_and_product_use:8.03,
    agriculture:18.24,
    waste:3.42,
    LULUCF:-6.17
  },
  {
    name: '2020',
    electricity: 42.37,
    stationary_energy: 25.12,
    transport: 21.10,
    fugitive_emissions:12.16,
    industrial_processes_and_product_use:8.01,
    agriculture:18.98,
    waste:3.51,
    LULUCF:-6.15
  },
  {
    name: '2021',
    electricity: 40.77,
    stationary_energy: 27.31,
    transport: 20.24,
    fugitive_emissions:12.6,
    industrial_processes_and_product_use:8.17,
    agriculture:19.77,
    waste:3.51,
    LULUCF:-6.15
  },
];

export default class QuaterlyEmission extends PureComponent {

  render() {
    return (
        <div>
            <h2 className='mt-4 mb-4'>Emission By Gas</h2>
            <div></div>
            <LineChart
            width={800}
            height={500}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="electricity" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="stationary_energy" stroke="#BE8C63" />
            <Line type="monotone" dataKey="transport" stroke="#8FBDD3" />
            <Line type="monotone" dataKey="fugitive_emissions" stroke="#6BCB77" />
            <Line type="monotone" dataKey="industrial_processes_and_product_use" stroke="#FF5F00" />
            <Line type="monotone" dataKey="agriculture" stroke="#4700D8" />
            <Line type="monotone" dataKey="waste" stroke="#F0A500" />
            <Line type="monotone" dataKey="LULUCF" stroke="#E04DB0" />
            </LineChart>
        </div>
    );
  }
}

