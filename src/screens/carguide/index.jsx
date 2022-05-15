import React, {useState, useEffect, useRef} from 'react'
import style from './index.module.css'
import axios from 'axios'
import upicon from '../../assets/common/upicon.png'

export default function Index() {

    const [carData, setCarData] = useState("")

    // https://d1pvgbbxmbkkid.cloudfront.net
    useEffect(async () => {
        const result = await axios(
          'https://d1pvgbbxmbkkid.cloudfront.net/v1/api/evDetail/findAll/',
        );
        setCarData(result.data) 
        
      }, []);

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


  return (
      <div>
        <div className={style.banner}>
            <div className={style.banner__title}>Vehicle Guide</div>
            {/* <div className={style.banner_desc}>The future prediction of Victoria is based on the government's development blueprint.  </div> */}
        </div>
        <div className={style.rec__title}>
            <div>This vehicle guide presents all of the electric vehicles currently available in the Australian market with their associated resources. For further information on the environmental performance of light vehicles sold in Australia, see the Australian Government's <a href='https://www.greenvehicleguide.gov.au/' target="_blank">Green Vehicle Guide website</a>.</div>
        </div>
        <section>
            <div className={style.rec__tile__area}>
                {
                    Array.from(carData).map((item,index)=>
                    <div className={`${style.rec__tile__item} ${style.rec__title__border}`} key={item['evId']}>
                        <img src={item['imgLink']} className={style.rec__tile__item__img}></img>
                        <div className={style.rec__tile__item__desc}>
                            Model: {item['evBrand']}<br/>
                            <div className={item['evType'].length > 25? style.rec__tile__item__desc__type:style.rec__tile__item__desc__type__smallfont}>{item['evType']}</div>
                            Distance: {item['evDistance']} km<br/>   
                            Price range: {parseInt(item['evBudget']).toLocaleString('en-US', { style: 'currency', currency: 'USD',maximumFractionDigits: '0' })}<br/>
                            
                        </div>
                        <a className={style.rec__tile__item__a} href={item['link']} target="_blank"><div className={style.rec__tile__item__button}>View More</div></a>
                        <div  className={style.rec__tile__item__link}></div>
                    </div>
                     )
                }
            </div>
        </section>
        <a className={style.back__area} onClick={backToTop}>
            <div>Back to top</div>
            <img src={upicon}></img>
        </a>
      </div>
  )
}
