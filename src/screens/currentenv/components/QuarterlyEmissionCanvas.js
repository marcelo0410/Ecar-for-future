import React,{useEffect, useState} from 'react'
import QuarterlyEmissionAnnual from './QuarterlyEmissionAnnual'
import QuarterlyEmissionType from './QuarterlyEmissionType'
import QuarterlyEmissionTransport from './QuarterlyEmissionTransport'
import axios from 'axios'
import './style.css'

export default function QuarterlyEmissionCanvas() {
  const [visOption, setvisOption] = useState("1")
  const [emissionAnnualData, setEmissionAnnualData] = useState("")
  const [emissionTypeData, setEmissionTypeData] = useState("")
  const [buttonVisOption, setButtonVisOption] = useState("1")


  // http://localhost:8080
  // https://d1pvgbbxmbkkid.cloudfront.net
  // http://ecarforfuture-env.eba-pbjsb4gy.ap-southeast-2.elasticbeanstalk.com
  useEffect(async () => {
    const result = await axios(
      'https://d1pvgbbxmbkkid.cloudfront.net/v1/api/emissionAll/findAll2/',
    );

    setEmissionAnnualData(result.data);
    console.log(emissionAnnualData)
  }, []);

  useEffect(async () => {
    const result = await axios(
      'https://d1pvgbbxmbkkid.cloudfront.net/v1/api/emission/findAll/',
    );

    setEmissionTypeData(result.data);
  }, []);

  const updateVisOption = (evt) =>{
    if(evt.target.value !== visOption){
      setvisOption(evt.target.value.toString())
    }
    
  }

  // const requestEmissionData = () =>{
  //   if(visOption === '1'){
  //     axios
  //     .get('http://localhost:8080/v1/api/emissionAll/findAll2')
  //     .then(res =>{
  //       setData(res.data)
  //     })
  //   } else if(visOption === '2'){
  //     axios
  //     .get('http://localhost:8080/v1/api/ecar/findAll')
  //     .then(res =>{
  //       setData(res.data)
  //     })
  //   } else{
  //     axios
  //     .get('http://localhost:8080/v1/api/emission/findAll')
  //     .then(res =>{
  //       setData(res.data)
  //     })
  //   }

  // }

  return (
    <div>
        <div className='emission'>
            <div className="que__container">
                <div className="que__title" >Greenhouse gas emission inventory 2001-2020</div>
                <div className="que__desc">As the third major source of CO2 emissions in Australia, the impact of vehicle emissions is far worse than </div>
                <div className="que__desc">we thought. All motor vehicle pollutants are released into air and mostly through the exhaust fumes. </div>
                
            </div>
            <div className='vis-emi__option'>
                <button value="1" onClick={updateVisOption} className={visOption == 1? 'vis-emi__option__button--green':'vis-emi__option__button--white'}>Annually inventory</button>
                <button value="2" onClick={updateVisOption} className={visOption == 2? 'vis-emi__option__button--green':'vis-emi__option__button--white'}>Emission by categories</button>
                <button value="3" onClick={updateVisOption} className={visOption == 3? 'vis-emi__option__button--green':'vis-emi__option__button--white'}>By Transportation</button>
              </div>
            <div className='vis-emission__content'>
            <div className='vis-emission'>
              {/* <select className="vis-emission__select" name="emission" id="emission" onChange={updateVisOption} value={visOption} style={{marginTop:"20px"}}>
                <option value="" disabled>Emission</option>
                <option value="1">Annual</option>
                <option value="2">
                Emission by Gas</option>
                <option value="3">Transport</option>
              </select> */}

              {visOption === '1' && <QuarterlyEmissionAnnual visData={emissionAnnualData}/>}
              {visOption === '2' && <QuarterlyEmissionType visData={emissionTypeData}/>}
              {visOption === '3' && <QuarterlyEmissionTransport visData={emissionTypeData}/>}

            </div>
            <div className='text-area-emission'>
                {visOption === '1' && (<div ><div className='text-area_title'>Annually inventory</div>
                  <p className='text-area_desc'>Greenhouse gas emissions by Australia totalled 392 million tonnes CO2-equivalent for 2020, representing per capita CO2e emissions of 15 tons, three times the global average.</p></div>)}
                {visOption === '2' && (<div ><div className='text-area_title'>Emission by categories</div>
                  <p className='text-area_desc'>Energy production is the largest contributor to Australia's carbon emissions. This is followed by transport, agriculture, and industrial processes.</p></div>)}
                {visOption === '3' && (<div ><div className='text-area_title'>Transportation</div>
                  <p className='text-area_desc'>Transport emissions have grown more than any other sector, increasing nearly 60% since 1990. Cars are responsible for roughly half of all transport emissions.</p></div>)}
                
            </div>
            </div>
            
        </div>
    </div>
  )
}
