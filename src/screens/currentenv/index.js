import React from 'react'
import Emission from './components/Emission'
import Health from './components/Health'
import './components/style.css'
import QuaterlyEmissionCanvas from './components/QuarterlyEmissionCanvas'
import CurEnv from './components/CurEnv'
import EmissionPowerBI from './components/EmissionPowerBI'
import Map from './components/EmissionMap/Map'
import geoJSONCED from "../../assets/data/state.json";

export default function Index() {
  return (
    <div> 
        <div className='cur-banner'>
          <div className='cur__title'>Current Situation</div>
          <div className='cur__subtitle'>The current environment here in Victoria is not optimistic, especialy for transport</div>
        </div>
        <CurEnv/>
        {/* <EmissionPowerBI/> */}
        <div style={{width:"66%", margin:"0 auto", background:"#F8F8F8"}}>
          <div>Density Map of Greenhouse Gas Emissions of States in Au</div>
          <Map data={geoJSONCED}/>
        </div>
        
        <QuaterlyEmissionCanvas/>
        <Health/>
    </div>
  )
}
