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

  const numToStrWithComma = function(){
    return travelDistance.toLocaleString('en-US')
  }

  useEffect(() => {
    if(location.state.distance != null){
      settravelDistance(location.state.distance)
    }
  
    return () => {
    }
  }, [])
  

  return (
    <div className='question-container'>
        <div className='question__section-title'>Start Your Journey of Comparison</div>
        <div style={{textAlign:"left"}}>
            <div class="progress question__progress">
                <div class="progress-bar w75 question__progress__bg" role="progressbar" style={{width:"14%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='question__title__area'>
                <div >Travel distance per week: </div>
                <img src={helpImage} className="question__title__image" onMouseOver={hoverHelp} onMouseOut={hoverLeave}></img>
                <div className={divDisplay}>The average of your estimated weekly distance travelled</div>
            </div>
            <div className='question__range__container'>
              <div className="range question__range">
                  <input type="range" className="form-range " id="customRange2" min="1" max="1000" value={travelDistance} onChange={e => settravelDistance(e.target.value)}/>                
              </div>
              <div className='question__range-label'>
                  <output>1</output>
                  <output>1,000</output>
              </div>
            </div>
            <div className='question__output__container'>
                <img src={clockImage} className="question__output__image"></img>
                <div className='question__output__oval-shape'>{numToStrWithComma()}</div>
                <span className='question__output__meric'>km</span>
            </div>
        </div>
        <div className='question__button__area'>
          <button type='button' className='question__button' onClick={backToPrevious}>Previous</button>
          <button type='button' className='question__button' onClick={handleClick}>Next</button>
        </div>
    </div>
  )
}
