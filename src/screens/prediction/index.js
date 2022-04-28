import React,{useEffect, useState} from 'react'
import axios from 'axios';
import EmissionPredictionAll from './components/EmissionPredictionAll';

export default function Index() {
    const [emissionPreAllData, setemissionPreAllData] = useState("")
    const [emissionPreEVAData, setemissionPreEVAData] = useState("")
    const [emissionPreEVBData, setemissionPreEVBData] = useState("")

    useEffect(async () => {
        const result = await axios(
          'http://localhost:8080/v1/api/predict/findAll',
        );
        setemissionPreAllData(result.data)
      }, []);
    
      useEffect(async () => {
        const result = await axios(
          'http://localhost:8080/v1/api/predict/findEVA',
        );
        setemissionPreEVAData(result.data)
      }, []);

      useEffect(async () => {
        const result = await axios(
          'http://localhost:8080/v1/api/predict/findEVB',
        );
        setemissionPreEVBData(result.data)
      }, []);


  return (
    <div style={{marginTop:"50px", marginLeft:"auto", marginRight:"auto"}}>
        <EmissionPredictionAll title={"Annual Emission Prediction"} visData={emissionPreAllData}/>
        <EmissionPredictionAll title={"EVA Emission Prediction"} visData={emissionPreEVAData}/>
        <EmissionPredictionAll title={"EVB Emission Prediction"} visData={emissionPreEVBData}/>
    </div>
  )
}
