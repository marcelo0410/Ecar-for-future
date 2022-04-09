import React from 'react'
import homeEnvImage from '../../../assets/homepage/home-env.png'
import homeTrendImage from '../../../assets/homepage/home-trend.png'
import homeSubsidyImage from '../../../assets/homepage/home-subsidy.png'
import './style.css'


export default function MiddleBanner() {
  return (
      <div>
        
        <div >
            <div style={{fontSize:"30px", marginTop:"670px", fontWeight:"bold", textAlign:"left", paddingLeft:"200px"}}>From other perspectives</div>  
            <div id="tileArea" className='tile-flex d-flex justify-content-center'>
                <div id="environment" style={{width:"33%"}}>
                    <img src={homeEnvImage}></img>
                    <h2>Environment</h2>
                    <p>Carbon dioxide emissions in Victoria are more serious than expected, which undoubtedly contributes to the greenhouse effect. One of the main sources is vehicle emissions.</p>
                </div>
                <div id="trend" style={{width:"33%"}}>
                    <img src={homeTrendImage}></img>
                    <h2>Trend</h2>
                    <p>Between 2020 and 2021, EV sales in Australia experienced surge from 6,900 sold to 20,665, which is a staggering 200% growth. Increasing number of Australians willing to try electric vehicles.</p>
                </div>
                <div id="subsidy" style={{width:"33%"}}>
                    <img src={homeSubsidyImage}></img>
                    <h2>Subsidy</h2>
                    <p>The Victorian Government is incentivising Victorians to choose to buy an EV sooner through the Electric Vehicles Subsidy Program, saving people up to $3,000 on the purchase of a ZEV and driving Victoria’s transition to a net-zero emissions future.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
