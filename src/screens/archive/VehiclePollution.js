import React from 'react'
import './style.css'
export default function VehiclePollution() {
  return (
    <div className='backgroundImg'>
        <div style={{color:"white", width:"250px", fontSize:"10px", marginTop:"20px", paddingLeft:"20px", paddingTop:"20px"}}>
            <div>
            All motor vehicle pollutants are released into air and mostly through the exhaust fumes that come out of the tailpipe when the engine operates.
            <ul>
                <li>more than 99.4% of all pollutant gases are invisible</li>
                <li>your car releases emissions even when it's standing still</li>
                <li>other fumes from petrol and lubricants evaporate into the air.</li>
                <li>Pollutants produced by vehicle exhausts include carbon monoxide, hydrocarbons, nitrogen oxides, particles, volatile organic compounds and sulfur dioxide.</li>
            </ul>
            </div>
        </div>
    </div>
  )
}
