import React, {useState, useEffect, useRef} from 'react'
import style from './index.module.css'
import axios from 'axios'

export default function Index() {

    const [carData, setCarData] = useState("")

    useEffect(async () => {
        const result = await axios(
          'http://localhost:8080/v1/api/evDetail/findAll/',
        );
        setCarData(result.data) 
        
      }, []);


  return (
      <div>
        <div className={style.banner}>
            <div className={style.banner__title}>Car Guide</div>
            <div className={style.banner_desc}>The future prediction of Victoria is based on the government's development blueprint.  </div>
        </div>
        <section>
            <div className={style.rec__tile__area}>
                {
                    Array.from(carData).slice(0,3).map((item,index)=>
                    <div className={style.rec__tile__item} key={item['evId']}>
                        <img src={item['imgLink']} className={style.rec__tile__item__img}></img>
                        <div className={style.rec__tile__item__desc}>
                            Brand: {item['evBrand']}<br/>
                            Model: {item['evType']}<br/>
                            Price range: {parseInt(item['evBudget']).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}<br/>
                            Travel distance: {item['evDistance']} km<br/>
                        </div>
                        <div className={style.rec__tile__item__button}>Select</div>
                        <div  className={style.rec__tile__item__link}><a href={item['link']} target="_blank">Learn More</a></div>
                    </div>
                     )
                }
            </div>
        </section>
      </div>
  )
}
