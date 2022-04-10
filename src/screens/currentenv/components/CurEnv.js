import React from 'react'
import homeEnvImage from '../../../assets/homepage/home-env.png'
import homeTrendImage from '../../../assets/homepage/home-trend.png'
import homeSubsidyImage from '../../../assets/homepage/home-subsidy.png'


export default function CurEnv() {
  return (
    <div>
        <div style={{fontSize:"40px", fontWeight:"bold", paddingTop:"20px", textAlign:"center"}}>Current Situation of Environment</div>
        <div>
            <div >
                <div id="tileArea" className='tile-flex d-flex justify-content-center'>
                    <div id="environment" style={{width:"25%"}}>
                        <img src={homeEnvImage}></img>
                        <h2>Environment</h2>
                        <p>Carbon dioxide emissions in Victoria are more serious than expected, which undoubtedly contributes to the greenhouse effect. One of the main sources is vehicle emissions.</p>
                    </div>
                    <div id="technology" style={{width:"25%"}}>
                        <img src={homeTrendImage}></img>
                        <h2>Technology</h2>
                        <p>Between 2020 and 2021, EV sales in Australia experienced surge from 6,900 sold to 20,665, which is a staggering 200% growth. Increasing number of Australians willing to try electric vehicles.</p>
                    </div>
                    <div id="government" style={{width:"25%"}}>
                        <img src={homeSubsidyImage}></img>
                        <h2>Government</h2>
                        <p>The Victorian Government is incentivising Victorians to choose to buy an EV sooner through the Electric Vehicles Subsidy Program, saving people up to $3,000 on the purchase of a ZEV and driving Victoria’s transition to a net-zero emissions future.</p>
                    </div>
                    <div id="limitations" style={{width:"25%"}}>
                        <img src={homeSubsidyImage}></img>
                        <h2>Limitations</h2>
                        <p>The Victorian Government is incentivising Victorians to choose to buy an EV sooner through the Electric Vehicles Subsidy Program, saving people up to $3,000 on the purchase of a ZEV and driving Victoria’s transition to a net-zero emissions future.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
