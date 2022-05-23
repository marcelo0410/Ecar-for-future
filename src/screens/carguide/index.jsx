import React, {useState, useEffect, useRef} from 'react'
import style from './index.module.css'
import axios from 'axios'
import upicon from '../../assets/common/upicon.png'

export default function Index() {

    const [carData, setCarData] = useState("")
    const [filteredData, setFilteredData] = useState("")
    const [carBudget, setCarBudget] = useState("budgetAll")
    const [carType, setCarType] = useState("typeAll")

    // https://d1pvgbbxmbkkid.cloudfront.net
    useEffect(async () => {
        const result = await axios(
          'https://d1pvgbbxmbkkid.cloudfront.net/v1/api/evDetail/findAll/',
        );
        let temp = result.data.sort( function( a, b ) {
            a = a['evBrand'].toLowerCase();
            b = b['evBrand'].toLowerCase();
        
            return a < b ? -1 : a > b ? 1 : 0;
        });
        setCarData(temp)
        setFilteredData(temp) 
        
      }, []);

      useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
      
        return () => {
          
        }
      }, [])

      useEffect(() => {
        filterCarData()
      
        return () => {
          
        }
      }, [carBudget,carType])
      

      const backToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const setCarTypeAndRerender = (e) =>{
      // console.log(e)
      setCarType(e);
      // filterCarData()
    }

    const setCarBudgetAndRerender = (e) =>{

      setCarBudget(e);
      // setCarBudget(e)
      // filterCarData()
    }


    const filterCarData = () =>{
      let tempData
      if(carType === "typeAll"){
        tempData = carData
      } else{
        tempData = carData.filter(item => item['evBrand'] === carType)
        console.log(tempData)
      }



      if(carBudget === "budgetAll"){
        setFilteredData(tempData)
      } else{
        let min =0
        let max = 0
        if(carBudget === '50'){
          min = 50000
          max = 100000
        } else if(carBudget === "100"){
          min = 100000
          max = 150000
        } else{
          min = 150000
          max = 1000000
        }

        tempData = Array.from(tempData).filter(item => (
          min < parseInt(item['evBudget']) && max > parseInt(item['evBudget'])
        ))
        setFilteredData(tempData)
      }


    }

    const resetData = () =>{
      setFilteredData(carData)
      setCarBudget("budgetAll")
      setCarType("typeAll")
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
            <div className={style.filter__select__area}>
              <select className={style.que__block__split__select} value={carType} onChange={e => setCarTypeAndRerender(e.target.value)}>
                  <option value="typeAll" >No Preferred Brand</option>
                  <option value="Tesla">Tesla</option>
                  <option value="Audi">Audi</option>
                  <option value="BMW">BMW</option>
              </select>
              <select className={style.que__block__split__select2}  value={carBudget} onChange={e => setCarBudgetAndRerender(e.target.value)}>
                  <option value="budgetAll">No budget</option>
                  <option value="50">50k - 100k</option>
                  <option value="100">100k - 150k</option>
                  <option value="150">Over 150k</option>
              </select>
              {/* <button className={style.genc__bottom__orangebutton} onClick={filterCarData}>Submit</button> */}
              <button className={style.genc__bottom__orangebutton} onClick={resetData}>Reset</button>
              
            </div>
            <div className={style.rec__tile__area}>
                {
                    Array.from(filteredData).map((item,index)=>
                    <div className={`${style.rec__tile__item} ${style.rec__title__border}`} key={item['evId']}>
                        <img src={item['imgLink']} className={style.rec__tile__item__img}></img>
                        <div className={style.rec__tile__item__desc}>
                            {item['evType'].length >= 25 && (<div><div>Model: {item['evBrand']}</div>
                            <div className={style.rec__tile__item__desc__type__smallfont}>{item['evType']}</div></div>)}
                            { (item['evType'].length < 25) && 8 < item['evType'].length && (<div><div>Model: {item['evBrand']}</div>
                            <div className={style.rec__tile__item__desc__type}>{item['evType']}</div></div>)}
                            {item['evType'].length <= 8 && (<div><div>Model: {item['evBrand']} {item['evType']}</div><br/>
                            </div>)}
                            Distance: {item['evDistance']} km<br/>   
                            Price: {'\u00A0'}{'\u00A0'}{'\u00A0'}{parseInt(item['evBudget']).toLocaleString('en-US', { style: 'currency', currency: 'USD',maximumFractionDigits: '0' })}<br/>
                            
                        </div>
                        <a className={style.rec__tile__item__a} href={item['link']} target="_blank"><div className={style.rec__tile__item__button}>View More</div></a>
                        <div  className={style.rec__tile__item__link}></div>
                    </div>
                     )
                }
                
            </div>
            {filteredData.length == 0 &&<div className={style.hidden_msg}>No Results</div>}
        </section>
        <a className={style.back__area} onClick={backToTop}>
            <div>Back to top</div>
            <img src={upicon}></img>
        </a>
      </div>
  )
}
