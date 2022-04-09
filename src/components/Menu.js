import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/components/project-logo.png'
import magnifier from '../assets/components/magnifier.png'
import './style.css'
export default function Menu() {
  return (
    <div className='menu-fixed'>
        <nav  aria-label="Ninth navbar example">
          <div className="navbarr">
            <div>
              <ul className="navbar-link" style={{justifyContent:"flex-start"}}>
                <li style={{marginRight:"40px"}}>
                    <NavLink to="/">
                        <img src={logo} style={{width:"76px", height:"40px"}}/>
                    </NavLink>
                </li>
                <li>
                  <NavLink to="/home" activestyle={{ backgroundColor:"#C4C4C4",color: "white"}}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/curenv" activestyle={{backgroundColor:"#C4C4C4",color: "white"}}>Gas Emission Inventory</NavLink>
                </li>
                <li>
                  <NavLink to="/calculator" activestyle={{backgroundColor:"#C4C4C4",color: "white"}}>Compare your cars</NavLink>
                </li>
                <li>
                  <NavLink to="/about" activestyle={{backgroundColor:"#C4C4C4",color: "white"}}>About us</NavLink>
                </li>
                <li>
                  <a href='#' style={{width:"50px", marginLeft:"200px", marginRight:"150px"}}>
                      <img src={magnifier} alt="magnifying glass"></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  )
}
