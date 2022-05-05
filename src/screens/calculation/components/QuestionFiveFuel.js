import React,{useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import helpImage from '../../../assets/calculation/help-circle.png'
import oilImage from '../../../assets/calculation/oil.png'
import './style.css'

export default function QuestionThreeTraveler() {


  const [fuelComsumption, setFuelComsumption] = useState(5)

  useEffect(() => {
    if(location.state.old){
      setFuelComsumption(location.state.fuel)
    }
  
    return () => {
      
    }
  }, [])
  

  const location = useLocation()
  const navigate = useNavigate()

  const backToPrevious = () =>{
    navigate('/q4', {state:{carType:location.state.carType,distance:location.state.distance, traveller:location.state.traveller}});
  }

  const handleClick = () =>{

    navigate('/q6', {state:{old:false,ownCar:true,carType:location.state.carType,distance:location.state.distance, traveller:location.state.traveller, fuel:fuelComsumption}})
  }



  return (
    <div className='question-container'>
        <div className='question__section-title'>Start Your Journey of Comparison</div>
        <div>
            <div class="progress question__progress">
                <div class="progress-bar w75 question__progress__bg" role="progressbar" style={{width:"60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='question__title__area'>
                <div >Fuel consumpution per 100km</div>
            </div>
            <div className='question__range__container'>
              <div className="range question__range">
                  <input type="range" className="form-range" id="customRange2" style={{width:"1000px"}} min="5.0" max="30.0" step="0.1" value={fuelComsumption} onChange={e => setFuelComsumption(e.target.value)}/>                
              </div>
              <div className='question__range-label  question__range-label--q3gap'>
                  <output>5</output>
                  <output>30</output>
              </div>
            </div>
            <div className='question__output__container'>
                <img src={oilImage} className="question__output__image"></img>
                <div className='question__output__oval-shape'>{fuelComsumption}</div>
                <span className='question__output__meric'>L/100 km</span>
            </div>
        </div>
        <div className='question__button__area'>
          <button type='button' className='question__button' onClick={backToPrevious}>Previous</button>
          <button type='button' className='question__button' onClick={handleClick}>Next</button>
        </div>
    </div>
  )
}
