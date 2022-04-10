import React,{useEffect, useState} from 'react'
import helpImage from '../../../assets/calculation/help-circle.png'
import mediumCar from '../../../assets/calculation/SUV.png'
import smallCar from '../../../assets/calculation/Car.png'
import clockImage from '../../../assets/calculation/clock.png'
import './style.css'

export default function QuestionTwoJourney() {

  const [mediumCarCSSStyle, setMediumCarCSSStyle] = useState("carImageSelected")
  const [smallCarCSSStyle, setSmallCarCSSStyle] = useState("carImage")
  const [carCSSStyleFlag, setcarCSSStyleFlag] = useState(true)
  const [travelDistance, settravelDistance] = useState(10)

  const handleClickImageGetId = (e) =>{
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

  return (
    <div className='question-canvas'>
        <div style={{paddingTop:"60px",fontWeight: "bold"}}>Start Your Journey of Comparison</div>
        <div style={{textAlign:"left"}}>
            <div class="progress" style={{width:"600px", marginLeft:"460px", marginTop:"25px"}}>
                <div class="progress-bar w75" role="progressbar" style={{width:"25%", background:"#38F9D7"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='d-flex' style={{fontSize:"30px", marginTop:"50px", marginLeft:"180px",fontWeight: "bold"}}>
                <div >Travel distance per week: </div>
                <img src={helpImage} style={{width:"33px", height:"33px", marginTop:"7px", marginLeft:"5px"}}></img>
            </div>
            <div className="range" style={{marginLeft:"280px", marginTop:"50px"}}>
                <input type="range" className="form-range" id="customRange2" style={{width:"1000px"}} min="0" max="50000" value={travelDistance} onChange={e => settravelDistance(e.target.value)}/>                
            </div>
            <div className='range-label'>
                <output>0</output>
                <output style={{marginLeft:"925px"}}>50,000</output>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <img src={clockImage} style={{height:"50px"}}></img>
                <div className='oval-grey-output ms-3'>{travelDistance}</div>
                <span className='ms-1'>km</span>
            </div>
        </div>
        <div>
          <button type='button' className='button-submit' style={{marginRight:"100px", marginTop:"50px"}}>Previous</button>
          <button type='button' className='button-submit'>Next</button>
        </div>
    </div>
  )
}
