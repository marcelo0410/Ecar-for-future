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

export default class Example extends PureComponent {
      constructor(props){
        super(props)
        this.state={data:[]}
    }
    componentDidMount(){
      const newData = [{
        name:"1 yr",
        YourCar:this.props.resultEmi*1*52,
        ECar:0
    }, 
    {
        name:"2 yr",
        YourCar:this.props.resultEmi*2*52,
        ECar:0
    },
    {
        name:"3 yr",
        YourCar:this.props.resultEmi*3*52,
        ECar:0
    },
    {
        name:"4 yr",
        YourCar:this.props.resultEmi*4*52,
        ECar:0
    },
    {
        name:"5 yr",
        YourCar:this.props.resultEmi*5*52,
        ECar:0
    },
    {
        name:"6 yr",
        YourCar:this.props.resultEmi*6*52,
        ECar:0
    },
    {
        name:"7 yr",
        YourCar:this.props.resultEmi*7*52,
        ECar:0
    },
    ]
    this.setState({data:newData})
    }

    componentDidUpdate(prevProp, prevState){
      if(prevProp !== this.props){
          const newData = [{
            name:"1 yr",
            YourCar:this.props.resultEmi*1*52,
            ECar:0
        }, 
        {
            name:"2 yr",
            YourCar:this.props.resultEmi*2*52,
            ECar:0
        },
        {
            name:"3 yr",
            YourCar:this.props.resultEmi*3*52,
            ECar:0
        },
        {
            name:"4 yr",
            YourCar:this.props.resultEmi*4*52,
            ECar:0
        },
        {
            name:"5 yr",
            YourCar:this.props.resultEmi*5*52,
            ECar:0
        },
        {
            name:"6 yr",
            YourCar:this.props.resultEmi*6*52,
            ECar:0
        },
        {
            name:"7 yr",
            YourCar:this.props.resultEmi*7*52,
            ECar:0
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
            right: 35,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'CO2 emissions (kg)', angle: -90, position: 'insideLeft', offset:0,dy: 40}} tickFormatter={DataFormater}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="YourCar" stroke="#8884d8" activeDot={{ r: 5.5 }} />
          <Line type="monotone" dataKey="ECar" stroke="#82ca9d" activeDot={{ r: 5.5 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
