import React,{useEffect, useState} from 'react'
import axios from 'axios';
import predictionGraph from '../../assets/prediction/prediction.png'
import predictionCover from '../../assets/prediction/prediction-cover.png'
import './components/style.css'
import EmissionPredictionAll from '../prediction/components/EmissionPredictionAll';
import PopulationPre from '../predictiongraph/components/PopulationPre';
import VehiclePreVis from '../predictiongraph/components/VehiclePreVis'
import EmissionPreStackedBarVis from '../predictiongraph/components/EmissionPreStackedBarVis'

export default function Index() {

    
    // const [emissionPreEVAData, setemissionPreEVAData] = useState("")
    // const [emissionPreEVBData, setemissionPreEVBData] = useState("")
    const [emissionPreAllData, setemissionPreAllData] = useState("")
    const [visOption, setvisOption] = useState("1")
    const [populationData, setPopulationData] = useState("")
    const [vehicleData, setVehicleTypeData] = useState("")


    // http://localhost:8080
    // https://d1pvgbbxmbkkid.cloudfront.net
    useEffect(async () => {
        const result = await axios(
          'https://d1pvgbbxmbkkid.cloudfront.net/v1/api/predict/findAll/',
        );
        setemissionPreAllData(result.data)
      }, []);

      useEffect(async () => {
        const result = await axios(
          'https://d1pvgbbxmbkkid.cloudfront.net/v1/api/pop/findAll',
        );
        setPopulationData(result.data)
      }, []);

      useEffect(async () => {
        const result = await axios(
          'https://d1pvgbbxmbkkid.cloudfront.net/v1/api/veh/findAll',
        );
        setVehicleTypeData(result.data)
      }, []);
    
      // useEffect(async () => {
      //   const result = await axios(
      //     'https://d1pvgbbxmbkkid.cloudfront.net/v1/api/predict/findEVA/',
      //   );
      //   setemissionPreEVAData(result.data)
      // }, []);

      // useEffect(async () => {
      //   const result = await axios(
      //     'https://d1pvgbbxmbkkid.cloudfront.net/v1/api/predict/findEVB/',
      //   );
      //   setemissionPreEVBData(result.data)
      // }, []);

      const updateVisOption = (evt) =>{
        if(evt.target.value !== visOption){
          setvisOption(evt.target.value.toString())
        }
      }

  return (
    <div className='prediction-container'>
        <div className='pre-banner'>
            <div className='pre__title'>Victoria Future — Transport</div>
        </div>
        <div style={{background:"#E5E5E5"}}>
            <img src={predictionGraph} style={{width:"80%"}}></img>    
        </div>
        <div className='pre-vis-container'>

            <div className='pre-vis__title'>Here are some projections of future population, <br/>vehicles and carbon emissions</div>
            <select name="Council" id="council" onChange={updateVisOption} value={visOption}>
                {/* <option value="" disabled>Emission</option> */}
                <option value="1">Population</option>
                <option value="2">Vehicle</option>
                <option value="3">Emission</option>
              </select>
            <div className='pre-vis__body'>
                {visOption === '1' && <PopulationPre visData={populationData}/>}
                {visOption === '2' && <VehiclePreVis visData={vehicleData}/>}
                {visOption === '3' && <EmissionPreStackedBarVis visData={emissionPreAllData}/>}
            </div>
            
        </div>
        
        
    </div>
  )
}
