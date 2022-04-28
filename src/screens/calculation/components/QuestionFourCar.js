import React,{useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import helpImage from '../../../assets/calculation/help-circle.png'
import bluecarImage from '../../../assets/calculation/bluecar.png'
import bluecarBanImage from '../../../assets/calculation/bluecar-ban.png'
import './style.css'

export default function QuestionFourCar() {

  const [chargingCSSStyle, setChargingCSSStyle] = useState("carImageSelected")
  const [chargingBanCSSStyle, setChargingBanCSSStyle] = useState("carImage")
  const [chargingCSSStyleFlag, setChargingCSSStyleFlag] = useState(true)
  const [divDisplay, setdivDisplay] = useState("help-tooltip help-tooltip-unhover")


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
    navigate('/q3', {state:{old:true,carType:location.state.carType,distance:location.state.distance, traveller:location.state.traveller}});
  }

  useEffect(() => {
  
    return () => {
      
    }
  }, [])
  



  const handleClick = () =>{
    if(chargingCSSStyleFlag){
      navigate('/q5', {state:{old:false,ownCar:true,carType:location.state.carType,distance:location.state.distance, traveller:location.state.traveller}})
    } else{
      navigate('/q7', {state:{old:false,ownCar:false,carType:location.state.carType,distance:location.state.distance, traveller:location.state.traveller}})
      
    }
    
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
        <div>
            <div class="progress question__progress">
                <div class="progress-bar w75 question__progress__bg" role="progressbar" style={{width:"45%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='question__title__area'>
                <div >Do you currently own a fuel car? </div>
                <img src={helpImage} className="question__title__image"  onMouseOver={hoverHelp} onMouseOut={hoverLeave}></img>
                <div className={divDisplay}>If yes, you will need to input fuel consumption information of your car.<br/> If no, the system will input data for reference.</div>
            </div>
            <div className='question-one__car-display'>
                <div>
                  <div id="charging" onClick={handleClickImageGetId} className={chargingCSSStyle} style={{marginRight:"150px"}}>
                    <img src={bluecarImage} style={{width:"300px",height:"100px", marginTop:"45px", marginBottom:'25px', paddingLeft:"10px"}}></img>
                    <div className='text-center' style={{marginTop:"10px"}}>Yes</div>
                  </div>
                  
                </div>
                <div>
                  <div id="chargingBan" onClick={handleClickImageGetId} className={chargingBanCSSStyle}>
                    <img src={bluecarBanImage} style={{width:"300px", height:"170px", paddingLeft:"10px"}}></img>
                    <div className='text-center' style={{marginTop:"10px"}}>No</div>
                  </div>
                </div>
                
            </div>
        </div>
        <div className='question__button__area question__button__area--q4mt'>
          <button type='button' className='question__button' onClick={backToPrevious}>Previous</button>
          <button type='button' className='question__button' onClick={handleClick}>Next</button>
        </div>
    </div>
  )
}
