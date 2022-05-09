import React,{useEffect} from 'react'
import Emission from './components/Emission'
import Health from './components/Health'
import './components/style.css'
import QuaterlyEmissionCanvas from './components/QuarterlyEmissionCanvas'
import CurEnv from './components/CurEnv'
import EmissionPowerBI from './components/EmissionPowerBI'
import Map from './components/EmissionMap/Map'
import geoJSONCED from "../../assets/data/state.json";

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <div className='cur-banner'>
          <div className='cur__title'>Current Situation of Environment</div>
        </div>
        <CurEnv/>
        {/* <EmissionPowerBI/> */}
        <div style={{width:"66%", margin:"0 auto"}}>
          <Map data={geoJSONCED}/>
        </div>
        
        <QuaterlyEmissionCanvas/>
        <Health/>
    </div>
  )
}
