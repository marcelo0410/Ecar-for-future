import React from 'react'
import Emission from './components/Emission'
import Footprint from './components/Footprint'
import VehiclePollution from './components/VehiclePollution'
import Health from './components/Health'
import News from './components/News'
import './components/style.css'

export default function index() {
  return (
    <div>
        <Emission/>
        <Footprint/>
        <VehiclePollution/>
        <Health/>
        <News/>
    </div>
  )
}
