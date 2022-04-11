import React from 'react'
import healthHeart from '../../../assets/currentenv/health-human-heart.png'
import healthBreath from '../../../assets/currentenv/health-breath.png'
import healthPharynx from '../../../assets/currentenv/health-pharynx.png'
export default function Health() {
  return (
    <div>
        <div style={{display:"flex", marginTop:"40px", justifyContent:"center"}}>
            <div style={{display:"flex", flexDirection: "row", marginRight:"100px"}}>
                <div style={{backgroundColor:"#D7E349",height:"170px", width:"170px", marginRight:"20px"}}>
                    <img src={healthHeart} style={{height:"166px", width:"110px"}}></img>
                </div>
                <div style={{backgroundColor:"#E3A649",height:"170px", width:"170px", marginRight:"20px"}}>
                    <img src={healthBreath} style={{height:"170px", width:"170px"}}></img>
                </div>
                <div style={{backgroundColor:"#E26F56",height:"170px", width:"170px", marginRight:"20px"}}>
                    <img src={healthPharynx} style={{height:"170px", width:"170px"}}></img>
                </div>
            </div>
            <div className='health-text-area'>Healthy impact due to the pollutants:
                <ul className='text-start'>
                    <li>Increasing people’s risk of developing</li>
                    <li>Cardiovascular disease</li>
                    <li>Hespiratory infections </li>
                    <li>Chronic obstructive pulmonary disease (COPD) </li>
                    <li>Lung cancer </li>
                </ul> 
            </div>
        </div>
    </div>
  )
}
