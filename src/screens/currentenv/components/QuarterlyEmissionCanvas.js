import React,{useEffect, useState} from 'react'
import QuarterlyEmission from './QuarterlyEmission'
import QuarterlyEmissionOri from './QuarterlyEmissionOri'
import './style.css'

export default function QuarterlyEmissionCanvas() {
  const [visOption, setvisOption] = useState("1")
  return (
    <div>
        <div className='emission'>
            
            <div className='vis-emission'>
              {/* <select name="Council" id="council" onChange={null} value={visOption}>
                <option value="" disabled>Council</option>
                <option value="1" selected>Annual</option>
                <option value="2">Emission by Gas</option>
                <option value="3">Transport</option>
              </select> */}
              <QuarterlyEmissionOri/>
            </div>
            <div className='text-area-emission'>
                <p>As the third major source of CO2 emissions in Australia, the impact of vehicle emissions is far worse than we thought. All motor vehicle pollutants are released into air and mostly through the exhaust fumes that come out of the tailpipe when the engine operates.
                </p>
                <ul>
                    <li>more than 99.4% of all pollutant gases are invisible</li>
                    <li>your car releases emissions even when it's standing still</li>
                    <li>other fumes from petrol and lubricants evaporate into the air.</li>
                </ul>
                <p>Pollutants produced by vehicle exhausts include carbon monoxide, hydrocarbons, nitrogen oxides, particles, volatile organic compounds and sulfur dioxide.</p>
            </div>
        </div>
    </div>
  )
}
