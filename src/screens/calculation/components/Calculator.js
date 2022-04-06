import React, {useState} from 'react'
import './style.css'
import mediumCar from '../../../assets/calculation/Car.png'
import smallCar from '../../../assets/calculation/SUV.png'
import vis from '../../../assets/calculation/vis.png'
import piechart from '../../../assets/currentenv/emi-piechart.png'
export default function Calculator() {

  const [travelDistance, settravelDistance] = useState(0)
  const [numTraveler, setnumTraveler] = useState(1)
  const [fuelConsumption, setfuelConsumption] = useState(5.0)
  const [carCSSStyle, setcarCSSStyle] = useState("carImage")
  const [carCSSStyleFlag, setcarCSSStyleFlag] = useState(true)
  


  const handleClickImageGetId = (e) =>{
    // console.log(e.target.id)
    console.log(e.currentTarget.id)
    setcarCSSStyle("carImageSelected")
  }

  return (
    <div className='mt-4'>
        <h3>Calculate your cost and gas emission level</h3>
        <div id="inputArea" className='' style={{display:"flex"}}>
            <div id="leftInput" style={{textAlign:"left",  borderRight: "2px solid #DBDBDB", paddingRight:"40px"}}>
              <div id="distance" className='mt-3'>
                <div>Travel distance per week</div>
                <div style={{display:"flex"}}>
                  <div className="range">
                    <input type="range" id="customRange1" className='slider' style={{width:"300px"}} min="0" max="3000" value={travelDistance} onChange={e => settravelDistance(e.target.value)}/>
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
                <div id="radioArea" style={{display:"flex", justifyContent:"space-evenly"}} className="mt-2">
                  <div>
                    <input type="radio" id="yes" name="ownCar" value="yes"/>
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
                <select id="fuel" name="fuel">
                  <option value="91">Standard unleaded 91</option>
                  <option value="95">95-octane unleaded petrol</option>
                  <option value="98">98-octane unleaded</option>
                  <option value="E10">E10</option>
                </select>
              </div>
              <div id="chargeRadio" className='mt-3'>
                <div className='mt-2'>Willing to build own charge station?</div>
                <div id="radioArea" className="mt-2" style={{display:"flex", justifyContent:"space-evenly"}}>
                  <div>
                    <input type="radio" id="yes" name="ownChargeStation" value="yes"/>
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
              <div id="mediumCar" onClick={handleClickImageGetId} className={carCSSStyle}>
                <img src={mediumCar}  style={{height:"90px", width:"230px", marginTop:"35px"}}></img>
                <div className='mt-3 text-center'>Medium Car</div>
              </div>
              
              <div id="smallCar" onClick={handleClickImageGetId} className={carCSSStyle}>
                <img src={smallCar} style={{height:"90px", marginTop:"45px"}}></img>
                <div className='text-center'>Small Car</div>
              </div>
              
              <input type="submit" value="Submit" className="mt-5" style={{marginLeft:"80px"}}></input>
            </div>
        </div>
        <div id="vis" className='mt-5'>
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
        </div>
    </div>
  )
}
