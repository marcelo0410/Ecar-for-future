import React from 'react'
import curBar1Image from '../../../assets/currentenv/cur-bar1.png'
import curDouble2Image from '../../../assets/currentenv/cur-double2.png'
import curRose3Image from '../../../assets/currentenv/cur-rose3.png'
import cur17Image from '../../../assets/currentenv/cur-17.png'
import cur60Image from '../../../assets/currentenv/cur-60.png'
import cur3thImage from '../../../assets/currentenv/cur-3th.png'
import './style.css'


export default function CurEnv() {
  return (
    <div>
        <div style={{fontSize:"40px", fontWeight:"bold", paddingTop:"20px", textAlign:"center"}}>Current Situation of Environment</div>
        <div>
            <div >
                <div id="tileArea" className='tile-flex d-flex justify-content-center'>
                    <div id="cur3" style={{width:"33%"}}>
                        <div><img src={curBar1Image}></img></div>
                        <img src={cur3thImage}  style={{height:"75px", width:"150px"}}></img>
                        <p className='cur-p' style={{fontSize:"18px"}}>Transport is Australia’s third largest source of green house gas emissions.</p>
                    </div>
                    <div id="cur17" style={{width:"33%"}}>
                        <div>
                            <img src={curRose3Image}></img>
                        </div>
                        <img src={cur17Image} style={{marginTop:"6px", height:"75px"}}></img>
                        <p className='cur-p' style={{fontSize:"18px"}}>Transport generated 96 MtCO2e per year, 17% of total emissions</p>
                    </div>
                    <div id="cur60" style={{width:"33%"}}>
                        <div><img src={curDouble2Image} style={{width:"180px"}}></img></div>
                        <img src={cur60Image} style={{height:"75px", width:"200px", marginLeft:"20px"}}></img>
                        <p className='cur-p' style={{fontSize:"18px"}}>Transport emissions have grown more than any other sector, increasing nearly 70% since 1990.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
