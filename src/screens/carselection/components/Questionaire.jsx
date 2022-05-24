import React, {useState, useEffect, useRef} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import style from './style.module.css'
import progress3 from '../../../assets/carselection/progress_3.jpg'
import que_brand1 from '../../../assets/carselection/que_brand1.png'
import que_loc2 from '../../../assets/carselection/que_loc2.png'
import que_wallet3 from '../../../assets/carselection/que_wallet3.png'
import que_brain4 from '../../../assets/carselection/que_brain4.jpg'
import rec_tesla from '../../../assets/carselection/rec_tesla.jpg'
import rec_audi from '../../../assets/carselection/rec_audi.jpg'
import rec_benz from '../../../assets/carselection/rec_benz.jpg'
import upicon from '../../../assets/common/upicon.png'
import helpImage from '../../../assets/calculation/help-circle.png'
import GeneralCalculatorNew from './GeneralCalculatorNew'
import ChargingStation from './chargingstation/Index'
import $ from 'jquery'
import CostLineChart from './CostLineChart'
import EmiLineChart from './EmiLineChart'
import axios from 'axios'


export default function Questionaire() {

    const location = useLocation()
    const navigate = useNavigate()
    
    const [progressStep, setProgressStep] = useState('1000')

    // charging map
    const [suburb, setSuburb] = useState([-37.814107, 144.96328])


    // car recommendation
    const [carData, setCarData] = useState("")
    const [recCarData, setRecCarData] = useState("")
    const [carBudget, setCarBudget] = useState("budgetAll")
    const [carType, setCarType] = useState("typeAll")
    const [distance, setDistance] = useState(100)

    // General Calculator
    const [selectedCar, setSelectedCar] = useState(-1)
    const [travelDistance, setTravelDistance] = useState(0)
    const [fuelCom, setFuelCom] = useState(10)
    const [fuelType, setFuelType] = useState('1')
    const [passenger, setPassenger] = useState(1)
    const [chargingButtonCss, setChargingButtonCss] = useState(1)
    const [resultButtonCss, setResultButtonCss] = useState(1)

    const [resultCost, setResultCost] = useState(22)
    const [resultEmi, setResultEmi] = useState(25)
    const [ecarFixedCost, setEcarFixedCost] = useState(4)
    const [ecarEmi, setEcarEmi] = useState(13)

    // validation
    const [queDistanceValidate, setQueDistanceValidate] = useState(false);
    const [calDistanceValidate, setCalDistanceValidate] = useState(false);
    const [calFuelComValidate, setCalFuelComValidate] = useState(false);
    const [calPassengerValidate, setCalPassengerValidate] = useState(false);
    const [triggerUpdate, setTriggerUpdate] = useState(1)

    // tooltip
    const [divDisplay, setdivDisplay] = useState(`${style.help__tooltip} ${style.help__tooltip__unhover}`)


    // ref for scrolling to certain section
    const recRef = useRef(null);
    const comRef = useRef(null);
    const supRef = useRef(null);
    const selectRef = useRef(null)
    const calRef = useRef(null)
    const mapRef = useRef(null)



    //http://localhost:8080/v1/api/evDetail/findAll/
    useEffect(async () => {
        const result = await axios(
          'https://d1pvgbbxmbkkid.cloudfront.net/v1/api/evDetail/findAll/',
        );
        let temp = result.data.sort( function( a, b ) {
            a = a['evBrand'].toLowerCase();
            b = b['evBrand'].toLowerCase();
        
            return a < b ? -1 : a > b ? 1 : 0;
        });
        console.log(temp)
        setCarData(temp)
        
      }, []);

    const backToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setProgressStep('1000')
    }

    const validateAndNaviToRec = () =>{
        if(isNaN(distance) || distance<=0 || distance > 10000){
            setQueDistanceValidate(true)
        } else{
            recRef.current.scrollIntoView()
            setProgressStep('2100')
            setQueDistanceValidate(false)
            recommendCar()
        }
    }

    const recommendCar = () =>{
        // let temp = carData.sort(function (a,b){
        //     return parseInt(b.evBudget) - parseInt(a.evBudget)
        // })
        // setRecCarData(temp.slice(0,3))
        // console.log(carType)
        // console.log(carBudget)
        // console.log(distance)

        // temp = carData.filter((item) => item['evBrand'] === 'Tesla')
        // temp = carData.filter((item) => (
        //     item['evBrand'] === 'Tesla' && parseInt(item['evBudget']) > 100000
        // ))
        let temp = ""
        let max = 0
        let min = 0
        if(carBudget === "50"){
            min = 50000
            max = 100000
        } else if (carBudget === "100"){
            min = 100001
            max = 150000
        } else if (carBudget === "150"){
            min = 150001
            max = 10000000
        }

        if(carType === 'typeAll'){
            temp = carData.filter((item) => (
                parseInt(item['evDistance'])*0.8 >= distance*1.25
            ))
            if(carBudget === "budgetAll"){
                temp = temp.sort(function (a,b){
                    return parseInt(a.evBudget) - parseInt(b.evBudget)
                }).slice(0,3)
                // console.log(temp)
            } else{
                temp = temp.filter((item) => (
                    parseInt(item['evBudget']) < max && parseInt(item['evBudget']) > min
                )).slice(0,3)
                // console.log(temp)
            }
        } else{
            temp = carData.filter((item) => (
                item['evBrand'] === carType && (parseInt(item['evDistance'])*0.8 >= distance*1.25)
            ))
            if(carBudget === "budgetAll"){
                temp = temp.sort(function (a,b){
                    return parseInt(a.evBudget) - parseInt(b.evBudget)
                }).slice(0,3)
                // console.log(temp)
            } else{
                temp = temp.filter((item) => (
                    parseInt(item['evBudget']) < max && parseInt(item['evBudget']) > min
                )).sort(function (a,b){
                    return parseInt(a.evBudget) - parseInt(b.evBudget)
                }).slice(0,3)
            }
        }
        if(temp.length < 3){
            if(carType === 'typeAll'){
                temp = carData.filter((item) => (
                    parseInt(item['evDistance'])*0.8 >= distance*1.25
            )).slice(0,3)
        } else{
                temp = carData.filter((item) => (
                    item['evBrand'] === carType && (parseInt(item['evDistance'])*0.8 >= distance*1.25)
                )).slice(0,3)
            }
        }
        if(1<temp.length<3){
            setRecCarData(temp)
        } else if(temp.length === 3){
            setRecCarData(temp)
        } else{
            temp = carData.slice(0,3)
            setRecCarData(temp)
        }
        if(temp.length == 0){
            temp = carData.filter((item) => (
                item['evId'] === 5 || item['evId'] === 28 || item['evId'] === 30
            ))
            setRecCarData(temp)
        }
    }

    const naviToCompare = (id) =>{
        calRef.current.scrollIntoView()
        setProgressStep('2210')
        setSelectedCar(id)
        calculateAndVis()
        // setResultCost(0)
        // setResultEmi(0)
        // setEcarEmi(0)
        // setEcarFixedCost(0)
        const fuelPrice = {
            "1":2.17,
            "2":2.31,
            "3":2.39,
            "4":2.14
          }

          // Cost and maintenance
          let result = Math.round(distance * (1+passenger*0.1-0.1)*fuelCom/100*fuelPrice[fuelType])
          setResultCost(result)
          console.log('resultCost', result)


          let temp1;
          if(selectedCar === -1){
              temp1 = 1
          } else{
              temp1 = selectedCar
          }
          let selectCarData1 = Array.from(carData).filter((item) => item['evId'] == id)
          if(chargingButtonCss ===1){
            setEcarFixedCost(Math.round(distance/100*selectCarData1[0]['evEnergy']*0.3))
          } else{
            setEcarFixedCost(Math.round(distance/100*selectCarData1[0]['evEnergy']*0.5))
          }
          
          console.log('setEcarFixedCost', Math.round(distance*0.04))

      
          // CO2 generated
          const resultCo2 = distance /100 *fuelCom*2500
          setResultEmi(Math.round(resultCo2 * 100/1000) / 100)
          console.log('setResultEmi', Math.round(resultCo2 * 100/1000) / 100)


          // CO2 generated ecar
          // E-car Carbon emission = 
          // Travel distance * 0.04 + 
          // Travel distance * (EV battery capacity / 80% EV标注里程) * 0.8 （0.8指的是每发一度电会产生约0.8kgCO2）
          let temp;
          if(selectedCar === -1){
              temp = 1
          } else{
              temp = selectedCar
          }
          let selectCarData = Array.from(carData).filter((item) => item['evId'] == id)
          const resultEcarCo2 = distance * (selectCarData[0]['evBattery'] / selectCarData[0]['evDistance']) * 0.8
          setEcarEmi(Math.round(resultEcarCo2))
          console.log('setEcarEmi', Math.round(resultEcarCo2))
          setTriggerUpdate(triggerUpdate+1)

    }

    const naviToMap = () =>{
        mapRef.current.scrollIntoView()
        setProgressStep('2221')
    }

    const naviToCarGuide = () =>{
        navigate('/carguide');
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const updateMap = (e) =>{
        setProgressStep('2222')
        const coordinates = {
            "1": [-37.814107, 144.96328],
            "2": [-37.823258, 144.965926],
            "3": [-37.807101, 144.907953],
            "4": [-37.814719, 144.948039],
            "5": [-37.821, 145.125],
            "6": [-37.823002, 144.998001],
            "7": [-37.84, 144.989],
            "8": [-37.7912335017, 145.155],
            "9": [-37.864, 144.982],
            "10": [-37.915047, 145.129272],

        }
        if(suburb !== coordinates[e.target.value]){
            setSuburb(coordinates[e.target.value])
        }
        
    }

    const progressArray = {
        '0': `${style.stepper__item}`,
        '1': `${style.stepper__item} ${style.active}`,
        '2': `${style.stepper__item} ${style.completed}`
    }

    const resetValue = () =>{
        // setTravelDistance(0)
        setFuelCom(10)
        setFuelType('1')
        setPassenger(1)
        selectRef.current.selectedIndex=0
        setResultCost(22)
        setResultEmi(25)
        setEcarEmi(13)
        setEcarFixedCost(4)
        // setCalDistanceValidate(false)
        setCalFuelComValidate(false)
        setCalPassengerValidate(false)
        setSelectedCar(-1)
      }
    

    
      const changeButtonOrange = () =>{
        if(chargingButtonCss == 0){
          setChargingButtonCss(1)
        }
      }
    
      const changeButtonWhite = () =>{
        if(chargingButtonCss == 1){
          setChargingButtonCss(0)
        }
      }
    
      const changeResultButtonRed = () =>{
        if(resultButtonCss == 0){
          setResultButtonCss(1)
        }
      }
    
      const changeResultButtonWhite = () =>{
        if(resultButtonCss == 1){
          setResultButtonCss(0)
        }
      }
    
      const calculateCost = () => {

        validateCalculatorInput()
      }

      // stop useEffect to initially render 
      const firstUpdate = useRef(true);

      useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
          } else {
            calculateAndVis()
          }
        return () => {

        }
      }, [triggerUpdate])

      

      const validateCalculatorInput = () =>{
        // console.log(isNaN(travelDistance.toString()))
        // if(isNaN(travelDistance.toString()) || travelDistance<=0 || travelDistance > 10000){
        //     setCalDistanceValidate(true)
        // } else{
        //     if(calDistanceValidate !== false){
        //         setCalDistanceValidate(false)
        //     }
            
        // }

        if(isNaN(fuelCom.toString()) || fuelCom<5 || fuelCom > 50){
            setCalFuelComValidate(true)
        } else{
            if(calFuelComValidate !== false){
                setCalFuelComValidate(false)
            }
        }

        if(isNaN(passenger.toString()) || passenger<=0 || passenger > 20){
            setCalPassengerValidate(true)
        } else{
            if(calPassengerValidate !== false){
                setCalPassengerValidate(false)
            }
        }
        setTriggerUpdate(triggerUpdate+1)
      }
      //calDistanceValidate === false && 
      const calculateAndVis = () =>{
        if(calFuelComValidate === false && calPassengerValidate === false){
            const fuelPrice = {
                "1":2.17,
                "2":2.31,
                "3":2.39,
                "4":2.14
              }

              // Cost and maintenance
              let result = Math.round(distance * (1+passenger*0.1-0.1)*fuelCom/100*fuelPrice[fuelType])
              setResultCost(result)
              console.log('resultCost', result)


              let temp1;
              if(selectedCar === -1){
                  temp1 = 1
              } else{
                  temp1 = selectedCar
              }
              let selectCarData1 = Array.from(carData).filter((item) => item['evId'] == temp1)
              if(chargingButtonCss ===1){
                setEcarFixedCost(Math.round(distance/100*selectCarData1[0]['evEnergy']*0.3))
              } else{
                setEcarFixedCost(Math.round(distance/100*selectCarData1[0]['evEnergy']*0.5))
              }
              
              console.log('setEcarFixedCost', Math.round(distance*0.04))

          
              // CO2 generated
              const resultCo2 = distance /100 *fuelCom*2500
              setResultEmi(Math.round(resultCo2 * 100/1000) / 100)
              console.log('setResultEmi', Math.round(resultCo2 * 100/1000) / 100)


              // CO2 generated ecar
              // E-car Carbon emission = 
              // Travel distance * 0.04 + 
              // Travel distance * (EV battery capacity / 80% EV标注里程) * 0.8 （0.8指的是每发一度电会产生约0.8kgCO2）
              let temp;
              if(selectedCar === -1){
                  temp = 1
              } else{
                  temp = selectedCar
              }
              let selectCarData = Array.from(carData).filter((item) => item['evId'] == temp)
              const resultEcarCo2 = distance * (selectCarData[0]['evBattery'] / selectCarData[0]['evDistance']) * 0.8
              setEcarEmi(Math.round(resultEcarCo2))
              console.log('setEcarEmi', Math.round(resultEcarCo2))
              setProgressStep('2221')
              
              
            //   setCalDistanceValidate(false)
            //   setCalFuelComValidate(false)
            //   setCalPassengerValidate(false)
        }
      }

      const displayCar = () =>{
        const firstNData = carData.slice(0, 3);
        firstNData.map((data) =>{
             <div key={data.evId}>{data.evBrand}</div>
        }
        );
      }

      const renderProgressbar = () =>{
        setProgressStep('2222')
      }

      const hoverHelp = () =>{
        setdivDisplay(`${style.help__tooltip} ${style.help__tooltip__hover}`)
      }
    
      const hoverLeave = () =>{
        setdivDisplay(`${style.help__tooltip} ${style.help__tooltip__unhover}`)
    
      }
      



  return (
    //   `${style.stepper__item} ${style.completed}`
    // `${style.stepper__item} ${style.active}`
    // `${style.stepper__item}`
    <div >
        <div className={style.progress__sec}>
            <div className={style.stepper__wrapper}>
                <div className={progressArray[progressStep[0]]}>
                    <div className={style.step__counter}>1</div>
                    <div className={style.step__name}>Preferences</div>
                </div>
                <div className={progressArray[progressStep[1]]}>
                    <div className={style.step__counter}>2</div>
                    <div className={style.step__name}>Recommendations</div>
                </div>
                <div className={progressArray[progressStep[2]]}>
                    <div className={style.step__counter}>3</div>
                    <div className={style.step__name}>Comparison</div>
                </div>
                <div className={progressArray[progressStep[3]]}>
                    <div className={style.step__counter}>4</div>
                    <div className={style.step__name}>Maintenance</div>
                </div>
            </div>
        </div>
        <div className={style.que__container}>
            <div className={style.que__title} >Questionnaire</div>
            <div className={style.que__desc}>Please complete the survey to find the commended electric vehicle that best suits your needs</div>
        </div>
        <section id="questions" className={style.que__sec}> 
            <div className={style.que__block__gray}>
                <div className={style.que__block__split}>
                    <div className={style.que__block__split__left}>
                        <img src={que_brand1} className={style.que__block__img}></img>
                        <div>
                            <div className={style.que__block__title}>Brand</div>
                            <div className={style.que__block__desc}>Which brand do you prefer?</div>
                        </div>
                    </div>
                    <div className={style.que__block__split__right}>
                        <select className={style.que__block__split__select} onChange={e => setCarType(e.target.value)}>
                            <option value="typeAll">No specific brand</option>
                            <option value="Tesla">Tesla</option>
                            <option value="Audi">Audi</option>
                            {/* <option value="benz">Benz</option> */}
                            <option value="BMW">BMW</option>
                            {/* <option value="hyundai">Hyundai</option> */}
                        </select>
                        {/* <span>  km</span> */}
                    </div>
                </div>
                
            </div>
            <div className={style.que__block__white}>
            <div className={style.que__block__split}>
                        <div className={style.que__block__split__left}>
                            <img src={que_loc2} className={style.que__block__img}></img>
                            <div>
                                <div className={style.que__block__title}>Distance</div>
                                <div className={style.que__block__desc}>What is your average travel distance per week?</div>
                            </div>
                        </div>
                        <div className={style.que__block__split__right}>
                            <input className={queDistanceValidate === false? style.que__block__split__input:style.que__block__split__input__error} value={distance} onChange={e => setDistance(e.target.value)}></input>
                            <span className={style.que__block__split__span}>   km</span>
                            <div className={queDistanceValidate === false? style.que__block__error:style.que__block__error__show}>Please enter a valid number(1-10000)</div>

                        </div>
                </div>
            </div>
            <div className={style.que__block__gray}>
            <div className={style.que__block__split}>
                        <div className={style.que__block__split__left}>
                            <img src={que_wallet3} className={style.que__block__img}></img>
                            <div>
                                <div className={style.que__block__title}>Budget</div>
                                <div className={style.que__block__desc}>What is your expected buget?</div>
                            </div>
                        </div>
                        <div className={style.que__block__split__right}>
                            <select className={style.que__block__split__select} value={carBudget} onChange={e => setCarBudget(e.target.value)}>
                                <option value="budgetAll">No specific budget</option>
                                <option value="50">50k - 100k</option>
                                <option value="100">100k - 150k</option>
                                <option value="150">Over 150k</option>
                            </select>
                            {/* <span>  km</span> */}
                        </div>
                </div>
            </div>
            <div className={style.que__block__white}>
                <div className={style.que__block__button__area} ref={recRef}>
                    <button className={style.rec__bottom__button} onClick={validateAndNaviToRec}>Submit</button>
                </div>
            </div>
        </section>
        {recCarData !== "" && (<div><div className={style.que__container}>
            <div className={style.que__title} >Recommendation</div>
            <div className={style.que__desc}>Recommend the appropriate electric vehicle model for your requirements and preferences</div>
        </div></div>)}
        <section >
            {recCarData !== "" && (<div className={style.rec__title}>Here are the top three recommended models <br/>Please select your preferred model for the next step of comparison</div>)}
            <div className={style.rec__tile__area}>
                {
                    Array.from(recCarData).slice(0,3).map((item,index)=>
                    <div className={`${style.rec__tile__item} ${style.rec__title__border}`} key={item['evId']}>
                        <img src={item['imgLink']} className={style.rec__tile__item__img}></img>
                        <div className={style.rec__tile__item__desc}>
                            Brand: {item['evBrand']}<br/>
                            Model: <span className={item['evType'].length>18? style.rec__tile__item__desc__type__smallfont: style.rec__tile__item__desc__type}>{item['evType']}</span><br/>
                            Price: {parseInt(item['evBudget']).toLocaleString('en-US', { style: 'currency', currency: 'USD',maximumFractionDigits: '0' })}<br/>
                            Travel distance: {item['evDistance']} km<br/>
                        </div>
                        <button className={style.rec__tile__item__button} onClick={() =>naviToCompare(item['evId'])}>Select</button>
                        <div  className={style.rec__tile__item__link}><a href={item['link']} target="_blank">Learn More</a></div>
                        
                    </div>
                    
                     )
                }
            

            </div>
            {recCarData !== "" && (<div className={style.rec__bottom__title__gray}>*Price is based on the Manufacturer's Suggested Retail Price for the lowest priced model.</div>)}
            
            
        </section>
            {recCarData !== "" && (<div><div className={style.rec__bottom__title} ref={calRef}>Not satisfied with the recommondations?</div>
            <a href='carguide' target="_blank"><button className={style.rec__bottom__button}>See all models</button></a></div>)}
            
        <div className={style.que__container}>
            <div className={style.que__title} ref={comRef}>Comparison</div>
            <div className={style.que__desc}>Compare your fossil fuel car and the recommended EV model to display the contribution and benefits</div>
        </div>
        <div className={style['genc__topbar']}>
            <div className={style['genc__topbar--blue']} ></div>
            <div className={style['genc__topbar--green']}></div>
        </div>

        <section>
            <div className={style.genc__container} >
      
            <section className={style.genc__sec}>
                <div className={style.genc__split}>
                    
                    <div className={style.genc__split__left}>
                    
                    <div className={style.genc__que__area}>
                    <div className={style.gen__select__title}>Your selected model is: </div>
                    
                        {selectedCar !== -1 && carData!=="" && (<div className={style.gen__select__carName}>{ Array.from(carData).filter((item) => item['evId'] === selectedCar)[0]['evBrand'] }<span> { Array.from(carData).filter((item) => item['evId'] === selectedCar)[0]['evType'] }</span></div>)}    
                        {selectedCar === -1 && carData!=="" && (<div className={style.gen__select__carName}>{ Array.from(carData).filter((item) => item['evId'] === 1)[0]['evBrand'] }<span> { Array.from(carData).filter((item) => item['evId'] === 1)[0]['evType'] } (default)</span></div>)}    
                        <p className={style.genc__split__desc}>These questions provide a more accurate comparison between fossil fuel cars and electric vehicles.</p>
                        <div className={style.genc__que__split}>
                        {/* <div className={style.genc__que__area__left}>
                            <div className={style.genc__que__area__title}>Travel distance</div>
                            <p className={style.genc__que__area__desc}>Your average travel distance per <br/>week.</p>
                        </div>
                        <div className={style.genc__que__area__right}>
                            <input className={calDistanceValidate === false? style.genc__que__area__input:style.genc__que__area__input__error} name="travelDistance" value={travelDistance} onChange={ e => setTravelDistance(e.target.value)}/>
                            <span className={style.genc__que__area__span}>  km</span>
                            <div className={calDistanceValidate === false? style.genc__block__error:style.genc__block__error__show}>Please enter a valid number</div>
                        </div> */}
                        </div>
                        <div className={style.genc__que__split}>
                        
                        <div className={style.genc__que__area__left}>
                            <div className={style.genc__que__area__title} >Fuel consumptions</div>
                            <p className={style.genc__que__area__desc}>Your average fuel consumptions <br/>per week by your car.</p>
                        </div>
                        {/*     const [calDistanceValidate, setCalDistanceValidate] = useState(false);
    const [calFuelComValidate, setCalFuelComValidate] = useState(false);
    const [calPassengerValidate, setCalPassengerValidate] = useState(false); */}
                        <div>
                            <input className={calFuelComValidate === false? style.genc__que__area__input:style.genc__que__area__input__error} min="0" max="10" value={fuelCom} onChange={ e => setFuelCom(e.target.value)}></input>
                            <span className={style.genc__que__area__span}>  L/100km</span>
                            <div className={calFuelComValidate === false? style.genc__block__error:style.genc__block__error__show}>Please enter a valid number (5-50)</div>
                        </div>
                        </div>
                        <div className={style.genc__que__split}>
                            <div className={style.genc__que__area__left}>
                                <div className={style.genc__que__area__title}>Fuel type</div>
                                <p className={style.genc__que__area__desc}>Your commonly used fuel type</p>
                            </div>
                            <div>
                                <select className={style.genc__que__area__select} ref={selectRef} onChange={e => setFuelType(e.target.value)}>
                                    <option value="1">Unleaded 91</option>
                                    <option value="2">Unleaded 95</option>
                                    <option value="3">Unleaded 98</option>
                                    <option value="4">Diesel</option>
                                </select>
                            </div>
                        </div>
                        <div className={style.genc__que__split}>
                            <div className={style.genc__que__area__left}>
                                <div className={style.genc__que__area__title}>Passengers</div>
                                <p className={style.genc__que__area__desc}>Your number of passengers in <br/>your car</p>
                            </div>
                        <div>
                            <input className={calPassengerValidate === false? style.genc__que__area__input:style.genc__que__area__input__error}  value={passenger} onChange={e => setPassenger(e.target.value)}></input>
                            <span className={style.genc__que__area__span}>  people</span>
                            <div className={calPassengerValidate === false? style.genc__block__error:style.genc__block__error__show}>Please enter a valid number(1-20)</div>
                        </div>
                        </div>
                        <div className={style.genc__que__split__nomargin}>
                            <div className={style.genc__que__area__left}>
                                <div className={style.genc__que__area__title} >Charging pile<img src={helpImage} className={style.genc__que__area__title__img} onMouseOver={hoverHelp} onMouseOut={hoverLeave}></img></div>
                                <p className={style.genc__que__area__desc}>Available to install your own <br/>charging pile</p>
                                
                            </div>
                            <div className={style.genc__que__button} ref={mapRef}>
                                <button className={ chargingButtonCss===1? `${style.genc__que__button__orange}`:`${style.genc__que__button__white}`} onClick={changeButtonOrange}>Yes</button>
                                <button className={ chargingButtonCss===1? `${style.genc__que__button__white}`:`${style.genc__que__button__orange}`} onClick={changeButtonWhite}>No</button>
                            </div>
                        </div>
                        <div className={style.genc__que__split}>
                            <div className={divDisplay}>The price of the electric may be vary due to the place that you charge your car. The price of your own charging pile is the lowest.</div>
                        </div>
                    </div>
                    </div>
                    <div className={style.genc__split__right}>
                    
                    <div className={style.genc__split__result}>
                        <div className={style.genc__split__title}>Comparison Results</div>
                        <p className={resultCost>0? style.genc__split__desc:style.genc__split__desc__show}>The recommended EV model can reduce $ <span className={style.genc__split__desc__highlight}>{resultCost}</span> per week, and reduce <span className={style.genc__split__desc__highlight}>{Math.round(resultEmi - ecarEmi)}</span> kg (CO2), compared with the fossil fuel car. </p>
                        <div className={style.genc__que__result__button}>
                            <button className={ resultButtonCss===1? `${style.genc__que__button__right__red}`:`${style.genc__que__button__right__white}`} onClick={changeResultButtonRed}>Payment Comparison</button>
                            <button className={resultButtonCss===0? `${style.genc__que__button__right__red}`:`${style.genc__que__button__right__white}`} onClick={changeResultButtonWhite}>Emission Comparison</button>
                        </div>
                        {resultButtonCss === 1 && <div className={style.genc__que__result__vis}><CostLineChart resultCost={resultCost} ecarFixedCost={ecarFixedCost}/></div>}
                        {resultButtonCss === 0 && <div className={style.genc__que__result__vis}><EmiLineChart resultEmi={resultEmi} ecarEmi={ecarEmi}/></div>}
                    </div>
                    </div>
                </div>
            </section>
        </div>
        <div className={style.genc__bottom__bar}>
                <div className={style.genc_bottom__bar__split}>
                    <button className={style.genc__bottom__orangebutton} onClick={calculateCost}>Compare</button>
                </div>
                {/* <div className={style.genc_bottom__bar__split} >
                    <button className={style.genc__bottom__redbutton} onClick={resetValue}>Reset</button>
                </div> */}
                {/* <div className={style.genc_bottom__bar__split} >
                    <button className={style.genc__bottom__redbutton} onClick={naviToMap}>Charging Map</button>
                </div> */}
            </div>
        </section> 
        <div className={style.que__container}>
            <div className={style.que__title} ref={supRef}>Maintenance</div>
            <div className={style.que__desc}>Display the charging stations and relevant information on the map. </div>
        </div>
        <section>
            <div className={style.sup__input__area}>
                <div className={style.sup__input__desc}>Select your suburb:</div>
                <select onChange={e => updateMap(e)} className={style.sup__input__select}>
                    <option value="1">Melbourne</option>
                    <option value="2">Southbank</option>
                    <option value="3">Footscray</option>
                    <option value="4">Docklands</option>
                    <option value="5">Box Hill</option>
                    <option value="6">Richmond</option>
                    <option value="7">South Yarra</option>
                    <option value="8">Doncaster</option>
                    <option value="9">St Kilda</option>
                    <option value="10">Clayton</option>
                    {/* Melbourne 3000, Southbank 3006, Footscray 3011, Docklands 3008, Box Hill 3128, Richmond 3121, South Yarra 3141, Doncaster 3108, St Kilda 3182, Clayton 3168 */}
                </select>
            </div>
            <div style={{width:"75%", margin:"30px auto", zIndex:"0"}} onClick={renderProgressbar}>
                <ChargingStation coordinate={suburb} />
            </div>
            

        </section>
        <a className={style.back__area} onClick={backToTop}>
            <div>Back to top</div>
            <img src={upicon}></img>
        </a>
    </div>
  )
}
