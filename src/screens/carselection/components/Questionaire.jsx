import React, {useState, useEffect, useRef} from 'react'
import style from './style.module.css'
import progress3 from '../../../assets/carselection/progress_3.jpg'
import que_brand1 from '../../../assets/carselection/que_brand1.jpg'
import que_loc2 from '../../../assets/carselection/que_loc2.jpg'
import que_wallet3 from '../../../assets/carselection/que_wallet3.jpg'
import que_brain4 from '../../../assets/carselection/que_brain4.jpg'
import rec_tesla from '../../../assets/carselection/rec_tesla.jpg'
import rec_audi from '../../../assets/carselection/rec_audi.jpg'
import rec_benz from '../../../assets/carselection/rec_benz.jpg'
import upicon from '../../../assets/common/upicon.png'
import GeneralCalculatorNew from './GeneralCalculatorNew'
import ChargingStation from './chargingstation/Index'
export default function Questionaire() {
    
    const [first, setfirst] = useState(style.stepper__item)
    const [distance, setDistance] = useState(0)
    const [suburb, setSuburb] = useState([-37.814107, 144.96328])

    const recRef = useRef(null);
    const comRef = useRef(null);
    const supRef = useRef(null);

    

    const backToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const NaviToRec = () =>{
        recRef.current.scrollIntoView()
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

  return (
    //   `${style.stepper__item} ${style.completed}`
    // `${style.stepper__item} ${style.active}`
    // `${style.stepper__item}`
    <div >
        <div className={style.progress__sec}>
            <div className={style.stepper__wrapper}>
                <div className={first}>
                    <div className={style.step__counter}>1</div>
                    <div className={style.step__name}>Preferences</div>
                </div>
                <div className={first}>
                    <div className={style.step__counter}>2</div>
                    <div className={style.step__name}>Recommondations</div>
                </div>
                <div className={first}>
                    <div className={style.step__counter}>3</div>
                    <div className={style.step__name}>Comparison</div>
                </div>
                <div className={first}>
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
                        <select className={style.que__block__split__select}>
                            <option value="typeAll">All</option>
                            <option value="tesla">Tesla</option>
                            <option value="audi">Audi</option>
                            <option value="benz">Benz</option>
                            <option value="bmw">BMW</option>
                            <option value="hyundai">Hyundai</option>
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
                            <input className={style.que__block__split__input} value={distance} onChange={e => setDistance(e.target.value)}></input>
                            <span className={style.que__block__split__span}>   km</span>
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
                            <select className={style.que__block__split__select}>
                                <option value="priceAll">All</option>
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
                    <button className={style.rec__bottom__button} onClick={NaviToRec}>Submit</button>
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
            <div className={style.que__title} >Recommendation</div>
            <div className={style.que__desc}>Recommend the appropriate electric vehicle model for your requirements and preferences</div>
        </div>
        <section className={style.rec__tile__area}>
            <div className={style.rec__tile__item}>
                <img src={rec_tesla} className={style.rec__tile__item__img}></img>
                <div className={style.rec__tile__item__desc}>Brand: Tesla <br/>
                    Model: Model S <br/>
                    Price range: 50 - 70k<br/>
                    Travel distance: 510km<br/>
                    Electric consumption: <br/>
                    7kwh/100km</div>
                <div className={style.rec__tile__item__button}>Learn More</div>
            </div>
            <div className={style.rec__tile__item}>
                <img src={rec_benz} className={style.rec__tile__item__img2}></img>
                <div className={style.rec__tile__item__desc}>Brand: Tesla <br/>
                    Model: Model S <br/>
                    Price range: 50 - 70k<br/>
                    Travel distance: 510km<br/>
                    Electric consumption: <br/>
                    7kwh/100km</div>
                <div className={style.rec__tile__item__button}>Learn More</div>
            </div>
            <div className={style.rec__tile__item}>
                
                <div>
                    <img src={rec_audi} className={style.rec__tile__item__img3}></img>
                </div>
                <div className={style.rec__tile__item__desc}>Brand: Tesla <br/>
                    Model: Model S <br/>
                    Price range: 50 - 70k<br/>
                    Travel distance: 510km<br/>
                    Electric consumption: <br/>
                    7kwh/100km</div>
                <div className={style.rec__tile__item__button}>Learn More</div>
            </div>

        </section>
            <div className={style.rec__bottom__title}>Not satisfied with the recommondations?</div>
            <button className={style.rec__bottom__button}>See all models</button>
        <div className={style.que__container}>
            <div className={style.que__title} ref={comRef}>Comparison</div>
            <div className={style.que__desc}>Compare your fossil fuel car and the recommended EV model to display the contribution and benefits</div>
        </div>
        <section>
            <GeneralCalculatorNew/>
        </section> 
        <div className={style.que__container}>
            <div className={style.que__title} ref={supRef}>Supporting Facilities</div>
            <div className={style.que__desc}>Display the charging stations and maintenance store on the map and shows the contact information <br/>on the list.</div>
        </div>
        <section>
            <div style={{width:"75%", margin:"30px auto", zIndex:"1"}}>
                <ChargingStation coordinate={suburb}/>
            </div>
            
            <div className={style.sup__input__area}>
                <div>Select your suburb:</div>
                <select onChange={e => updateMap(e)}>
                    <option value="1">Melbourne</option>
                    <option value="2">South Melbourne</option>
                    <option value="3">Port Melbourne</option>
                    <option value="4">North Melbourne</option>
                    <option value="5">Carlton</option>
                    <option value="6">Clayton</option>
                </select>
            </div>
        </section>
        <div className={style.back__area} onClick={backToTop}>
            <div>Back to top</div>
            <img src={upicon}></img>
        </div>
    </div>
  )
}
