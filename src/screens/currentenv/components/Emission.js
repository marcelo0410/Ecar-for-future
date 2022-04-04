import React from 'react'
import airPollution from '../../../assets/currentenv/air-pollution.png'
import emiPieChart from '../../../assets/currentenv/emi-piechart.png'
export default function Emission() {
  return (
    <div>
      <div style={{fontSize:"25px", fontWeight:"bold", marginTop:"20px", textAlign:"center"}}>Current Situation of Environment</div>
      <div style={{display:"flex", marginTop:"10px"}}>
        <img src={emiPieChart} style={{height:"303px", width:"300px"}}></img>
        <img src={airPollution} style={{height:"310px", width:"650px"}}></img>
      </div>
    </div>
  )
}
