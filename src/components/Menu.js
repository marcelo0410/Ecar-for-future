import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/components/project-logo.png'
import magnifier from '../assets/components/magnifier.png'
import './style.css'
import { style } from 'd3'
export default function Menu() {
  return (
    <div className='menu-fixed'>
        <nav>
          <div className="nav_bar">
              <ul className="navbar-link">
                <li>
                    <NavLink to="/">
                        <img src={logo}/>
                    </NavLink>
                </li>
                <li>
                  <NavLink to="/home" >Home</NavLink>
                </li>
                <li>
                  <NavLink to="/storyboard">Explore the Story</NavLink>
                </li>
                <li>
                  <div class="dropdown">
                    <button class="dropbtn">Emission Inventory
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <NavLink to="/curenv">Current Environment</NavLink>
                      <NavLink to="/prediction">Future Prediction</NavLink>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="dropdown">
                    <button class="dropbtn">Select your car
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <NavLink to="/carselection">Recommondation</NavLink>
                      <NavLink to="/carguide">Vehicle Guide</NavLink>
                    </div>
                  </div>
                </li>
                {/* <li>
                  <NavLink to="/calculator">Comparison</NavLink>
                </li> */}
                <li>
                  <NavLink to="/carselection"></NavLink>
                </li>

                {/* <li>
                  <a href='#'>
                    <img src={magnifier} style={{height:"20px", width:"20px"}} alt="magnifying glass"></img>
                  </a>
                </li> */}
              </ul>
            </div>
        </nav>
      </div>
  )
}
