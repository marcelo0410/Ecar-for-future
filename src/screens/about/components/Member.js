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
              <p>I am a webside developer and responsible of developing website and maintainence of the system in this team. Love to travel and watch movies. </p>
          </div>
          <div id="sean" style={{width:"25%"}}>
              <img src={Sean}></img>
              <h2>Sean Yang</h2>
              <h6>Master of Business Information System</h6>
              <h6 style={{fontStyle:'italic'}}>Monash University</h6>
              <p>Hey, guys, I’m Sean. I am responsible for the design of the product architecture and user interface. Meanwhile, I also help the team collect and integrate various data and reports.</p>
          </div>
          <div id="tom" style={{width:"25%"}}>
              <img src={Tom}></img>
              <h2>Tom Shan</h2>
              <h6>Master of Data Science</h6>
              <h6 style={{fontStyle:'italic'}}>Monash University</h6>
              <p>I am responsible for data searching, cleaning and wrangling in this project. He loves traveling and playing badminton.</p>
          </div>
          <div id="joshua" style={{width:"25%"}}>
              <img src={Joshua}></img>
              <h2>Joshua Cao</h2>
              <h6>Master of Data Science</h6>
              <h6 style={{fontStyle:'italic'}}>Monash University</h6>
              <p>Friendly and open minded person. Mainly in charge of UI design and data science related works. Happy to make changes and accept challenges.</p>
          </div>
        </div>
    </div>

)
}