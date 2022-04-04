import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
export default function BannerTop() {
  return (
    <div className='banner'>
        <div style={{paddingTop:"20px", marginLeft:"22px"}}>
            <h3 className='mt-2' style={{fontSize:"20px", textWeight:"bold", textAlign:"left"}}>Join the future</h3>
            <h3 style={{fontSize:"60px", textWeight:"bold", textAlign:"left"}}>Electric Vehicles</h3>
            <h3 style={{fontSize:"24px", textWeight:"bold", textAlign:"left"}}>Why should I purchase an EV instead?</h3>
        </div>
        <br/>
        <h3 className="ms-4" style={{fontSize:"24px", textWeight:"bold", textAlign:"left"}}>Get to know it&gt;&gt;</h3>
    </div>
  )
}
