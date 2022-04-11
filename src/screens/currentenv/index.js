import React from 'react'
import Emission from './components/Emission'
import Health from './components/Health'
import './components/style.css'
import QuaterlyEmissionCanvas from './components/QuarterlyEmissionCanvas'
import CurEnv from './components/CurEnv'
import EmissionPowerBI from './components/EmissionPowerBI'

export default function index() {
  return (
    <div>
        <EmissionPowerBI/>
        <CurEnv/>
        <QuaterlyEmissionCanvas/>
        {/* <Health/> */}
    </div>
  )
}
