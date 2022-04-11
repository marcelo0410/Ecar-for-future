import React,{useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import helpImage from '../../../assets/calculation/help-circle.png'
import oilImage from '../../../assets/calculation/oil.png'
import './style.css'

export default function QuestionThreeTraveler() {


  const [fuelComsumption, setFuelComsumption] = useState(1)

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
    <div className='question-canvas'>
        <div style={{paddingTop:"60px",fontWeight: "bold"}}>Start Your Journey of Comparison</div>
        <div style={{textAlign:"left"}}>
            <div class="progress" style={{width:"600px", marginLeft:"460px", marginTop:"25px"}}>
                <div class="progress-bar w75" role="progressbar" style={{width:"60%", background:"#38F9D7"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='d-flex' style={{fontSize:"30px", marginTop:"50px", marginLeft:"180px",fontWeight: "bold"}}>
                <div >Fuel consumpution per 100km</div>
                {/* <img src={helpImage} style={{width:"33px", height:"33px", marginTop:"7px", marginLeft:"5px"}} ></img> */}
            </div>
            <div className="range" style={{marginLeft:"280px", marginTop:"50px"}}>
                <input type="range" className="form-range" id="customRange2" style={{width:"1000px"}} min="1" max="40.0" step="0.1" value={fuelComsumption} onChange={e => setFuelComsumption(e.target.value)}/>                
            </div>
            <div className='range-label'>
                <output>1</output>
                <output style={{marginLeft:"960px"}}>40</output>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <img src={oilImage} style={{height:"50px"}}></img>
                <div className='oval-grey-output ms-3'>{fuelComsumption}</div>
                <span className='ms-1'>L/100 km</span>
            </div>
        </div>
        <div>
          <button type='button' className='button-submit' style={{marginRight:"100px", marginTop:"50px"}} onClick={backToPrevious}>Previous</button>
          <button type='button' className='button-submit' onClick={handleClick}>Next</button>
        </div>
    </div>
  )
}
