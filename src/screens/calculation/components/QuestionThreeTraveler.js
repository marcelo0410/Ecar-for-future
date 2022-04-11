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

  return (
    <div className='question-canvas'>
        <div>{console.log(location.state)}</div>
        <div style={{paddingTop:"60px",fontWeight: "bold"}}>Start Your Journey of Comparison</div>
        <div style={{textAlign:"left"}}>
            <div class="progress" style={{width:"600px", marginLeft:"460px", marginTop:"25px"}}>
                <div class="progress-bar w75" role="progressbar" style={{width:"30%", background:"#38F9D7"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='d-flex' style={{fontSize:"30px", marginTop:"50px", marginLeft:"180px",fontWeight: "bold"}}>
                <div >How many travelers in your family?</div>
                <img src={helpImage} style={{width:"33px", height:"33px", marginTop:"7px", marginLeft:"5px"}} onMouseOver={hoverHelp} onMouseOut={hoverLeave}></img>
                <div className={divDisplay}>Gas emission generated is based on the number of your travelers.</div>
            </div>
            <div className="range" style={{marginLeft:"280px", marginTop:"50px"}}>
                <input type="range" className="form-range" id="customRange2" style={{width:"1000px"}} min="1" max="10" value={numTraveler} onChange={e => setnumTraveler(e.target.value)}/>                
            </div>
            <div className='range-label'>
                <output>0</output>
                <output style={{marginLeft:"960px"}}>10</output>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <img src={peopleImage} style={{height:"50px"}}></img>
                <div className='oval-grey-output ms-3'>{numTraveler}</div>
                <span className='ms-1'>people</span>
            </div>
        </div>
        <div>
          <button type='button' className='button-submit' style={{marginRight:"100px", marginTop:"50px"}} onClick={backToPrevious}>Previous</button>
          <button type='button' className='button-submit' onClick={handleClick}>Next</button>
        </div>
    </div>
  )
}
