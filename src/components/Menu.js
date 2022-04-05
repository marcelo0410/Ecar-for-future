import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/components/project-logo.png'
import magnifier from '../assets/components/magnifier.png'
import './style.css'
export default function Menu() {
  return (
    <div>
        <nav  aria-label="Ninth navbar example">
          <div className="navbar" style={{height:"42px"}}>
            <div>
              <ul className="navbar-link" style={{justifyContent:"space-evenly"}}>
                <li>
                    <NavLink to="/">
                        <img src={logo} style={{width:"76px", height:"50px"}}/>
                    </NavLink>
                </li>
                <li>
                  <NavLink to="/home" activestyle={{ backgroundColor:"#C4C4C4",color: "white"}}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/curenv" activestyle={{backgroundColor:"#C4C4C4",color: "white"}}>Know the Env</NavLink>
                </li>
                <li>
                  <NavLink to="/calculator" activestyle={{backgroundColor:"#C4C4C4",color: "white"}}>Calculator</NavLink>
                </li>
                <li>
                  <NavLink to="/about" activestyle={{backgroundColor:"#C4C4C4",color: "white"}}>Why EVs</NavLink>
                </li>
                <li>
                  <a href='#'>
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
