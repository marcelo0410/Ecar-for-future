import React from 'react'
import './style.css'
import homeCarImage from '../../../assets/homepage/homepage-car.png'

export default function TopBanner() {
  return (
    <div className='banner'>
      <div style={{color:"white", fontWeight:"bold", fontSize:"70px", marginTop:"170px"}}>Change it now!</div>
      <div style={{color:"white", fontSize:"30px"}}>Why should I purchase an EV instead of a fossil fueled one?</div>
      <button className="button-know" type="button">Get to know the reasons</button>
    </div>
  )
}
