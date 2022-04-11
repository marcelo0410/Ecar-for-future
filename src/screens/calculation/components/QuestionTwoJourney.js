import React,{useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import helpImage from '../../../assets/calculation/help-circle.png'
import clockImage from '../../../assets/calculation/clock.png'
import './style.css'

export default function QuestionTwoJourney() {

  const [mediumCarCSSStyle, setMediumCarCSSStyle] = useState("carImageSelected")
  const [smallCarCSSStyle, setSmallCarCSSStyle] = useState("carImage")
  const [carCSSStyleFlag, setcarCSSStyleFlag] = useState(true)
  const [travelDistance, settravelDistance] = useState(1)
  const [divDisplay, setdivDisplay] = useState("help-tooltip help-tooltip-unhover")

  const location = useLocation()
  const navigate = useNavigate()

  const backToPrevious = () =>{
    navigate('/q1', {state:{old:true,carType:location.state.carType}});
  }

  const handleClick = () =>{
    navigate('/q3', {state:{old:false,carType:location.state.carType,distance:travelDistance}})
  }

  const hoverHelp = () =>{
    setdivDisplay("help-tooltip help-tooltip-hover")
  }

  const hoverLeave = () =>{
    setdivDisplay("help-tooltip help-tooltip-unhover")

  }

  useEffect(() => {
    
  
    return () => {
    }
  }, [])
  

  return (
    <div className='question-canvas'>
        <div>{console.log(location.state)}</div>
        <div style={{paddingTop:"60px",fontWeight: "bold"}}>Start Your Journey of Comparison</div>
        <div style={{textAlign:"left"}}>
            <div class="progress" style={{width:"600px", marginLeft:"auto", marginRight:"auto", marginTop:"25px"}}>
                <div class="progress-bar w75" role="progressbar" style={{width:"14%", background:"#38F9D7"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='d-flex' style={{fontSize:"30px", marginTop:"50px", marginLeft:"180px",fontWeight: "bold"}}>
                <div >Travel distance per week: </div>
                <img src={helpImage} style={{width:"33px", height:"33px", marginTop:"7px", marginLeft:"5px"}} onMouseOver={hoverHelp} onMouseOut={hoverLeave}></img>
                <div className={divDisplay}>The average of your estimated weekly distance travelled</div>
            </div>
            <div className="range" style={{marginLeft:"280px", marginTop:"50px"}}>
                <input type="range" className="form-range" id="customRange2" style={{width:"1000px"}} min="1" max="1000" value={!location.state.old? location.state.travel:travelDistance} onChange={e => settravelDistance(e.target.value)}/>                
            </div>
            <div className='range-label'>
                <output>1</output>
                <output style={{marginLeft:"925px"}}>1,000</output>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <img src={clockImage} style={{height:"50px"}}></img>
                <div className='oval-grey-output ms-3'>{travelDistance}</div>
                <span className='ms-1'>km</span>
            </div>
        </div>
        <div>
          <button type='button' className='button-submit' style={{marginRight:"100px", marginTop:"50px"}} onClick={backToPrevious}>Previous</button>
          <button type='button' className='button-submit' onClick={handleClick}>Next</button>
        </div>
    </div>
  )
}
