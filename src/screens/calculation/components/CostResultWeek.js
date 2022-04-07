import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class CostResultWeek extends PureComponent {
    constructor(props){
        super(props)
        this.state = {dataSet:[]}
    }
    componentDidMount(){
      const newData = [{
        name:"Cost Per Week",
        YourCar:this.props.resultCost,
        ECar:this.props.ecarCost
      }]
      this.setState({dataSet:newData})
    }

    componentDidUpdate(prevProp, prevState){
      if(prevProp !== this.props){
        const newData = [{
          name:"Cost Per Week",
          YourCar:this.props.resultCost,
          ECar:this.props.ecarCost
        }]
        this.setState({dataSet:newData})
      }

    }


  render() {
    return (
      
        <BarChart
          width={300}
          height={300}
          data={this.state.dataSet}
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
          <Bar dataKey="YourCar" fill="#8884d8" barSize={25}/>
          <Bar dataKey="ECar" fill="#82ca9d" barSize={25}/>
        </BarChart>

    );
  }
}
