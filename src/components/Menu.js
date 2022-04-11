import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/components/project-logo.png'
import magnifier from '../assets/components/magnifier.png'
import './style.css'
import { style } from 'd3'
export default function Menu() {
  return (
    <div className='menu-fixed'>
        <nav  aria-label="Ninth navbar example">
          <div className="navbarr">
            <div>
              <ul className="navbar-link" style={{justifyContent:"left"}}>
                <li style={{paddingRight:"40px"}}>
                    <NavLink to="/">
                        <img src={logo} style={{width:"60px", height:"40px"}}/>
                    </NavLink>
                </li>
                <li style={{marginLeft:"40px"}}>
                  <NavLink to="/home" activestyle={{ backgroundColor:"#C4C4C4",color: "white"}}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/curenv" activestyle={{backgroundColor:"#C4C4C4",color: "white"}}>Gas Emission Inventory</NavLink>
                </li>
                <li>
                  <NavLink to="/calculator" activestyle={{backgroundColor:"#C4C4C4",color: "white"}}>Compare your cars</NavLink>
                </li>
                {/* <li>
                  <NavLink to="/about" activestyle={{backgroundColor:"#C4C4C4",color: "white"}}>About us</NavLink>
                </li> */}
                <li>
                  <a href='#' style={{width:"px", marginLeft:"160px", marginRight:"100px"}}>
                      <img src={magnifier} style={{height:"20px", width:"20px"}} alt="magnifying glass"></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  )
}
