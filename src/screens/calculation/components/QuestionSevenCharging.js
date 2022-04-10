import React,{useEffect, useState} from 'react'
import helpImage from '../../../assets/calculation/help-circle.png'
import chargingPipeImage from '../../../assets/calculation/chargingpipe.png'
import chargingPipeBanImage from '../../../assets/calculation/chargingpipe-ban.png'
import './style.css'

export default function QuestionFiveCharging() {

  const [chargingCSSStyle, setChargingCSSStyle] = useState("carImageSelected")
  const [chargingBanCSSStyle, setChargingBanCSSStyle] = useState("carImage")
  const [chargingCSSStyleFlag, setChargingCSSStyleFlag] = useState(true)

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

  const submitForm = () =>{

  }

  return (
    <div className='question-canvas'>
        <div style={{paddingTop:"60px",fontWeight: "bold"}}>Start Your Journey of Comparison</div>
        <div style={{textAlign:"left"}}>
            <div class="progress" style={{width:"600px", marginLeft:"460px", marginTop:"25px"}}>
                <div class="progress-bar w75" role="progressbar" style={{width:"86%", background:"#38F9D7"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='d-flex' style={{fontSize:"30px", marginTop:"50px", marginLeft:"180px",fontWeight: "bold"}}>
                <div >Do you have a place to install a charging pile?</div>
                <img src={helpImage} style={{width:"33px", height:"33px", marginTop:"7px", marginLeft:"5px"}}></img>
            </div>
            <div className='d-flex car-display justify-content-center '>
                <div>
                  <div id="charging" onClick={handleClickImageGetId} className={chargingCSSStyle} style={{marginRight:"150px"}}>
                    <img src={chargingPipeImage} style={{width:"200px",height:"200px"}}></img>
                    <div className='text-center' style={{marginTop:"10px"}}>Yes</div>
                  </div>
                  
                </div>
                <div>
                  <div id="chargingBan" onClick={handleClickImageGetId} className={chargingBanCSSStyle}>
                    <img src={chargingPipeBanImage} style={{width:"200px", height:"200px", paddingLeft:"10px"}}></img>
                    <div className='text-center' style={{marginTop:"10px"}}>No</div>
                  </div>
                  
                </div>
                
            </div>
        </div>
        <div>
          <button type='button' className='button-submit' style={{marginRight:"100px"}}>Previous</button>
          <button type='button' className='button-submit'>Submit</button>
        </div>
    </div>
  )
}
