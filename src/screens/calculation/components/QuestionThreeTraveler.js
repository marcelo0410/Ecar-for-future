import React,{useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import helpImage from '../../../assets/calculation/help-circle.png'
import peopleImage from '../../../assets/calculation/people.png'
import './style.css'

export default function QuestionThreeTraveler() {

  const [numTraveler, setnumTraveler] = useState(1)
  const [divDisplay, setdivDisplay] = useState("help-tooltip help-tooltip-unhover")


  const location = useLocation()
  const navigate = useNavigate()

  const backToPrevious = () =>{
    navigate('/q2', {state:{old:true,carType:location.state.carType,distance:location.state.distance}});
  }

  const handleClick = () =>{
    navigate('/q4', {state:{old:false,carType:location.state.carType,distance:location.state.distance, traveller:numTraveler}})
  }

  const hoverHelp = () =>{
    setdivDisplay("help-tooltip help-tooltip-hover")
  }

  const hoverLeave = () =>{
    setdivDisplay("help-tooltip help-tooltip-unhover")

  }

  useEffect(() => {
    if(location.state.old){
      setnumTraveler(location.state.traveller)
    }
  
    return () => {
      
    }
  }, [])
  

  return (
    <div className='question-container'>
        <div className='question__section-title'>Start Your Journey of Comparison</div>
        <div>
            <div class="progress question__progress">
                <div class="progress-bar w75 question__progress__bg" role="progressbar" style={{width:"30%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='question__title__area'>
                <div >How many travelers in your family?</div>
                <img src={helpImage} className="question__title__image" onMouseOver={hoverHelp} onMouseOut={hoverLeave}></img>
                <div className={divDisplay}>Gas emission generated is based on the number of your travelers.</div>
            </div>
            <div className='question__range__container'>
              <div className="range question__range" >
                  <input type="range" className="form-range" id="customRange2" min="1" max="10" value={numTraveler} onChange={e => setnumTraveler(e.target.value)}/>                
              </div>
              <div className='question__range-label  question__range-label--q3gap'>
                  <output>0</output>
                  <output>10</output>
              </div>
            </div>
            <div className='question__output__container'>
                <img src={peopleImage} className="question__output__image"></img>
                <div className='question__output__oval-shape'>{numTraveler}</div>
                <span className='question__output__meric'>people</span>
            </div>
        </div>
        <div className='question__button__area'>
          <button type='button' className='question__button' onClick={backToPrevious}>Previous</button>
          <button type='button' className='question__button' onClick={handleClick}>Next</button>
        </div>
    </div>
  )
}
