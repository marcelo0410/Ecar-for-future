import React from 'react'
import healthHeart from '../../../assets/currentenv/health-human-heart.png'
import healthBreath from '../../../assets/currentenv/health-breath.png'
import healthPharynx from '../../../assets/currentenv/health-pharynx.png'
export default function Health() {
  return (
    <div>
        <div style={{display:"flex", marginTop:"20px"}}>
            <div style={{display:"flex", flexDirection: "row"}}>
                <div style={{backgroundColor:"#D7E349",height:"120px", width:"120px", marginRight:"20px"}}>
                    <img src={healthHeart} style={{height:"120px", width:"100px"}}></img>
                </div>
                <div style={{backgroundColor:"#E3A649",height:"120px", width:"120px", marginRight:"20px"}}>
                    <img src={healthBreath} style={{height:"120px", width:"120px"}}></img>
                </div>
                <div style={{backgroundColor:"#E26F56",height:"120px", width:"120px", marginRight:"20px"}}>
                    <img src={healthPharynx} style={{height:"120px", width:"120px"}}></img>
                </div>
            </div>
            <div>Healthy impact: increasing people’s risk of developing
                <ul>
                    <li>cardiovascular disease</li>
                    <li>respiratory infections </li>
                    <li>chronic obstructive pulmonary disease (COPD) </li>
                    <li>lung cancer </li>
                </ul> 
            </div>
        </div>
    </div>
  )
}
