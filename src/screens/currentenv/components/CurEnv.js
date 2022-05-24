import React from 'react'
import curBar1Image from '../../../assets/currentenv/cur-bar1.png'
import curDouble2Image from '../../../assets/currentenv/cur-double2.png'
import curRose3Image from '../../../assets/currentenv/cur-rose3.png'
import cur17Image from '../../../assets/currentenv/cur-17.png'
import cur60Image from '../../../assets/currentenv/cur-60.png'
import cur3thImage from '../../../assets/currentenv/cur-3th.png'
import curE1 from '../../../assets/currentenv/CurrentE_1.gif'
import curE2 from '../../../assets/currentenv/CurrentE_2.gif'
import curE3 from '../../../assets/currentenv/CurrentE_3.gif'
import './style.css'


export default function CurEnv() {
  return (
    <div id="cur_info_container" className='cur_info_container'>
        <div id="tileArea" className='tile-flex d-flex justify-content-center'>
            <div id="cur3" style={{width:"33%"}}>
                <div><img src={curBar1Image} style={{width:"10rem"}}></img></div>
                <img src={cur3thImage}  style={{height:"60px", width:"120px"}}></img>
                <p className='cur-p' style={{fontSize:"20px"}}>Transport is Australia’s third largest source of greenhouse gas emissions.</p>
            </div>
            <div id="cur17" style={{width:"33%"}}>
                <div>
                    <img src={curRose3Image} style={{width:"10rem"}}></img>
                </div>
                <img src={cur17Image} style={{marginTop:"5px", height:"63px", width:"160px"}}></img>
                <p className='cur-p' style={{fontSize:"20px"}}>Transport generated 96 MtCO2e per year, 17% of total emissions</p>
            </div>
            <div id="cur60" style={{width:"33%"}}>
                <div><img src={curDouble2Image} style={{width:"9rem", marginTop:"10px"}}></img></div>
                <img src={cur60Image} style={{height:"66px", width:"160px", marginLeft:"20px", marginBottom:"5px"}}></img>
                <p className='cur-p' style={{fontSize:"20px"}}>Transport emissions have grown more than any other sector, increasing nearly 70% since 1990.</p>
            </div>
        </div>
    </div>
  )
}
