import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import './style.css'
import homeCarImage from '../../../assets/homepage/homepage-car.png'

export default function TopBanner() {
  const navigate = useNavigate()
  const handleClick = () =>{
    window.scrollTo(0,0)
    navigate('/calculator')
  }

  return (
    <div className='banner'>
      <div className='banner__title'>Change it now!</div>
      <div className='banner__desc' >Why should I purchase an electric vehicle instead of a fossil fuel one?</div>
      <button className="banner__button" type="button" onClick={handleClick}>Learn more</button>
    </div>
  )
}
