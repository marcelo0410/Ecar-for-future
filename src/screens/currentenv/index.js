import React,{useEffect} from 'react'
import Health from './components/Health'
import './components/style.css'
import QuaterlyEmissionCanvas from './components/QuarterlyEmissionCanvas'
import CurEnv from './components/CurEnv'
import Map from './components/EmissionMap/Map'
import geoJSONCED from "../../assets/data/state.json";
import upicon from '../../assets/common/upicon.png'

export default function Index() {

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
  
    return () => {
      
    }
  }, [])

  const backToTop = () =>{
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  }
  

  return (
    <div> 
        <div className='cur-banner'>
          <div className='cur__title'><span style={{color:'#FFF8E5'}}>Current</span> Situation</div>
          <div className='cur__subtitle'>The current environment here in Victoria is not optimistic, especialy for transport</div>
        </div>
        <CurEnv/>
        <div style={{width:"66%", margin:"0 auto"}}>
          <div className='map_title'>Density Map of Greenhouse Gas Emissions of States in Au</div>
          <div style={{display:'flex', flexDirection:'row', justifyContent:"center", marginBottom:'20px'}}>
              <div style={{width:'70%'}}>
                <Map data={geoJSONCED}/>
              </div>
              <div style={{width:'30%', paddingLeft:'30px', textAlign:'left', paddingTop:"50px"}}>
                <p className='env_map_p'>As the third major source of CO2 emissions in Australia, the impact of vehicle emissions is far worse than we thought. All motor vehicle pollutants are released into the air and mostly through the exhaust fumes.</p>
              </div>
          </div>
          
        </div>
        
        <QuaterlyEmissionCanvas/>
        <Health/>
        <a className='back__area' onClick={backToTop}>
            <div>Back to top</div>
            <img src={upicon}></img>
        </a>
    </div>
  )
}
