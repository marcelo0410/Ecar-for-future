import React from 'react'
import Emission from './components/Emission'
import Health from './components/Health'
import './components/style.css'
import QuaterlyEmissionCanvas from './components/QuarterlyEmissionCanvas'
import CurEnv from './components/CurEnv'

export default function index() {
  return (
    <div>
        <Emission/>
        <CurEnv/>
        <QuaterlyEmissionCanvas/>
        {/* <Health/> */}
    </div>
  )
}
