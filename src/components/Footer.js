import React from 'react'
import teamLogo from '../assets/components/Team-logo-for-dark-background.png'
import style from './style.module.css'

export default function Footer() {
  return (
    <div className={style.footer__container}>
      <div className={style.footer__content} >
        <img src={teamLogo} alt="Noma team logo" style={{height:"120px"}}/>
        <div>
          <div className={style.footer__text}><a href='/home'>Home</a></div>
        </div>
        <div className={style.footer__text }>
          <a href='/storyboard'>Explore The Story</a>
        </div>
        <div className={style.footer__text }>
          <div>Emission Inventory</div>
          <div className={style.footer__text__bottom}>
            <div className={style.footer__text__thin}><a href='/curenv'>Current Situation</a></div>
            <div className={style.footer__text__thin}><a href='/prediction'>Future Prediction</a></div>
          </div>
        </div>
        {/* <div className={style.footer__text}>
          <div>Comparison</div>
          <div className={style.footer__text__bottom}>
            <div className={style.footer__text__thin}><a href='/prediction'>General Report</a></div>
            <div className={style.footer__text__thin}><a href='/prediction'>Calculation</a></div>
          </div>
        </div> */}
        <div className={style.footer__text}>
          <div>Select Your Car</div>
          <div className={style.footer__text__bottom}>
            <div className={style.footer__text__thin}><a href='/carselection'>Recommondation</a></div>
            <div className={style.footer__text__thin}><a href='/carguide'>Explore All</a></div>
          </div>
        </div>

      </div>
      <div className={style.footer__desc}>
        Copyright © 2022 Noma Group
      </div>
      {/*  | Legal Stuff | Privacy Policy */}
    </div>
  )
}
