import React, {useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import './style.css'
import homeCarImage from '../../../assets/homepage/homepage-car.jpg'
import arrow from '../../../assets/homepage/arrow.png'
import doublearrow from '../../../assets/homepage/doublearrow.png'

export default function TopBanner() {
  const navigate = useNavigate()
  const handleClick = () =>{
    window.scrollTo(0,0)
    navigate('/carselection')
  }

  

  return (
    // <img className='banner__button__img' src={arrow}></img>
    <div className='banner'>
      <div className='banner__title'>Make some <span className='banner__title__span'>changes</span></div>
      <div className='banner__desc' >Maybe you want to purchase an Electric Vehicle</div>
      <div className='banner__desc' >instead of a fossil fuel car?</div>
      <button className="banner__button" type="button" onClick={handleClick}>
        Select your car
        <i class="fa fa-long-arrow-right arrow1 iii" aria-hidden="true"></i>
      </button>
      
      <div className='banner__bottom__desc'>Scroll down to explore your journey</div>
      {/* <img className='banner__bottom__img' src={doublearrow}></img> */}
      <div class="arrow">
            <span></span>
            <span></span>
            <span></span>
      </div>
      <i class='fas fa-arrow-right'></i>
    </div>
  )
}