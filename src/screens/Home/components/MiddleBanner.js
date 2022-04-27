import React from 'react'
import homeEnvImage from '../../../assets/homepage/home-env.png'
import homeTrendImage from '../../../assets/homepage/home-trend.png'
import homeSubsidyImage from '../../../assets/homepage/home-subsidy.png'
import './style.css'


export default function MiddleBanner() {
  return (
      <div>
        <div>
            <div className='section-title'>From other perspectives</div>  
            <div id="tileArea" className='tiles'>
                <div id="environment" className='tiles__item'>
                    <img src={homeEnvImage} className="tiles__photo"></img>
                    <h2 className='tiles__title'>Environment</h2>
                    <p className='tiles__text'>Carbon dioxide emissions in Victoria are more serious than expected, which undoubtedly contributes to the greenhouse effect. One of the main sources is vehicle emissions.</p>
                </div>
                <div id="trend" className='tiles__item'>
                    <img src={homeTrendImage} className="tiles__photo"></img>
                    <h2 className='tiles__title'>Trend</h2>
                    <p className='tiles__text'>Between 2020 and 2021, EV sales in Australia experienced surge from 6,900 sold to 20,665, which is a staggering 200% growth. Increasing number of Australians willing to try electric vehicles.</p>
                </div>
                <div id="subsidy" className='tiles__item'>
                    <img src={homeSubsidyImage} className="tiles__photo"></img>
                    <h2 className='tiles__title'>Subsidy</h2>
                    <p className='tiles__text'>The Victorian Government is incentivising Victorians to choose to buy an EV sooner through the Electric Vehicles Subsidy Program, saving people up to $3,000 on the purchase of a ZEV and driving Victoria’s transition to a net-zero emissions future.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
