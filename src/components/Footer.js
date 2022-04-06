import React from 'react'
import teamLogo from '../assets/components/Team-logo-for-light-background.png'

export default function Footer() {
  return (
    <div className='d-flex align-items-center align-content-center justify-content-sm-center'>
      <img src={teamLogo} alt="Noma team logo" style={{height:"90px"}} className="footer-border-right me-2 pe-2"/>
      <div className='ps-2 pt-1'>
        <div>Copyright © Noma Group of Monash</div>
        <div className='d-flex'>
          <div className='footer-underline footer-border-right pe-2'>Legal Stuff</div>
          <div className='footer-underline ps-2'>Privacy Policy</div>
        </div>
      </div>
    </div>
  )
}
