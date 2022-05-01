import React,{useEffect, useState} from 'react'
import axios from 'axios';
import EmissionPredictionAll from './components/EmissionPredictionAll';

export default function Index() {
    const [emissionPreAllData, setemissionPreAllData] = useState("")
    const [emissionPreEVAData, setemissionPreEVAData] = useState("")
    const [emissionPreEVBData, setemissionPreEVBData] = useState("")

    // http://localhost:8080
    // http://ecarforfuture-env.eba-pbjsb4gy.ap-southeast-2.elasticbeanstalk.com/
    useEffect(async () => {
        const result = await axios(
          'https://d1pvgbbxmbkkid.cloudfront.net/v1/api/predict/findAll/',
        );
        setemissionPreAllData(result.data)
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


  return (
    // 123

    <div style={{marginTop:"50px", marginLeft:"auto", marginRight:"auto"}}>
        <EmissionPredictionAll title={"Annual Emission Prediction"} visData={emissionPreAllData}/>
        <EmissionPredictionAll title={"EVA Emission Prediction"} visData={emissionPreEVAData}/>
        <EmissionPredictionAll title={"EVB Emission Prediction"} visData={emissionPreEVBData}/>
    </div>
  )
}
