import React,{useEffect, useState} from 'react'
import helpImage from '../../../assets/calculation/help-circle.png'
import peopleImage from '../../../assets/calculation/people.png'
import './style.css'

export default function QuestionThreeTraveler() {


  const [numTraveler, setnumTraveler] = useState(1)

  return (
    <div className='question-canvas'>
        <div style={{paddingTop:"60px",fontWeight: "bold"}}>Start Your Journey of Comparison</div>
        <div style={{textAlign:"left"}}>
            <div class="progress" style={{width:"600px", marginLeft:"460px", marginTop:"25px"}}>
                <div class="progress-bar w75" role="progressbar" style={{width:"37.5%", background:"#38F9D7"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='d-flex' style={{fontSize:"30px", marginTop:"50px", marginLeft:"180px",fontWeight: "bold"}}>
                <div >Travel distance per week: </div>
                <img src={helpImage} style={{width:"33px", height:"33px", marginTop:"7px", marginLeft:"5px"}}></img>
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
                <span className='ms-1'>km</span>
            </div>
        </div>
        <div>
          <button type='button' className='button-submit' style={{marginRight:"100px", marginTop:"50px"}}>Previous</button>
          <button type='button' className='button-submit'>Next</button>
        </div>
    </div>
  )
}
