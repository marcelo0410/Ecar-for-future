import React,{useEffect, useState} from 'react'
import axios from 'axios';
import predictionGraph from '../../assets/prediction/prediction.png'
import predictionCover from '../../assets/prediction/prediction-cover.jpg'
import './components/style.css'
import PopulationPre from '../predictiongraph/components/PopulationPre';
import VehiclePreVis from '../predictiongraph/components/VehiclePreVis'
import EmissionPreStackedBarVis from '../predictiongraph/components/EmissionPreStackedBarVis'
import FlagIcon from '../../assets/prediction/flag.png'
import CarIcon from '../../assets/prediction/car.png'
import EcarIcon from '../../assets/prediction/ecar.png'
import QuestionIcon from '../../assets/prediction/question.png'
import PeopleIcon from '../../assets/prediction/people.png'
import upicon from '../../assets/common/upicon.png'

export default function Index() {

    
    // const [emissionPreEVAData, setemissionPreEVAData] = useState("")
    // const [emissionPreEVBData, setemissionPreEVBData] = useState("")
    const [emissionPreAllData, setemissionPreAllData] = useState("")
    const [visOption, setvisOption] = useState("1")
    const [populationData, setPopulationData] = useState("")
    const [vehicleData, setVehicleTypeData] = useState("")

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
        if(evt.target.id !== visOption){
          setvisOption(evt.target.id.toString())
        }
      }

  return (
    <div className='prediction-container'>
        <div className='pre-banner'>
          <div className='cur__title'><span style={{color:'#FFB344'}}>Future</span> Prediction</div>
          <div className='cur__subtitle'>The current environment here in Victoria is not optimistic, especialy for transport</div>
        </div>
        <div className='pre-info-white'>
          <div className='pre-info-card'>
            <div className='pre-info-img'>
              <img src={FlagIcon}/>
              <p>Target</p>
            </div>
            <div className='pre-info-desc pre-right'>
              <h2>Paris Climate Agreement</h2>
              <p>The Australian government committed to net zero emissions by 2050, inscribed low emissions technology stretch goals. Carbon emission is solidly connected to people's activities.</p>
            </div>
          </div>
        </div>
        <div className='pre-info-green'>
          <div className='pre-info-card'>
            <div className='pre-info-desc pre-right'>
              <h2>Increasing Population</h2>
              <p>In terms of the population of Victoria, it is projected to increase from 6.7 million in 2021 to 7.9 million in 2030, which means that the huge scale of people will increase the carbon emissions significantly. </p>
            </div>
            <div className='pre-info-img'>
              <img src={PeopleIcon}/>
              <p>6.7 m People</p>
            </div>
          </div>
        </div>
        <div className='pre-info-white'>
          <div className='pre-info-card'>
            <div className='pre-info-img'>
              <img src={CarIcon}/>
              <p>25% Emissions</p>
            </div>
            <div className='pre-info-desc pre-right'>
              <h2>The Number of Cars</h2>
              <p>Transport accounted for 25% (22.7 Mt CO2-e) of Victoria's carbon emissions, which is the second-largest source in the state. The transport sector emissions reduction pledge lays the foundations for Victoria to shift to zero emissions transport. </p>
            </div>
          </div>
        </div>
        <div className='pre-info-green'>
          <div className='pre-info-card'>
            <div className='pre-info-desc pre-right'>
              <h2>Electric Vehicles (EVs)</h2>
              <p>Considering the strong economic and population growth in Victoria, transport becomes the fastest-growing source of state emissions. Therefore, the Victorian Government proposes electric vehicles promotion plan to account for 50% of new car sales.</p>
            </div>
            <div className='pre-info-img'>
              <img src={EcarIcon} style={{width:'200px'}}/>
              <p>50 Market Share</p>
            </div>
          </div>
        </div>
        <div className='pre-info-white'>
          <div className='pre-info-card'>
            <div className='pre-info-img'>
              <img src={QuestionIcon}/>
              <p>More Advantages</p>
            </div>
            <div className='pre-info-desc pre-right'>
              <h2>Positive Contribution</h2>
              <p>There are significant benefits of EVs compared with traditional vehicles:</p>
              <ul>
                <li>Eliminate Greenhouse gas emissions</li>
                <li>Reduce air pollution</li>
                <li>Reduce fuel costs</li>
                <li>Lower maintenance costs</li>
                <li>Improved driving experience</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='pre-question-desc'>
          <p>Here are some projections of future population, vehicles, and carbon emissions</p>
        </div>
        <div className='pre-vis-container'>
            <div className='pre-vis__title'>General Prediction of Victoria 2000-2030</div>
              <div className='pre-vis__option'>
                <button id="1" onClick={e => updateVisOption(e)} className={visOption == 1? 'pre-vis__option__button--green':'pre-vis__option__button--white'}>Population</button>
                <button id="2" onClick={e => updateVisOption(e)} className={visOption == 2? 'pre-vis__option__button--green':'pre-vis__option__button--white'}>Vehicles</button>
                <button id="3" onClick={e => updateVisOption(e)} className={visOption == 3? 'pre-vis__option__button--green':'pre-vis__option__button--white'}>Carbon Emissions</button>
              </div>
            <div className='pre-vis__body'>
                <div className='pre-vis__split__left'>
                  {visOption === '1' && <PopulationPre visData={populationData}/>}
                  {visOption === '2' && <VehiclePreVis visData={vehicleData}/>}
                  {visOption === '3' && <EmissionPreStackedBarVis visData={emissionPreAllData}/>}
                </div>
                <div className='pre-vis__split__right'>
                  {visOption === '1' && (<div><div className='pre-vis__split__title'>Population</div><p className='pre-vis__split__desc'>As the seccond largest state in Australia by population, Victoria has been growing by more than any other states or territory at up to 150,000 per annum.</p></div>)}
                  {visOption === '2' && (<div><div className='pre-vis__split__title'>Vehicles</div><p className='pre-vis__split__desc'>The number of vehicle is expected to grow to 4.6 million, with the slowdown mainly due to the impact of COVID-19 and work from home.</p></div>)}
                  {visOption === '3' && (<div><div className='pre-vis__split__title'>Emissions</div><p className='pre-vis__split__desc'>  Considering the growth of the population and vehicles, the urgency of calling on the public to use electric vehicles to get around is now apparent, which is a significant contribution to carbon emissions</p></div>)}
                </div>
                
            </div>
            
        </div>
        <a className='back__area' onClick={backToTop}>
            <div>Back to top</div>
            <img src={upicon}></img>
        </a>
    </div>
  )
}
