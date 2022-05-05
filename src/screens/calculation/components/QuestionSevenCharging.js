import React,{useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import helpImage from '../../../assets/calculation/help-circle.png'
import chargingPipeImage from '../../../assets/calculation/chargingpipe.png'
import chargingPipeBanImage from '../../../assets/calculation/chargingpipe-ban.png'
import solarVicImage from '../../../assets/calculation/solar-vic-logo.png'
import treeImage from '../../../assets/calculation/tree.png'
import moneyImage from '../../../assets/calculation/money.png'
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
      navigate('/q6', {state:{old:true,ownCar:true,carType:location.state.carType,distance:location.state.distance, traveller:location.state.traveller, fuel:location.state.fuel,fuelType:location.state.fuelType }});
    } else{
      navigate('/q4', {state:{old:true,ownCar:true,carType:location.state.carType,distance:location.state.distance, traveller:location.state.traveller,fuelType:location.state.fuelType}});

    }
    
  }


  const handleClick = () =>{

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
      top: 580,
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
    setresultCO2(Math.round(result * 100/1000) / 100 )
  }

  return (
    <div>
      <div className='question-container'>
          <div className='question__section-title'>Start Your Journey of Comparison</div>
          <div>
              <div class="progress question__progress">
                  <div class="progress-bar w75 question__progress__bg" role="progressbar" style={{width:"100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="question__title__area">
                  <div >Do you have a place to install a charging pile?</div>
                  <img src={helpImage} className="question__title__image" onMouseOver={hoverHelp} onMouseOut={hoverLeave}></img>
                  <div className={divDisplay}>The price of the electric may be vary due to the place <br/>that you charge your car. The price of your own charging pile is the lowest.</div>
              </div>
              <div className='question-one__car-display'>
                  <div>
                    <div id="charging" onClick={handleClickImageGetId} className={chargingCSSStyle} style={{marginRight:"150px"}}>
                      <img src={chargingPipeImage} style={{width:"200px",height:"200px", paddingLeft:"10px", paddingRight:"10px", paddingBottom:"5px"}}></img>
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
          <div className='question__button__area'>
            <button type='button' className='question__button' onClick={backToPrevious}>Previous</button>
            <button type='button' className='question__button' onClick={handleClick}>Next</button>
        </div>
      </div>
      <div id="visualization" className='vis'>
        <div className='vis-word'>For a <span>{location.state.traveller}</span> people family who owns a fossil fueled car which consumpts <span>{fuelOption}</span> L/100 km, comparing with a <span>{location.state.carType? "Medium":"Small"}</span> EV, the result is as below. </div>
        <div className='d-flex mt-5 vis-chart'>
          <div>
              <div style={{paddingLeft:"0px", fontSize:"24px", fontWeight:"bold", marginBottom:"30px", textAlign:"center"}}>Maintenance cost per year</div>
              {/* <div style={{paddingRight:"90px"}}>
                <CostResultWeek resultCost={resultCost} carSize={location.state.carType} ecarCost={ecarCost}/>
              </div> */}
              <div style={{width:"400px",height:"240px"}}>
              {[...Array(Math.round(resultCost*52/250) >= 60? 60:Math.round(resultCost*52/250))].map((e, i) => <img src={moneyImage} key={i} style={{width:"40px"}}></img>)}

              </div>
              <div id="resultcost_desc" style={{fontSize:"24px", marginTop:"20px", textAlign:"center"}}>You have saved <span style={{textDecoration:"underline", fontWeight:"bold"}}>{(resultCost*52).toLocaleString('en-US', {  style: 'currency',
                  currency: 'USD',})}</span>  every year!</div>
              {/* <div id="resultcost_desc_sub" style={{fontSize:"20px", textAlign:"center", marginTop:"8px"}}>${resultCost} per week</div> */}
          </div>
          <div>
            <div>
              <div style={{ fontSize:"24px", fontWeight:"bold", marginBottom:"30px", textAlign:"center"}}>CO2 emission generated per year</div>
              {/* <div style={{marginLeft:"90px"}}>
                <Co2ResultWeek resultCo2={resultCO2} carSize={location.state.carType}/>
              </div> */}
              <div style={{width:"400px", height:"240px", marginTop:"28px"}}>
                {/* {resultCO2*52/167} */}
                {[...Array(Math.round(resultCO2*52/167) > 60? 60:(Math.round(resultCO2*52/167)))].map((e, i) => <img src={treeImage} key={i} style={{width:"40px"}}></img>)}

              
                {/* <img src={treeImage} style={{width:"40px"}}></img> */}
              </div>
              <div id="resultcost_desc" style={{fontSize:"24px", marginTop:"20px", textAlign:"center"}}>You have planted <span style={{textDecoration:"underline", fontWeight:"bold"}}> {Math.round((resultCO2*52/167*100))/100} </span> trees every year!</div>
                 {/* <div id="resultcost_desc_sub" style={{fontSize:"20px", textAlign:"center", marginTop:"8px"}}>{resultCO2}kg per week</div> */}
            </div>
          </div>
        </div>
        <div className='vis-word' style={{paddingLeft:"10px", marginTop:"30px", textAlign:"center"}}>
          Comparing to a fossiled fueled car with a fuel consumption for <span>{fuelOption}</span> L/100 km, a <span>{location.state.carType? "Medium":"Small"}</span> Electric Vehicle cost<br/> <span>{location.state.carType? "14.4":"13.2"}</span>  kWh/100 km which is AU$ <span>{resultCost-ecarCost}</span> cheaper per week. And the Carbon Dioxide(CO2) generated is <span>{resultCO2}</span> kg less than fossil fueled car.
        </div>

      </div>
        <button type='button' className='question__button mt-6' onClick={resetDirect}>Restart</button>

        <div id="subsidy" className='card-80'>
          <div>
            <h2>Policy Subsidy</h2>
            <img src={solarVicImage}></img>
          </div>
          
          <p>The Victorian Government provide the Zero Emissions Vehicle (ZEV) Subsidy to reduces the upfront cost of a new zero emissions vehicle aiming to encourage more Victorians driving the future of transport sooner.
This subsidy Valued at <b>$3,000</b> for eligible new ZEVs purchased cusmors. For details of the eligibility terms and subsidy application details, please refer to: <a href='https://www.solar.vic.gov.au/zero-emissions-vehicle-subsidy' target="_blank">https://www.solar.vic.gov.au/zero-emissions-vehicle-subsidy</a> </p>
        </div>
        
      </div>
  )
}
