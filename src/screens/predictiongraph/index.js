import React,{useEffect, useState} from 'react'
import axios from 'axios';
import predictionGraph from '../../assets/prediction/prediction.png'
import predictionCover from '../../assets/prediction/prediction-cover.png'
import './components/style.css'
import EmissionPredictionAll from '../prediction/components/EmissionPredictionAll';

export default function Index() {

    const [emissionPreAllData, setemissionPreAllData] = useState("")
    const [emissionPreEVAData, setemissionPreEVAData] = useState("")
    const [emissionPreEVBData, setemissionPreEVBData] = useState("")


    // https://d1pvgbbxmbkkid.cloudfront.net
    useEffect(async () => {
        const result = await axios(
          'http://localhost:8080/v1/api/predict/findAll/',
        );
        setemissionPreAllData(result.data)
      }, []);
    
      useEffect(async () => {
        const result = await axios(
          'http://localhost:8080/v1/api/predict/findEVA/',
        );
        setemissionPreEVAData(result.data)
      }, []);

      useEffect(async () => {
        const result = await axios(
          'http://localhost:8080/v1/api/predict/findEVB/',
        );
        setemissionPreEVBData(result.data)
      }, []);

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
            <div className='pre-vis__body'>
                <EmissionPredictionAll visData={emissionPreAllData}/>
            </div>
            
        </div>
        
        
    </div>
  )
}
