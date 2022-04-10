import React from 'react'
import Tableau from "tableau-react";
import airPollution from '../../../assets/currentenv/air-pollution.png'
import emiPieChart from '../../../assets/currentenv/emi-piechart.png'
export default function Emission() {
  const options = {
    hideTabs: true,
    hideToolbar: true
  };
  return (
    <div >
      
      <div style={{marginTop:"50px"}}>
        <div>
          <Tableau
          url="https://prod-apnortheast-a.online.tableau.com/t/zshatest/views/test_map/1?:embed=y&:display_count=n&:showVizHome=n&:origin=viz_share_link"
          options={options}/>
        </div>
      </div>
    </div>
  )
}
