import React,{useEffect, useState} from 'react'
import helpImage from '../../../assets/calculation/help-circle.png'
import Image91 from '../../../assets/calculation/91.png'
import Image95 from '../../../assets/calculation/95.png'
import Image98 from '../../../assets/calculation/98.png'
import ImageE10 from '../../../assets/calculation/E10.png'
import ImageE85 from '../../../assets/calculation/E85.png'

import './style.css'

export default function QuestionSevenFuel() {

  const [fuelCSSStyle, setFuelCSSStyle] = useState("1")
  const [chargingBanCSSStyle, setChargingBanCSSStyle] = useState("carImage")
  const [chargingCSSStyleFlag, setChargingCSSStyleFlag] = useState(true)

  const handleClickImageGetId = (e) =>{
    console.log(e.target.id)
    if(e.target.id != null){
      setFuelCSSStyle(e.target.id.toString())
    }
    
  }

  return (
    <div className='question-canvas'>
        <div style={{paddingTop:"60px",fontWeight: "bold"}}>Start Your Journey of Comparison</div>
        <div style={{textAlign:"left"}}>
            <div className="progress" style={{width:"600px", marginLeft:"460px", marginTop:"25px"}}>
                <div className="progress-bar w75" role="progressbar" style={{width:"70%", background:"#38F9D7"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='d-flex' style={{fontSize:"30px", marginTop:"50px", marginLeft:"180px",fontWeight: "bold"}}>
                <div >Which type of fuel that you use the most?</div>
                <img src={helpImage} style={{width:"33px", height:"33px", marginTop:"7px", marginLeft:"5px"}}></img>
            </div>
            <div className='d-flex car-display justify-content-center '>
                <div >
                  <div   onClick={handleClickImageGetId} className={fuelCSSStyle.toString() === "1"? "carImageSelected":"carImage"}>
                    <img id="1" src={Image91} style={{width:"143px",height:"143px"}}></img>
                    <div className='text-center' style={{marginTop:"10px", paddingRight:"20px"}}>Standard unleaded 91</div>
                  </div>
                  
                </div>
                <div>
                  <div   onClick={handleClickImageGetId} className={fuelCSSStyle.toString() === "2"? "carImageSelected":"carImage"}>
                    <img id="2" src={Image95} style={{width:"143px", height:"143px", paddingLeft:"10px"}}></img>
                    <div className='text-center' style={{marginTop:"10px"}}>Premium 95-octane<br/>  unleaded</div>
                  </div>
                </div>
                <div>
                  <div  onClick={handleClickImageGetId} className={fuelCSSStyle.toString() === "3"? "carImageSelected":"carImage"}>
                    <img id="3" src={Image98} style={{width:"143px", height:"143px", paddingLeft:"10px"}}></img>
                    <div className='text-center' style={{marginTop:"10px"}}>Premium 98-octane<br/> unleaded</div>
                  </div>
                </div>
                <div>
                  <div  onClick={handleClickImageGetId} className={fuelCSSStyle.toString() === "4"? "carImageSelected":"carImage"}>
                    <img id="4" src={ImageE10} style={{width:"143px", height:"143px", paddingLeft:"10px"}}></img>
                    <div className='text-center' style={{marginTop:"10px"}}>E10</div>
                  </div>
                </div>
                <div>
                  <div  onClick={handleClickImageGetId} className={fuelCSSStyle.toString() === "5"? "carImageSelected":"carImage"}>
                    <img id="5" src={ImageE85} style={{width:"143px", height:"143px", paddingLeft:"10px"}}></img>
                    <div className='text-center' style={{marginTop:"10px"}}>E85</div>
                  </div>
                </div>
                
            </div>
        </div>
        <div>
          <button type='button' className='button-submit' style={{marginRight:"100px"}}>Previous</button>
          <button type='button' className='button-submit'>Next</button>
        </div>
    </div>
  )
}
