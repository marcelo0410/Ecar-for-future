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
    <div className='question-container'>
        <img className='question-start__image__car' src={carImage}></img>
        <div className='question-start__desc'>Want to Know More about Electric Vehicles? <br/>Start Your Journey of Comparison now</div>
        <button type='button' className='question-start__button' onClick={handleDirect} >Start</button>
    </div>
  )
}
