import React, {useState, useRef} from 'react'
import style from './style.module.css'
import CostLineChart from './CostLineChart'

export default function GeneralCalculatorNew() {
  const [travelDistance, setTravelDistance] = useState(0)
  const [fuelCom, setFuelCom] = useState(0.0)
  const [fuelType, setFuelType] = useState('1')
  const [passenger, setPassenger] = useState(1)
  const [chargingButtonCss, setChargingButtonCss] = useState(1)
  const [resultButtonCss, setResultButtonCss] = useState(1)
  const [resultCost, setResultCost] = useState(0)
  const [resultEmi, setResultEmi] = useState(0)

  const resetValue = () =>{
    setTravelDistance(0)
    setFuelCom(0)
    setFuelType('1')
    setPassenger(1)
    selectRef.current.selectedIndex=0
    setResultCost(0)
    setResultEmi(0)
  }

  const selectRef = useRef(null)
  const calRef = useRef(null)

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
    // calRef.current.scrollIntoView()
    window.scrollTo({
      top: 2270,
      behavior: "smooth"
  });
    const fuelPrice = {
      "1":2.17,
      "2":2.31,
      "3":2.39,
      "4":2.14
    }
    let result = Math.round(travelDistance * (1+passenger*0.1-0.1)*fuelCom/100*fuelPrice[fuelType])
    setResultCost(result)

    const resultCo2 = travelDistance /100 *fuelCom*2500
    setResultEmi(Math.round(resultCo2 * 100/1000) / 100)

    console.log(resultCost)
    console.log(resultEmi)

  }

  return (
    <div className={style.genc__container} ref={calRef}>
      
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
                      <input className={style.genc__que__area__input} name="travelDistance" value={travelDistance} onChange={ e => setTravelDistance(e.target.value)}/>
                      <span className={style.genc__que__area__span}>  km</span>
                    </div>
                  </div>
                  <div className={style.genc__que__split}>
                    <div className={style.genc__que__area__left}>
                      <div className={style.genc__que__area__title} >2. Fuel consumptions</div>
                      <p className={style.genc__que__area__desc}>Your average fuel consumptions <br/>per week by your car.</p>
                    </div>
                    <div>
                      <input className={style.genc__que__area__input} min="0" max="10" value={fuelCom} onChange={ e => setFuelCom(e.target.value)}></input>
                      <span className={style.genc__que__area__span}>  L/100km</span>
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
                      <input className={style.genc__que__area__input}  value={passenger} onChange={e => setPassenger(e.target.value)}></input>
                      <span className={style.genc__que__area__span}>  persons</span>
                    </div>
                  </div>
                  <div className={style.genc__que__split}>
                    <div className={style.genc__que__area__left}>
                      <div className={style.genc__que__area__title}>5. Charging pile</div>
                      <p className={style.genc__que__area__desc}>Available to install your own <br/>charging pile</p>
                    </div>
                    <div className={style.genc__que__button}>
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
                  <p className={style.genc__split__desc}>Comparing with the fossiled fueled car, the <br/>recommended electric vehicle model can reduce <br/>$ {resultCost} per week, and reduce {resultEmi} kg Carbon <br/>dioxide (CO2) emissions per week. </p>
                  <div className={style.genc__que__result__button}>
                    <button className={ resultButtonCss===1? `${style.genc__que__button__right__red}`:`${style.genc__que__button__right__white}`} onClick={changeResultButtonRed}>Payment Comparison</button>
                    <button className={resultButtonCss===0? `${style.genc__que__button__right__red}`:`${style.genc__que__button__right__white}`} onClick={changeResultButtonWhite}>Carbon Emission Comparison</button>
                  </div>
                  {resultButtonCss == 1 && <div className={style.genc__que__result__vis}><CostLineChart resultCo2={resultCost}/></div>}
                  {resultButtonCss == 0 && <div className={style.genc__que__result__vis}><CostLineChart/></div>}
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
              <button className={style.genc__bottom__redbutton} onClick={resetValue}>ChargingMap</button>
            </div>
        </div>
    </div>
  )
}
