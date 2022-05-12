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
        YourCar:this.props.resultCo2*1,
        ECar:0
    }, 
    {
        name:"2 yr",
        YourCar:this.props.resultCo2*2,
        ECar:0
    },
    {
        name:"3 yr",
        YourCar:this.props.resultCo2*3,
        ECar:0
    },
    {
        name:"4 yr",
        YourCar:this.props.resultCo2*4,
        ECar:0
    },
    {
        name:"5 yr",
        YourCar:this.props.resultCo2*5,
        ECar:0
    },
    {
        name:"6 yr",
        YourCar:this.props.resultCo2*6,
        ECar:0
    },
    {
        name:"7 yr",
        YourCar:this.props.resultCo2*7,
        ECar:0
    },
    ]
    this.setState({data:newData})
    }

    componentDidUpdate(prevProp, prevState){
      if(prevProp !== this.props){
          const newData = [{
            name:"1 yr",
            YourCar:this.props.resultCo2*1*52,
            ECar:15
        }, 
        {
            name:"2 yr",
            YourCar:this.props.resultCo2*2*52,
            ECar:15*2
        },
        {
            name:"3 yr",
            YourCar:this.props.resultCo2*3*52,
            ECar:15*3
        },
        {
            name:"4 yr",
            YourCar:this.props.resultCo2*4*52,
            ECar:15*4
        },
        {
            name:"5 yr",
            YourCar:this.props.resultCo2*5*52,
            ECar:15*5
        },
        {
            name:"6 yr",
            YourCar:this.props.resultCo2*6*52,
            ECar:15*6
        },
        {
            name:"7 yr",
            YourCar:this.props.resultCo2*7*52,
            ECar:15*7
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
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="YourCar" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="ECar" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
