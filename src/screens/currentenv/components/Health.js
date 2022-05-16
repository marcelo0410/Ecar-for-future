import React from 'react'
import healthHeart from '../../../assets/currentenv/health-human-heart.png'
import healthBreath from '../../../assets/currentenv/health-breath.png'
import healthPharynx from '../../../assets/currentenv/health-pharynx.png'
import './style.css'
export default function Health() {
  return (
    <div>
        <div className='h3-black center-text-20pad'>
            Potential diseases caused by car emissions
        </div>
        <div style={{display:'flex', flexDirection:'row', width:'75%', margin:'auto'}}>
            <div className='disease-card-item card-left' style={{width:'33%'}}>
                <div style={{backgroundColor:"#D7E349",height:"200px", width:"200px", margin:'auto'}}>
                    <img src={healthHeart} style={{height:"180px", width:"130px"}}></img>
                </div>
                <p className='h3-black' style={{marginTop:'45px',marginBotton:"40px"}}>Cardiovascular Disease</p>
                <p className='text-desc text-left' style={{marginTop:"25px"}}>Cardiovascular diseases (CVDs) are the leading cause of death globally, taking an estimated 17.9 million lives each year. 85% of all CVD deaths are due to heart attacks and strokes</p>
            </div>
            <div className='disease-card-item card-middle' style={{width:'33%'}}>
                <div style={{backgroundColor:"#E3A649",height:"200px", width:"200px", margin:"auto"}}>
                    <img src={healthBreath} style={{height:"190px", width:"190px"}}></img>
                </div>
                <p className='h3-black' style={{marginTop:'45px', marginBotton:"40px"}}>Respiratory infections</p>
                <p className='text-desc text-left' style={{marginTop:"25px"}}>Respiratory tract infections (RTIs) are infections of parts of the body involved in breathing, such as the sinuses, throat, airways or lungs. Especially lower respiratory infections, which is world’s most deadly communicable disease</p>
            </div>
            <div className='disease-card-item card-right' style={{width:'33%'}}>
                <div style={{backgroundColor:"#E26F56", height:"200px", width:"200px",margin:"auto"}}>
                    <img src={healthPharynx} style={{height:"190px", width:"190px"}}></img>
                </div>
                <p className='h3-black' style={{marginTop:'20px', marginBottom:"15px"}}>Chronic Obstructive Pulmonary Disease</p>
                <p className='text-desc text-left'>COPD is the third leading cause of death worldwide, causing 3.23 million deaths in 2019. COPD results from long-term exposure to harmful gases and air pollution </p>
            </div>
        </div>
    </div>
  )
}
