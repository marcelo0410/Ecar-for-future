import React from 'react'
import newsHouse from '../../../assets/currentenv/news-house.jpg'
import newsHealth from '../../../assets/currentenv/news-health.jpg'
import newsCars from '../../../assets/currentenv/news-cars.jpg'
import newsBikes from '../../../assets/currentenv/news-bike.jpg'
export default function News() {
  return (
    <div className="container mt-5">
        <div className='left-middle'>News</div>
        <div className='mt-1'>
          <a href='https://www.abc.net.au/news/2022-03-01/doctors-say-climate-change-having-devastating-impacts-on-health/100872228' target="_blank">
            <img src={newsHealth} style={{height:"420px",width:"250px", marginRight:"30px"}}></img>
          </a>
          <a href='https://www.abc.net.au/news/2021-10-14/australia-dumping-ground-for-polluting-cars-euro-6-standards/100535418' target="_blank">
            <img src={newsCars} style={{height:"420px",width:"250px", marginRight:"30px"}}></img>
          </a>
          <a href='https://www.abc.net.au/news/2018-07-12/is-this-the-end-for-share-bikes/9981552' target="_blank">
            <img src={newsBikes} style={{height:"420px",width:"250px", marginRight:"30px"}}></img>
          </a>
        </div>
    </div>
  )
}
