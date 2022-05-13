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
                <p className='h3-black' style={{marginTop:'20px'}}>Cardiovascular Disease</p>
                <p className='text-desc text-left'>Greenhouse gas emissions by Australia totalled 392 million tonnes CO2-equivalent for 2020, representing per capita CO2e emissions of 15 tons, three times the global average.</p>
            </div>
            <div className='disease-card-item card-middle' style={{width:'33%'}}>
                <div style={{backgroundColor:"#E3A649",height:"200px", width:"200px", margin:"auto"}}>
                    <img src={healthBreath} style={{height:"190px", width:"190px"}}></img>
                </div>
                <p className='h3-black' style={{marginTop:'20px'}}>Cardiovascular Disease</p>
                <p className='text-desc text-left'>Greenhouse gas emissions by Australia totalled 392 million tonnes CO2-equivalent for 2020, representing per capita CO2e emissions of 15 tons, three times the global average.</p>
            </div>
            <div className='disease-card-item card-right' style={{width:'33%'}}>
                <div style={{backgroundColor:"#E26F56", height:"200px", width:"200px",margin:"auto"}}>
                    <img src={healthPharynx} style={{height:"190px", width:"190px"}}></img>
                </div>
                <p className='h3-black' style={{marginTop:'20px'}}>Cardiovascular Disease</p>
                <p className='text-desc text-left'>Greenhouse gas emissions by Australia totalled 392 million tonnes CO2-equivalent for 2020, representing per capita CO2e emissions of 15 tons, three times the global average.</p>
            </div>
        </div>
    </div>
  )
}
