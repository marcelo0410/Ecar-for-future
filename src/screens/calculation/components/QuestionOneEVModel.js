import React,{useEffect, useState} from 'react'
import helpImage from '../../../assets/calculation/help-circle.png'
import mediumCar from '../../../assets/calculation/SUV.png'
import smallCar from '../../../assets/calculation/Car.png'
import './style.css'

export default function QuestionOneEVModel() {

  const [mediumCarCSSStyle, setMediumCarCSSStyle] = useState("carImageSelected")
  const [smallCarCSSStyle, setSmallCarCSSStyle] = useState("carImage")
  const [carCSSStyleFlag, setcarCSSStyleFlag] = useState(true)

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
        <div style={{paddingTop:"60px"}}>Start Your Journey of Comparison</div>
        <div style={{textAlign:"left"}}>
            <div class="progress" style={{width:"600px", marginLeft:"460px", marginTop:"25px"}}>
                <div class="progress-bar w75" role="progressbar" style={{width:"25%", background:"#38F9D7"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='d-flex' style={{fontSize:"30px", marginTop:"50px", marginLeft:"180px"}}>
                <div >Select your expected EV model: </div>
                <img src={helpImage} style={{width:"33px", height:"33px", marginTop:"7px", marginLeft:"5px"}}></img>
            </div>
            <div className='d-flex car-display justify-content-center '>
                <div id="smallCar" onClick={handleClickImageGetId} className={smallCarCSSStyle} style={{marginRight:"150px"}}>
                  <img src={smallCar} style={{width:"360px",height:"120px"}}></img>
                  <div className='text-center'>Small Car</div>
                </div>
                <div id="mediumCar" onClick={handleClickImageGetId} className={mediumCarCSSStyle}>
                  <img src={mediumCar} style={{width:"360px", height:"125px"}}></img>
                  <div className='text-center'>Medium Car</div>
                </div>
                

            </div>
            <div></div>
        </div>
    </div>
  )
}
