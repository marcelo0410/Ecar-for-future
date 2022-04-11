import React from 'react'
import Joshua from '../../../assets/about/Joshua Cao.jpeg'
import Mars from '../../../assets/about/Xian-Jian Hsiao.jpeg'
import Tom from '../../../assets/about/Zixiao Shan.jpeg'
import Sean from '../../../assets/about/Personal information.jpeg'
import "./style.css"

export default function teamInfo() {
  return(
    <div >
        <div style={{fontSize:"30px", marginTop:"50px", fontWeight:"bold", textAlign:"left", paddingLeft:"180px"}}>Our team members</div>  
        <div id="tileArea" className='tile-flex d-flex justify-content-center'>
          <div id="mars" style={{width:"25%"}}>
              <img src={Mars}></img>
              <h2>Marcelo Hsiao</h2>
              <h6>Master of Information Technology</h6>
              <h6 style={{fontStyle:'italic'}}>Monash University</h6>
              <p>Carbon dioxide emissions in Victoria are more serious than expected, which undoubtedly contributes to the greenhouse effect. One of the main sources is vehicle emissions.</p>
          </div>
          <div id="sean" style={{width:"25%"}}>
              <img src={Sean}></img>
              <h2>Sean Yang</h2>
              <h6>Master of Business Information System</h6>
              <h6 style={{fontStyle:'italic'}}>Monash University</h6>
              <p>Carbon dioxide emissions in Victoria are more serious than expected, which undoubtedly contributes to the greenhouse effect. One of the main sources is vehicle emissions.</p>
          </div>
          <div id="tom" style={{width:"25%"}}>
              <img src={Tom}></img>
              <h2>Tom Shan</h2>
              <h6>Master of Data Science</h6>
              <h6 style={{fontStyle:'italic'}}>Monash University</h6>
              <p>Carbon dioxide emissions in Victoria are more serious than expected, which undoubtedly contributes to the greenhouse effect. One of the main sources is vehicle emissions.</p>
          </div>
          <div id="joshua" style={{width:"25%"}}>
              <img src={Joshua}></img>
              <h2>Joshua Cao</h2>
              <h6>Master of Data Science</h6>
              <h6 style={{fontStyle:'italic'}}>Monash University</h6>
              <p>Carbon dioxide emissions in Victoria are more serious than expected, which undoubtedly contributes to the greenhouse effect. One of the main sources is vehicle emissions.</p>
          </div>
        </div>
    </div>

)
}