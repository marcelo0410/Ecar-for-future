import React from 'react'
import curBar1Image from '../../../assets/currentenv/cur-bar1.png'
import curDouble2Image from '../../../assets/currentenv/cur-double2.png'
import curRose3Image from '../../../assets/currentenv/cur-rose3.png'
import cur17Image from '../../../assets/currentenv/cur-17.png'
import cur60Image from '../../../assets/currentenv/cur-60.png'
import cur3thImage from '../../../assets/currentenv/cur-3th.png'
import style from './style.module.css'


export default function CurEnv() {
  return (
    <div>
        <div>
            <div >
                <div id="tileArea" className={style.tile__flex1}>
                    <div id="cur3" style={{width:"20%"}}>
                        <div><img src={curBar1Image} style={{width:"10rem"}}></img></div>
                        <img src={cur3thImage}  style={{height:"60px", width:"120px"}}></img>
                        <p className={style.cur__p} style={{fontSize:"18px", textAlign:"left", paddingLeft:"30px"}}>Transport is Australia’s third largest source of green house gas emissions.</p>
                    </div>
                    <div id="cur17" style={{width:"20%"}}>
                        <div>
                            <img src={curRose3Image} style={{width:"10rem"}}></img>
                        </div>
                        <img src={cur17Image} style={{marginTop:"5px", height:"63px", width:"160px"}}></img>
                        <p className={style.cur__p} style={{fontSize:"18px", textAlign:"left"}}>Transport generated 96 MtCO2e per year, 17% of total emissions</p>
                    </div>
                    <div id="cur60" style={{width:"20%"}}>
                        <div><img src={curDouble2Image} style={{width:"9rem", marginTop:"10px"}}></img></div>
                        <img src={cur60Image} style={{height:"66px", width:"160px", marginLeft:"20px", marginBottom:"2px"}}></img>
                        <p className={style.cur__p} style={{fontSize:"18px", textAlign:"left", paddingLeft:"30px"}}>Transport emissions have grown more than any other sector, increasing nearly 70% since 1990.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
