import React from 'react'
import './style.css'
import homeCarImage from '../../../assets/homepage/homepage-car.png'

export default function TopBanner() {
  return (
    <div className=''>
        {/* <img src={homeCarImage}></img> */}
        <img src={homeCarImage} style={{width:"100%", position:"absolute", left:"0", overflow:"hidden"}}></img>
    </div>
  )
}
