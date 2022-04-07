import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default class Co2ResultWeek extends PureComponent {
    constructor(props){
        super(props)
        this.state = {data:[]}
        this.newData = [{
            name:"CO2 Generated Per Week",
            YourCar:props.resultCo2,
            ECar:0
        }]
        
    }
    componentDidMount(){
      const newData = [{
        name:"CO2 Generated Per Week",
        YourCar:this.props.resultCo2,
        ECar:0
    }]
      this.setState({data:newData})
    }

    componentDidUpdate(prevProp, prevState){
      if(prevProp !== this.props){
        const newData = [{
          name:"CO2 Generated Per Week",
          YourCar:this.props.resultCo2,
          ECar:0
        }]
        this.setState({data:newData})
      }
    }

  render() {
    return (
      
        <BarChart
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
          <Bar dataKey="YourCar" fill="#8884d8" />
          <Bar dataKey="ECar" fill="#82ca9d" />
        </BarChart>

    );
  }
}

