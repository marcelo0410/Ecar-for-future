import React,{useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import helpImage from '../../../assets/calculation/help-circle.png'
import mediumCar from '../../../assets/calculation/SUV.png'
import smallCar from '../../../assets/calculation/Car.png'
import './style.css'

export default function QuestionOneEVModel() {

  const [mediumCarCSSStyle, setMediumCarCSSStyle] = useState("carImage")
  const [smallCarCSSStyle, setSmallCarCSSStyle] = useState("carImageSelected")
  const [carCSSStyleFlag, setcarCSSStyleFlag] = useState(false)
  const [divDisplay, setdivDisplay] = useState("help-tooltip help-tooltip-unhover")
  const location = useLocation()
  const navigate = useNavigate()


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

  useEffect(() => {
    if(location.state.carType){
      setMediumCarCSSStyle("carImageSelected")
      setSmallCarCSSStyle("carImage")
      setcarCSSStyleFlag(true)
    }
  
    return () => {
      
    }
  }, [])
  

  const backToPrevious = () =>{
    navigate('/calculator');
  }

  const handleClick = () =>{
    navigate('/q2', {state:{old:false,carType:carCSSStyleFlag}})
  }

  const hoverHelp = () =>{
    setdivDisplay("help-tooltip help-tooltip-hover")
  }

  const hoverLeave = () =>{
    setdivDisplay("help-tooltip help-tooltip-unhover")

  }

  return (
    <div className='question-container'>
        <div className='question__section-title'>Start Your Journey of Comparison</div>
        <div style={{textAlign:"left"}}>
            <div className="progress question__progress">
                <div class="progress-bar w75 question__progress__bg" role="progressbar" style={{width:"5%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='question__title__area'>
                <div >Select your expected EV model: </div>
                <img src={helpImage} className="question__title__image" onMouseOver={hoverHelp} onMouseOut={hoverLeave}></img>
                <div className={divDisplay}>Depending on the number of passengers and the desire to buy a car,<br/> it can be divided into 5 seats and 7 seats.</div>
            </div>
            <div className='question-one__car-display'>
                <div id="smallCar" onClick={handleClickImageGetId} className={smallCarCSSStyle} style={{marginRight:"150px"}}>
                  <img src={smallCar} style={{width:"360px",height:"120px"}}></img>
                  <div className='text-center' style={{marginTop:"15px"}}>Small Car</div>
                </div>
                <div id="mediumCar" onClick={handleClickImageGetId} className={mediumCarCSSStyle}>
                  <img src={mediumCar} style={{width:"360px", height:"125px"}}></img>
                  <div className='text-center' style={{marginTop:"15px"}}>Medium Car</div>
                </div>
            </div>
            <div className='question-one__hint'>* Small EV data is calculated based on Tesla model 3. Medium EV data is calculated based on Tesla model Y. The conversion rate of charging is approximately 0.8 as well as the distance discount rate.</div>
        </div>
        <div className='question__button__area'>
          <button type='button' className='question__button' onClick={backToPrevious}>Previous</button>
          <button type='button' className='question__button' onClick={handleClick}>Next</button>
        </div>
    </div>
  )
}