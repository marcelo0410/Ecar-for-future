import React,{useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import helpImage from '../../../assets/calculation/help-circle.png'
import chargingPipeImage from '../../../assets/calculation/chargingpipe.png'
import chargingPipeBanImage from '../../../assets/calculation/chargingpipe-ban.png'
import solarVicImage from '../../../assets/calculation/solar-vic-logo.png'
import CostResultWeek from './CostResultWeek';
import Co2ResultWeek from './Co2ResultWeek';
import './style.css'

export default function QuestionFiveCharging() {

  const [chargingCSSStyle, setChargingCSSStyle] = useState("carImageSelected")
  const [chargingBanCSSStyle, setChargingBanCSSStyle] = useState("carImage")
  const [chargingCSSStyleFlag, setChargingCSSStyleFlag] = useState(true)
  const [divDisplay, setdivDisplay] = useState("help-tooltip help-tooltip-unhover")


  const [resultCO2, setresultCO2] = useState(0.0)
  const [resultCost, setresultCost] = useState(0.0)
  // const [showResult, setshowResult] = useState(false)
  const [ecarCost, setecarCost] = useState(0.0)
  const [petrolSelect, setpetrolSelect] = useState("91")

  const [fuelOption, setfuelOption] = useState(6)
  let a = "90%"

  useEffect(() => {
    
  
    return () => {
      
    }
  }, [fuelOption])
  
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
    if(location.state.ownCar === true){
      navigate('/q6', {state:{ownCar:true,carType:location.state.carType,distance:location.state.distance, traveller:location.state.traveller, fuel:location.state.fuel}});
    } else{
      navigate('/q4', {state:{ownCar:true,carType:location.state.carType,distance:location.state.distance, traveller:location.state.traveller,fuelType:location.state.fuelType}});

    }
    
  }


  const handleClick = () =>{

    a = "100%"
    if(location.state.ownCar){
      console.log("123")
      const {carType,distance, traveller, fuel, fuelType} = location.state
      calculateCost(distance, traveller, fuel, carType, fuelType)
      calculateCo2(distance, fuel,carType)
      setfuelOption(fuel)
    } else{
      const {carType,distance,ownCar,traveller} = location.state;
      let fuel = 0
      if(carType){
        fuel=10
        setfuelOption(10)
      } else{
        fuel=6
        setfuelOption(6)
      }
    
      let fuelType = "1"
      calculateCost(distance, traveller, fuel, carType, fuelType)
      calculateCo2(distance, fuel,carType)
    }
    
    
    // setshowResult(true)
    window.scrollTo({
      top: 720,
      behavior: "smooth"
  });

  }

  
  const hoverHelp = () =>{
    setdivDisplay("help-tooltip help-tooltip-hover")
  }

  const hoverLeave = () =>{
    setdivDisplay("help-tooltip help-tooltip-unhover")

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
    console.log(fuelConsumption)
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
    console.log(fuelConsumption)
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
          {/* {console.log(location.state)} */}
          <div style={{paddingTop:"60px",fontWeight: "bold"}}>Start Your Journey of Comparison</div>
          <div style={{textAlign:"left"}}>
              <div class="progress" style={{width:"600px", marginLeft:"460px", marginTop:"25px"}}>
                  <div class="progress-bar w75" role="progressbar" style={{width:a, background:"#38F9D7"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className='d-flex' style={{fontSize:"30px", marginTop:"50px", marginLeft:"180px",fontWeight: "bold"}}>
                  <div >Do you have a place to install a charging pile?</div>
                  <img src={helpImage} style={{width:"33px", height:"33px", marginTop:"7px", marginLeft:"5px"}} onMouseOver={hoverHelp} onMouseOut={hoverLeave}></img>
                  <div className={divDisplay}>The price of the electric may be vary due to the place <br/>that you charge your car. The price of your own charging pile is the lowest.</div>
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
      <div id="visualization" className='vis'>
        <div className='vis-word'>For a <span>{location.state.traveller}</span> people family who owns a fossil fueled car which consumpts <span>{fuelOption}</span> L/100 km, comparing with a <span>{location.state.carType? "Medium":"Small"}</span> EV, the result is as below. </div>
        <div className='d-flex mt-5 vis-chart'>
          <div>
              <div style={{paddingLeft:"0px", fontSize:"24px", fontWeight:"bold", marginBottom:"30px"}}>Maintenance cost per week</div>
              <div style={{paddingRight:"90px"}}>
                <CostResultWeek resultCost={resultCost} carSize={location.state.carType} ecarCost={ecarCost}/>
              </div>
          </div>
          <div>
            <div>
              <div style={{paddingLeft:"50px", fontSize:"24px", fontWeight:"bold", marginBottom:"30px"}}>Gas emission generated per week</div>
              <div style={{marginLeft:"90px"}}>
                <Co2ResultWeek resultCo2={resultCO2} carSize={location.state.carType}/>
              </div>
            </div>
          </div>
        </div>
        <div className='vis-word' style={{paddingLeft:"10px", marginTop:"30px"}}>Comparing to a fossiled fueled car with a fuel consumption for <span>{fuelOption}</span> L/100 km, a <span>{location.state.carType? "Medium":"Small"}</span> Electric Vehicle cost<br/> <span>{location.state.carType? "14.4":"13.2"}</span>  kWh/100 km which is AU$ <span>{resultCost-ecarCost}</span> cheaper per week. And the Carbon Dioxide(CO2) generated is <span>{resultCO2}</span> less than fossil fueled car.</div>

      </div>
        <button type='button' className='button-submit mt-6' onClick={resetDirect}>Restart</button>

        <div id="subsidy" className='card-80'>
          <div>
            <h2>Policy Subsidy</h2>
            <img src={solarVicImage}></img>
          </div>
          
          <p>The Victorian Government provide the Zero Emissions Vehicle (ZEV) Subsidy to reduces the upfront cost of a new zero emissions vehicle aiming to encourage more Victorians driving the future of transport sooner.
This subsidy Valued at $3,000 for eligible new ZEVs purchased cusmors. For details of the eligibility terms and subsidy application details, please refer to: <a href='https://www.solar.vic.gov.au/zero-emissions-vehicle-subsidy' target="_blank">https://www.solar.vic.gov.au/zero-emissions-vehicle-subsidy</a> </p>
        </div>
      </div>
  )
}
