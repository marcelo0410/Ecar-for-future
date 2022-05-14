import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default class Example extends PureComponent {
      constructor(props){
        super(props)
        this.state={data:[]}
    }
    componentDidMount(){
      const newData = [{
        name:"1 yr",
        YourCar:this.props.resultCost*1*52,
        ECar:this.props.ecarFixedCost*52
    }, 
    {
        name:"2 yr",
        YourCar:this.props.resultCost*2*52,
        ECar:this.props.ecarFixedCost*2*52
    },
    {
        name:"3 yr",
        YourCar:this.props.resultCost*3*52,
        ECar:this.props.ecarFixedCost*3*52
    },
    {
        name:"4 yr",
        YourCar:this.props.resultCost*4*52,
        ECar:this.props.ecarFixedCost*4*52
    },
    {
        name:"5 yr",
        YourCar:this.props.resultCost*5*52,
        ECar:this.props.ecarFixedCost*5*52
    },
    {
        name:"6 yr",
        YourCar:this.props.resultCost*6*52,
        ECar:this.props.ecarFixedCost*6*52
    },
    {
        name:"7 yr",
        YourCar:this.props.resultCost*7*52,
        ECar:this.props.ecarFixedCost*7*52
    },
    ]
    this.setState({data:newData})
    }

    componentDidUpdate(prevProp, prevState){
      if(prevProp !== this.props){
          const newData = [{
            name:"1 yr",
            YourCar:this.props.resultCost*1*52,
            ECar:this.props.ecarFixedCost*52
        }, 
        {
            name:"2 yr",
            YourCar:this.props.resultCost*2*52,
            ECar:this.props.ecarFixedCost*2*52
        },
        {
            name:"3 yr",
            YourCar:this.props.resultCost*3*52,
            ECar:this.props.ecarFixedCost*3*52
        },
        {
            name:"4 yr",
            YourCar:this.props.resultCost*4*52,
            ECar:this.props.ecarFixedCost*4*52
        },
        {
            name:"5 yr",
            YourCar:this.props.resultCost*5*52,
            ECar:this.props.ecarFixedCost*5*52
        },
        {
            name:"6 yr",
            YourCar:this.props.resultCost*6*52,
            ECar:this.props.ecarFixedCost*6*52
        },
        {
            name:"7 yr",
            YourCar:this.props.resultCost*7*52,
            ECar:this.props.ecarFixedCost*7*52
        },
    ]
    this.setState({data:newData})}
        
      }

  render() {
    return (
      <ResponsiveContainer width={'99%'} height={330}>
        <LineChart
          width={300}
          height={200}
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
          <YAxis label={{ value: '$AUD', angle: -90, position: 'insideLeft', offset:-5}}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="YourCar" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="ECar" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
