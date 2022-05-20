import React from 'react'
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
    <div className='banner'>
      <div className='banner__title'>Make a <span className='banner__title__span'>change</span></div>
      <div className='banner__desc' >Maybe you want to purchase an Electric Vehicle instead of a fossil fuel car?</div>
      <button className="banner__button" type="button" onClick={handleClick}>Select your car <img className='banner__button__img' src={arrow}></img></button>
      <div className='banner__bottom__desc'>Scroll down to explore your journey</div>
      <img className='banner__bottom__img' src={doublearrow}></img>
    </div>
  )
}