import React, {useState} from 'react'
import './style.css'
import mediumCar from '../../../assets/calculation/Car.png'
import smallCar from '../../../assets/calculation/SUV.png'
import vis from '../../../assets/calculation/vis.png'
import piechart from '../../../assets/currentenv/emi-piechart.png'
import CostResultWeek from './CostResultWeek'
import CostResultYear from './CostResultYear'
import Co2ResultWeek from './Co2ResultWeek'
import Co2ResultYear from './Co2ResultYear'
export default function Calculator() {

  const [travelDistance, settravelDistance] = useState(10)
  const [numTraveler, setnumTraveler] = useState(1)
  const [fuelConsumption, setfuelConsumption] = useState(5.0)
  const [mediumCarCSSStyle, setMediumCarCSSStyle] = useState("carImageSelected")
  const [smallCarCSSStyle, setSmallCarCSSStyle] = useState("carImage")
  const [ownCarRadio, setownCarRadio] = useState("yes")
  const [petrolSelect, setpetrolSelect] = useState("91")
  const [ownChargeStationRadio, setownChargeStationRadio] = useState("yes")
  const [carCSSStyleFlag, setcarCSSStyleFlag] = useState(true)
  const [resultCO2, setresultCO2] = useState(0.0)
  const [resultCost, setresultCost] = useState(0.0)
  const [showResult, setshowResult] = useState(false)
  const [ecarCost, setecarCost] = useState(0.0)
  


  const handleClickImageGetId = (e) =>{
    // console.log(e.target.id)
    // console.log(e.currentTarget.id )
    if(e.currentTarget.id === "mediumCar"){
      setMediumCarCSSStyle("carImageSelected")
      setSmallCarCSSStyle("carImage")
      setcarCSSStyleFlag(true)
    } else if(e.currentTarget.id === "smallCar"){
      setMediumCarCSSStyle("carImage")
      setSmallCarCSSStyle("carImageSelected")
      setcarCSSStyleFlag(false)
    }
  }


  const submitForm = () =>{
    // console.log("travelDistance: ", travelDistance)
    // console.log("numTraveler: ", numTraveler)
    // console.log("fuelConsumption: ", fuelConsumption)
    // console.log("carCSSStyleFlag: ", carCSSStyleFlag)
    // console.log("ownCarRadio: ", ownCarRadio)
    // console.log("ownChargeStationRadio: ", ownChargeStationRadio)
    // console.log("petrolSelect: ", petrolSelect)

    calculateCost(travelDistance, numTraveler, fuelConsumption)
    calculateCo2(travelDistance, fuelConsumption,carCSSStyleFlag)
    setshowResult(true)
    window.scrollTo({
      top: 570,
      behavior: "smooth"
  });

  }

  const calculateCost = (travelDistance, numTraveler, fuelConsumption) =>{
    const fuelPrice = {
      "91":2.17,
      "95":2.31,
      "98":2.39,
      "E10":2.14
    }

    if(carCSSStyleFlag){
      setecarCost(Math.round(travelDistance/100*4.64))
    } else{
      setecarCost(Math.round(travelDistance/100*4.77))
    }

    const result = travelDistance * (1+numTraveler*0.1-0.1)*fuelConsumption/100*fuelPrice[petrolSelect]
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
    <div className='mt-4 responsive-calculator' >
        <h3>Calculate your cost and gas emission level</h3>
        <div id="inputArea" className='' style={{display:"flex"}}>
            <div id="leftInput" style={{textAlign:"left",  borderRight: "2px solid #DBDBDB", paddingRight:"40px"}}>
              <div id="distance" className='mt-3'>
                <div>Travel distance per week</div>
                <div style={{display:"flex"}}>
                  <div className="range">
                    <input type="range" id="customRange1" className='slider' style={{width:"300px"}} min="10" max="3000" value={travelDistance} onChange={e => settravelDistance(e.target.value)}/>
                  </div>
                  <output className='oval-grey-output ms-3' value={travelDistance} readOnly>{travelDistance}</output>
                  <span className='ms-1'>km</span>
                </div>
              </div>
              <div id="travlers" className='mt-2'>
                <div>Number of travelers per car</div>
                <div style={{display:"flex"}}>
                  <div className="range">
                    <input type="range" className="form-range" id="customRange2" style={{width:"300px"}} min="1" max="8" value={numTraveler} onChange={e => setnumTraveler(e.target.value)}/>
                  </div>
                  <div className='oval-grey-output ms-3'>{numTraveler}</div>
                  <span className='ms-1'>people</span>
                </div>
              </div>
              <div id="fuelCar" className='mt-2'>
                <div>Do you own a fuel car?</div>
                <div id="radioArea" style={{display:"flex", justifyContent:"space-evenly"}} className="mt-2" onChange={ e => setownCarRadio(e.target.value)}>
                  <div>
                    <input type="radio" id="yes" name="ownCar" value="yes" defaultChecked/>
                    <label className="ms-1 " htmlFor="yes">Yes</label>
                  </div>
                  <div>
                    <input type="radio" id="no" name="ownCar" value="no"/>
                    <label htmlFor="no">No</label>
                  </div>
                </div>
              </div>

              <div id="fuelConsume" className='mt-2'>
                <div>Fuel consumption per 100 km</div>
                <div style={{display:"flex"}}>
                  <div className="range">
                    <input type="range" className="form-range" id="customRange3" style={{width:"300px"}} min="5.0" max="20.0" step="0.1" value={fuelConsumption} onChange={e => setfuelConsumption(e.target.value)}/>
                  </div>
                  <div className='oval-grey-output ms-3'>{fuelConsumption}</div>
                  <span className='ms-1'>L/100km</span>
                </div>
              </div>
              <div id="fuelType" className='mt-2'>
                <div>Type of fuel</div>
                <select id="fuel" name="fuel" onChange={e => setpetrolSelect(e.target.value)}>
                  <option value="91">Standard unleaded 91</option>
                  <option value="95">95-octane unleaded petrol</option>
                  <option value="98">98-octane unleaded</option>
                  <option value="E10">E10</option>
                </select>
              </div>
              <div id="chargeRadio" className='mt-3'>
                <div className='mt-2'>Willing to build own charge station?</div>
                <div id="radioArea2" className="mt-2" style={{display:"flex", justifyContent:"space-evenly"}} onChange={ e => setownChargeStationRadio(e.target.value)}>
                  <div>
                    <input type="radio" id="yes" name="ownChargeStation" value="yes" defaultChecked/>
                    <label htmlFor="yes">Yes</label>
                  </div>
                  <div>
                    <input type="radio" id="no" name="ownChargeStation" value="no"/>
                    <label htmlFor="no">No</label>
                  </div>
                </div>
              </div>
              
            </div>
            <div id="RightInput" style={{textAlign:"left"}}  className="ms-5">
              <div>Select your car type</div>
              <div id="mediumCar" onClick={handleClickImageGetId} className={mediumCarCSSStyle}>
                <img src={mediumCar}  style={{height:"90px", width:"230px", marginTop:"35px"}}></img>
                <div className='mt-3 text-center'>Medium Car</div>
              </div>
              
              <div id="smallCar" onClick={handleClickImageGetId} className={smallCarCSSStyle}>
                <img src={smallCar} style={{height:"90px", marginTop:"45px"}}></img>
                <div className='text-center'>Small Car</div>
              </div>
              
              <input type="submit" value="Submit" className="mt-2" style={{marginLeft:"80px"}} onClick={submitForm}></input>
            </div>
        </div>
        <div className='text-start lead mt-4'>Cost per week</div>
        <div className='text-start lead'>Your weekly cost: {resultCost} AU/week</div>
        <div className='mt-3 d-flex'>
          <div >
            <CostResultWeek resultCost={resultCost} carSize={carCSSStyleFlag} ecarCost={ecarCost}/>
          </div>
          <div >
            <CostResultYear resultCost={resultCost} carSize={carCSSStyleFlag} ecarCost={ecarCost}/>
          </div>
        </div>
        <div className='text-start lead mt-3'>CO2 generated per week</div>
        <div className='text-start lead'>Your car weekly generates: {resultCO2} (g/L)</div>
        <div className='mt-3 d-flex'>
          <div>
             <Co2ResultWeek resultCo2={resultCO2} carSize={carCSSStyleFlag}/>
          </div>
          <div>
              <Co2ResultYear resultCo2={resultCO2} carSize={carCSSStyleFlag}/>
          </div>
        </div>

        {/* <div id="vis" className='mt-5'>
          <div className='text-start lead'>Cost per week</div>
          <div className='d-flex ms-2'>
            <img src={piechart} style={{height:"140px"}}></img>
            <img src={vis} style={{height:"140px"}} className="ms-3"></img>
            <div className='ms-3'>Cost per week</div>
          </div>
          <div className='text-start lead mt-3'>CO2 generated per week</div>
          <div className='d-flex ms-2'>
            <img src={piechart} style={{height:"140px"}}></img>
            <img src={vis} style={{height:"140px"}} className="ms-3"></img>
            <div className='ms-3'>CO2 generated per week</div>
          </div>
          <div></div>
        </div> */}
    </div>
  )
}
