import React,{useEffect, useState} from 'react'
import QuarterlyEmissionAnnual from './QuarterlyEmissionAnnual'
import QuarterlyEmissionType from './QuarterlyEmissionType'
import QuarterlyEmissionTransport from './QuarterlyEmissionTransport'
import axios from 'axios'
import './style.css'

export default function QuarterlyEmissionCanvas() {
  const [visOption, setvisOption] = useState("1")
  const [emissionAnnualData, setEmissionAnnualData] = useState("")
  const [emissionTypeData, setEmissionTypeData] = useState("")

  useEffect(async () => {
    const result = await axios(
      'http://ecarforfuture-env.eba-pbjsb4gy.ap-southeast-2.elasticbeanstalk.com/v1/api/emissionAll/findAll2',
    );

    setEmissionAnnualData(result.data);
    console.log(emissionAnnualData)
  }, []);

  useEffect(async () => {
    const result = await axios(
      'http://ecarforfuture-env.eba-pbjsb4gy.ap-southeast-2.elasticbeanstalk.com/v1/api/emission/findAll',
    );

    setEmissionTypeData(result.data);
  }, []);

  const updateVisOption = (evt) =>{
    if(evt.target.value !== visOption){
      setvisOption(evt.target.value.toString())
    }
    
  }

  // const requestEmissionData = () =>{
  //   if(visOption === '1'){
  //     axios
  //     .get('http://localhost:8080/v1/api/emissionAll/findAll2')
  //     .then(res =>{
  //       setData(res.data)
  //     })
  //   } else if(visOption === '2'){
  //     axios
  //     .get('http://localhost:8080/v1/api/ecar/findAll')
  //     .then(res =>{
  //       setData(res.data)
  //     })
  //   } else{
  //     axios
  //     .get('http://localhost:8080/v1/api/emission/findAll')
  //     .then(res =>{
  //       setData(res.data)
  //     })
  //   }

  // }

  return (
    <div>
        <div className='emission'>
            <div className='vis-emission'>
              <select name="Council" id="council" onChange={updateVisOption} value={visOption}>
                <option value="" disabled>Emission</option>
                <option value="1">Annual</option>
                <option value="2">Emission by Gas</option>
                <option value="3">Transport</option>
              </select>
              {visOption === '1' && <QuarterlyEmissionAnnual visData={emissionAnnualData}/>}
              {visOption === '2' && <QuarterlyEmissionType visData={emissionTypeData}/>}
              {visOption === '3' && <QuarterlyEmissionTransport visData={emissionTypeData}/>}

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
