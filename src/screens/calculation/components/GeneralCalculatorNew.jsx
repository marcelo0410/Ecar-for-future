import React, {useState} from 'react'
import style from './style.module.css'

export default function GeneralCalculatorNew() {
  const [travelDistance, setTravelDistance] = useState(30)


  return (
    <div className={style.genc__container}>
      
        <section className={style.genc__sec}>
            <div className={style.genc__split}>
              <div className={style.genc__split__left}>
                <div className={style['genc__topbar--blue']}></div>
                <div className={style.genc__que__area}>
                  <h1 className={style.genc__split__title}>Questions</h1>
                  <form>
                  <p className={style.genc__split__desc}>These questions provide a more accurate<br/> comparison between fossil fuel cars and electric <br/>vehicles.</p>
                  <div className={style.genc__que__split}>
                    <div className={style.genc__que__area__left}>
                      <div className={style.genc__que__area__title}>1. Travel distance</div>
                      <p className={style.genc__que__area__desc}>Your average travel distance per <br/>week.</p>
                    </div>
                    <div className={style.genc__que__area__right}>
                      <input className={style.genc__que__area__input} name="travelDistance" value={travelDistance}/>
                      <span className={style.genc__que__area__span}>  km</span>
                    </div>
                  </div>
                  <div className={style.genc__que__split}>
                    <div className={style.genc__que__area__left}>
                      <div className={style.genc__que__area__title} >2. Fuel consumptions</div>
                      <p className={style.genc__que__area__desc}>Your average fuel consumptions <br/>per week by your car.</p>
                    </div>
                    <div>
                      <input className={style.genc__que__area__input} value={travelDistance}></input>
                      <span className={style.genc__que__area__span}>  1/100km</span>
                    </div>
                  </div>
                  <div className={style.genc__que__split}>
                    <div className={style.genc__que__area__left}>
                      <div className={style.genc__que__area__title}> 3. Fuel type</div>
                      <p className={style.genc__que__area__desc}>Your commonly used fuel type</p>
                    </div>
                    <div>
                      <select className={style.genc__que__area__select}>
                        <option>Unleaded 91</option>
                        <option>Unleaded 95</option>
                        <option>Unleaded 98</option>
                        <option>Diesel</option>
                      </select>
                    </div>
                  </div>
                  <div className={style.genc__que__split}>
                    <div className={style.genc__que__area__left}>
                      <div className={style.genc__que__area__title}>4. Passengers</div>
                      <p className={style.genc__que__area__desc}>Your number of passengers in <br/>your car</p>
                    </div>
                    <div>
                      <input className={style.genc__que__area__input}  value={travelDistance}></input>
                      <span className={style.genc__que__area__span}>  persons</span>
                    </div>
                  </div>
                  <div className={style.genc__que__split}>
                    <div className={style.genc__que__area__left}>
                      <div className={style.genc__que__area__title}>5. Charging pile</div>
                      <p className={style.genc__que__area__desc}>Available to install your own <br/>charging pile</p>
                    </div>
                    <div className={style.genc__que__button}>
                      <button className={style.genc__que__button__orange}>Yes</button>
                      <button className={style.genc__que__button__white}>No</button>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
              <div className={style.genc__split__right}>
                <div className={style['genc__topbar--green']}></div>
                <div className={style.genc__split__result}>
                  <div className={style.genc__split__title}>Comparison Results</div>
                  <p className={style.genc__split__desc}>Comparing with the fossiled fueled car, the <br/>recommended electric vehicle model can reduce <br/>$ XXX per week, and reduce XXX kg Carbon <br/>dioxide (CO2) emissions per week. </p>
                  <div className={style.genc__que__result__button}>
                    <button className={style.genc__que__button__right__red}>Payment Comparison</button>
                    <button className={style.genc__que__button__right__white}>Carbon Emission Comparison</button>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <div className={style.genc__bottom__bar}>
            <div className={style.genc_bottom__bar__split}>
              <div className={style.genc__bottom__desc}>Want to know the answer?</div>
              <button className={style.genc__bottom__orangebutton}>Start</button>
            </div>
            <div className={style.genc_bottom__bar__split} >
              <div className={style.genc__bottom__desc}>Want to know more features?</div>
              <button className={style.genc__bottom__redbutton}>Explore</button>
            </div>


        </div>
    </div>
  )
}
