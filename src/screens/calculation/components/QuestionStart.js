import React from 'react'
import carImage from '../../../assets/calculation/q-car.png'
import './style.css'

export default function QuestionStart() {
  return (
    <div className='question-canvas'>
        <img src={carImage} style={{marginTop:"137px"}}></img>
        <div className='question-desc'>Want to Know More about Elctric Vehicles? <br/>Start Your Journey of Comparison now!</div>
        <button type='button' className='button-know'>Start</button>
    </div>
  )
}
