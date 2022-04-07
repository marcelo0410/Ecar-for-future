import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
export default function BannerTop() {
  return (
    <div className='banner'>
        <div style={{paddingTop:"50px", marginLeft:"22px", paddingLeft:"20px"}}>
            <h3 className='mt-2' style={{fontSize:"20px", fontWeight:"bold", textAlign:"left",margin:"0",padding:"0"}}>Join the future</h3>
            <h3 style={{fontSize:"60px", fontWeight:"bold", textAlign:"left", margin:"0",padding:"0"}}>Electric Vehicles</h3>
            <h3 style={{fontSize:"24px", textAlign:"left",margin:"0",padding:"0"}}>Why should I purchase an EV instead?</h3>
            <br/>
            <h3 style={{fontSize:"24px", fontWeight:"bold", textAlign:"left"}}>Get to know it&gt;&gt;</h3>
        </div>
       
        
    </div>
  )
}
