import React from 'react'
import Emission from './components/Emission'
import Health from './components/Health'
import style from './components/style.module.css'
import QuaterlyEmissionCanvas from './components/QuarterlyEmissionCanvas'
import CurEnv from './components/CurEnv'
import EmissionPowerBI from './components/EmissionPowerBI'
import Map from './components/EmissionMap/Map'
import geoJSONCED from "../../assets/data/state.json";

export default function Index() {
  return (
    <div> 
        <div className={style.cur__banner}>
          <div className={style.cur__title}>Current Situation</div>
          <div className={style.cur__subtitle}>The current environment here in Victoria is not optimistic, especialy for transport</div>
        </div>
        <section id="tile__data__infographic">
          <CurEnv/>
        </section>
        <section className={style.cur__emisec} >
          <div className={style.cur__emisec__title}>Density Map of Greenhouse Gas Emissions of States in Au</div>
          <div className={style.cur__emisec__map}>
            <div>
              <Map data={geoJSONCED}/><span></span>
            </div>
            
            <div>123</div>
          </div>
          
        </section>
        <section>
          <QuaterlyEmissionCanvas/>
        </section>
        <section>
          <Health/>
        </section>

    </div>
  )
}
