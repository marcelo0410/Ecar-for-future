import React,{useState} from 'react'
import carImage from '../../../assets/calculation/q-car.png'
import './style.css'
import {useNavigate} from 'react-router-dom';

export default function QuestionStart(props) {
  // const {controlCom, changeControl} = props

  const [check, setcheck] = useState("check")
  const navigate = useNavigate()
  const handleDirect = e => {
    navigate('/q1',{state:check});
}
  return (
    <div className='question-canvas'>
        <img src={carImage} style={{marginTop:"137px", width:"200px"}}></img>
        <div className='question-desc'>Want to Know More about Electric Vehicles? <br/>Start Your Journey of Comparison now</div>
        <button type='button' className='button-know' onClick={handleDirect} >Start</button>
    </div>
  )
}
