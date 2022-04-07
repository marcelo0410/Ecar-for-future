import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class CostResultWeek extends PureComponent {
    constructor(props){
        super(props)
        this.state = {data:[]}
    }

    componentDidMount(){
        const newData = [{
          name:"1 yr",
          YourCar:this.props.resultCost*1,
          ECar:this.props.ecarCost*1
      }, 
      {
          name:"2 yr",
          YourCar:this.props.resultCost*2,
          ECar:this.props.ecarCost*2
      },
      {
          name:"3 yr",
          YourCar:this.props.resultCost*3,
          ECar:this.props.ecarCost*3
      },
      {
          name:"4 yr",
          YourCar:this.props.resultCost*4,
          ECar:this.props.ecarCost*4
      },
      {
          name:"5 yr",
          YourCar:this.props.resultCost*5,
          ECar:this.props.ecarCost*5
      },
      {
          name:"6 yr",
          YourCar:this.props.resultCost*6,
          ECar:this.props.ecarCost*6
      },
      {
          name:"7 yr",
          YourCar:this.props.resultCost*7,
          ECar:this.props.ecarCost*7
      },
  ]
      this.setState({data:newData})
    }

    componentDidUpdate(prevProp, prevState){
      if(prevProp !== this.props){
          const newData = [{
            name:"1 yr",
            YourCar:this.props.resultCost*1,
            ECar:this.props.ecarCost*1
        }, 
        {
            name:"2 yr",
            YourCar:this.props.resultCost*2,
            ECar:this.props.ecarCost*2
        },
        {
            name:"3 yr",
            YourCar:this.props.resultCost*3,
            ECar:this.props.ecarCost*3
        },
        {
            name:"4 yr",
            YourCar:this.props.resultCost*4,
            ECar:this.props.ecarCost*4
        },
        {
            name:"5 yr",
            YourCar:this.props.resultCost*5,
            ECar:this.props.ecarCost*5
        },
        {
            name:"6 yr",
            YourCar:this.props.resultCost*6,
            ECar:this.props.ecarCost*6
        },
        {
            name:"7 yr",
            YourCar:this.props.resultCost*7,
            ECar:this.props.ecarCost*7
        },
    ]
    this.setState({data:newData})}
        
      }


  render() {
    return (
        <LineChart
          width={500}
          height={300}
          data={this.state.data}
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
          <Line type="monotone" dataKey="YourCar" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="ECar" stroke="#82ca9d" />
        </LineChart>
    );
  }
}
