import React, {useState, useEffect, useRef} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import style from './style.module.css'
import progress3 from '../../../assets/carselection/progress_3.jpg'
import que_brand1 from '../../../assets/carselection/que_brand1.jpg'
import que_loc2 from '../../../assets/carselection/que_loc2.png'
import que_wallet3 from '../../../assets/carselection/que_wallet3.png'
import que_brain4 from '../../../assets/carselection/que_brain4.jpg'
import rec_tesla from '../../../assets/carselection/rec_tesla.jpg'
import rec_audi from '../../../assets/carselection/rec_audi.jpg'
import rec_benz from '../../../assets/carselection/rec_benz.jpg'
import upicon from '../../../assets/common/upicon.png'
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
    const [selectedCar, setSelectedCar] = useState(null)
    const [travelDistance, setTravelDistance] = useState(0)
    const [fuelCom, setFuelCom] = useState(0.0)
    const [fuelType, setFuelType] = useState('1')
    const [passenger, setPassenger] = useState(1)
    const [chargingButtonCss, setChargingButtonCss] = useState(1)
    const [resultButtonCss, setResultButtonCss] = useState(1)
    const [resultCost, setResultCost] = useState(0)
    const [resultEmi, setResultEmi] = useState(0)
    const [ecarFixedCost, setEcarFixedCost] = useState(0)

    // validation
    const [queDistanceValidate, setQueDistanceValidate] = useState(false);
    const [calDistanceValidate, setCalDistanceValidate] = useState(false);
    const [calFuelComValidate, setCalFuelComValidate] = useState(false);
    const [calPassengerValidate, setCalPassengerValidate] = useState(false);
    const [triggerUpdate, setTriggerUpdate] = useState(1)

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
          'http://localhost:8080/v1/api/evDetail/findAll/',
        );
        setCarData(Array.from(result.data)) 
        
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
        console.log(carType)
        console.log(carBudget)
        console.log(distance)

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
                console.log(temp)
            } else{
                temp = temp.filter((item) => (
                    parseInt(item['evBudget']) < max && parseInt(item['evBudget']) > min
                )).slice(0,3)
                console.log(temp)
            }
        } else{
            temp = carData.filter((item) => (
                item['evBrand'] === carType && (parseInt(item['evDistance'])*0.8 >= distance*1.25)
            ))
            if(carBudget === "budgetAll"){
                temp = temp.sort(function (a,b){
                    return parseInt(a.evBudget) - parseInt(b.evBudget)
                }).slice(0,3)
                console.log(temp)
            } else{
                temp = temp.filter((item) => (
                    parseInt(item['evBudget']) < max && parseInt(item['evBudget']) > min
                )).sort(function (a,b){
                    return parseInt(a.evBudget) - parseInt(b.evBudget)
                }).slice(0,3)
                console.log('abc',temp)
                console.log('min', min)
                console.log('max', max)
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
        console.log(id)
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
        const coordinates = {
            "1": [-37.814107, 144.96328],
            "2": [-37.83333, 144.96667],
            "3": [-37.83961, 144.94228],
            "4": [-37.799167, 144.946667],
            "5": [-37.8, 144.96667],
            "6": [-37.915047, 145.129272],

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
        setTravelDistance(0)
        setFuelCom(0)
        setFuelType('1')
        setPassenger(1)
        selectRef.current.selectedIndex=0
        setResultCost(0)
        setResultEmi(0)
        setEcarFixedCost(0)
        setCalDistanceValidate(false)
        setCalFuelComValidate(false)
        setCalPassengerValidate(false)
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

      useEffect(() => {
        calculateAndVis()
        return () => {

        }
      }, [triggerUpdate])
      

      const validateCalculatorInput = () =>{
        console.log(isNaN(travelDistance.toString()))
        if(isNaN(travelDistance.toString()) || travelDistance<=0 || travelDistance > 10000){
            setCalDistanceValidate(true)
        } else{
            if(calDistanceValidate !== false){
                setCalDistanceValidate(false)
            }
            
        }

        if(isNaN(fuelCom.toString()) || fuelCom<=0 || fuelCom > 30){
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

      const calculateAndVis = () =>{
        if(calDistanceValidate === false && calFuelComValidate === false && calPassengerValidate === false){
            const fuelPrice = {
                "1":2.17,
                "2":2.31,
                "3":2.39,
                "4":2.14
              }

              // Cost and maintenance
              let result = Math.round(travelDistance * (1+passenger*0.1-0.1)*fuelCom/100*fuelPrice[fuelType])
              setResultCost(result)
          
              // CO2 generated
              const resultCo2 = travelDistance /100 *fuelCom*2500
              setResultEmi(Math.round(resultCo2 * 100/1000) / 100)

              setEcarFixedCost(Math.round(travelDistance*0.04))
            //   setCalDistanceValidate(false)
            //   setCalFuelComValidate(false)
            //   setCalPassengerValidate(false)
        }
      }

      const displayCar = () =>{
        const firstNData = carData.slice(0, 3);
        console.log(firstNData)
        firstNData.map((data) =>{
             <div key={data.evId}>{data.evBrand}</div>
        }
        );
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
                    <div className={style.step__name}>Recommondations</div>
                </div>
                <div className={progressArray[progressStep[2]]}>
                    <div className={style.step__counter}>3</div>
                    <div className={style.step__name}>Comparison</div>
                </div>
                <div className={progressArray[progressStep[3]]}>
                    <div className={style.step__counter}>4</div>
                    <div className={style.step__name}>Infrastructures</div>
                </div>
            </div>
        </div>
        <div className={style.que__container}>
            <div className={style.que__title} >Questionnaire</div>
            <div className={style.que__desc}>Survey your daily needs and personal preferences to make reasonable recommendations</div>
        </div>
        <section id="questions" className={style.que__sec}>
            <div className={style.que__block__white}>
                <div className={style.que__block__split}>
                    <div className={style.que__block__split__left}>
                        <img src={que_brand1} className={style.que__block__img}></img>
                        <div>
                            <div className={style.que__block__title}>1. Brand</div>
                            <div className={style.que__block__desc}>Which brand do you prefer?</div>
                        </div>
                    </div>
                    <div className={style.que__block__split__right}>
                        <select className={style.que__block__split__select} onChange={e => setCarType(e.target.value)}>
                            <option value="typeAll">All Brands</option>
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
            <div className={style.que__block__gray}>
            <div className={style.que__block__split}>
                        <div className={style.que__block__split__left}>
                            <img src={que_loc2} className={style.que__block__img}></img>
                            <div>
                                <div className={style.que__block__title}>2. Distance</div>
                                <div className={style.que__block__desc}>What is your average travel distance per week?</div>
                            </div>
                        </div>
                        <div className={style.que__block__split__right}>
                            <input className={queDistanceValidate === false? style.que__block__split__input:style.que__block__split__input__error} value={distance} onChange={e => setDistance(e.target.value)}></input>
                            <span className={style.que__block__split__span}>   km</span>
                            <div className={queDistanceValidate === false? style.que__block__error:style.que__block__error__show}>Please enter a valid number</div>

                        </div>
                </div>
            </div>
            <div className={style.que__block__white}>
            <div className={style.que__block__split}>
                        <div className={style.que__block__split__left}>
                            <img src={que_wallet3} className={style.que__block__img}></img>
                            <div>
                                <div className={style.que__block__title}>3. Budget</div>
                                <div className={style.que__block__desc}>What is your expected buget?</div>
                            </div>
                        </div>
                        <div className={style.que__block__split__right}>
                            <select className={style.que__block__split__select} value={carBudget} onChange={e => setCarBudget(e.target.value)}>
                                <option value="budgetAll">No budget</option>
                                <option value="50">50k - 100k</option>
                                <option value="100">100k - 150k</option>
                                <option value="150">Over 150k</option>
                            </select>
                            {/* <span>  km</span> */}
                        </div>
                </div>
            </div>
            <div className={style.que__block__gray}>
                <div className={style.que__block__button__area} ref={recRef}>
                    <button className={style.rec__bottom__button} onClick={validateAndNaviToRec}>Submit</button>
                </div>
                {/* <div className={style.que__block__split}>
                            <div className={style.que__block__split__left}>
                                <img src={que_brain4} className={style.que__block__img}></img>
                                <div>
                                    <div className={style.que__block__title}>4. Other features</div>
                                    <div className={style.que__block__desc}>What other features do you expect from an EV?</div>
                                </div>
                            </div>
                            <div className={style.que__block__split__right}>
                                <select className={style.que__block__split__select}>
                                    <option value="tesla">Under 30k</option>
                                    <option value="audi">20k - 30k</option>
                                    <option value="benz">10k - 20k</option>
                                    <option value="bmw">Under 10k</option>
                                </select>
                            </div>
                    </div> */}
            </div>
        </section>
        <div className={style.que__container}>
            {recCarData !== "" && (<div><div className={style.que__title} >Recommendation</div>
            <div className={style.que__desc}>Recommend the appropriate electric vehicle model for your requirements and preferences</div></div>)}
        </div>
        <section >
            {recCarData !== "" && (<div className={style.rec__title}>Here are the top three recommended models <br/>Please select your preferred model for the next step of comparison</div>)}
            <div className={style.rec__tile__area}>
                {
                    Array.from(recCarData).slice(0,3).map((item,index)=>
                    <div className={style.rec__tile__item} key={item['evId']}>
                        <img src={item['imgLink']} className={style.rec__tile__item__img}></img>
                        <div className={style.rec__tile__item__desc}>
                            Brand: {item['evBrand']}<br/>
                            Model: {item['evType']}<br/>
                            Price range: {parseInt(item['evBudget']).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}<br/>
                            Travel distance: {item['evDistance']} km<br/>
                        </div>
                        <div className={style.rec__tile__item__button} onClick={() =>naviToCompare(item['evId'])}>Select</div>
                        <div  className={style.rec__tile__item__link}><a href={item['link']} target="_blank">Learn More</a></div>
                    </div>
                     )
                }
                {/* <div className={style.rec__tile__item}>
                    <img src={rec_tesla} className={style.rec__tile__item__img}></img>
                    <div className={style.rec__tile__item__desc}>
                        Brand: Tesla<br/>
                        Model: Model 3 Rear-Wheel Drive<br/>
                        Price range: $ 63,900<br/>
                        Travel distance: 491km<br/>

                    </div>
                    <div className={style.rec__tile__item__button} onClick={naviToCompare}>Select</div>
                    <div  className={style.rec__tile__item__link}><a>Learn More</a></div>
                </div> */}
            </div>
            
            
        </section>
            {recCarData !== "" && (<div><div className={style.rec__bottom__title} ref={calRef}>Not satisfied with the recommondations?</div>
            <button className={style.rec__bottom__button} onClick={naviToCarGuide}>See all models</button></div>)}
            
        <div className={style.que__container}>
            <div className={style.que__title} ref={comRef}>Comparison</div>
            <div className={style.que__desc}>Compare your fossil fuel car and the recommended EV model to display the contribution and benefits</div>
        </div>
        <section>
            <div className={style.genc__container} >
      
            <section className={style.genc__sec}>
                <div className={style.genc__split}>
                    <div className={style.genc__split__left}>
                    <div className={style['genc__topbar--blue']} ></div>
                    <div className={style.genc__que__area}>
                        <h1 className={style.genc__split__title}>Questions</h1>
                        <p className={style.genc__split__desc}>These questions provide a more accurate<br/> comparison between fossil fuel cars and electric <br/>vehicles.</p>
                        <div className={style.genc__que__split}>
                        <div className={style.genc__que__area__left}>
                            <div className={style.genc__que__area__title}>1. Travel distance</div>
                            <p className={style.genc__que__area__desc}>Your average travel distance per <br/>week.</p>
                        </div>
                        <div className={style.genc__que__area__right}>
                            <input className={calDistanceValidate === false? style.genc__que__area__input:style.genc__que__area__input__error} name="travelDistance" value={travelDistance} onChange={ e => setTravelDistance(e.target.value)}/>
                            <span className={style.genc__que__area__span}>  km</span>
                            <div className={calDistanceValidate === false? style.genc__block__error:style.genc__block__error__show}>Please enter a valid number</div>
                        </div>
                        </div>
                        <div className={style.genc__que__split}>
                        <div className={style.genc__que__area__left}>
                            <div className={style.genc__que__area__title} >2. Fuel consumptions</div>
                            <p className={style.genc__que__area__desc}>Your average fuel consumptions <br/>per week by your car.</p>
                        </div>
                        {/*     const [calDistanceValidate, setCalDistanceValidate] = useState(false);
    const [calFuelComValidate, setCalFuelComValidate] = useState(false);
    const [calPassengerValidate, setCalPassengerValidate] = useState(false); */}
                        <div>
                            <input className={calFuelComValidate === false? style.genc__que__area__input:style.genc__que__area__input__error} min="0" max="10" value={fuelCom} onChange={ e => setFuelCom(e.target.value)}></input>
                            <span className={style.genc__que__area__span}>  L/100km</span>
                            <div className={calFuelComValidate === false? style.genc__block__error:style.genc__block__error__show}>Please enter a valid number</div>
                        </div>
                        </div>
                        <div className={style.genc__que__split}>
                        <div className={style.genc__que__area__left}>
                            <div className={style.genc__que__area__title}> 3. Fuel type</div>
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
                            <div className={style.genc__que__area__title}>4. Passengers</div>
                            <p className={style.genc__que__area__desc}>Your number of passengers in <br/>your car</p>
                        </div>
                        <div>
                            <input className={calPassengerValidate === false? style.genc__que__area__input:style.genc__que__area__input__error}  value={passenger} onChange={e => setPassenger(e.target.value)}></input>
                            <span className={style.genc__que__area__span}>  people</span>
                            <div className={calPassengerValidate === false? style.genc__block__error:style.genc__block__error__show}>Please enter a valid number</div>
                        </div>
                        </div>
                        <div className={style.genc__que__split}>
                        <div className={style.genc__que__area__left}>
                            <div className={style.genc__que__area__title} >5. Charging pile</div>
                            <p className={style.genc__que__area__desc}>Available to install your own <br/>charging pile</p>
                        </div>
                        <div className={style.genc__que__button} ref={mapRef}>
                            <button className={ chargingButtonCss===1? `${style.genc__que__button__orange}`:`${style.genc__que__button__white}`} onClick={changeButtonOrange}>Yes</button>
                            <button className={ chargingButtonCss===1? `${style.genc__que__button__white}`:`${style.genc__que__button__orange}`} onClick={changeButtonWhite}>No</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className={style.genc__split__right}>
                    <div className={style['genc__topbar--green']}></div>
                    <div className={style.genc__split__result}>
                        <div className={style.genc__split__title}>Comparison Results</div>
                        <p className={resultCost>0? style.genc__split__desc:style.genc__split__desc__show}>The recommended EV model can reduce $ <span className={style.genc__split__desc__highlight}>{resultCost}</span> per week, and reduce <span className={style.genc__split__desc__highlight}>{resultEmi}</span> kg (CO2), compared with the fossil fuel car. </p>
                        <div className={style.genc__que__result__button}>
                            <button className={ resultButtonCss===1? `${style.genc__que__button__right__red}`:`${style.genc__que__button__right__white}`} onClick={changeResultButtonRed}>Payment Comparison</button>
                            <button className={resultButtonCss===0? `${style.genc__que__button__right__red}`:`${style.genc__que__button__right__white}`} onClick={changeResultButtonWhite}>Carbon Emission Comparison</button>
                        </div>
                        {resultButtonCss == 1 && <div className={style.genc__que__result__vis}><CostLineChart resultCost={resultCost} ecarFixedCost={ecarFixedCost}/></div>}
                        {resultButtonCss == 0 && <div className={style.genc__que__result__vis}><EmiLineChart resultEmi={resultEmi}/></div>}
                    </div>
                    </div>
                </div>
            </section>
            <div className={style.genc__bottom__bar}>
                <div className={style.genc_bottom__bar__split}>
                    {/* <div className={style.genc__bottom__desc}>Want to know the answer?</div> */}
                    <button className={style.genc__bottom__orangebutton} onClick={calculateCost}>Start</button>
                </div>
                <div className={style.genc_bottom__bar__split} >
                    {/* <div className={style.genc__bottom__desc}>Want to know more features?</div> */}
                    <button className={style.genc__bottom__redbutton} onClick={resetValue}>Reset</button>
                </div>
                <div className={style.genc_bottom__bar__split} >
                    {/* <div className={style.genc__bottom__desc}>Want to know more features?</div> */}
                    <button className={style.genc__bottom__redbutton} onClick={naviToMap}>ChargingMap</button>
                </div>
            </div>
        </div>
        </section> 
        <div className={style.que__container}>
            <div className={style.que__title} ref={supRef}>Supporting Facilities</div>
            <div className={style.que__desc}>Display the charging stations and maintenance store on the map and shows the contact information <br/>on the list.</div>
        </div>
        <section>
            <div className={style.sup__input__area}>
                <div className={style.sup__input__desc}>Select your suburb:</div>
                <select onChange={e => updateMap(e)} className={style.sup__input__select}>
                    <option value="1">Melbourne</option>
                    <option value="2">South Melbourne</option>
                    <option value="3">Port Melbourne</option>
                    <option value="4">North Melbourne</option>
                    <option value="5">Carlton</option>
                    <option value="6">Clayton</option>
                </select>
            </div>
            <div style={{width:"75%", margin:"30px auto", zIndex:"0"}}>
                <ChargingStation coordinate={suburb}/>
            </div>
            

        </section>
        <a className={style.back__area} onClick={backToTop}>
            <div>Back to top</div>
            <img src={upicon}></img>
        </a>
    </div>
  )
}
