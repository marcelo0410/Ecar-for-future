import React from 'react'
import teamLogo from '../assets/components/Team-logo-for-dark-background.png'

export default function Footer() {
  return (
    <div className='footer'>
      <div style={{width:'75%', display:"flex", paddingTop:"30px", margin:'auto'}}>
        <img src={teamLogo} alt="Noma team logo" style={{height:"120px"}}/>
        <div className='footer-text'>
          Home<br/><br/>Explore The Story
        </div>
        <div className='footer-text'>
          Gas Emission Inventory<br/><br/>
          <p className='footer-text footer-text-thin'>
            Current Situation<br/>Future Prediction
          </p>
        </div>
        <div className='footer-text'>
          Comparison<br/><br/>
          <p className='footer-text footer-text-thin'>
            General Report<br/>Calculation
          </p>
        </div>
        <div className='footer-text'>
          Select Your Car<br/><br/>
          <p className='footer-text footer-text-thin'>
            Recommondation<br/>Explore All
          </p>
        </div>

      </div>
      <div className='footer-desc'>
        Copyright © 2022 Noma Group | Legal Stuff | Privacy Policy
      </div>
    </div>
  )
}
