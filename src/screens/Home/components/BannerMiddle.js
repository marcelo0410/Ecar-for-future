import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
export default function BannerMiddle() {
  return (
    <div className='banner-mid' style={{marginLeft:"32px"}}>
        <div style={{paddingTop:"20px", marginLeft:"22px"}}>
            <h3 className='mt-2' style={{fontSize:"20px", fontWeight:"bold"}}>Serious situation</h3>
            <h3 style={{fontSize:"60px", fontWeight:"bold"}}>Greenhouse<br/>Gas Emission</h3>
            <h3 style={{fontSize:"24px"}}>Why should I purchase an EV instead?</h3><br/>
            <h3 className="ms-4" style={{fontSize:"24px", fontWeight:"bold"}}>Find out more&gt;&gt;</h3>
        </div>
        
    </div>
  )
}
