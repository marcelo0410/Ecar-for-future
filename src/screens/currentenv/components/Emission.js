import React from 'react'
import airPollution from '../../../assets/currentenv/air-pollution.png'
import emiPieChart from '../../../assets/currentenv/emi-piechart.png'
export default function Emission() {
  return (
    <div >
      <div style={{fontSize:"25px", fontWeight:"bold", paddingTop:"70px", textAlign:"center"}}>Current Situation of Environment</div>
      <div style={{display:"flex", marginTop:"10px"}}>
        <a href='https://www.iqair.com/au/air-quality-map/australia/victoria/melbourne' target="_blank">
          <img src={airPollution} style={{width:"1000px", height:"450px"}}></img>
        </a>
      </div>
    </div>
  )
}
