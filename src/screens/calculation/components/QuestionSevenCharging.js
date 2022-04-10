import React,{useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import helpImage from '../../../assets/calculation/help-circle.png'
import chargingPipeImage from '../../../assets/calculation/chargingpipe.png'
import chargingPipeBanImage from '../../../assets/calculation/chargingpipe-ban.png'
import CostResultWeek from './CostResultWeek';
import Co2ResultWeek from './Co2ResultWeek';
import './style.css'

export default function QuestionFiveCharging() {

  const [chargingCSSStyle, setChargingCSSStyle] = useState("carImageSelected")
  const [chargingBanCSSStyle, setChargingBanCSSStyle] = useState("carImage")
  const [chargingCSSStyleFlag, setChargingCSSStyleFlag] = useState(true)

  const [resultCO2, setresultCO2] = useState(0.0)
  const [resultCost, setresultCost] = useState(0.0)
  // const [showResult, setshowResult] = useState(false)
  const [ecarCost, setecarCost] = useState(0.0)
  const [petrolSelect, setpetrolSelect] = useState("91")

  const handleClickImageGetId = (e) =>{
    if(e.currentTarget.id === "charging"){
      setChargingCSSStyle("carImageSelected")
      setChargingBanCSSStyle("carImage")
      setChargingCSSStyleFlag(true)
    } else if(e.currentTarget.id === "chargingBan"){
      setChargingCSSStyle("carImage")
      setChargingBanCSSStyle("carImageSelected")
      setChargingCSSStyleFlag(false)
    }
  }

  const location = useLocation()
  const navigate = useNavigate()

  const backToPrevious = () =>{
    navigate('/q6', {state:{carType:location.state.carType,distance:location.state.distance, traveller:location.state.traveller, fuel:location.state.fuel}});
  }


  const handleClick = () =>{

    const {carType,distance, traveller, fuel, fuelType} = location.state
    console.log("a",carType)
    calculateCost(distance, traveller, fuel, carType, fuelType)
    calculateCo2(distance, fuel,carType)
    // setshowResult(true)
    window.scrollTo({
      top: 720,
      behavior: "smooth"
  });

  }

  const resetDirect = () =>{
    window.scrollTo(0, 0);
    navigate('/calculator')
  }

  const calculateCost = (travelDistance, numTraveler, fuelConsumption, carType, fuelType) =>{
    const fuelPrice = {
      "1":2.17,
      "2":2.31,
      "3":2.39,
      "4":2.14,
      "5":2.15

    }

    if(carType){
      setecarCost(Math.round(travelDistance/100*4.64))
    } else{
      setecarCost(Math.round(travelDistance/100*4.77))
    }

    const result = travelDistance * (1+numTraveler*0.1-0.1)*fuelConsumption/100*fuelPrice[fuelType]
    // console.log(Math.round(result))
    setresultCost(Math.round(result))
  }

  const calculateCo2 = (travelDistance, fuelConsumption, carCSSStyleFlag) =>{
    const Co2EmissionCarType = {
      "smallCar":2171.5,
      "mediumCar": 2671.2
    }
    let carType = ""
    if(carCSSStyleFlag){
      carType ="smallCar"
    } else{
      carType = "mediumCar"
    }
    const result = travelDistance /100 *fuelConsumption*Co2EmissionCarType[carType]
    setresultCO2(Math.round(result * 100) / 100)
  }

  return (
    <div>
      <div className='question-canvas'>
          {console.log(location.state)}
          <div style={{paddingTop:"60px",fontWeight: "bold"}}>Start Your Journey of Comparison</div>
          <div style={{textAlign:"left"}}>
              <div class="progress" style={{width:"600px", marginLeft:"460px", marginTop:"25px"}}>
                  <div class="progress-bar w75" role="progressbar" style={{width:"90%", background:"#38F9D7"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className='d-flex' style={{fontSize:"30px", marginTop:"50px", marginLeft:"180px",fontWeight: "bold"}}>
                  <div >Do you have a place to install a charging pile?</div>
                  <img src={helpImage} style={{width:"33px", height:"33px", marginTop:"7px", marginLeft:"5px"}}></img>
              </div>
              <div className='d-flex car-display justify-content-center '>
                  <div>
                    <div id="charging" onClick={handleClickImageGetId} className={chargingCSSStyle} style={{marginRight:"150px"}}>
                      <img src={chargingPipeImage} style={{width:"200px",height:"200px"}}></img>
                      <div className='text-center' style={{marginTop:"10px"}}>Yes</div>
                    </div>
                    
                  </div>
                  <div>
                    <div id="chargingBan" onClick={handleClickImageGetId} className={chargingBanCSSStyle}>
                      <img src={chargingPipeBanImage} style={{width:"200px", height:"200px", paddingLeft:"10px"}} ></img>
                      <div className='text-center' style={{marginTop:"10px"}}>No</div>
                    </div>
                    
                  </div>
                  
              </div>
          </div>
          <div>
            <button type='button' className='button-submit' style={{marginRight:"100px"}} onClick={backToPrevious}>Previous</button>
            <button type='button' className='button-submit' onClick={handleClick}>Submit</button>
          </div>
      </div>
      <div id="visualization" className='vis-word'>
        <div style={{paddingLeft:"30px"}}>Comparing to a fossiled fueled car with a fuel consumption for <span>{location.state.fuel}</span> L/100 km, a <span>{location.state.carType? "medium":"small"}</span> Electric Vehicle cost <span>{location.state.carType? "14.4":"13.2"}</span>  kWh/100 km which is AU$ <span>{resultCost-ecarCost}</span> cheaper per week. And the Carbon Dioxide(CO2) generated is <span>{resultCO2}</span> less than fossil fueled car.</div>
        <div className='d-flex mt-5 vis-chart'>
          <div >
              <div style={{paddingLeft:"30px", fontSize:"24px", fontWeight:"bold"}}>Maintenance cost per week</div>
              
              <CostResultWeek resultCost={resultCost} carSize={location.state.carType} ecarCost={ecarCost}/>
          </div>
          <div>
            <div>
              <div style={{paddingLeft:"50px", fontSize:"24px", fontWeight:"bold"}}>Gas emission generated per week</div>
              <Co2ResultWeek resultCo2={resultCO2} carSize={location.state.carType}/>
            </div>
          </div>
        </div>

      </div>
      <button type='button' className='button-submit' onClick={resetDirect}>Restart</button>
      </div>
  )
}
