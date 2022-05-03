import React from 'react'
import Emission from './components/Emission'
import Health from './components/Health'
import './components/style.css'
import QuaterlyEmissionCanvas from './components/QuarterlyEmissionCanvas'
import CurEnv from './components/CurEnv'
import EmissionPowerBI from './components/EmissionPowerBI'

export default function Index() {
  return (
    <div>
        <div className='cur-banner'>
          <div className='cur__title'>Current Situation of Environment</div>
        </div>
        <CurEnv/>
        <EmissionPowerBI/>
        <QuaterlyEmissionCanvas/>
        <Health/>
    </div>
  )
}
