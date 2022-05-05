import React,{useState} from 'react'
import './style.css'
import clockImage from '../../../assets/calculation/clock.png'
import peopleImage from '../../../assets/calculation/people.png'
import oilImage from '../../../assets/calculation/oil.png'
import Image91 from '../../../assets/calculation/91.png'
import moneyImage from '../../../assets/calculation/money.png'
import treeImage from '../../../assets/calculation/tree.png'



export default function GeneralCalculator() {
  const [visOption, setVisOption] = useState("1")
  const updateVisOption= (evt) =>{
    console.log(visOption)
    if(evt.target.value !== visOption){
      setVisOption(evt.target.value.toString())
      console.log(visOption)
    }
  }
  return (
    <div className='gen-container'>
        <div className='gen__title'>Example of comparison</div>
        <div className='gen__desc'>Tom and Mike are a couple of Monash staff, both of they need to commute from point cook to Clayton every weekday. They have to drive their small fossil fuel cars more than 2 hours.</div>
        <div className='gen__content'>
          <div className='gen-left'>
            <div className='gen-left__subtitle'>Fossile fuel vehicle model:</div>
            <div className='gen-left__smallbutton'>
              <div className='gen-left__smallbutton--purple'>Small car</div>
              <div className='gen-left__smallbutton--white'>Medium car</div>
            </div>
            <div className='gen-left__subtitle'>Travel distance per week:</div>
            <div className='gen-left__button'>
              <img src={clockImage}/>
              <span>350 km</span>
            </div>
            <div className='gen-left__subtitle'>The number of travelers:</div>
            <div className='gen-left__button'>
              <img src={peopleImage}/>
              <span>2</span>
            </div>
            <div className='gen-left__subtitle'>Travel distance per week:</div>
            <div className='gen-left__button'>
              <img src={oilImage}/>
              <span>7.8  L/100 km </span>
            </div>
            <div className='gen-left__subtitle'>Type of fuels:</div>
            <div className='gen-left__button'>
              <img src={Image91}/>
              <span>Unleaded 91</span>
            </div>
          </div>
          <div className='gen-right'>
            <div className='gen-right__title'>Fossil fuel vehicles VS Electric vehicles </div>
            <select name="result" id="result" onChange={updateVisOption} value={visOption} className='gen-right__select'>
              <option value="1">Maintenance cost</option>
              <option value="2">Carbon emission generated</option>
            </select>
            <div className='gen-right__result'>
              {visOption === "1" && (
              <div>
                <div style={{paddingLeft:"0px", fontSize:"24px", fontWeight:"bold", marginBottom:"30px",marginTop:"20px", textAlign:"center"}}>Maintenance cost per year</div>
                <div style={{width:"400px",height:"240px", marginLeft:"100px"}}>
                  {[...Array(14)].map((e, i) => <img src={moneyImage} key={i} style={{width:"40px"}}></img>)}
                </div>
              <div id="resultcost_desc" style={{fontSize:"24px", marginTop:"20px", textAlign:"center"}}>You have saved <span style={{textDecoration:"underline", fontWeight:"bold"}}>{(3380).toLocaleString('en-US', {  style: 'currency',currency: 'USD',})}</span>  every year!</div>
              </div>)}
              {visOption === "2" &&(
                <div>
                  <div style={{ fontSize:"24px", fontWeight:"bold", marginBottom:"30px",marginTop:"20px", textAlign:"center"}}>CO2 emission generated per year</div>
                  <div style={{width:"400px", height:"240px", marginTop:"28px", marginLeft:"100px"}}>
                  {[...Array(23)].map((e, i) => <img src={treeImage} key={i} style={{width:"40px"}}></img>)}

                  </div>
                <div id="resultcost_desc" style={{fontSize:"24px", marginTop:"20px", textAlign:"center"}}>You have planted <span style={{textDecoration:"underline", fontWeight:"bold"}}> {22.71} </span> trees every year!</div>
              </div>
              )}
            </div>
          </div>
        </div>
    </div>
  )
}
